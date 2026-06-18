import Container from '../ui/Container'
import SectionReveal from '../ui/SectionReveal'

const heroBackground = {
  backgroundImage: [
    'radial-gradient(55% 55% at 16% 12%, rgba(120,124,214,0.55) 0%, rgba(120,124,214,0) 60%)',
    'radial-gradient(45% 42% at 52% 88%, rgba(126,170,224,0.45) 0%, rgba(126,170,224,0) 62%)',
    'linear-gradient(135deg, #34307f 0%, #2b3a8c 45%, #2a5ba6 100%)',
  ].join(', '),
}

/**
 * Hero — "RemoteRecruit's Difference". Dark indigo gradient with floating
 * decorative orbs and a white wave that blends into the next section.
 */
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden" style={heroBackground}>
      {/* Decorative orbs */}
      <span className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/5 blur-2xl" aria-hidden="true" />
      <span className="pointer-events-none absolute right-10 top-1/3 h-40 w-40 rounded-full bg-brand-300/10 blur-2xl" aria-hidden="true" />

      <Container className="relative flex min-h-[88vh] flex-col items-center justify-center pb-40 pt-36 text-center sm:pb-48 lg:min-h-[92vh]">
        <SectionReveal>
          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[3.75rem]">
            RemoteRecruit&rsquo;s Difference
          </h1>
        </SectionReveal>

        <SectionReveal delay={120}>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
            RemoteRecruit is connecting the world with an easy-to-use platform that lets
            full-time, part-time, and freelance workers showcase their talents to businesses
            that need them. With no paywalls, no fees, and no barriers, there&rsquo;s nothing but
            you, your talents, and the next step in your career.
          </p>
        </SectionReveal>
      </Container>

      {/* White wave divider */}
      <svg
        className="absolute inset-x-0 bottom-[-1px] h-[8vw] min-h-[70px] w-full"
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="#ffffff"
          d="M0 140h1440V70c-160 44-360 66-600 66C540 136 320 92 0 36V140z"
        />
      </svg>
    </section>
  )
}
