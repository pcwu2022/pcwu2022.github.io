import React, { useState } from 'react'
import type { ProjectDomain, ProjectOrigin, LeadershipRole, AIUsage, ProjectStatus, DisplayContent } from './DisplaySection'

// ─── Time Period ────────────────────────────────────────────────────────────

export type TimePeriod = 'high_school' | 'college' | 'masters'

export const TIME_PERIODS: { value: TimePeriod; label: string; start: string; end: string }[] = [
  { value: 'high_school', label: 'High School', start: '2019-08', end: '2022-07' },
  { value: 'college', label: 'College', start: '2022-08', end: '2026-07' },
  { value: 'masters', label: "Master's", start: '2026-08', end: '2028-05' },
]

// ─── Filter State ───────────────────────────────────────────────────────────

export type FilterState = {
  time: Set<TimePeriod>
  domain: Set<ProjectDomain>
  origin: Set<ProjectOrigin>
  leadership: Set<LeadershipRole>
  ai_usage: Set<AIUsage>
  status: Set<ProjectStatus>
  award_winning: Set<'yes'>
}

export function emptyFilters(): FilterState {
  return {
    time: new Set(),
    domain: new Set(),
    origin: new Set(),
    leadership: new Set(),
    ai_usage: new Set(),
    status: new Set(),
    award_winning: new Set(),
  }
}

function countActive(filters: FilterState): number {
  return (
    filters.time.size +
    filters.domain.size +
    filters.origin.size +
    filters.leadership.size +
    filters.ai_usage.size +
    filters.status.size +
    filters.award_winning.size
  )
}

// ─── Filter Groups config ──────────────────────────────────────────────────

type ChipOption<T extends string> = { value: T; label: string }

const DOMAIN_OPTIONS: ChipOption<ProjectDomain>[] = [
  { value: 'software', label: 'Software' },
  { value: 'hardware', label: 'Hardware' },
  { value: 'hybrid', label: 'Hybrid' },
]

const ORIGIN_OPTIONS: ChipOption<ProjectOrigin>[] = [
  { value: 'startup', label: 'Startup' },
  { value: 'competition', label: 'Competition' },
  { value: 'academic', label: 'Academic' },
  { value: 'personal', label: 'Personal' },
  { value: 'student_org', label: 'Student Organization' },
]

const LEADERSHIP_OPTIONS: ChipOption<LeadershipRole>[] = [
  { value: 'lead', label: 'Leader' },
  { value: 'solo', label: 'Solo' },
]

const AI_USAGE_OPTIONS: ChipOption<AIUsage>[] = [
  { value: 'core', label: 'Vibe Coded' },
  { value: 'assisted', label: 'AI Assisted' },
  { value: 'none', label: 'No AI' },
]

const STATUS_OPTIONS: ChipOption<ProjectStatus>[] = [
  { value: 'live', label: 'Live' },
  { value: 'github', label: 'GitHub Repo' },
  { value: 'demo_video', label: 'Demo Video' },
]

const AWARD_OPTIONS: ChipOption<'yes'>[] = [
  { value: 'yes', label: 'Award-Winning' },
]

// ─── Generic chip group with built-in Any chip ──────────────────────────────

function ChipGroup<T extends string>({
  options,
  selected,
  onToggle,
  onClear,
}: {
  options: ChipOption<T>[]
  selected: Set<T>
  onToggle: (value: T) => void
  onClear: () => void
}) {
  const isAny = selected.size === 0
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={onClear}
        aria-pressed={isAny}
        className={[
          'px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200 cursor-pointer select-none',
          isAny
            ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_10px_rgba(59,130,246,0.35)]'
            : 'bg-slate-900/50 border-blue-950/60 text-gray-400 hover:border-blue-700/60 hover:text-blue-300 hover:bg-slate-800/60',
        ].join(' ')}
      >
        Any
      </button>
      {options.map(({ value, label }) => {
        const active = selected.has(value)
        return (
          <button
            key={value}
            onClick={() => onToggle(value)}
            aria-pressed={active}
            className={[
              'px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200 cursor-pointer select-none',
              active
                ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_10px_rgba(59,130,246,0.35)]'
                : 'bg-slate-900/50 border-blue-950/60 text-gray-400 hover:border-blue-700/60 hover:text-blue-300 hover:bg-slate-800/60',
            ].join(' ')}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}

// ─── Section label ──────────────────────────────────────────────────────────

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-2">
      <span className="text-xs font-semibold text-blue-400/80 uppercase tracking-widest whitespace-nowrap pt-1.5 min-w-[7rem]">
        {label}
      </span>
      {children}
    </div>
  )
}

// ─── Main component ─────────────────────────────────────────────────────────

type Props = {
  filters: FilterState
  onChange: (next: FilterState) => void
  totalCount: number
  filteredCount: number
}

