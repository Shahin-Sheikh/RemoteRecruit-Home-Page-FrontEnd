import Logo from '../ui/Logo'
import { SearchIcon, BellIcon, CheckCircleIcon } from '../ui/icons'

const NAV = ['Find Work', 'Your Jobs', 'Settings']
const TABS = ['UI/UX', 'Front End', 'Back End', 'Data Science', 'Sales']
const FILTERS = [
  { label: 'Full Time', on: false },
  { label: 'Part Time', on: true },
  { label: 'Hourly', on: false },
  { label: 'Fixed Rate', on: true },
  { label: 'Worldwide', on: false },
]

/**
 * Full "Let's Find Work" dashboard (sidebar + job list + filter rail) used as
 * the illustration in the Help CTA section.
 */
export default function JobBoardMockup() {
  return (
    <div
      className="overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-black/5"
      aria-hidden="true"
    >
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden w-32 shrink-0 flex-col bg-royal-800 p-4 text-white sm:flex">
          <Logo className="h-6 w-auto" />
          <p className="mt-6 text-[9px] uppercase tracking-wider text-white/40">Pages</p>
          <nav className="mt-3 space-y-1.5">
            {NAV.map((item, i) => (
              <span
                key={item}
                className={`block rounded-lg px-2 py-1.5 text-[11px] font-medium ${
                  i === 0 ? 'bg-brand-500 text-white' : 'text-white/70'
                }`}
              >
                {item}
              </span>
            ))}
          </nav>
        </aside>

        {/* Main column */}
        <div className="flex-1 p-4 sm:p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[11px] text-body">Welcome Max</p>
              <p className="text-base font-bold text-ink">Let&rsquo;s Find Work</p>
            </div>
            <div className="flex items-center gap-2 text-body">
              <SearchIcon className="h-4 w-4" />
              <span className="relative">
                <BellIcon className="h-4 w-4" />
                <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-brand-500" />
              </span>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {TABS.map((t, i) => (
              <span
                key={t}
                className={`rounded-md px-2 py-1 text-[10px] font-medium ${
                  i === 0 ? 'bg-royal-700 text-white' : 'bg-royal-50 text-body'
                }`}
              >
                {t}
              </span>
            ))}
          </div>

          <p className="mt-4 text-xs font-semibold text-ink">Recent Jobs</p>
          <div className="mt-2 space-y-2">
            <div className="rounded-xl border border-black/5 p-3">
              <p className="text-[11px] font-semibold text-ink">
                Senior UI/UX Designer needed for ongoing support
              </p>
              <div className="mt-2 h-1.5 w-3/4 rounded bg-royal-50" />
            </div>
            <div className="rounded-xl bg-royal-700 p-3 text-white">
              <p className="text-[11px] font-semibold">
                Senior UI/UX Designer needed for ongoing support
              </p>
              <div className="mt-2 h-1.5 w-2/3 rounded bg-white/25" />
            </div>
          </div>
        </div>

        {/* Filter rail */}
        <div className="hidden w-40 shrink-0 border-l border-black/5 p-4 lg:block">
          <p className="text-xs font-semibold text-ink">Filter</p>
          <ul className="mt-3 space-y-2">
            {FILTERS.map((f) => (
              <li key={f.label} className="flex items-center gap-2 text-[11px] text-body">
                <span
                  className={`flex h-3.5 w-3.5 items-center justify-center rounded border ${
                    f.on ? 'border-brand-500 bg-brand-500 text-white' : 'border-black/20'
                  }`}
                >
                  {f.on && <CheckCircleIcon className="h-3 w-3" />}
                </span>
                {f.label}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center justify-between">
            <span className="rounded-md bg-royal-700 px-2 py-1 text-[9px] font-semibold text-white">
              Unselect all
            </span>
            <span className="text-[9px] font-semibold text-royal-600">Select All</span>
          </div>
          <p className="mt-4 text-[11px] font-semibold text-ink">Language</p>
          <div className="mt-2 flex items-center gap-2 text-[11px] text-body">
            <span className="h-3 w-3 rounded-full border-[3px] border-brand-500" />
            English
          </div>
        </div>
      </div>
    </div>
  )
}
