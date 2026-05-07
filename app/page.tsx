"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { categories, competitors, reportDate, traditionalAutomationCompetitors, type Competitor, type CompetitorCategory } from "@/data/competitors";
import { githubGuiProjects, type GithubGuiProject } from "@/data/github-projects";
import { systemPhoneAgents, type SystemPhoneAgent } from "@/data/system-phone-agents";

const screenshotSlugs: Record<string, string> = {
  "DroidRun / Mobilerun": "droidrun-mobilerun",
  "Open-AutoGLM / AutoGLM-Phone-9B": "open-autoglm",
  Tasker: "tasker",
  "Automate by LlamaLab": "automate-llamalab",
  "ChatGPT agent / Operator": "chatgpt-agent-operator",
  "Claude Computer Use": "claude-computer-use",
  "Browser Use Cloud": "browser-use-cloud",
  Skyvern: "skyvern",
  Manus: "manus",
  "Vector AI Agent": "vector-ai-agent",
  Maestro: "maestro",
  "AirDroid Business": "airdroid-business",
  AnyDesk: "anydesk",
  TeamViewer: "teamviewer",
  "Microsoft Power Automate Desktop": "microsoft-power-automate-desktop",
  UiPath: "uipath"
};

const githubScreenshotSlugs: Record<string, string> = {
  "bytedance/UI-TARS-desktop": "ui-tars-desktop",
  "bytedance/UI-TARS": "ui-tars",
  "xlang-ai/OpenCUA": "opencua",
  "OpenBMB/AgentCPM-GUI": "agentcpm-gui",
  "stepfun-ai/gelab-zero": "gelab-zero",
  "trycua/cua": "cua",
  "simular-ai/Agent-S": "agent-s",
  "google-research/android_world": "android-world",
  "showlab/ShowUI": "showui",
  "zai-org/CogAgent": "cogagent",
  "browser-use/browser-use": "browser-use",
  "droidrun/mobilerun": "mobilerun",
  "zai-org/Open-AutoGLM": "open-autoglm-github",
  "Westlake-AGI-Lab/AppAgentX": "appagentx",
  "ui-voyager/UI-Voyager": "ui-voyager",
  "memohai/Autofish": "autofish",
  "IPADS-SAI/MobiAgent": "mobiagent",
  "X-PLUG/MobileAgent": "mobile-agent"
};

const competitorLatestUpdates: Record<string, string> = {
  "DroidRun / Mobilerun": "最新更新：2026-05-07",
  "Open-AutoGLM / AutoGLM-Phone-9B": "最新更新：2026-05-07",
  Tasker: "最新更新：2026-02-05",
  "Automate by LlamaLab": "最新更新：2026（公开资料未精确到日）",
  "ChatGPT agent / Operator": "最新更新：2025-08",
  "Claude Computer Use": "最新更新：2025-01-24",
  "Browser Use Cloud": "最新更新：2026-05-07",
  Skyvern: "最新更新：2026-04-14",
  Manus: "最新更新：2026（公开资料未精确到日）",
  "Vector AI Agent": "最新更新：2026（公开资料未精确到日）",
  Maestro: "最新更新：2026-05-07",
  "AirDroid Business": "最新更新：2026（公开资料未精确到日）",
  AnyDesk: "最新更新：2026-05-04",
  TeamViewer: "最新更新：2026（公开资料未精确到日）",
  "Microsoft Power Automate Desktop": "最新更新：2026（公开资料未精确到日）",
  UiPath: "最新更新：2026（公开资料未精确到日）"
};

const githubLatestUpdates: Record<string, string> = {
  "bytedance/UI-TARS-desktop": "最新更新：2026-05-07",
  "bytedance/UI-TARS": "最新更新：2026-05-07",
  "xlang-ai/OpenCUA": "最新更新：2026-05-06",
  "OpenBMB/AgentCPM-GUI": "最新更新：2026-05-07",
  "stepfun-ai/gelab-zero": "最新更新：2026-05-05",
  "trycua/cua": "最新更新：2026-05-07",
  "simular-ai/Agent-S": "最新更新：2026-05-07",
  "google-research/android_world": "最新更新：2026-05-07",
  "showlab/ShowUI": "最新更新：2026-05-07",
  "zai-org/CogAgent": "最新更新：2026-04-29",
  "browser-use/browser-use": "最新更新：2026-05-07",
  "droidrun/mobilerun": "最新更新：2026-05-07",
  "zai-org/Open-AutoGLM": "最新更新：2026-05-07",
  "Westlake-AGI-Lab/AppAgentX": "最新更新：2026-05-04",
  "ui-voyager/UI-Voyager": "最新更新：2026-04-30",
  "memohai/Autofish": "最新更新：2026-05-07",
  "IPADS-SAI/MobiAgent": "最新更新：2026-05-06",
  "X-PLUG/MobileAgent": "最新更新：2026-05-07"
};

