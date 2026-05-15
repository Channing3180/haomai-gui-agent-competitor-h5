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
}

export const changelog: ChangeEntry[] = [
  {
    "type": "code_update",
    "target": "UI-TARS Desktop",
    "summary": "UI-TARS Desktop 有新的代码提交 (2026-04-29)",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778755580
  },
  {
    "type": "code_update",
    "target": "UI-TARS",
    "summary": "UI-TARS 有新的代码提交 (2026-01-27)",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778755584
  },
  {
    "type": "code_update",
    "target": "OpenCUA",
    "summary": "OpenCUA 有新的代码提交 (2026-02-04)",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778755611
  },
  {
    "type": "code_update",
    "target": "GELab-Zero / STEP-GUI",
    "summary": "GELab-Zero / STEP-GUI 有新的代码提交 (2026-05-11)",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778755660
  },
  {
    "type": "code_update",
    "target": "Cua",
    "summary": "Cua 有新的代码提交 (2026-05-14)",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778755667
  },
  {
    "type": "code_update",
    "target": "Agent-S",
    "summary": "Agent-S 有新的代码提交 (2026-05-13)",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778755670
  },
  {
    "type": "code_update",
    "target": "AndroidWorld",
    "summary": "AndroidWorld 有新的代码提交 (2026-04-09)",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778755673
  },
  {
    "type": "code_update",
    "target": "ShowUI",
    "summary": "ShowUI 有新的代码提交 (2026-04-24)",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778755676
  },
  {
    "type": "code_update",
    "target": "CogAgent",
    "summary": "CogAgent 有新的代码提交 (2025-04-04)",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778755681
  },
  {
    "type": "code_update",
    "target": "Browser Use",
    "summary": "Browser Use 有新的代码提交 (2026-05-13)",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778755684
  },
  {
    "type": "code_update",
    "target": "Mobilerun",
    "summary": "Mobilerun 有新的代码提交 (2026-05-13)",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778755701
  },
  {
    "type": "code_update",
    "target": "Open-AutoGLM",
    "summary": "Open-AutoGLM 有新的代码提交 (2026-03-06)",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778755712
  },
  {
    "type": "code_update",
    "target": "AppAgentX",
    "summary": "AppAgentX 有新的代码提交 (2025-04-15)",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778755717
  },
  {
    "type": "code_update",
    "target": "Autofish",
    "summary": "Autofish 有新的代码提交 (2026-05-12)",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778755725
  },
  {
    "type": "code_update",
    "target": "Mobile-Agent",
    "summary": "Mobile-Agent 有新的代码提交 (2026-05-14)",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778755730
  },
  {
    "type": "new_signal",
    "target": "豆包手机助手 / nubia M153",
    "summary": "手机新浪网",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778755762
  },
  {
    "type": "new_signal",
    "target": "豆包手机助手 / nubia M153",
    "summary": "品玩",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778755762
  },
  {
    "type": "new_signal",
    "target": "荣耀 YOYO 智能体",
    "summary": "热点科技",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778755776
  },
  {
    "type": "new_signal",
    "target": "荣耀 YOYO 智能体",
    "summary": "新华网",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778755776
  },
  {
    "type": "new_signal",
    "target": "OPPO 小布助手",
    "summary": "OPPO",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778755795
  },
  {
    "type": "new_signal",
    "target": "OPPO 小布助手",
    "summary": "全天候科技",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778755795
  },
  {
    "type": "code_update",
    "target": "UI-TARS Desktop",
    "summary": "UI-TARS Desktop 有新的代码提交 (2026-04-29)",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778792512
  },
  {
    "type": "code_update",
    "target": "UI-TARS",
    "summary": "UI-TARS 有新的代码提交 (2026-01-27)",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778792518
  },
  {
    "type": "code_update",
    "target": "OpenCUA",
    "summary": "OpenCUA 有新的代码提交 (2026-02-04)",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778792520
  },
  {
    "type": "code_update",
    "target": "AgentCPM-GUI",
    "summary": "AgentCPM-GUI 有新的代码提交 (2026-01-11)",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778792522
  },
  {
    "type": "code_update",
    "target": "GELab-Zero / STEP-GUI",
    "summary": "GELab-Zero / STEP-GUI 有新的代码提交 (2026-05-11)",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778792526
  },
  {
    "type": "code_update",
    "target": "Cua",
    "summary": "Cua 有新的代码提交 (2026-05-14)",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778792529
  },
  {
    "type": "code_update",
    "target": "Agent-S",
    "summary": "Agent-S 有新的代码提交 (2026-05-13)",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778792531
  },
  {
    "type": "code_update",
    "target": "AndroidWorld",
    "summary": "AndroidWorld 有新的代码提交 (2026-04-09)",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778792532
  },
  {
    "type": "code_update",
    "target": "ShowUI",
    "summary": "ShowUI 有新的代码提交 (2026-04-24)",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778792535
  },
  {
    "type": "code_update",
    "target": "CogAgent",
    "summary": "CogAgent 有新的代码提交 (2025-04-04)",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778792538
  },
  {
    "type": "code_update",
    "target": "Browser Use",
    "summary": "Browser Use 有新的代码提交 (2026-05-13)",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778792540
  },
  {
    "type": "code_update",
    "target": "Mobilerun",
    "summary": "Mobilerun 有新的代码提交 (2026-05-13)",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778792542
  },
  {
    "type": "code_update",
    "target": "Open-AutoGLM",
    "summary": "Open-AutoGLM 有新的代码提交 (2026-03-06)",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778792544
  },
  {
    "type": "code_update",
    "target": "AppAgentX",
    "summary": "AppAgentX 有新的代码提交 (2025-04-15)",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778792546
  },
  {
    "type": "code_update",
    "target": "Autofish",
    "summary": "Autofish 有新的代码提交 (2026-05-12)",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778792548
  },
  {
    "type": "code_update",
    "target": "Mobile-Agent",
    "summary": "Mobile-Agent 有新的代码提交 (2026-05-14)",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778792549
  },
  {
    "type": "new_signal",
    "target": "豆包手机助手 / nubia M153",
    "summary": "手机新浪网",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778792559
  },
  {
    "type": "new_signal",
    "target": "豆包手机助手 / nubia M153",
    "summary": "品玩",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778792559
  },
  {
    "type": "new_signal",
    "target": "荣耀 YOYO 智能体",
    "summary": "热点科技",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778792561
  },
  {
    "type": "new_signal",
    "target": "荣耀 YOYO 智能体",
    "summary": "新华网",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778792561
  },
  {
    "type": "new_signal",
    "target": "OPPO 小布助手",
    "summary": "OPPO",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778792572
  },
  {
    "type": "new_signal",
    "target": "OPPO 小布助手",
    "summary": "全天候科技",
    "week": "2026-05 W20",
    "date": "2026-05-14",
    "timestamp": 1778792572
  }
,
{
    "type": "stars_change",
    "target": "UI-TARS Desktop",
    "summary": "UI-TARS Desktop Stars 33.9k+ → 34.0k+",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "code_update",
    "target": "UI-TARS Desktop",
    "summary": "UI-TARS Desktop 有新的代码提交 (2026-05-15)",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "code_update",
    "target": "UI-TARS",
    "summary": "UI-TARS 有新的代码提交 (2026-01-27)",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "code_update",
    "target": "OpenCUA",
    "summary": "OpenCUA 有新的代码提交 (2026-02-04)",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "code_update",
    "target": "AgentCPM-GUI",
    "summary": "AgentCPM-GUI 有新的代码提交 (2026-01-11)",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "code_update",
    "target": "GELab-Zero / STEP-GUI",
    "summary": "GELab-Zero / STEP-GUI 有新的代码提交 (2026-05-11)",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "code_update",
    "target": "Cua",
    "summary": "Cua 有新的代码提交 (2026-05-14)",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "code_update",
    "target": "Agent-S",
    "summary": "Agent-S 有新的代码提交 (2026-05-13)",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "stars_change",
    "target": "AndroidWorld",
    "summary": "AndroidWorld Stars 766+ → 767+",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "code_update",
    "target": "AndroidWorld",
    "summary": "AndroidWorld 有新的代码提交 (2026-04-09)",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "code_update",
    "target": "ShowUI",
    "summary": "ShowUI 有新的代码提交 (2026-04-24)",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "code_update",
    "target": "CogAgent",
    "summary": "CogAgent 有新的代码提交 (2025-04-04)",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "stars_change",
    "target": "Browser Use",
    "summary": "Browser Use Stars 93.9k+ → 94.0k+",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "code_update",
    "target": "Browser Use",
    "summary": "Browser Use 有新的代码提交 (2026-05-15)",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "code_update",
    "target": "Mobilerun",
    "summary": "Mobilerun 有新的代码提交 (2026-05-14)",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "code_update",
    "target": "AppAgentX",
    "summary": "AppAgentX 有新的代码提交 (2025-04-15)",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "stars_change",
    "target": "UI-Voyager",
    "summary": "UI-Voyager Stars 60+ → 68+",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "code_update",
    "target": "UI-Voyager",
    "summary": "UI-Voyager 有新的代码提交 (2026-04-03)",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "stars_change",
    "target": "Autofish",
    "summary": "Autofish Stars 103+ → 104+",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "code_update",
    "target": "Autofish",
    "summary": "Autofish 有新的代码提交 (2026-05-12)",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "code_update",
    "target": "MobiAgent",
    "summary": "MobiAgent 有新的代码提交 (2026-05-15)",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "new_signal",
    "target": "豆包手机助手 / nubia M153",
    "summary": "DoNews",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "new_signal",
    "target": "豆包手机助手 / nubia M153",
    "summary": "新浪财经",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "new_signal",
    "target": "荣耀 YOYO 智能体",
    "summary": "热点科技",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "new_signal",
    "target": "荣耀 YOYO 智能体",
    "summary": "新京报",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "new_signal",
    "target": "荣耀 YOYO 智能体",
    "summary": "eu.36kr.com",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "new_signal",
    "target": "荣耀 YOYO 智能体",
    "summary": "新浪财经客户端",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "new_signal",
    "target": "小米超级小爱",
    "summary": "新浪财经",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "new_signal",
    "target": "小米超级小爱",
    "summary": "搜狐网",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "new_signal",
    "target": "小米超级小爱",
    "summary": "TOM科技",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "new_signal",
    "target": "OPPO 小布助手",
    "summary": "品玩",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "new_signal",
    "target": "OPPO 小布助手",
    "summary": "OPPO",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "new_signal",
    "target": "OPPO 小布助手",
    "summary": "搜狐网",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "new_signal",
    "target": "OPPO 小布助手",
    "summary": "凤凰网科技",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "new_signal",
    "target": "vivo 蓝心小 V",
    "summary": "极客公园",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "new_signal",
    "target": "vivo 蓝心小 V",
    "summary": "DoNews",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "new_signal",
    "target": "vivo 蓝心小 V",
    "summary": "爱搞机",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "new_signal",
    "target": "华为小艺",
    "summary": "新华网",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "new_signal",
    "target": "华为小艺",
    "summary": "驱动之家",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "new_signal",
    "target": "华为小艺",
    "summary": "xw.qq.com",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "new_signal",
    "target": "Google Gemini / Samsung Galaxy AI",
    "summary": "极客公园",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "new_signal",
    "target": "Google Gemini / Samsung Galaxy AI",
    "summary": "新浪财经客户端",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "new_signal",
    "target": "Google Gemini / Samsung Galaxy AI",
    "summary": "新浪财经",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "new_signal",
    "target": "Google Gemini / Samsung Galaxy AI",
    "summary": "中华网",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "new_signal",
    "target": "Apple Intelligence / Siri App Intents",
    "summary": "爱范儿",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },
  {
    "type": "new_signal",
    "target": "Apple Intelligence / Siri App Intents",
    "summary": "17173",
    "week": "2026-05 W20",
    "date": "2026-05-15",
    "timestamp": 1778833332
  },];
