import LazyImage from '../ui/LazyImage'
import { Monogram } from '../ui/Logo'
import { SearchIcon, BellIcon } from '../ui/icons'

/** Floating person card used in the Global Reach mockup. */
function PersonCard({ role, name, avatar, className = '' }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl bg-white p-3 pr-6 shadow-card ring-1 ring-black/5 ${className}`}
    >
      <LazyImage
        src={avatar}
        alt=""
        width={48}
        height={48}
        wrapperClassName="h-12 w-12 shrink-0 rounded-full ring-2 ring-amber-400"
        className="h-12 w-12 rounded-full object-cover"
      />
      <div className="leading-tight">
        <p className="text-xs font-semibold text-brand-600">{role}</p>
        <p className="text-sm font-bold text-ink">{name}</p>
      </div>
    </div>
  )
}

/**
 * Stylized "Let's Find Work" dashboard with two floating candidate cards and
 * the brand monogram — the illustration beside the Global Reach copy.
 */
export default function GlobalReachVisual() {
  const tabs = ['UI/UX', 'Front End', 'Back End', 'Data Science', 'Sales']
  return (
    <div className="relative mx-auto w-full max-w-md" aria-hidden="true">
      {/* Main dashboard panel */}
      <div className="rounded-3xl bg-white p-5 shadow-card ring-1 ring-black/5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[11px] font-medium text-body">Welcome Max</p>
            <p className="text-lg font-bold text-ink">Let&rsquo;s Find Work</p>
          </div>
          <div className="flex items-center gap-2 text-body">
            <SearchIcon className="h-4 w-4" />
            <span className="relative">
              <BellIcon className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-brand-500" />
            </span>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <div className="h-7 flex-1 rounded-lg bg-royal-50" />
          <div className="flex h-7 flex-[1.4] items-center gap-1 rounded-lg bg-royal-50 px-2 text-[10px] text-body">
            <SearchIcon className="h-3 w-3" /> Search
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {tabs.map((t, i) => (
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
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-ink">
                Senior UI/UX Designer needed
              </span>
              <span className="rounded bg-brand-100 px-1.5 py-0.5 text-[9px] font-semibold text-brand-700">
                Applied
              </span>
            </div>
            <div className="mt-2 h-1.5 w-3/4 rounded bg-royal-50" />
            <div className="mt-1 h-1.5 w-1/2 rounded bg-royal-50" />
          </div>
          <div className="rounded-xl border border-black/5 p-3 opacity-70">
            <div className="h-1.5 w-2/3 rounded bg-royal-50" />
            <div className="mt-2 h-1.5 w-1/2 rounded bg-royal-50" />
          </div>
        </div>
      </div>

      {/* Brand monogram */}
      <Monogram className="absolute -right-4 top-24 h-16 w-16 text-2xl ring-4 ring-white" />

      {/* Floating candidate cards */}
      <PersonCard
        role="Python Developer"
        name="Felonious Gru"
        avatar="/avatars/gru.svg"
        className="absolute -left-6 top-1/2 w-60 animate-float"
      />
      <PersonCard
        role="Front End Wizard"
        name="Mel Muselphiem"
        avatar="/avatars/mel.svg"
        className="absolute -bottom-10 right-0 w-60 animate-float [animation-delay:1.5s]"
      />
    </div>
  )
}