const systemPhoneLatestUpdates: Record<string, string> = {
  "豆包手机助手 / nubia M153": "最新更新：2026-Q1（承诺周期）",
  "荣耀 YOYO 智能体": "最新更新：2025-10",
  "小米超级小爱": "最新更新：2025-12",
  "OPPO 小布助手": "最新更新：2025-08",
  "vivo 蓝心小 V": "最新更新：2025-06",
  华为小艺: "最新更新：2025-08",
  "Google Gemini / Samsung Galaxy AI": "最新更新：2025（公开资料未精确到日）",
  "Apple Intelligence / Siri App Intents": "最新更新：2025（公开资料未精确到日）"
};

const systemPhoneScreenshotSlugs: Record<string, string> = {
  "豆包手机助手 / nubia M153": "doubao-phone",
  "荣耀 YOYO 智能体": "honor-yoyo",
  "小米超级小爱": "xiaomi-super-xiaoai",
  "OPPO 小布助手": "oppo-xiaobu",
  "vivo 蓝心小 V": "vivo-blue-v",
  华为小艺: "huawei-xiaoyi",
  "Google Gemini / Samsung Galaxy AI": "google-gemini-samsung",
  "Apple Intelligence / Siri App Intents": "apple-intelligence-siri"
};

function screenshotFor(item: Competitor) {
  const slug = screenshotSlugs[item.name];
  return slug ? `/screenshots/${slug}.png` : "";
}

function githubScreenshotFor(item: GithubGuiProject) {
  const slug = githubScreenshotSlugs[item.repo];
  return slug ? `/github-screenshots/${slug}.png` : "";
}

function systemPhoneScreenshotFor(item: SystemPhoneAgent) {
  const slug = systemPhoneScreenshotSlugs[item.name];
  return slug ? `/system-phone-screenshots/${slug}.png` : "";
}

function splitTarget(text: string) {
  return text
    .split(/；|、/)
    .map((item) => item.trim())
    .filter(Boolean);
}

