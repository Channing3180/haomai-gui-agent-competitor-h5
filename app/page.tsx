"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { categories, competitors, reportDate, traditionalAutomationCompetitors, type Competitor, type CompetitorCategory, type PricingModel } from "@/data/competitors";
import { githubGuiProjects, type GithubGuiProject } from "@/data/github-projects";
import { systemPhoneAgents, type SystemPhoneAgent } from "@/data/system-phone-agents";
import { changelog, type ChangeEntry, type ChangeType } from "@/data/changelog";

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
  "Open-AutoGLM / AutoGLM-Phone-9B": "最新更新：2026-03-06（代码）",
  Tasker: "最新更新：2026-02-05",
  "Automate by LlamaLab": "最新更新：2026（公开资料未精确到日）",
  "ChatGPT agent / Operator": "最新更新：2025-08",
  "Claude Computer Use": "最新更新：2025-01-24",
  "Browser Use Cloud": "最新更新：2026-05-06（代码）",
  Skyvern: "最新更新：2026-04-14",
  Manus: "最新更新：2026-05（官方帮助中心/博客）",
  "Vector AI Agent": "最新更新：2026（公开资料未精确到日）",
  Maestro: "最新更新：2026-05-07",
  "AirDroid Business": "最新更新：2026（公开资料未精确到日）",
  AnyDesk: "最新更新：2026-05-04",
  TeamViewer: "最新更新：2026（公开资料未精确到日）",
  "Microsoft Power Automate Desktop": "最新更新：2026（公开资料未精确到日）",
  UiPath: "最新更新：2026（公开资料未精确到日）"
};

const githubLatestUpdates: Record<string, string> = {
  "bytedance/UI-TARS-desktop": "GitHub pushed_at: 2026-05-15；updated_at: 2026-05-15。",
  "bytedance/UI-TARS": "GitHub pushed_at: 2026-01-27；updated_at: 2026-05-15。",
  "xlang-ai/OpenCUA": "GitHub pushed_at: 2026-02-04；updated_at: 2026-05-13。",
  "OpenBMB/AgentCPM-GUI": "GitHub pushed_at: 2026-01-11；updated_at: 2026-05-13。",
  "stepfun-ai/gelab-zero": "GitHub pushed_at: 2026-05-11；updated_at: 2026-05-14。",
  "trycua/cua": "GitHub pushed_at: 2026-05-14；updated_at: 2026-05-15。",
  "simular-ai/Agent-S": "GitHub pushed_at: 2026-05-13；updated_at: 2026-05-15。",
  "google-research/android_world": "GitHub pushed_at: 2026-04-09；updated_at: 2026-05-15。",
  "showlab/ShowUI": "GitHub pushed_at: 2026-04-24；updated_at: 2026-05-13。",
  "zai-org/CogAgent": "GitHub pushed_at: 2025-04-04；updated_at: 2026-05-14。",
  "browser-use/browser-use": "GitHub pushed_at: 2026-05-15；updated_at: 2026-05-15。",
  "droidrun/mobilerun": "GitHub pushed_at: 2026-05-14；updated_at: 2026-05-15。",
  "zai-org/Open-AutoGLM": "GitHub pushed_at: 2026-03-06；updated_at: 2026-05-14。",
  "Westlake-AGI-Lab/AppAgentX": "GitHub pushed_at: 2025-04-15；updated_at: 2026-05-14。",
  "ui-voyager/UI-Voyager": "GitHub pushed_at: 2026-04-03；updated_at: 2026-05-11。",
  "memohai/Autofish": "GitHub pushed_at: 2026-05-12；updated_at: 2026-05-15。",
  "IPADS-SAI/MobiAgent": "GitHub pushed_at: 2026-05-15；updated_at: 2026-05-14。",
  "X-PLUG/MobileAgent": "GitHub pushed_at: 2026-05-14；updated_at: 2026-05-14。"
};

