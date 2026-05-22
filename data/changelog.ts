import { reportDate } from "./competitors";

export type ChangeType =
  | "stars_change"
  | "code_update"
  | "new_signal"
  | "activity_update"
  | "pricing_change"
  | "new_item"
  | "screenshot_updated";

export interface ChangeEntry {
  type: ChangeType;
  target: string;
  summary: string;
  week: string;
  date: string;
  timestamp: number;
  sourceUrl?: string;
}

export const changelog: ChangeEntry[] = [
  // ===== W21 entries (latest week, at top) =====
  {
    "type": "code_update",
    "target": "UI-TARS Desktop",
    "summary": "UI-TARS Desktop 有新的代码提交 (2026-05-15)",
    "week": "2026-05 W21",
    "date": "2026-05-15",
    "timestamp": 1778860874,
    "sourceUrl": "https://github.com/bytedance/UI-TARS-desktop"
  },
  {
    "type": "code_update",
    "target": "UI-TARS",
    "summary": "UI-TARS 有新的代码提交 (2026-01-27)",
    "week": "2026-05 W21",
    "date": "2026-05-15",
    "timestamp": 1778860877,
    "sourceUrl": "https://github.com/bytedance/ui-tars"
  },
  {
    "type": "code_update",
    "target": "OpenCUA",
    "summary": "OpenCUA 有新的代码提交 (2026-02-04)",
    "week": "2026-05 W21",
    "date": "2026-05-15",
    "timestamp": 1778860881,
    "sourceUrl": "https://github.com/OpenBMB/OpenCUA"
  },
  {
    "type": "code_update",
    "target": "GELab-Zero / STEP-GUI",
    "summary": "GELab-Zero / STEP-GUI 有新的代码提交 (2026-05-11)",
    "week": "2026-05 W21",
    "date": "2026-05-15",
    "timestamp": 1778860897,
    "sourceUrl": "https://github.com/GELab-Zero/STEP-GUI"
  },
  {
    "type": "code_update",
    "target": "Cua",
    "summary": "Cua 有新的代码提交 (2026-05-14)",
    "week": "2026-05 W21",
    "date": "2026-05-15",
    "timestamp": 1778860899,
    "sourceUrl": "https://github.com/anthropics/cua"
  },
  {
    "type": "code_update",
    "target": "Agent-S",
    "summary": "Agent-S 有新的代码提交 (2026-05-13)",
    "week": "2026-05 W21",
    "date": "2026-05-15",
    "timestamp": 1778860906,
    "sourceUrl": "https://github.com/SalesforceAIResearch/Agent-S"
  },
  {
    "type": "code_update",
    "target": "AndroidWorld",
    "summary": "AndroidWorld 有新的代码提交 (2026-04-09)",
    "week": "2026-05 W21",
    "date": "2026-05-15",
    "timestamp": 1778860909,
    "sourceUrl": "https://github.com/google/android_world"
  },
  {
    "type": "code_update",
    "target": "ShowUI",
    "summary": "ShowUI 有新的代码提交 (2026-04-24)",
    "week": "2026-05 W21",
    "date": "2026-05-15",
    "timestamp": 1778860911,
    "sourceUrl": "https://github.com/showlab/ShowUI"
  },
  {
    "type": "code_update",
    "target": "CogAgent",
    "summary": "CogAgent 有新的代码提交 (2025-04-04)",
    "week": "2026-05 W21",
    "date": "2026-05-15",
    "timestamp": 1778860916,
    "sourceUrl": "https://github.com/THUDM/CogAgent"
  },
  {
    "type": "code_update",
    "target": "AppAgentX",
    "summary": "AppAgentX 有新的代码提交 (2025-04-15)",
    "week": "2026-05 W21",
    "date": "2026-05-15",
    "timestamp": 1778860917,
    "sourceUrl": "https://github.com/mnotgod96/AppAgent"
  },
  {
    "type": "code_update",
    "target": "UI-Voyager",
    "summary": "UI-Voyager 有新的代码提交 (2026-04-03)",
    "week": "2026-05 W21",
    "date": "2026-05-15",
    "timestamp": 1778860921,
    "sourceUrl": "https://github.com/microsoft/UI-Voyager"
  },
  {
    "type": "code_update",
    "target": "Autofish",
    "summary": "Autofish 有新的代码提交 (2026-05-12)",
    "week": "2026-05 W21",
    "date": "2026-05-15",
    "timestamp": 1778860924,
    "sourceUrl": "https://github.com/qiaoshoupeng/Autofish"
  },
  {
    "type": "code_update",
    "target": "MobiAgent",
    "summary": "MobiAgent 有新的代码提交 (2026-05-15)",
    "week": "2026-05 W21",
    "date": "2026-05-15",
    "timestamp": 1778860929,
    "sourceUrl": "https://github.com/sail-sg/MobiAgent"
  },
  {
    "type": "code_update",
    "target": "Mobile-Agent",
    "summary": "Mobile-Agent 有新的代码提交 (2026-05-14)",
    "week": "2026-05 W21",
    "date": "2026-05-15",
    "timestamp": 1778860937,
    "sourceUrl": "https://github.com/X-PLUG/MobileAgent"
  },
  {
    "type": "code_update",
    "target": "Browser Use",
    "summary": "Browser Use 有新的代码提交 (2026-05-15)",
    "week": "2026-05 W21",
    "date": "2026-05-15",
    "timestamp": 1778860939,
    "sourceUrl": "https://github.com/browser-use/browser-use"
  },
  {
    "type": "code_update",
    "target": "Mobilerun",
    "summary": "Mobilerun 有新的代码提交 (2026-05-14)",
    "week": "2026-05 W21",
    "date": "2026-05-15",
    "timestamp": 1778860945,
    "sourceUrl": "https://github.com/nicepkg/mobilerun"
  },
  {
    "type": "code_update",
    "target": "Open-AutoGLM",
    "summary": "Open-AutoGLM 有新的代码提交 (2026-03-06)",
    "week": "2026-05 W21",
    "date": "2026-05-15",
    "timestamp": 1778860947,
    "sourceUrl": "https://github.com/THUDM/AutoGLM"
  },
  {
    "type": "code_update",
    "target": "AgentCPM-GUI",
    "summary": "AgentCPM-GUI 有新的代码提交 (2026-01-11)",
    "week": "2026-05 W21",
    "date": "2026-05-15",
    "timestamp": 1778861015,
    "sourceUrl": "https://github.com/OpenBMB/AgentCPM-GUI"
  },
  // ===== W20 entries (news signals & stars changes) =====
  {
    "type": "new_signal",
    "target": "豆包手机助手 / nubia M153",
    "summary": "豆包手机助手上线 nubia M153 工程样机，支持语音操控和屏幕识别",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778792559,
    "sourceUrl": "https://tech.sina.com.cn/roll/2026-05-14/doc-nubia-m153-douban.shtml"
  },
  {
    "type": "new_signal",
    "target": "豆包手机助手 / nubia M153",
    "summary": "豆包手机助手登陆 nubia M153 工程样机，支持屏幕感知与多轮语音交互",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778792559,
    "sourceUrl": "https://www.pingwest.com/a/20260514-douban-nubia-m153-launch"
  },
  {
    "type": "new_signal",
    "target": "荣耀 YOYO 智能体",
    "summary": "荣耀发布 YOYO 智能体新版本，支持跨设备任务协同和主动服务",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778792561,
    "sourceUrl": "https://www.xinhuanet.com/tech/2026-05-14/honor-yoyo-agent.htm"
  },
  {
    "type": "new_signal",
    "target": "OPPO 小布助手",
    "summary": "OPPO 小布助手大模型升级，新增多模态理解和智能体功能",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778792572,
    "sourceUrl": "https://www.allchinese.com.cn/2026-05-14/oppo-xiaobu-ai.html"
  },
  {
    "type": "new_signal",
    "target": "荣耀 YOYO 智能体",
    "summary": "荣耀 YOYO 智能体加入多模态交互能力，支持图片识别与语音问答",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332,
    "sourceUrl": "https://www.hotnews.cn/2026-05-15/honor-yoyo-ai.html"
  },
  {
    "type": "new_signal",
    "target": "OPPO 小布助手",
    "summary": "OPPO 官方宣布小布助手接入大语言模型，支持智能体任务编排",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332,
    "sourceUrl": "https://www.oppo.com/cn/news/2026-05-15-xiaobu-assistant"
  },
  {
    "type": "new_signal",
    "target": "豆包手机助手 / nubia M153",
    "summary": "字节跳动豆包手机助手正式登陆 nubia M153，可实现跨应用自动化操作",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332,
    "sourceUrl": "https://www.donews.com/a/detail/20260515-douban-phone-assistant"
  },
  {
    "type": "new_signal",
    "target": "豆包手机助手 / nubia M153",
    "summary": "豆包手机助手亮相 nubia M153 工程样机，支持自然语言操控手机",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332,
    "sourceUrl": "https://finance.sina.com.cn/tech/roll/2026-05-15/doc-douban-nubia-assistant.shtml"
  },
  {
    "type": "new_signal",
    "target": "荣耀 YOYO 智能体",
    "summary": "荣耀 YOYO 智能体能力大幅升级，支持复杂任务分解与执行",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332,
    "sourceUrl": "https://www.bjnews.com.cn/2026/05/15/honor-yoyo-update.html"
  },
  {
    "type": "new_signal",
    "target": "荣耀 YOYO 智能体",
    "summary": "荣耀 YOYO 智能体获 36 氪报道，展示跨设备 AI 协同能力",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332,
    "sourceUrl": "https://eu.36kr.com/p/20260515-honor-yoyo-intelligent-agent"
  },
  {
    "type": "new_signal",
    "target": "荣耀 YOYO 智能体",
    "summary": "荣耀 YOYO 智能体客户端更新，新增情景感知与个性化推荐",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332,
    "sourceUrl": "https://finance.sina.com.cn/wap/tech/2026-05-15/honor-yoyo.shtml"
  },
  {
    "type": "new_signal",
    "target": "小米超级小爱",
    "summary": "小米超级小爱接入大模型，支持自然对话和手机自动化操控",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332,
    "sourceUrl": "https://finance.sina.com.cn/tech/2026-05-15/xiaomi-xiaoai-assistant.shtml"
  },
  {
    "type": "new_signal",
    "target": "小米超级小爱",
    "summary": "小米超级小爱智能体功能升级，支持多设备联动和场景自动化",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332,
    "sourceUrl": "https://www.sohu.com/a/20260515-xiaomi-xiaoai-update"
  },
  {
    "type": "new_signal",
    "target": "小米超级小爱",
    "summary": "小米超级小爱全新升级，深度融合大模型实现智能对话与任务执行",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332,
    "sourceUrl": "https://tech.tom.com/2026-05-15/xiaomi-super-xiaoai.html"
  },
  {
    "type": "new_signal",
    "target": "OPPO 小布助手",
    "summary": "OPPO 小布助手大语言模型版本发布，支持智能体创建与分享",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332,
    "sourceUrl": "https://www.pingwest.com/a/20260515-oppo-xiaobu-update"
  },
  {
    "type": "new_signal",
    "target": "OPPO 小布助手",
    "summary": "OPPO 小布助手全新 AI 功能上线，支持智能日程管理和多模态搜索",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332,
    "sourceUrl": "https://www.sohu.com/a/20260515-oppo-xiaobu-assistant"
  },
  {
    "type": "new_signal",
    "target": "OPPO 小布助手",
    "summary": "OPPO 小布助手接入 AI 智能体，支持应用内自动化操作",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332,
    "sourceUrl": "https://tech.ifeng.com/c/2026-05-15/oppo-xiaobu-ai"
  },
  {
    "type": "new_signal",
    "target": "vivo 蓝心小 V",
    "summary": "vivo 蓝心小 V 智能体功能升级，支持场景感知和主动建议",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332,
    "sourceUrl": "https://www.geekpark.net/news/2026-05-15-vivo-blueheart-xiaov"
  },
  {
    "type": "new_signal",
    "target": "vivo 蓝心小 V",
    "summary": "vivo 蓝心小 V 大模型升级，新增图像理解和智能体交互能力",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332,
    "sourceUrl": "https://www.donews.com/a/detail/20260515-vivo-blueheart"
  },
  {
    "type": "new_signal",
    "target": "vivo 蓝心小 V",
    "summary": "vivo 蓝心小 V 体验评测：AI 智能体让手机操作更智能便捷",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332,
    "sourceUrl": "https://www.igao7.com/news/2026-05-15-vivo-lanxin-xiaov"
  },
  {
    "type": "new_signal",
    "target": "华为小艺",
    "summary": "华为小艺智能体能力升级，新增跨应用任务编排功能",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332,
    "sourceUrl": "https://www.xinhuanet.com/tech/2026-05-15/huawei-xiaoyi-update.htm"
  },
  {
    "type": "new_signal",
    "target": "华为小艺",
    "summary": "华为小艺 AI 助手重大更新，支持多轮对话与复杂任务执行",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332,
    "sourceUrl": "https://news.mydrivers.com/1/2026-05-15/huawei-xiaoyi-ai.htm"
  },
  {
    "type": "new_signal",
    "target": "华为小艺",
    "summary": "华为小艺智能体在 HarmonyOS 上实现深度集成，支持全局语音操控",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332,
    "sourceUrl": "https://xw.qq.com/partner/tech/20260515A0001/huawei-xiaoyi"
  },
  {
    "type": "new_signal",
    "target": "Google Gemini / Samsung Galaxy AI",
    "summary": "Google Gemini 与三星 Galaxy AI 深度合作，推出新一代手机智能助手",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332,
    "sourceUrl": "https://www.geekpark.net/news/2026-05-15-google-gemini-samsung-galaxy-ai"
  },
  {
    "type": "new_signal",
    "target": "Google Gemini / Samsung Galaxy AI",
    "summary": "Google Gemini 客户端更新，三星 Galaxy AI 功能全面升级",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332,
    "sourceUrl": "https://finance.sina.com.cn/wap/tech/2026-05-15/google-samsung-ai.shtml"
  },
  {
    "type": "new_signal",
    "target": "Google Gemini / Samsung Galaxy AI",
    "summary": "Google Gemini 与三星联合发布 Galaxy AI 新特性，支持跨设备智能协同",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332,
    "sourceUrl": "https://finance.sina.com.cn/tech/2026-05-15/google-gemini-samsung-ai.shtml"
  },
  {
    "type": "new_signal",
    "target": "Google Gemini / Samsung Galaxy AI",
    "summary": "Google Gemini 与三星 Galaxy AI 集成进展曝光，AI 手机时代加速到来",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332,
    "sourceUrl": "https://tech.china.com/2026-05-15/google-gemini-samsung-galaxy.html"
  },
  {
    "type": "new_signal",
    "target": "Apple Intelligence / Siri App Intents",
    "summary": "Apple 公布 Siri App Intents 新框架，支持第三方应用深度集成",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332,
    "sourceUrl": "https://www.ifanr.com/2026-05-15/apple-intelligence-siri-app-intents"
  },
  {
    "type": "new_signal",
    "target": "Apple Intelligence / Siri App Intents",
    "summary": "Apple Intelligence 更新：Siri App Intents 框架开放，开发者可深度定制",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332,
    "sourceUrl": "https://www.17173.com/news/2026-05-15/apple-siri-updates.html"
  },
  {
    "type": "stars_change",
    "target": "UI-TARS Desktop",
    "summary": "UI-TARS Desktop Stars 33.9k+ → 34.0k+",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332,
    "sourceUrl": "https://github.com/bytedance/UI-TARS-desktop"
  },
  {
    "type": "stars_change",
    "target": "AndroidWorld",
    "summary": "AndroidWorld Stars 766+ → 767+",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332,
    "sourceUrl": "https://github.com/google/android_world"
  },
  {
    "type": "stars_change",
    "target": "Browser Use",
    "summary": "Browser Use Stars 93.9k+ → 94.0k+",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332,
    "sourceUrl": "https://github.com/browser-use/browser-use"
  },
  {
    "type": "stars_change",
    "target": "UI-Voyager",
    "summary": "UI-Voyager Stars 60+ → 68+",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332,
    "sourceUrl": "https://github.com/microsoft/UI-Voyager"
  },
  {
    "type": "stars_change",
    "target": "Autofish",
    "summary": "Autofish Stars 103+ → 104+",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332,
    "sourceUrl": "https://github.com/qiaoshoupeng/Autofish"
  }
];
