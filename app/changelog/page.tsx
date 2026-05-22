"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { changelog, type ChangeEntry, type ChangeType } from "@/data/changelog";
import { reportDate } from "@/data/competitors";

const typeConfig: Record<ChangeType, { icon: string; label: string; color: string; priority: number }> = {
  pricing_change: { icon: "🟠", label: "定价变化", color: "#f97316", priority: 0 },
  new_item: { icon: "🟢", label: "新增竞品", color: "#22c55e", priority: 1 },
  new_signal: { icon: "🟣", label: "重要动态", color: "#8b5cf6", priority: 2 },
  code_update: { icon: "🔵", label: "代码更新", color: "#3b82f6", priority: 3 },
  stars_change: { icon: "⭐", label: "Stars 变化", color: "#f59e0b", priority: 4 },
  activity_update: { icon: "📝", label: "活跃度变化", color: "#06b6d4", priority: 4 },
  screenshot_updated: { icon: "📸", label: "截图更新", color: "#ec4899", priority: 5 },
};

// ── Aggregation: group by week → target, pick primary entry, rest as sub-items ──

interface AggregatedEntry {
  primary: ChangeEntry;
  children: ChangeEntry[];
  target: string;
}

interface WeekGroup {
  week: string;
  entries: AggregatedEntry[];
  totalCount: number; // total raw entries (for "X 条变更")
}

// Priority: lower = more important
function entryPriority(type: ChangeType): number {
  return typeConfig[type]?.priority ?? 99;
}

function deduplicateSignals(entries: ChangeEntry[]): ChangeEntry[] {
  // For new_signal: group by target, keep the one with longest summary (most info)
  const seen = new Map<string, ChangeEntry>();
  for (const e of entries) {
    if (e.type !== "new_signal") {
      continue;
    }
    const existing = seen.get(e.target);
    if (!existing || e.summary.length > existing.summary.length) {
      seen.set(e.target, e);
    }
  }
  return entries.filter((e) => e.type !== "new_signal" || seen.get(e.target) === e);
}

function aggregateByWeek(entries: ChangeEntry[]): WeekGroup[] {
  // Reverse: newest first
  const sorted = [...entries].reverse();

  // Group by week
  const weekMap = new Map<string, ChangeEntry[]>();
  for (const e of sorted) {
    if (!weekMap.has(e.week)) weekMap.set(e.week, []);
    weekMap.get(e.week)!.push(e);
  }

  const result: WeekGroup[] = [];
  for (const [week, weekEntries] of weekMap) {
    // Deduplicate signals first
    const deduped = deduplicateSignals(weekEntries);

    // Group by target
    const targetMap = new Map<string, ChangeEntry[]>();
    for (const e of deduped) {
      if (!targetMap.has(e.target)) targetMap.set(e.target, []);
      targetMap.get(e.target)!.push(e);
    }

    const aggregated: AggregatedEntry[] = [];
    for (const [target, targetEntries] of targetMap) {
      // Sort by priority (lower first), then by timestamp (newer first)
      const sorted = [...targetEntries].sort((a, b) => {
        const pa = entryPriority(a.type);
        const pb = entryPriority(b.type);
        if (pa !== pb) return pa - pb;
        return b.timestamp - a.timestamp;
      });

      const primary = sorted[0];
      const children = sorted.slice(1);
      aggregated.push({ primary, children, target });
    }

    result.push({ week, entries: aggregated, totalCount: weekEntries.length });
  }

  return result;
}

function getLatestWeek(entries: ChangeEntry[]): string {
  let latest = "";
  for (const e of entries) {
    if (!latest || e.timestamp > getWeekTimestamp(latest)) {
      latest = e.week;
    }
  }
  return latest;
}

function getWeekTimestamp(week: string): number {
  const parts = week.split(" ");
  if (parts.length < 2) return 0;
  const [year, month] = parts[0].split("-").map(Number);
  const weekNum = parseInt(parts[1].replace("W", ""));
  return new Date(year, month - 1, 1 + (weekNum - 1) * 7).getTime();
}

