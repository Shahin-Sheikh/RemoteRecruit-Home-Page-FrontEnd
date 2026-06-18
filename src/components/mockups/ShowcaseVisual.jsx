import LazyImage from '../ui/LazyImage'
import { PlayIcon, CheckCircleIcon } from '../ui/icons'

const SKILLS = ['Python Dev', 'Javascript', 'Front End', 'Back End', 'IOS Development']

/**
 * Candidate profile mockup with a stats banner, an intro-video thumbnail, skill
 * tags and a floating client-feedback card — beside the Showcase Your Talents copy.
 */
export default function ShowcaseVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md pb-16">
      <div className="rounded-3xl bg-white p-5 shadow-card ring-1 ring-black/5">
        {/* Stats banner */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-royal-700 to-royal-500 p-4">
          <p className="text-sm font-bold text-white">102 Jobs Completed!</p>
          <p className="text-[10px] text-white/70">$100,000 Earned over 12 Months</p>
          <span
            className="absolute -right-2 -top-3 h-20 w-20 rounded-full bg-gradient-to-br from-fuchsia-400 to-violet-500 blur-[2px]"
            aria-hidden="true"
          />
        </div>

        {/* Profile row with intro-video thumbnail */}
        <div className="mt-4 flex items-center gap-3">
          <div className="relative">
            <LazyImage
              src="/avatars/dylan.svg"
              alt=""
              width={56}
              height={56}
              wrapperClassName="h-14 w-14 rounded-full"
              className="h-14 w-14 rounded-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-500/90 text-white shadow">
                <PlayIcon className="h-3.5 w-3.5" />
              </span>
            </span>
          </div>
          <div className="flex-1 leading-tight">
            <p className="flex items-center gap-1 text-sm font-bold text-ink">
              Dylan M.
              <CheckCircleIcon className="h-4 w-4 text-brand-500" />
            </p>
            <p className="text-[11px] text-body">Front End Dev</p>
          </div>
          <span className="rounded-full bg-royal-50 px-3 py-1 text-[10px] font-semibold text-royal-600">
            Edit Profile
          </span>
        </div>

        {/* Tabs */}
        <div className="mt-4 flex gap-4 border-b border-black/5 pb-2 text-[11px] font-medium text-body">
          <span className="border-b-2 border-brand-500 pb-1 text-ink">About</span>
          <span>Reviews</span>
          <span>Portfolio</span>
        </div>

        {/* Bio lines */}
        <div className="mt-3 space-y-1.5">
          <div className="h-1.5 w-3/4 rounded bg-royal-50" />
          <div className="h-1.5 w-full rounded bg-royal-50" />
          <div className="h-1.5 w-2/3 rounded bg-royal-50" />
        </div>

        {/* Skill tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {SKILLS.map((s) => (
            <span
              key={s}
              className="rounded-lg bg-royal-50 px-2.5 py-1 text-[10px] font-semibold text-royal-600"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Floating client-feedback card */}
      <div className="absolute -bottom-6 -left-4 flex w-64 items-center gap-3 rounded-2xl bg-white p-3 shadow-card ring-1 ring-black/5 animate-float">
        <LazyImage
          src="/avatars/client.svg"
          alt=""
          width={44}
          height={44}
          wrapperClassName="h-11 w-11 shrink-0 rounded-full ring-2 ring-amber-400"
          className="h-11 w-11 rounded-full object-cover"
        />
        <div className="leading-tight">
          <p className="text-[11px] font-semibold text-brand-600">Past Client Feedback</p>
          <p className="text-sm font-bold text-ink">Best Developer Ever!</p>
        </div>
      </div>

      {/* Large floating avatar */}
      <LazyImage
        src="/avatars/dylan.svg"
        alt=""
        width={72}
        height={72}
        wrapperClassName="absolute -right-5 top-32 h-[72px] w-[72px] rounded-full ring-4 ring-white shadow-card animate-float [animation-delay:1s]"
        className="h-[72px] w-[72px] rounded-full object-cover"
      />
    </div>
  )
}
