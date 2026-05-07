import fs from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("/Users/channing/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");

const targets = [
  ["ui-tars-desktop", "https://github.com/bytedance/UI-TARS-desktop"],
  ["ui-tars", "https://github.com/bytedance/UI-TARS"],
  ["opencua", "https://github.com/xlang-ai/OpenCUA"],
  ["agentcpm-gui", "https://github.com/OpenBMB/AgentCPM-GUI"],
  ["gelab-zero", "https://github.com/stepfun-ai/gelab-zero"],
  ["cua", "https://github.com/trycua/cua"],
  ["agent-s", "https://github.com/simular-ai/Agent-S"],
  ["android-world", "https://github.com/google-research/android_world"],
  ["showui", "https://github.com/showlab/ShowUI"],
  ["cogagent", "https://github.com/zai-org/CogAgent"],
  ["browser-use", "https://github.com/browser-use/browser-use"],
  ["mobilerun", "https://github.com/droidrun/mobilerun"],
  ["open-autoglm-github", "https://github.com/zai-org/Open-AutoGLM"]
];

const outputDir = path.join(process.cwd(), "public", "github-screenshots");
await fs.mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
});

const context = await browser.newContext({
  viewport: { width: 1280, height: 760 },
  deviceScaleFactor: 1,
  userAgent:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"
});

for (const [slug, url] of targets) {
  const page = await context.newPage();
  const filePath = path.join(outputDir, `${slug}.png`);

  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });
    await page.waitForTimeout(2200);
    await page.screenshot({ path: filePath, fullPage: false });
    console.log(`captured ${slug} -> ${filePath}`);
  } catch (error) {
    console.error(`failed ${slug}: ${error instanceof Error ? error.message : String(error)}`);
  } finally {
    await page.close();
  }
}

await browser.close();