export default function ProjectFilter({ filters, onChange, totalCount, filteredCount }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const activeCount = countActive(filters)

  function toggle<K extends keyof FilterState, V extends string>(key: K, value: V) {
    const next = { ...filters, [key]: new Set(filters[key] as Set<V>) }
    const set = next[key] as Set<V>
    if (set.has(value)) set.delete(value)
    else set.add(value)
    onChange(next)
  }

  function clearGroup<K extends keyof FilterState>(key: K) {
    onChange({ ...filters, [key]: new Set() })
  }

  return (
    <div className="bg-slate-900/40 backdrop-blur-md border border-blue-950/45 rounded-2xl mb-8 shadow-xl shadow-black/25 hover:border-blue-500/20 transition-colors duration-300 overflow-hidden">

      {/* Header — always visible, acts as toggle */}
      <button
        onClick={() => setIsOpen(o => !o)}
        className="w-full flex items-center justify-between px-5 py-4 md:px-6 md:py-5 cursor-pointer group"
        aria-expanded={isOpen}
        aria-controls="project-filter-body"
      >
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-400 flex-shrink-0"
          >
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
          </svg>
          <span className="text-sm font-semibold text-white tracking-wide">Filter Projects</span>
          {activeCount > 0 && (
            <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-blue-600 text-white shadow-[0_0_8px_rgba(59,130,246,0.4)]">
              {activeCount}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-400">
            Showing{' '}
            <span className={`font-semibold ${filteredCount < totalCount ? 'text-blue-300' : 'text-gray-300'}`}>
              {filteredCount}
            </span>
            {' '}/ {totalCount}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`text-gray-400 group-hover:text-blue-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </button>

      {/* Collapsible body */}
      <div
        id="project-filter-body"
        style={{ maxHeight: isOpen ? '640px' : '0px' }}
        className="transition-[max-height] duration-300 ease-in-out overflow-hidden"
      >
        <div className="px-5 pb-5 md:px-6 md:pb-6 border-t border-blue-950/30">
          <div className="space-y-4 pt-4">

            <FilterGroup label="Period">
              <ChipGroup
                options={TIME_PERIODS.map(p => ({ value: p.value, label: p.label }))}
                selected={filters.time}
                onToggle={(v) => toggle('time', v)}
                onClear={() => clearGroup('time')}
              />
            </FilterGroup>

            <div className="border-t border-blue-950/30" />

            <FilterGroup label="Domain">
              <ChipGroup options={DOMAIN_OPTIONS} selected={filters.domain} onToggle={(v) => toggle('domain', v)} onClear={() => clearGroup('domain')} />
            </FilterGroup>

            <FilterGroup label="Origin">
              <ChipGroup options={ORIGIN_OPTIONS} selected={filters.origin} onToggle={(v) => toggle('origin', v)} onClear={() => clearGroup('origin')} />
            </FilterGroup>

            <FilterGroup label="Role">
              <ChipGroup options={LEADERSHIP_OPTIONS} selected={filters.leadership} onToggle={(v) => toggle('leadership', v)} onClear={() => clearGroup('leadership')} />
            </FilterGroup>

            <FilterGroup label="AI Usage">
              <ChipGroup options={AI_USAGE_OPTIONS} selected={filters.ai_usage} onToggle={(v) => toggle('ai_usage', v)} onClear={() => clearGroup('ai_usage')} />
            </FilterGroup>

            <FilterGroup label="Demo">
              <ChipGroup options={STATUS_OPTIONS} selected={filters.status} onToggle={(v) => toggle('status', v)} onClear={() => clearGroup('status')} />
            </FilterGroup>

            <FilterGroup label="Award">
              <ChipGroup options={AWARD_OPTIONS} selected={filters.award_winning} onToggle={(v) => toggle('award_winning', v)} onClear={() => clearGroup('award_winning')} />
            </FilterGroup>

            {activeCount > 0 && (
              <div className="pt-1 flex justify-end">
                <button
                  onClick={() => onChange(emptyFilters())}
                  className="text-xs text-gray-400 hover:text-blue-300 border border-blue-950/60 hover:border-blue-700/60 px-3 py-1 rounded-lg transition-all duration-200 hover:bg-slate-800/50"
                >
                  Clear all
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}

// ─── applyFilters helper ─────────────────────────────────────────────────────

function projectOverlapsPeriod(
  start_month: string,
  end_month: string | 'present' | null,
  periodStart: string,
  periodEnd: string
): boolean {
  const projStart = start_month
  const projEnd = end_month === 'present' || end_month === null ? '9999-12' : end_month
  return projStart <= periodEnd && projEnd >= periodStart
}

export function applyFilters(items: DisplayContent[], filters: FilterState): DisplayContent[] {
  if (countActive(filters) === 0) return items

  return items.filter((item) => {
    const tags = item.tags
    if (!tags) return true

    if (filters.time.size > 0) {
      const match = Array.from(filters.time).some((period) => {
        const p = TIME_PERIODS.find(tp => tp.value === period)!
        return projectOverlapsPeriod(tags.start_month, tags.end_month, p.start, p.end)
      })
      if (!match) return false
    }

    if (filters.domain.size > 0 && !filters.domain.has(tags.domain)) return false
    if (filters.origin.size > 0 && !filters.origin.has(tags.origin)) return false
    if (filters.leadership.size > 0 && !filters.leadership.has(tags.leadership)) return false
    if (filters.ai_usage.size > 0 && !filters.ai_usage.has(tags.ai_usage)) return false
    if (filters.status.size > 0 && !filters.status.has(tags.status)) return false
    if (filters.award_winning.size > 0 && !tags.award_winning) return false

    return true
  })
}
