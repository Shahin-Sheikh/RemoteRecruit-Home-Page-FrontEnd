import Container from '../ui/Container'
import Button from '../ui/Button'
import SectionReveal from '../ui/SectionReveal'
import { CheckCircleIcon, XCircleIcon } from '../ui/icons'
import { plans } from '../../data/pricing'

/** A single pricing card (Free / Premium). */
function PlanCard({ plan }) {
  return (
    <div className="flex h-full flex-col rounded-3xl bg-white p-7 shadow-card ring-1 ring-black/5 sm:p-9">
      <h3 className="sr-only">{plan.name} plan</h3>
      <div className="flex flex-col gap-7 sm:flex-row sm:items-stretch sm:gap-6">
        {/* Price / name block */}
        <div
          className={`flex flex-col justify-center rounded-2xl px-6 py-7 text-center sm:w-44 ${
            plan.featured ? 'bg-brand-100' : 'bg-mist'
          }`}
        >
          {plan.featured && (
            <span className="mx-auto mb-3 inline-flex items-center gap-1 rounded-full bg-brand-200/70 px-3 py-1 text-xs font-semibold text-royal-700">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                <path d="M12 2c1 3-1 4-1 6a3 3 0 006 0c0-1 0 0 0 0 2 2 3 4 3 7a8 8 0 11-16 0c0-4 3-6 4-8 1 2 2 2 4 0 0-2 0-3 0-5z" />
              </svg>
              {plan.tier}
            </span>
          )}
          {plan.price ? (
            <>
              <p className="text-3xl font-bold text-brand-700">{plan.price.amount}</p>
              <p className="text-sm font-medium text-body">{plan.price.cadence}</p>
            </>
          ) : (
            <>
              <p className="text-3xl font-bold text-brand-700">{plan.name}</p>
              <p className="text-sm font-medium text-body">{plan.tier}</p>
            </>
          )}
        </div>

        {/* Features */}
        <ul className="flex flex-1 flex-col justify-center gap-4">
          {plan.features.map((f) => (
            <li key={f.label} className="flex items-center gap-3 text-sm font-medium sm:text-base">
              {f.included ? (
                <CheckCircleIcon className="h-6 w-6 shrink-0 text-brand-500" />
              ) : (
                <XCircleIcon className="h-6 w-6 shrink-0 text-slate-300" />
              )}
              <span className={f.included ? 'text-ink' : 'text-body'}>{f.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <Button
          variant={plan.featured ? 'primary' : 'outline'}
          size="lg"
          href="#top"
          className="w-full"
        >
          Get Started
        </Button>
      </div>
    </div>
  )
}

/**
 * "Help Is One Click Away" pricing section. White top that dissolves into the
 * royal-blue footer via a curved divider behind the cards.
 */
export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-white pt-16 sm:pt-20 lg:pt-24">
      {/* Blue wash rising into the footer */}
      <div className="absolute inset-x-0 bottom-0 h-[42%]" aria-hidden="true">
        <svg viewBox="0 0 1440 220" preserveAspectRatio="none" className="h-full w-full">
          <path fill="#2c5ba0" d="M0 60c280-70 560-70 840-20s440 60 600 20v160H0V60z" />
        </svg>
      </div>

      <Container className="relative">
        <SectionReveal>
          <h2 className="text-center text-3xl font-bold text-ink sm:text-4xl lg:text-[2.75rem]">
            Help Is One Click Away
          </h2>
        </SectionReveal>

        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:gap-9">
          {plans.map((plan, i) => (
            <SectionReveal key={plan.id} delay={i * 120} className="h-full">
              <PlanCard plan={plan} />
            </SectionReveal>
          ))}
        </div>

        {/* Spacer so cards clear the wave before the footer */}
        <div className="h-24 sm:h-28" />
      </Container>
    </section>
  )
}
