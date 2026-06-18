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
 * "Your Membership Tier — Premium" card with a floating upcoming-payment pill.
 * Sits beside the Fee-Free Forever copy.
 */
export default function MembershipVisual() {
  return (
    <div className="relative mx-auto w-full max-w-sm pb-12">
      <div className="rounded-3xl bg-white p-7 shadow-card ring-1 ring-black/5">
        <p className="text-xs font-medium text-body">Your Membership Tier</p>
        <p className="text-2xl font-bold text-brand-500">Premium</p>

        <p className="mt-5 text-[11px] font-semibold uppercase tracking-wider text-body">
          Features
        </p>
        <ul className="mt-3 space-y-3">
          {FEATURES.map((f) => (
            <li key={f} className="flex items-center gap-3 text-sm text-ink">
              <CheckCircleIcon className="h-5 w-5 shrink-0 text-brand-500" />
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* Brand monogram */}
      <Monogram className="absolute -right-3 top-7 h-14 w-14 text-xl ring-4 ring-white" />

      {/* Floating payment pill */}
      <div className="absolute -bottom-1 left-1/2 flex w-72 -translate-x-1/2 items-center gap-3 rounded-2xl bg-white p-3 shadow-card ring-1 ring-black/5">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-royal-50 text-royal-600">
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
