"use client";

import { useMemo, useState } from "react";
import { changelog, type ChangeEntry, type ChangeType } from "@/data/changelog";
import { reportDate } from "@/data/competitors";

const typeConfig: Record<ChangeType, { icon: string; label: string; color: string }> = {
  stars_change: { icon: "⭐", label: "Stars 变化", color: "#f59e0b" },
  code_update: { icon: "🔵", label: "代码更新", color: "#3b82f6" },
  new_signal: { icon: "🟣", label: "新动态", color: "#8b5cf6" },
  activity_update: { icon: "📝", label: "活跃度变化", color: "#06b6d4" },
  pricing_change: { icon: "🟠", label: "定价变化", color: "#f97316" },
  new_item: { icon: "🟢", label: "新增", color: "#22c55e" },
  screenshot_updated: { icon: "📸", label: "截图更新", color: "#ec4899" },
};

// Group changelog by week
function groupByWeek(entries: ChangeEntry[]) {
  const weeks = new Map<string, ChangeEntry[]>();
  // Reverse to show newest first
  const sorted = [...entries].reverse();
  for (const entry of sorted) {
    if (!weeks.has(entry.week)) {
      weeks.set(entry.week, []);
    }
    weeks.get(entry.week)!.push(entry);
  }
  return weeks;
}

function ChangeBadge({ entry }: { entry: ChangeEntry }) {
  const config = typeConfig[entry.type] || { icon: "📌", label: entry.type, color: "#64748b" };

  return (
    <li className="change-item">
      <span className="change-icon" style={{ background: config.color + "18", color: config.color }}>
        {config.icon}
      </span>
      <div className="change-body">
        <span className="change-target">{entry.target}</span>
        <span className="change-summary">{entry.summary}</span>
      </div>
    </li>
  );
}

export default function ChangelogPage() {
  const [filterType, setFilterType] = useState<ChangeType | "all">("all");
  const [filterTarget, setFilterTarget] = useState("all");

  const filtered = useMemo(() => {
    let entries = changelog;
    if (filterType !== "all") {
      entries = entries.filter((e) => e.type === filterType);
    }
    if (filterTarget !== "all") {
      entries = entries.filter((e) => e.target === filterTarget);
    }
    return entries;
  }, [filterType, filterTarget]);

  const weeks = groupByWeek(filtered);

  // All unique targets for filter
  const allTargets = useMemo(() => {
    const targets = new Set<string>();
    changelog.forEach((e) => targets.add(e.target));
    return Array.from(targets).sort();
  }, []);

  const allTypes = Object.keys(typeConfig) as ChangeType[];

  return (
    <main>
      <section className="hero-section changelog-hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">截至 {reportDate} · 每周自动更新</div>
            <h1>竞品更新日志</h1>
            <p>记录所有竞品的 GitHub Stars 变化、代码提交、新闻动态和关键事件。</p>
            <div className="hero-actions">
              <a className="btn btn-secondary" href="/">
                ← 返回竞品分析总览
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section changelog-section">
        <div className="changelog-toolbar">
          <div className="toolbar-filters">
            <div className="filter-group">
              <span>变更类型</span>
              <div className="filters">
                <button className={filterType === "all" ? "active" : ""} onClick={() => setFilterType("all")}>
                  全部
                </button>
                {allTypes.map((type) => (
                  <button
                    key={type}
                    className={filterType === type ? "active" : ""}
                    onClick={() => setFilterType(type)}
                  >
                    {typeConfig[type].icon} {typeConfig[type].label}
                  </button>
                ))}
              </div>
            </div>
            <div className="filter-group">
              <span>目标</span>
              <div className="filters compact">
                <select
                  value={filterTarget}
                  onChange={(e) => setFilterTarget(e.target.value)}
                  className="target-select"
                >
                  <option value="all">全部目标</option>
                  {allTargets.map((target) => (
                    <option key={target} value={target}>
                      {target}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="toolbar-count">
            {filtered.length} 条记录 / {weeks.size} 周
          </div>
        </div>

        <div className="changelog-list">
          {Array.from(weeks.entries()).map(([week, entries]) => (
            <div key={week} className="changelog-week">
              <h3 className="week-header">
                <span className="week-date">{week}</span>
                <span className="week-count">{entries.length} 条变更</span>
              </h3>
              <ul className="week-entries">
                {entries.map((entry, idx) => (
                  <ChangeBadge key={`${entry.week}-${idx}`} entry={entry} />
                ))}
              </ul>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="changelog-empty">
              <p>暂无变更记录</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
