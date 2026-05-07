import fs from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("/Users/channing/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");

const targets = [
  ["doubao-phone", "https://o.doubao.com/"],
  ["honor-yoyo", "https://www.honor.com/cn/tech/honor-ai-phone/"],
  ["xiaomi-super-xiaoai", "https://xiaoai.mi.com/"],
  ["oppo-xiaobu", "https://www.oppo.com/cn/discover/technology/oppo-ai/"],
  ["vivo-blue-v", "https://www.vivo.com.cn/service/questions/all?categoryId=170&questionId=1746"],
  ["huawei-xiaoyi", "https://consumer.huawei.com/cn/mobileservices/celia/"],
  ["google-gemini-samsung", "https://www.android.com/galaxy-gemini/"],
  ["apple-intelligence-siri", "https://www.apple.com/apple-intelligence/"]
];

const outputDir = path.join(process.cwd(), "public", "system-phone-screenshots");
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
    await page.waitForTimeout(2800);
    await page.screenshot({ path: filePath, fullPage: false });
    console.log(`captured ${slug} -> ${filePath}`);
  } catch (error) {
    console.error(`failed ${slug}: ${error instanceof Error ? error.message : String(error)}`);
  } finally {
    await page.close();
  }
}

await browser.close();
