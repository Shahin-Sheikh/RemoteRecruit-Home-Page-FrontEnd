import Container from '../ui/Container'
import SectionReveal from '../ui/SectionReveal'

// Royal-blue hero gradient sampled from the Figma background (1440×704).
const heroBackground = {
  backgroundImage: [
    'radial-gradient(60% 55% at 50% 16%, rgba(92,118,205,0.38) 0%, rgba(92,118,205,0) 60%)',
    'linear-gradient(158deg, #283890 0%, #31499f 52%, #345aa6 100%)',
  ].join(', '),
}

/**
 * Hero — "RemoteRecruit's Difference". Royal-blue gradient with large
 * translucent orbs and a white wave that blends into the next section.
 */
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden" style={heroBackground}>
      {/* Decorative orbs (match the Figma circles) */}
      <span className="pointer-events-none absolute -left-28 -top-28 h-[440px] w-[440px] rounded-full bg-white/[0.05]" aria-hidden="true" />
      <span className="pointer-events-none absolute bottom-[-32%] left-1/2 h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-[#4163ad]/25" aria-hidden="true" />
      <span className="pointer-events-none absolute -left-24 bottom-[-12%] h-80 w-80 rounded-full bg-[#2f72b0]/35 blur-[1px]" aria-hidden="true" />

      <Container className="relative flex min-h-[600px] flex-col items-center justify-center pb-32 pt-32 text-center sm:min-h-[680px] sm:pb-44 sm:pt-36 lg:min-h-[704px]">
        <SectionReveal immediate>
          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[3.75rem]">
            RemoteRecruit&rsquo;s Difference
          </h1>
        </SectionReveal>

        <SectionReveal immediate>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
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
