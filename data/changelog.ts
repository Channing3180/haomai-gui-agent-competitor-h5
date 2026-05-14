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
  }
];
