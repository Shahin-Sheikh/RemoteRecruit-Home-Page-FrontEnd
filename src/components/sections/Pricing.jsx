import Container from '../ui/Container'
import Button from '../ui/Button'
import SectionReveal from '../ui/SectionReveal'
import { CheckCircleIcon, XCircleIcon } from '../ui/icons'
import { plans } from '../../data/pricing'

/** A single pricing card (Free / Premium). */
function PlanCard({ plan }) {
  return (
    <div className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-card ring-1 ring-black/5 sm:p-7">
      <h3 className="sr-only">{plan.name} plan</h3>
      <div className="flex flex-col gap-7 sm:flex-row sm:items-stretch sm:gap-5">
        {/* Price / name block — tag at top, price group centred below */}
        <div className="flex flex-col items-center rounded-2xl bg-mist px-5 pt-3 pb-5 text-center sm:w-[196px] sm:min-h-[215px] sm:shrink-0">
          {plan.featured && (
            <span className="inline-flex h-11 w-[146px] items-center justify-center gap-2 rounded-full bg-brand-200/70 text-sm font-semibold text-royal-700">
              <img
                src="/avatars/premium.webp"
                alt=""
                width={75}
                height={120}
                loading="lazy"
                decoding="async"
                className="h-6 w-auto"
              />
              {plan.tier}
            </span>
          )}
          <div className="flex flex-1 flex-col items-center justify-center">
            {plan.price ? (
              <>
                <p className="text-[2rem] font-bold leading-tight text-[#2DBBDE]">{plan.price.amount}</p>
                <p className="text-sm font-medium text-body">{plan.price.cadence}</p>
              </>
            ) : (
              <>
                <p className="text-[2rem] font-bold leading-tight text-[#2DBBDE]">{plan.name}</p>
                <p className="text-sm font-medium text-body">{plan.tier}</p>
              </>
            )}
          </div>
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
      {/* Blue wash rising behind the lower half of the cards, into the footer */}
      <div className="absolute inset-x-0 bottom-0 h-[58%]" aria-hidden="true">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="h-full w-full">
          <path fill="#336DA6" d="M0 90C380 66 820 54 1120 56C1280 57 1370 66 1440 76V320H0V90Z" />
        </svg>
      </div>

      <Container className="relative">
        <SectionReveal>
          <h2 className="text-center font-semibold text-[#11142D] text-[32px] leading-[42px] sm:text-[40px] sm:leading-[52px]">
            Help Is One Click Away
          </h2>
        </SectionReveal>

        <div className="mx-auto mt-12 grid max-w-[1040px] gap-7 md:grid-cols-2 md:gap-10">
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
