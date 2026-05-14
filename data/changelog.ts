export type ChangeType =
  | "new_item"
  | "stars_change"
  | "code_update"
  | "pricing_change"
  | "activity_update"
  | "new_signal"
  | "screenshot_updated";

export type ChangeEntry = {
  week: string;
  type: ChangeType;
  target: string;
  field: string;
  oldValue?: string;
  newValue: string;
  summary: string;
};

export const changelog: ChangeEntry[] = [
  {
    week: "2026-05-14",
    type: "stars_change",
    target: "UI-TARS Desktop",
    field: "stars",,
    oldValue: "29.6k+"
    newValue: "33.8k+",
    summary: "UI-TARS Desktop GitHub stars 从 29.6k+ 变为 33.8k+"
  },
  {
    week: "2026-05-14",
    type: "stars_change",
    target: "UI-TARS",
    field: "stars",,
    oldValue: "10.1k+"
    newValue: "10.5k+",
    summary: "UI-TARS GitHub stars 从 10.1k+ 变为 10.5k+"
  },
  {
    week: "2026-05-14",
    type: "stars_change",
    target: "OpenCUA",
    field: "stars",,
    oldValue: "750+"
    newValue: "760+",
    summary: "OpenCUA GitHub stars 从 750+ 变为 760+"
  },
  {
    week: "2026-05-14",
    type: "stars_change",
    target: "AgentCPM-GUI",
    field: "stars",,
    oldValue: "1.3k+"
    newValue: "1.4k+",
    summary: "AgentCPM-GUI GitHub stars 从 1.3k+ 变为 1.4k+"
  },
  {
    week: "2026-05-14",
    type: "stars_change",
    target: "GELab-Zero / STEP-GUI",
    field: "stars",,
    oldValue: "2.1k+"
    newValue: "2.2k+",
    summary: "GELab-Zero / STEP-GUI GitHub stars 从 2.1k+ 变为 2.2k+"
  },
  {
    week: "2026-05-14",
    type: "code_update",
    target: "GELab-Zero / STEP-GUI",
    field: "updatedEvidence",,
    oldValue: "GitHub pushed_at: 2026-04-29；updated_at: 2026-05-05。"
    newValue: "GitHub pushed_at: 2026-05-11；updated_at: 2026-05-14。",
    summary: "GELab-Zero / STEP-GUI 有新的代码提交 (2026-05-11)"
  },
  {
    week: "2026-05-14",
    type: "stars_change",
    target: "Agent-S",
    field: "stars",,
    oldValue: "11.1k+"
    newValue: "11.3k+",
    summary: "Agent-S GitHub stars 从 11.1k+ 变为 11.3k+"
  },
  {
    week: "2026-05-14",
    type: "code_update",
    target: "Agent-S",
    field: "updatedEvidence",,
    oldValue: "GitHub pushed_at: 2026-02-21；updated_at: 2026-05-07。"
    newValue: "GitHub pushed_at: 2026-05-13；updated_at: 2026-05-14。",
    summary: "Agent-S 有新的代码提交 (2026-05-13)"
  },
  {
    week: "2026-05-14",
    type: "stars_change",
    target: "AndroidWorld",
    field: "stars",,
    oldValue: "750+"
    newValue: "766+",
    summary: "AndroidWorld GitHub stars 从 750+ 变为 766+"
  },
  {
    week: "2026-05-14",
    type: "stars_change",
    target: "CogAgent",
    field: "stars",,
    oldValue: "1.1k+"
    newValue: "1.2k+",
    summary: "CogAgent GitHub stars 从 1.1k+ 变为 1.2k+"
  },
  {
    week: "2026-05-14",
    type: "stars_change",
    target: "Browser Use",
    field: "stars",,
    oldValue: "92.5k+"
    newValue: "93.9k+",
    summary: "Browser Use GitHub stars 从 92.5k+ 变为 93.9k+"
  },
  {
    week: "2026-05-14",
    type: "code_update",
    target: "Browser Use",
    field: "updatedEvidence",,
    oldValue: "GitHub pushed_at: 2026-05-06；updated_at: 2026-05-07。"
    newValue: "GitHub pushed_at: 2026-05-13；updated_at: 2026-05-14。",
    summary: "Browser Use 有新的代码提交 (2026-05-13)"
  },
  {
    week: "2026-05-14",
    type: "stars_change",
    target: "Mobilerun",
    field: "stars",,
    oldValue: "8.2k+"
    newValue: "8.3k+",
    summary: "Mobilerun GitHub stars 从 8.2k+ 变为 8.3k+"
  },
  {
    week: "2026-05-14",
    type: "code_update",
    target: "Mobilerun",
    field: "updatedEvidence",,
    oldValue: "GitHub pushed_at: 2026-05-06；updated_at: 2026-05-07。"
    newValue: "GitHub pushed_at: 2026-05-13；updated_at: 2026-05-14。",
    summary: "Mobilerun 有新的代码提交 (2026-05-13)"
  },
  {
    week: "2026-05-14",
    type: "stars_change",
    target: "Open-AutoGLM",
    field: "stars",,
    oldValue: "25.2k+"
    newValue: "25.3k+",
    summary: "Open-AutoGLM GitHub stars 从 25.2k+ 变为 25.3k+"
  },
  {
    week: "2026-05-14",
    type: "stars_change",
    target: "AppAgentX",
    field: "stars",,
    oldValue: "640+"
    newValue: "650+",
    summary: "AppAgentX GitHub stars 从 640+ 变为 650+"
  },
  {
    week: "2026-05-14",
    type: "stars_change",
    target: "Autofish",
    field: "stars",,
    oldValue: "90+"
    newValue: "103+",
    summary: "Autofish GitHub stars 从 90+ 变为 103+"
  },
  {
    week: "2026-05-14",
    type: "code_update",
    target: "Autofish",
    field: "updatedEvidence",,
    oldValue: "GitHub pushed_at: 2026-05-03；updated_at: 2026-05-07。"
    newValue: "GitHub pushed_at: 2026-05-12；updated_at: 2026-05-13。",
    summary: "Autofish 有新的代码提交 (2026-05-12)"
  },
  {
    week: "2026-05-14",
    type: "stars_change",
    target: "Mobile-Agent",
    field: "stars",,
    oldValue: "8.6k+"
    newValue: "8.7k+",
    summary: "Mobile-Agent GitHub stars 从 8.6k+ 变为 8.7k+"
  },
  {
    week: "2026-05-14",
    type: "code_update",
    target: "Mobile-Agent",
    field: "updatedEvidence",,
    oldValue: "GitHub pushed_at: 2026-04-14；updated_at: 2026-05-07。"
    newValue: "GitHub pushed_at: 2026-05-14；updated_at: 2026-05-14。",
    summary: "Mobile-Agent 有新的代码提交 (2026-05-14)"
  },
  {
    week: "2026-05-14",
    type: "new_signal",
    target: "豆包手机助手 / nubia M153",
    field: "latestSignals",
    newValue: "2026-05-11 新浪财经",
    summary: "豆包手机助手 / nubia M153: 新浪财经 (新浪财经, 2026-05-11)"
  },
  {
    week: "2026-05-14",
    type: "new_signal",
    target: "豆包手机助手 / nubia M153",
    field: "latestSignals",
    newValue: "2025-12-01 品玩",
    summary: "豆包手机助手 / nubia M153: 品玩 (品玩, 2025-12-01)"
  },
  {
    week: "2026-05-14",
    type: "new_signal",
    target: "豆包手机助手 / nubia M153",
    field: "latestSignals",
    newValue: "2025-12-03 证券时报",
    summary: "豆包手机助手 / nubia M153: 证券时报 (证券时报, 2025-12-03)"
  },
  {
    week: "2026-05-14",
    type: "new_signal",
    target: "荣耀 YOYO 智能体",
    field: "latestSignals",
    newValue: "2026-05-12 热点科技",
    summary: "荣耀 YOYO 智能体: 热点科技 (热点科技, 2026-05-12)"
  },
  {
    week: "2026-05-14",
    type: "new_signal",
    target: "荣耀 YOYO 智能体",
    field: "latestSignals",
    newValue: "2026-04-30 新京报",
    summary: "荣耀 YOYO 智能体: 新京报 (新京报, 2026-04-30)"
  },
  {
    week: "2026-05-14",
    type: "new_signal",
    target: "荣耀 YOYO 智能体",
    field: "latestSignals",
    newValue: "2026-05-09 新浪财经",
    summary: "荣耀 YOYO 智能体: 新浪财经 (新浪财经, 2026-05-09)"
  },
  {
    week: "2026-05-14",
    type: "new_signal",
    target: "小米超级小爱",
    field: "latestSignals",
    newValue: "2026-05-12 新浪财经",
    summary: "小米超级小爱: 新浪财经 (新浪财经, 2026-05-12)"
  },
  {
    week: "2026-05-14",
    type: "new_signal",
    target: "小米超级小爱",
    field: "latestSignals",
    newValue: "2026-05-14 光通信Pro",
    summary: "小米超级小爱: 光通信Pro (光通信Pro, 2026-05-14)"
  },
  {
    week: "2026-05-14",
    type: "new_signal",
    target: "小米超级小爱",
    field: "latestSignals",
    newValue: "2026-05-06 搜狐网",
    summary: "小米超级小爱: 搜狐网 (搜狐网, 2026-05-06)"
  },
  {
    week: "2026-05-14",
    type: "new_signal",
    target: "OPPO 小布助手",
    field: "latestSignals",
    newValue: "2025-10-15 新浪财经",
    summary: "OPPO 小布助手: 新浪财经 (新浪财经, 2025-10-15)"
  },
  {
    week: "2026-05-14",
    type: "new_signal",
    target: "OPPO 小布助手",
    field: "latestSignals",
    newValue: "2025-07-01 品玩",
    summary: "OPPO 小布助手: 品玩 (品玩, 2025-07-01)"
  },
  {
    week: "2026-05-14",
    type: "new_signal",
    target: "OPPO 小布助手",
    field: "latestSignals",
    newValue: "2025-07-26 OPPO",
    summary: "OPPO 小布助手: OPPO (OPPO, 2025-07-26)"
  },
  {
    week: "2026-05-14",
    type: "new_signal",
    target: "vivo 蓝心小 V",
    field: "latestSignals",
    newValue: "2025-10-14 极客公园",
    summary: "vivo 蓝心小 V: 极客公园 (极客公园, 2025-10-14)"
  },
  {
    week: "2026-05-14",
    type: "new_signal",
    target: "vivo 蓝心小 V",
    field: "latestSignals",
    newValue: "2025-10-11 DoNews",
    summary: "vivo 蓝心小 V: DoNews (DoNews, 2025-10-11)"
  },
  {
    week: "2026-05-14",
    type: "new_signal",
    target: "vivo 蓝心小 V",
    field: "latestSignals",
    newValue: "2025-10-10 新浪财经",
    summary: "vivo 蓝心小 V: 新浪财经 (新浪财经, 2025-10-10)"
  },
  {
    week: "2026-05-14",
    type: "new_signal",
    target: "华为小艺",
    field: "latestSignals",
    newValue: "2026-05-14 驱动之家",
    summary: "华为小艺: 驱动之家 (驱动之家, 2026-05-14)"
  },
  {
    week: "2026-05-14",
    type: "new_signal",
    target: "华为小艺",
    field: "latestSignals",
    newValue: "2026-05-14 中华网",
    summary: "华为小艺: 中华网 (中华网, 2026-05-14)"
  },
  {
    week: "2026-05-14",
    type: "new_signal",
    target: "华为小艺",
    field: "latestSignals",
    newValue: "2026-04-20 新华网",
    summary: "华为小艺: 新华网 (新华网, 2026-04-20)"
  },
  {
    week: "2026-05-14",
    type: "new_signal",
    target: "Google Gemini / Samsung Galaxy AI",
    field: "latestSignals",
    newValue: "2026-05-11 新浪财经",
    summary: "Google Gemini / Samsung Galaxy AI: 新浪财经 (新浪财经, 2026-05-11)"
  },
  {
    week: "2026-05-14",
    type: "new_signal",
    target: "Google Gemini / Samsung Galaxy AI",
    field: "latestSignals",
    newValue: "2026-02-26 cnBeta.COM",
    summary: "Google Gemini / Samsung Galaxy AI: cnBeta.COM (cnBeta.COM, 2026-02-26)"
  },
  {
    week: "2026-05-14",
    type: "new_signal",
    target: "Google Gemini / Samsung Galaxy AI",
    field: "latestSignals",
    newValue: "2026-02-27 观察者",
    summary: "Google Gemini / Samsung Galaxy AI: 观察者 (观察者, 2026-02-27)"
  },
  {
    week: "2026-05-14",
    type: "new_signal",
    target: "Apple Intelligence / Siri App Intents",
    field: "latestSignals",
    newValue: "2026-05-03 17173",
    summary: "Apple Intelligence / Siri App Intents: 17173 (17173, 2026-05-03)"
  },
  {
    week: "2026-05-14",
    type: "new_signal",
    target: "Apple Intelligence / Siri App Intents",
    field: "latestSignals",
    newValue: "2025-08-12 爱范儿",
    summary: "Apple Intelligence / Siri App Intents: 爱范儿 (爱范儿, 2025-08-12)"
  },
  {
    week: "2026-05-14",
    type: "new_signal",
    target: "Apple Intelligence / Siri App Intents",
    field: "latestSignals",
    newValue: "2025-08-13 极客公园",
    summary: "Apple Intelligence / Siri App Intents: 极客公园 (极客公园, 2025-08-13)"
  },
];
