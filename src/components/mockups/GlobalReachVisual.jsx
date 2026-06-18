import LazyImage from '../ui/LazyImage'
import { Monogram } from '../ui/Logo'

/** Floating candidate card (uses the exported avatar photo). */
function PersonCard({ role, name, className = '' }) {
  return (
    <div
      className={`flex items-center gap-4 rounded-[20px] bg-white p-3 pr-6 shadow-card ring-1 ring-black/5 ${className}`}
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
        <p className="text-base font-bold text-ink">{name}</p>
      </div>
    </div>
  )
}

/**
 * Global Reach illustration. A white card whose top half is the real
 * "Let's Find Work" dashboard (rounded cover) and bottom half is plain white,
 * with the brand monogram and two floating candidate cards overlapping it.
 */
export default function GlobalReachVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md pb-2" aria-hidden="true">
      {/* White card: dashboard cover on top, white space below */}
      <div className="overflow-hidden rounded-[28px] bg-white shadow-card ring-1 ring-black/5">
        <LazyImage
          src="/avatars/help_image.webp"
          alt=""
          width={940}
          height={1066}
          wrapperClassName="block aspect-[16/10] w-full"
          className="h-full w-full object-cover object-top"
        />
        <div className="h-44 w-full bg-white" />
      </div>

      {/* Brand monogram on the right edge */}
      <Monogram className="absolute -right-4 top-[30%] h-[88px] w-[88px] drop-shadow-lg" />

      {/* Floating candidate cards overlapping the dashboard / white boundary */}
      <PersonCard
        role="Python Developer"
        name="Felonious Gru"
        className="absolute -left-5 top-[46%] w-[92%] animate-float"
      />
      <PersonCard
        role="Front End Wizard"
        name="Mel Muselphiem"
        className="absolute -bottom-3 right-0 w-[88%] animate-float [animation-delay:1.5s]"
      />
    </div>
  )
}