function ChangeItem({
  entry,
  isPrimary,
  isLatest,
  hasChildren,
  showUrl,
}: {
  entry: ChangeEntry;
  isPrimary: boolean;
  isLatest: boolean;
  hasChildren?: boolean;
  showUrl?: boolean;
}) {
  const config = typeConfig[entry.type] || { icon: "📌", label: entry.type, color: "#64748b", priority: 99 };
  const isNewItem = entry.type === "new_item";
  const hasUrl = showUrl && !!entry.sourceUrl;

  const body = (
    <>
      <div className="change-row-inner">
        {isPrimary && isLatest && isNewItem && <span className="new-badge">NEW</span>}
        <span
          className="change-type-badge"
          style={{ background: config.color + "18", color: config.color }}
        >
          {config.icon}
          <span className="type-label">{config.label}</span>
        </span>
        <div className="change-body">
          <span className="change-summary">{entry.summary}</span>
        </div>
        {hasUrl && <span className="link-arrow" title="点击跳转">↗</span>}
        {hasChildren && <span className="expand-hint">▾</span>}
      </div>
    </>
  );

  if (isPrimary && hasUrl) {
    return (
      <a
        className={`change-item-link ${hasChildren ? "has-children" : ""}`}
        href={entry.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {body}
      </a>
    );
  }

  return <div className="change-item-plain">{body}</div>;
}

function TargetGroup({
  aggregated,
  isLatestWeek,
}: {
  aggregated: AggregatedEntry;
  isLatestWeek: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const { primary, children, target } = aggregated;
  const hasChildren = children.length > 0;

  return (
    <div className={`target-group ${hasChildren ? "has-sub" : ""} ${isLatestWeek && primary.type === "new_item" ? "is-new-target" : ""}`}>
      <div className="target-group-header">
        <span className="target-name">{target}</span>
        {hasChildren && (
          <button
            className="expand-btn"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "▾" : "▸"} {children.length} 条相关
          </button>
        )}
      </div>
      <div className="target-entries">
        <ChangeItem
          entry={primary}
          isPrimary
          isLatest={isLatestWeek}
          hasChildren={hasChildren}
          showUrl
        />
        {expanded && hasChildren && (
          <ul className="sub-entries">
            {children.map((child, idx) => (
              <li key={idx}>
                <ChangeItem
                  entry={child}
                  isPrimary={false}
                  isLatest={false}
                  showUrl
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function ChangelogPage() {
  const [filterType, setFilterType] = useState<ChangeType | "all">("all");
  const [filterTarget, setFilterTarget] = useState("all");

  const weeks = useMemo(() => {
    let entries = changelog;
    if (filterType !== "all") {
      entries = entries.filter((e) => e.type === filterType);
    }
    if (filterTarget !== "all") {
      entries = entries.filter((e) => e.target === filterTarget);
    }
    return aggregateByWeek(entries);
  }, [filterType, filterTarget]);

  const latestWeek = getLatestWeek(changelog);

  const allTypes = Object.keys(typeConfig) as ChangeType[];
  const allTargets = useMemo(() => {
    const targets = new Set<string>();
    changelog.forEach((e) => targets.add(e.target));
    return Array.from(targets).sort();
  }, []);

  return (
    <main>
      <section className="hero-section changelog-hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">截至 {reportDate} · 每周自动更新</div>
            <h1>竞品更新日志</h1>
            <p>按竞品聚合每周重点动态，子信息可展开查看。</p>
            <div className="hero-actions">
              <Link className="btn btn-secondary" href="/">
                ← 返回竞品分析总览
              </Link>
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
                  <option value="all">全部竞品</option>
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
            {weeks.length} 周
          </div>
        </div>

        <div className="changelog-list">
          {weeks.map((week) => (
            <div key={week.week} className="changelog-week">
              <h3 className="week-header">
                <span className="week-date">{week.week}</span>
                <span className="week-count">{week.entries.length} 个竞品 · {week.totalCount} 条变更</span>
              </h3>
              <div className="week-targets">
                {week.entries.map((agg) => (
                  <TargetGroup
                    key={agg.target}
                    aggregated={agg}
                    isLatestWeek={week.week === latestWeek}
                  />
                ))}
              </div>
            </div>
          ))}
          {weeks.length === 0 && (
            <div className="changelog-empty">
              <p>暂无变更记录</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