async function openInDefaultBrowser(url: string) {
  const response = await fetch("/api/open", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ url })
  });

  if (!response.ok) {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<CompetitorCategory | "全部">("全部");
  const [activePrice, setActivePrice] = useState("全部");

  const filtered = useMemo(() => {
    return competitors.filter((item) => {
      const categoryMatch = activeCategory === "全部" || item.category === activeCategory;
      const priceMatch = activePrice === "全部" || item.pricingModel === activePrice;
      return categoryMatch && priceMatch;
    });
  }, [activeCategory, activePrice]);

  return (
    <main>
      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">截至 {reportDate} · 全球 + 中国市场</div>
            <h1>好麦 GUI Agent 竞品分析</h1>
          </div>
        </div>
      </section>

      <section className="section matrix-section">
        <div className="matrix-head">
          <div>
            <span>Competitive Workspace</span>
            <h2>竞品总表</h2>
          </div>
        </div>

        <div className="matrix-toolbar" aria-label="竞品筛选">
          <div className="filter-group">
            <span>赛道</span>
            <div className="filters">
              {(["全部", ...categories] as const).map((category) => (
                <button className={activeCategory === category ? "active" : ""} key={category} onClick={() => setActiveCategory(category)}>
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="filter-group">
            <span>收费</span>
            <div className="filters compact">
              {(["全部", "开源/免费", "订阅", "按量", "企业定制", "一次性购买"] as const).map((price) => (
                <button className={activePrice === price ? "active" : ""} key={price} onClick={() => setActivePrice(price)}>
                  {price}
                </button>
              ))}
            </div>
          </div>
          <strong>{filtered.length} / {competitors.length}</strong>
        </div>

        <div className="table-shell">
          <table className="competitor-table">
            <thead>
              <tr>
                <th>产品</th>
                <th>产品简介</th>
                <th>技术方案</th>
                <th>优劣势</th>
                <th>商业模式</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr key={item.name}>
                  <td className="product-cell">
                    <div className="product-title-line">
                      <strong>{item.name}</strong>
                      <span className={`origin-badge ${item.origin === "国内" ? "domestic" : "global"}`}>{item.origin}</span>
                    </div>
                    <span className="product-type">{item.category}</span>
                    <p className="latest-update">{competitorLatestUpdates[item.name]}</p>
                    <button
                      aria-label={`在默认浏览器打开 ${item.name} 的官方页面`}
                      className="screenshot-link product-screenshot"
                      onClick={(event) => {
                        event.stopPropagation();
                        void openInDefaultBrowser(item.sources[0].url);
                      }}
                      type="button"
                    >
                      <Image
                        alt={`${item.name} 官方首页截图`}
                        height={118}
                        src={screenshotFor(item)}
                        width={190}
                      />
                      <span>官网首页截图</span>
                    </button>
                    <div className="table-sources">
                      {item.sources.slice(0, 2).map((source) => (
                        <button
                          key={source.url}
                          onClick={(event) => {
                            event.stopPropagation();
                            void openInDefaultBrowser(source.url);
                          }}
                          type="button"
                        >
                          {source.label}
                        </button>
                      ))}
                    </div>
                  </td>
                  <td>
                    <div className="intro-cell">
                      <strong>{item.maturity}</strong>
                      <p>{item.productSummary}</p>
                      <div>
                        <span className="cell-kicker">解决什么问题</span>
                        <ul className="table-list">
                          {item.capabilityDescription.map((text) => <li key={text}>{text}</li>)}
                        </ul>
                      </div>
                      <div>
                        <span className="cell-kicker">核心功能</span>
                        <ol className="capability-list">
                          {item.coreFunctionDescription.map((capability) => (
                            <li key={capability}>{capability}</li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="tech-cell">
                      <div>
                        <span className="cell-kicker">控制对象</span>
                        <ol className="target-list">
                          {splitTarget(item.platform).map((target, index) => (
                            <li key={target}>
                              <span>{index + 1}</span>
                              <p>{target}</p>
                            </li>
                          ))}
                        </ol>
                      </div>
                      <div>
                        <span className="cell-kicker">技术方案</span>
                        <ul className="table-list">
                          {item.technicalSolution.map((text) => <li key={text}>{text}</li>)}
                        </ul>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="pros-cons-cell">
                      <div>
                        <span className="cell-kicker positive">优势</span>
                        <ul className="table-list positive">
                          {item.strengths.slice(0, 3).map((text) => <li key={text}>{text}</li>)}
                        </ul>
                      </div>
                      <div>
                        <span className="cell-kicker negative">短板</span>
                        <ul className="table-list negative">
                          {item.weaknesses.slice(0, 3).map((text) => <li key={text}>{text}</li>)}
                        </ul>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="pricing-stack">
                      <strong>{item.pricingDetails.type}</strong>
                      <b>{item.pricingDetails.price}</b>
                      <span>{item.pricingDetails.note}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section system-phone-section">
        <div className="matrix-head">
          <div>
            <span>System-Level Phone Agents</span>
            <h2>系统级手机 AI Agent</h2>
          </div>
        </div>

        <div className="table-shell">
          <table className="competitor-table system-phone-table">
            <thead>
              <tr>
                <th>产品</th>
                <th>产品简介</th>
                <th>技术方案</th>
                <th>优劣势</th>
                <th>商业模式/活跃证据</th>
              </tr>
            </thead>
            <tbody>
              {systemPhoneAgents.map((item) => (
                <tr key={item.name}>
                  <td className="product-cell">
                    <div className="product-title-line">
                      <strong>{item.name}</strong>
                      <span className={`origin-badge ${item.origin === "国内" ? "domestic" : "global"}`}>{item.origin}</span>
                    </div>
                    <span className="product-type">系统级手机 AI Agent</span>
                    <p className="latest-update">{systemPhoneLatestUpdates[item.name]}</p>
                    <button
                      aria-label={`在默认浏览器打开 ${item.name} 的来源页面`}
                      className="screenshot-link product-screenshot"
                      onClick={(event) => {
                        event.stopPropagation();
                        void openInDefaultBrowser(item.sourceUrl);
                      }}
                      type="button"
                    >
                      <Image
                        alt={`${item.name} ${item.sourceLabel}截图`}
                        height={118}
                        src={systemPhoneScreenshotFor(item)}
                        width={190}
                      />
                      <span>{item.sourceLabel}截图</span>
                    </button>
                    <p className="repo-name">{item.platform}</p>
                    <div className="table-sources">
                      <button onClick={() => void openInDefaultBrowser(item.sourceUrl)} type="button">{item.sourceLabel}</button>
                    </div>
                  </td>
                  <td>
                    <div className="intro-cell">
                      <strong>系统级入口</strong>
                      <p>{item.productSummary}</p>
                      <div>
                        <span className="cell-kicker">它能做什么</span>
                        <ul className="table-list">
                          {item.capabilityDescription.map((text) => <li key={text}>{text}</li>)}
                        </ul>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="tech-cell">
                      <span className="cell-kicker">技术链路</span>
                      <ul className="table-list">
                        {item.technicalSolution.map((text) => <li key={text}>{text}</li>)}
                      </ul>
                    </div>
                  </td>
                  <td>
                    <div className="pros-cons-cell">
                      <div>
                        <span className="cell-kicker positive">优势</span>
                        <ul className="table-list positive">
                          {item.strengths.map((text) => <li key={text}>{text}</li>)}
                        </ul>
                      </div>
                      <div>
                        <span className="cell-kicker negative">短板</span>
                        <ul className="table-list negative">
                          {item.weaknesses.map((text) => <li key={text}>{text}</li>)}
                        </ul>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="pricing-stack github-status">
                      <strong>{item.pricing}</strong>
                      <b>{item.activityEvidence}</b>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section github-section">
        <div className="matrix-head">
          <div>
            <span>GitHub Radar</span>
            <h2>GitHub 新项目雷达</h2>
          </div>
        </div>

        <div className="table-shell">
          <table className="competitor-table github-table">
            <thead>
              <tr>
                <th>项目</th>
                <th>项目简介</th>
                <th>技术方案</th>
                <th>优劣势</th>
                <th>开源/活跃状态</th>
              </tr>
            </thead>
            <tbody>
              {githubGuiProjects.map((item) => (
                <tr key={item.repo}>
                  <td className="product-cell">
                    <div className="product-title-line">
                      <strong>{item.name}</strong>
                      <span className={`origin-badge ${item.origin === "国内" ? "domestic" : "global"}`}>{item.origin}</span>
                    </div>
                    <span className="product-type">{item.category}</span>
                    <p className="latest-update">{githubLatestUpdates[item.repo]}</p>
                    <button
                      aria-label={`在默认浏览器打开 ${item.repo} 的 GitHub 仓库`}
                      className="screenshot-link product-screenshot"
                      onClick={(event) => {
                        event.stopPropagation();
                        void openInDefaultBrowser(item.url);
                      }}
                      type="button"
                    >
                      <Image
                        alt={`${item.repo} GitHub 仓库截图`}
                        height={118}
                        src={githubScreenshotFor(item)}
                        width={190}
                      />
                      <span>GitHub 仓库截图</span>
                    </button>
                    <p className="repo-name">{item.repo}</p>
                    <div className="table-sources">
                      <button onClick={() => void openInDefaultBrowser(item.url)} type="button">GitHub</button>
                      {item.homepage ? <button onClick={() => void openInDefaultBrowser(item.homepage ?? item.url)} type="button">官网/项目页</button> : null}
                    </div>
                  </td>
                  <td>
                    <div className="intro-cell">
                      <strong>{item.stars} stars</strong>
                      <p>{item.projectSummary}</p>
                      <div>
                        <span className="cell-kicker">它能做什么</span>
                        <ul className="table-list">
                          {item.capabilityDescription.map((text) => <li key={text}>{text}</li>)}
                        </ul>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="tech-cell">
                      <span className="cell-kicker">技术链路</span>
                      <ul className="table-list">
                        {item.technicalSolution.map((text) => <li key={text}>{text}</li>)}
                      </ul>
                    </div>
                  </td>
                  <td>
                    <div className="pros-cons-cell">
                      <div>
                        <span className="cell-kicker positive">优势</span>
                        <ul className="table-list positive">
                          {item.strengths.map((text) => <li key={text}>{text}</li>)}
                        </ul>
                      </div>
                      <div>
                        <span className="cell-kicker negative">短板</span>
                        <ul className="table-list negative">
                          {item.weaknesses.map((text) => <li key={text}>{text}</li>)}
                        </ul>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="pricing-stack github-status">
                      <strong>{item.openSourceStatus}</strong>
                      <b>{item.updatedEvidence}</b>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section traditional-section">
        <div className="matrix-head">
          <div>
            <span>Traditional Automation</span>
            <h2>传统自动化 / RPA / 测试工具</h2>
          </div>
        </div>

        <div className="table-shell">
          <table className="competitor-table traditional-table">
            <thead>
              <tr>
                <th>产品</th>
                <th>产品简介</th>
                <th>技术方案</th>
                <th>优劣势</th>
                <th>商业模式</th>
              </tr>
            </thead>
            <tbody>
              {traditionalAutomationCompetitors.map((item) => (
                <tr key={item.name}>
                  <td className="product-cell">
                    <div className="product-title-line">
                      <strong>{item.name}</strong>
                      <span className={`origin-badge ${item.origin === "国内" ? "domestic" : "global"}`}>{item.origin}</span>
                    </div>
                    <span className="product-type">{item.category}</span>
                    <p className="latest-update">{competitorLatestUpdates[item.name]}</p>
                    <button
                      aria-label={`在默认浏览器打开 ${item.name} 的官方页面`}
                      className="screenshot-link product-screenshot"
                      onClick={(event) => {
                        event.stopPropagation();
                        void openInDefaultBrowser(item.sources[0].url);
                      }}
                      type="button"
                    >
                      <Image
                        alt={`${item.name} 官方首页截图`}
                        height={118}
                        src={screenshotFor(item)}
                        width={190}
                      />
                      <span>官网首页截图</span>
                    </button>
                    <div className="table-sources">
                      {item.sources.slice(0, 2).map((source) => (
                        <button
                          key={source.url}
                          onClick={(event) => {
                            event.stopPropagation();
                            void openInDefaultBrowser(source.url);
                          }}
                          type="button"
                        >
                          {source.label}
                        </button>
                      ))}
                    </div>
                  </td>
                  <td>
                    <div className="intro-cell">
                      <strong>{item.maturity}</strong>
                      <p>{item.productSummary}</p>
                      <div>
                        <span className="cell-kicker">解决什么问题</span>
                        <ul className="table-list">
                          {item.capabilityDescription.map((text) => <li key={text}>{text}</li>)}
                        </ul>
                      </div>
                      <div>
                        <span className="cell-kicker">核心功能</span>
                        <ol className="capability-list">
                          {item.coreFunctionDescription.map((capability) => (
                            <li key={capability}>{capability}</li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="tech-cell">
                      <div>
                        <span className="cell-kicker">控制对象</span>
                        <ol className="target-list">
                          {splitTarget(item.platform).map((target, index) => (
                            <li key={target}>
                              <span>{index + 1}</span>
                              <p>{target}</p>
                            </li>
                          ))}
                        </ol>
                      </div>
                      <div>
                        <span className="cell-kicker">技术方案</span>
                        <ul className="table-list">
                          {item.technicalSolution.map((text) => <li key={text}>{text}</li>)}
                        </ul>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="pros-cons-cell">
                      <div>
                        <span className="cell-kicker positive">优势</span>
                        <ul className="table-list positive">
                          {item.strengths.slice(0, 3).map((text) => <li key={text}>{text}</li>)}
                        </ul>
                      </div>
                      <div>
                        <span className="cell-kicker negative">短板</span>
                        <ul className="table-list negative">
                          {item.weaknesses.slice(0, 3).map((text) => <li key={text}>{text}</li>)}
                        </ul>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="pricing-stack">
                      <strong>{item.pricingDetails.type}</strong>
                      <b>{item.pricingDetails.price}</b>
                      <span>{item.pricingDetails.note}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </main>
  );
}
