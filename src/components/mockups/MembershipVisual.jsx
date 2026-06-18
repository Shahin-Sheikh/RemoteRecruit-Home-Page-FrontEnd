import { Monogram } from '../ui/Logo'
import { CheckCircleIcon, PaypalIcon } from '../ui/icons'

const FEATURES = [
  'Up to 25 active job posts',
  'Premium Placement & Visibility',
  'Messaging anyone, unlimited',
  'Unlimited invites',
  'View all applicants',
  'Unlimited invites to jobseekers',
]

/**
 * "Your Membership Tier — Premium" card (built to the Figma spec: 34px radius,
 * #F6F4FF border, soft royal shadow) with a small accent dot, the brand
 * monogram, and a floating upcoming-payment pill.
 */
export default function MembershipVisual() {
  return (
    <div className="relative mx-auto w-full max-w-sm pb-10" aria-hidden="true">
      {/* Accent dot (top-left) */}
      <span className="absolute -left-1 top-2 z-10 h-[18px] w-[18px] rounded-full bg-gradient-to-br from-brand-400 to-royal-600 shadow-md" />

      {/* Membership card */}
      <div className="rounded-[34px] border border-[#F6F4FF] bg-white p-8 shadow-[14px_41px_100px_rgba(49,89,211,0.12)]">
        <p className="text-xs font-medium text-body">Your Membership Tier</p>
        <p className="text-2xl font-bold text-[#2DBBDE]">Premium</p>

        <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.12em] text-body">
          Features
        </p>
        <ul className="mt-4 space-y-3.5">
          {FEATURES.map((f) => (
            <li key={f} className="flex items-center gap-3 text-sm text-ink">
              <CheckCircleIcon className="h-5 w-5 shrink-0 text-brand-500" />
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* Brand monogram on the right edge */}
      <Monogram className="absolute -right-3 top-[26%] h-[88px] w-[88px] drop-shadow-lg" />

      {/* Floating payment pill (extends past the card's left edge) */}
      <div className="absolute -bottom-3 -left-4 flex w-[92%] items-center gap-3 rounded-[20px] bg-white p-3 [filter:drop-shadow(14px_13px_20px_rgba(135,129,245,0.18))]">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-royal-50 text-royal-600">
          <PaypalIcon className="h-6 w-6" />
        </span>
        <div className="leading-tight">
          <p className="text-xs font-semibold text-royal-600">Upcoming Payment In&hellip;</p>
          <p className="text-sm font-bold text-ink">14 Days &ndash; $79.99</p>
        </div>
      </div>
    </div>
  )
}