const systemPhoneLatestUpdates: Record<string, string> = {
  "豆包手机助手 / nubia M153": "最新更新：2025-12-02",
  "荣耀 YOYO 智能体": "最新更新：2026-05-12",
  小米超级小爱: "最新更新：2026-05-10",
  "OPPO 小布助手": "最新更新：2025-07-01",
  "vivo 蓝心小 V": "最新更新：2025-10-14",
  华为小艺: "最新更新：2026-04-20",
  "Google Gemini / Samsung Galaxy AI": "最新更新：2026-05-13",
  "Apple Intelligence / Siri App Intents": "最新更新：2025-08-12"
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

const allLabel = "全部";
const priceOptions: (typeof allLabel | PricingModel)[] = [allLabel, "开源/免费", "订阅", "按量", "企业定制", "一次性购买"];
const originOptions = [allLabel, "国内", "国外"] as const;
const systemCommercialOptions = [allLabel, "硬件/系统随附", "生态合作", "未单独收费"] as const;
const githubCategories = [allLabel, "手机 GUI Agent", "电脑/浏览器 GUI Agent", "GUI Agent 模型/评测"] as const;

function searchableText(values: unknown[]) {
  return values.flatMap((value) => {
    if (!value) return [];
    if (Array.isArray(value)) return value;
    if (typeof value === "object") return Object.values(value as Record<string, unknown>);
    return String(value);
  }).join(" ").toLowerCase();
}

function matchesSearch(values: unknown[], keyword: string) {
  const normalized = keyword.trim().toLowerCase();
  if (!normalized) return true;
  return searchableText(values).includes(normalized);
}

function systemCommercialBucket(item: SystemPhoneAgent) {
  const text = `${item.pricing} ${item.commercialModel}`;
  if (text.includes("工程样机") || text.includes("硬件") || text.includes("随") || text.includes("系统")) return "硬件/系统随附";
  if (text.includes("合作") || text.includes("生态")) return "生态合作";
  return "未单独收费";
}

type FilterToolbarProps = {
  primaryLabel: string;
  primaryOptions: readonly string[];
  primaryValue: string;
  onPrimaryChange: (value: string) => void;
  secondaryLabel: string;
  secondaryOptions: readonly string[];
  secondaryValue: string;
  onSecondaryChange: (value: string) => void;
  searchValue: string;
  onSearchChange: (value: string) => void;
  resultCount: number;
  totalCount: number;
};

function FilterToolbar({
  primaryLabel,
  primaryOptions,
  primaryValue,
  onPrimaryChange,
  secondaryLabel,
  secondaryOptions,
  secondaryValue,
  onSecondaryChange,
  searchValue,
  onSearchChange,
  resultCount,
  totalCount
}: FilterToolbarProps) {
  return (
    <div className="matrix-toolbar" aria-label="表格筛选">
      <div className="toolbar-filters">
        <div className="filter-group">
          <span>{primaryLabel}</span>
          <div className="filters">
            {primaryOptions.map((option) => (
              <button className={primaryValue === option ? "active" : ""} key={option} onClick={() => onPrimaryChange(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
        <div className="filter-group">
          <span>{secondaryLabel}</span>
          <div className="filters compact">
            {secondaryOptions.map((option) => (
              <button className={secondaryValue === option ? "active" : ""} key={option} onClick={() => onSecondaryChange(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
        <label className="search-filter">
          <span>查找</span>
          <input
            aria-label="按产品、功能、技术方案或商业模式查找"
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="输入产品 / 技术 / 商业模式"
            type="search"
            value={searchValue}
          />
        </label>
      </div>
      <strong><span>{resultCount}</span><small>/ {totalCount}</small></strong>
    </div>
  );
}

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
  const [mainSearch, setMainSearch] = useState("");
  const [systemOrigin, setSystemOrigin] = useState("全部");
  const [systemCommercial, setSystemCommercial] = useState("全部");
  const [systemSearch, setSystemSearch] = useState("");
  const [githubCategory, setGithubCategory] = useState("全部");
  const [githubOrigin, setGithubOrigin] = useState("全部");
  const [githubSearch, setGithubSearch] = useState("");
  const [traditionalCategory, setTraditionalCategory] = useState<CompetitorCategory | "全部">("全部");
  const [traditionalPrice, setTraditionalPrice] = useState("全部");
  const [traditionalSearch, setTraditionalSearch] = useState("");

  const filtered = useMemo(() => {
    return competitors.filter((item) => {
      const categoryMatch = activeCategory === "全部" || item.category === activeCategory;
      const priceMatch = activePrice === "全部" || item.pricingModel === activePrice;
      const searchMatch = matchesSearch([item.name, item.origin, item.category, item.productSummary, item.capabilityDescription, item.technicalSolution, item.coreFunctionDescription, item.pricingDetails, item.strengths, item.weaknesses], mainSearch);
      return categoryMatch && priceMatch && searchMatch;
    });
  }, [activeCategory, activePrice, mainSearch]);

  const filteredSystemPhoneAgents = useMemo(() => {
    return systemPhoneAgents.filter((item) => {
      const originMatch = systemOrigin === "全部" || item.origin === systemOrigin;
      const commercialMatch = systemCommercial === "全部" || systemCommercialBucket(item) === systemCommercial;
      const searchMatch = matchesSearch([item.name, item.origin, item.platform, item.productSummary, item.capabilityDescription, item.technicalSolution, item.pricing, item.commercialModel, item.activityEvidence, item.latestSignals], systemSearch);
      return originMatch && commercialMatch && searchMatch;
    });
  }, [systemOrigin, systemCommercial, systemSearch]);

  const filteredGithubProjects = useMemo(() => {
    return githubGuiProjects.filter((item) => {
      const categoryMatch = githubCategory === "全部" || item.category === githubCategory;
      const originMatch = githubOrigin === "全部" || item.origin === githubOrigin;
      const searchMatch = matchesSearch([item.name, item.repo, item.origin, item.category, item.projectSummary, item.capabilityDescription, item.technicalSolution, item.strengths, item.weaknesses, item.openSourceStatus, item.updatedEvidence], githubSearch);
      return categoryMatch && originMatch && searchMatch;
    });
  }, [githubCategory, githubOrigin, githubSearch]);

  const filteredTraditionalCompetitors = useMemo(() => {
    return traditionalAutomationCompetitors.filter((item) => {
      const categoryMatch = traditionalCategory === "全部" || item.category === traditionalCategory;
      const priceMatch = traditionalPrice === "全部" || item.pricingModel === traditionalPrice;
      const searchMatch = matchesSearch([item.name, item.origin, item.category, item.productSummary, item.capabilityDescription, item.technicalSolution, item.coreFunctionDescription, item.pricingDetails, item.strengths, item.weaknesses], traditionalSearch);
      return categoryMatch && priceMatch && searchMatch;
    });
  }, [traditionalCategory, traditionalPrice, traditionalSearch]);

  return (
    <main>
      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">截至 {reportDate} · 全球 + 中国市场</div>
            <h1>好麦 GUI Agent 竞品分析</h1>
            <div className="hero-nav-links">
              <a className="btn btn-ghost" href="/changelog">📋 更新日志</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 本周更新 ===== */}
      <section className="section this-week-section">
        <div className="matrix-head">
          <div>
            <span>This Week</span>
            <h2>本周更新</h2>
          </div>
          <a className="btn btn-ghost" href="/changelog">
            查看全部 →
          </a>
        </div>
        {(() => {
          const latestWeek = changelog.length > 0 ? changelog[0].week : "";
          const thisWeek = changelog.filter(e => e.week === latestWeek);
          const signals = thisWeek.filter(e => e.type === "new_signal").slice(0, 3);
          const others = thisWeek.filter(e => e.type !== "new_signal").slice(0, 5);

          if (thisWeek.length === 0) {
            return <div className="this-week-empty">本周暂无更新</div>;
          }

          const typeIcon: Record<string, string> = {
            stars_change: "⭐", code_update: "🔵", new_signal: "🟣",
            activity_update: "📝", pricing_change: "🟠", new_item: "🟢", screenshot_updated: "📸",
          };

          return (
            <div className="this-week-grid">
              {signals.length > 0 && (
                <div className="this-week-signals">
                  <h3>📰 行业动态（{signals.length} 条）</h3>
                  {signals.map((entry, i) => (
                    <a
                      key={`signal-${i}`}
                      className="this-week-signal"
                      href={entry.sourceUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (!entry.sourceUrl) { e.preventDefault(); }
                      }}
                    >
                      <span className="this-week-signal-target">{entry.target}</span>
                      <p className="this-week-signal-summary">{entry.summary}</p>
                      <span className="this-week-signal-date">{entry.date}</span>
                    </a>
                  ))}
                </div>
              )}
              {others.length > 0 && (
                <div className="this-week-others">
                  <h3>🔍 其他动态（{others.length} 条）</h3>
                  {others.map((entry, i) => (
                    <a
                      key={`other-${i}`}
                      className="this-week-other"
                      href={entry.sourceUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (!entry.sourceUrl) { e.preventDefault(); }
                      }}
                    >
                      <span className="this-week-other-icon">{typeIcon[entry.type] || "📌"}</span>
                      <div className="this-week-other-body">
                        <span className="this-week-other-target">{entry.target}</span>
                        <span className="this-week-other-summary">{entry.summary}</span>
                      </div>
                      <span className="this-week-other-date">{entry.date}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })()}
      </section>

      <section className="section matrix-section">
        <div className="matrix-head">
          <div>
            <span>Competitive Workspace</span>
            <h2>竞品总表</h2>
          </div>
        </div>

        <FilterToolbar
          onPrimaryChange={(value) => setActiveCategory(value as CompetitorCategory | "全部")}
          onSearchChange={setMainSearch}
          onSecondaryChange={setActivePrice}
          primaryLabel="赛道"
          primaryOptions={[allLabel, ...categories]}
          primaryValue={activeCategory}
          resultCount={filtered.length}
          searchValue={mainSearch}
          secondaryLabel="收费"
          secondaryOptions={priceOptions}
          secondaryValue={activePrice}
          totalCount={competitors.length}
        />

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

        <FilterToolbar
          onPrimaryChange={setSystemOrigin}
          onSearchChange={setSystemSearch}
          onSecondaryChange={setSystemCommercial}
          primaryLabel="地区"
          primaryOptions={originOptions}
          primaryValue={systemOrigin}
          resultCount={filteredSystemPhoneAgents.length}
          searchValue={systemSearch}
          secondaryLabel="商业形态"
          secondaryOptions={systemCommercialOptions}
          secondaryValue={systemCommercial}
          totalCount={systemPhoneAgents.length}
        />

        <div className="table-shell">
          <table className="competitor-table system-phone-table">
            <thead>
              <tr>
                <th>产品</th>
                <th>产品简介</th>
                <th>技术方案</th>
                <th>商业模式/活跃证据</th>
              </tr>
            </thead>
            <tbody>
              {filteredSystemPhoneAgents.map((item) => (
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
                    <div className="pricing-stack github-status">
                      <strong>{item.pricing}</strong>
                      <span>{item.commercialModel}</span>
                      <div className="news-strip">
                        <span className="cell-kicker">最新报道（3 条）</span>
                        <ol className="news-list">
                          {item.latestSignals.slice(0, 3).map((signal) => (
                            <article className="news-item" key={`${signal.date}-${signal.title}`}>
                              <time>{signal.date}</time>
                              <p>{signal.title}</p>
                              <em>{signal.source}</em>
                            </article>
                          ))}
                        </ol>
                      </div>
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

        <FilterToolbar
          onPrimaryChange={setGithubCategory}
          onSearchChange={setGithubSearch}
          onSecondaryChange={setGithubOrigin}
          primaryLabel="赛道"
          primaryOptions={githubCategories}
          primaryValue={githubCategory}
          resultCount={filteredGithubProjects.length}
          searchValue={githubSearch}
          secondaryLabel="地区"
          secondaryOptions={originOptions}
          secondaryValue={githubOrigin}
          totalCount={githubGuiProjects.length}
        />

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
              {filteredGithubProjects.map((item) => (
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

        <FilterToolbar
          onPrimaryChange={(value) => setTraditionalCategory(value as CompetitorCategory | "全部")}
          onSearchChange={setTraditionalSearch}
          onSecondaryChange={setTraditionalPrice}
          primaryLabel="赛道"
          primaryOptions={[allLabel, ...categories]}
          primaryValue={traditionalCategory}
          resultCount={filteredTraditionalCompetitors.length}
          searchValue={traditionalSearch}
          secondaryLabel="收费"
          secondaryOptions={priceOptions}
          secondaryValue={traditionalPrice}
          totalCount={traditionalAutomationCompetitors.length}
        />

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
              {filteredTraditionalCompetitors.map((item) => (
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

      <section className="section history-section">
        <div className="matrix-head">
          <div>
            <span>Update History</span>
            <h2>更新历史</h2>
          </div>
          <a className="btn btn-ghost history-more-link" href="/changelog">
            查看全部 →
          </a>
        </div>
        <div className="history-timeline">
          {(() => {
            const recent = [...changelog].sort((a, b) => b.timestamp - a.timestamp).slice(0, 15);
            const byWeek = new Map<string, ChangeEntry[]>();
            recent.forEach(e => {
              if (!byWeek.has(e.week)) byWeek.set(e.week, []);
              byWeek.get(e.week)!.push(e);
            });
            const typeIcon: Record<ChangeType, string> = {
              stars_change: "⭐", code_update: "🔵", new_signal: "🟣",
              activity_update: "📝", pricing_change: "🟠", new_item: "🟢", screenshot_updated: "📸",
            };
            return Array.from(byWeek.entries()).map(([week, entries]) => (
              <div key={week} className="history-week">
                <div className="history-week-label">{week}</div>
                {entries.map((entry, i) => {
                  const hasUrl = !!entry.sourceUrl;
                  return (
                    <div key={i} className={`history-item ${hasUrl ? "is-clickable" : ""}`}>
                      {hasUrl ? (
                        <a
                          className="history-item-link"
                          href={entry.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`点击跳转到 ${entry.sourceUrl}`}
                        >
                          <span className="history-icon">{typeIcon[entry.type] || "📌"}</span>
                          <div className="history-content">
                            <span className="history-target">{entry.target}</span>
                            <span className="history-summary">{entry.summary}</span>
                          </div>
                          <span className="history-date">{entry.date}</span>
                        </a>
                      ) : (
                        <>
                          <span className="history-icon">{typeIcon[entry.type] || "📌"}</span>
                          <div className="history-content">
                            <span className="history-target">{entry.target}</span>
                            <span className="history-summary">{entry.summary}</span>
                          </div>
                          <span className="history-date">{entry.date}</span>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            ));
          })()}
          {changelog.length === 0 && (
            <div className="history-empty">暂无更新记录</div>
          )}
        </div>
      </section>

    </main>
  );
}
