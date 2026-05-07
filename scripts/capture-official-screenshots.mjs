import fs from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("/Users/channing/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");

const targets = [
  ["droidrun-mobilerun", "https://www.droidrun.ai/"],
  ["open-autoglm", "https://autoglm.zhipuai.cn/"],
  ["tasker", "https://tasker.joaoapps.com/"],
  ["automate-llamalab", "https://llamalab.com/automate/"],
  ["chatgpt-agent-operator", "https://openai.com/index/introducing-chatgpt-agent/"],
  ["claude-computer-use", "https://docs.anthropic.com/en/docs/build-with-claude/computer-use"],
  ["browser-use-cloud", "https://browser-use.com/"],
  ["skyvern", "https://www.skyvern.com/"],
  ["manus", "https://manus.im/"],
  ["vector-ai-agent", "https://vectoragent.io/"],
  ["airdroid-business", "https://www.airdroid.com/business/"],
  ["anydesk", "https://www.anydesk.com/en"],
  ["teamviewer", "https://www.teamviewer.com/en-us/"],
  ["microsoft-power-automate-desktop", "https://www.microsoft.com/en-us/power-platform/products/power-automate"],
  ["uipath", "https://www.uipath.com/"]
];

const outputDir = path.join(process.cwd(), "public", "screenshots");
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
    await page.waitForTimeout(3500);
    await page.screenshot({ path: filePath, fullPage: false });
    console.log(`captured ${slug} -> ${filePath}`);
  } catch (error) {
    console.error(`failed ${slug}: ${error instanceof Error ? error.message : String(error)}`);
  } finally {
    await page.close();
  }
}

await browser.close();
