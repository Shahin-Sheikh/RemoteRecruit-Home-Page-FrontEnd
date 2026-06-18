import LazyImage from '../ui/LazyImage'
import { Monogram } from '../ui/Logo'

/** Floating candidate card (uses the exported avatar photo). */
function PersonCard({ role, name, className = '' }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl bg-white p-3 pr-6 shadow-card ring-1 ring-black/5 ${className}`}
    >
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
        <p className="text-xs font-semibold text-brand-600">{role}</p>
        <p className="text-sm font-bold text-ink">{name}</p>
      </div>
    </div>
  )
}

/**
 * Global Reach illustration: the real "Let's Find Work" dashboard export with
 * the brand monogram and two floating candidate cards overlaid (matching Figma).
 */
export default function GlobalReachVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md pb-10" aria-hidden="true">
      <LazyImage
        src="/avatars/help_image.webp"
        alt=""
        width={940}
        height={1066}
        wrapperClassName="block aspect-square overflow-hidden rounded-3xl shadow-card ring-1 ring-black/5"
        className="h-full w-full object-cover object-top"
      />

      {/* Brand monogram */}
      <Monogram className="absolute -right-5 top-[26%] h-20 w-20 drop-shadow-lg" />

      {/* Floating candidate cards */}
      <PersonCard
        role="Python Developer"
        name="Felonious Gru"
        className="absolute -left-5 top-[58%] w-60 animate-float"
      />
      <PersonCard
        role="Front End Wizard"
        name="Mel Muselphiem"
        className="absolute -bottom-2 right-0 w-60 animate-float [animation-delay:1.5s]"
      />
    </div>
  )
}
