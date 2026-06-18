import LazyImage from '../ui/LazyImage'
import { PlayIcon } from '../ui/icons'

const SKILLS = ['Python Dev', 'Javascript', 'Front End', 'Back End', 'IOS Development']

/**
 * Showcase profile illustration: the real "Your Profile" export inside a white
 * card, with an intro-video play button, a large round avatar on the right
 * edge, a floating client-feedback card and skill tags (matching Figma).
 */
export default function ShowcaseVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md pb-6" aria-hidden="true">
      {/* Accent dot */}
      <span className="absolute left-4 -top-1 z-10 h-[18px] w-[18px] rounded-full bg-gradient-to-br from-brand-400 to-royal-600 shadow-md" />

      {/* White card: profile image on top, white space below for tags */}
      <div className="overflow-hidden rounded-[28px] bg-white shadow-card ring-1 ring-black/5">
        <LazyImage
          src="/avatars/showcase_image.webp"
          alt=""
          width={940}
          height={913}
          wrapperClassName="block aspect-[10/9] w-full"
          className="h-full w-full object-cover object-top"
        />
        <div className="h-32 w-full bg-white" />
      </div>

      {/* Intro-video play button over the profile */}
      <span className="absolute left-[56%] top-[24%] flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(82,180,218,0.5)] text-white shadow-lg backdrop-blur-sm">
        <PlayIcon className="h-5 w-5" />
      </span>

      {/* Large round avatar on the right edge */}
      <span className="absolute -right-3 top-[34%] h-[88px] w-[88px] overflow-hidden rounded-full shadow-card ring-4 ring-[#1f6fb6]">
        <img
          src="/avatars/avatar.webp"
          alt=""
          width={88}
          height={88}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-[58%_22%]"
        />
      </span>

      {/* Floating "Past Client Feedback" card */}
      <div className="absolute left-[-4%] top-[48%] flex w-[70%] items-center gap-3 rounded-[20px] bg-white p-3 shadow-card ring-1 ring-black/5 animate-float">
        <span className="h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-amber-400">
          <img
            src="/avatars/avatar.webp"
            alt=""
            width={48}
            height={48}
            loading="lazy"
            decoding="async"
            className="h-12 w-12 object-cover object-[58%_22%]"
          />
        </span>
        <div className="leading-tight">
          <p className="text-xs font-semibold text-brand-600">Past Client Feedback</p>
          <p className="text-sm font-bold text-ink">Best Developer Ever!</p>
        </div>
      </div>

      {/* Skill tags on the white area */}
      <div className="absolute inset-x-7 bottom-7 flex flex-wrap gap-2.5">
        {SKILLS.map((s) => (
          <span
            key={s}
            className="rounded-lg bg-royal-50 px-3 py-1.5 text-xs font-semibold text-royal-600"
          >
            {s}
          </span>
        ))}
        <span className="rounded-lg bg-royal-50 px-3 py-1.5 text-xs font-semibold text-royal-600">
          +12
        </span>
      </div>
    </div>
  )
}
