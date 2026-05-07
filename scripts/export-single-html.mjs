import fs from "node:fs/promises";
import path from "node:path";

const sourceUrl = "http://127.0.0.1:3000/?v=export-single-html";
const outputPath = "/Users/channing/Desktop/好麦GUI-Agent竞品分析.html";

function absoluteUrl(value) {
  return new URL(value.replaceAll("&amp;", "&"), sourceUrl).toString();
}

function contentTypeToMime(contentType, fallback = "application/octet-stream") {
  return contentType?.split(";")[0]?.trim() || fallback;
}

async function fetchText(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }
  return response.text();
}

async function fetchDataUrl(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }
  const buffer = Buffer.from(await response.arrayBuffer());
  const mime = contentTypeToMime(response.headers.get("content-type"));
  return `data:${mime};base64,${buffer.toString("base64")}`;
}

async function inlineStyles(html) {
  const stylesheetPattern = /<link rel="stylesheet" href="([^"]+)"[^>]*>/g;
  const matches = [...html.matchAll(stylesheetPattern)];

  for (const match of matches) {
    const css = await fetchText(absoluteUrl(match[1]));
    html = html.replace(match[0], `<style data-inlined-from="${match[1]}">\n${css}\n</style>`);
  }

  return html;
}

async function inlineScripts(html) {
  const scriptPattern = /<script src="([^"]+)"([^>]*)><\/script>/g;
  const matches = [...html.matchAll(scriptPattern)];

  for (const match of matches) {
    const src = match[1];
    const attrs = match[2] || "";
    const code = await fetchText(absoluteUrl(src));
    const safeCode = code.replaceAll("</script", "<\\/script");
    html = html.replace(match[0], `<script${attrs} data-inlined-from="${src}">\n${safeCode}\n</script>`);
  }

  return html;
}

async function inlineImages(html) {
  const srcSetPattern = /srcSet="([^"]+)"/g;
  html = html.replace(srcSetPattern, "");

  const srcPattern = /src="([^"]+)"/g;
  const matches = [...html.matchAll(srcPattern)]
    .map((match) => match[1])
    .filter((src) => src.startsWith("/") || src.startsWith("http://") || src.startsWith("https://"));
  const uniqueSources = [...new Set(matches)];

  for (const src of uniqueSources) {
    const dataUrl = await fetchDataUrl(absoluteUrl(src));
    html = html.replaceAll(`src="${src}"`, `src="${dataUrl}"`);
  }

  return html;
}

async function exportHtml() {
  let html = await fetchText(sourceUrl);
  html = await inlineStyles(html);
  html = await inlineScripts(html);
  html = await inlineImages(html);
  html = html.replace(/<link rel="preload" as="script"[^>]*>/g, "");
  html = html.replaceAll("http://127.0.0.1:3000", ".");
  html = `<!-- Exported from ${sourceUrl} -->\n${html}`;

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, html, "utf8");
  console.log(outputPath);
}

await exportHtml();
