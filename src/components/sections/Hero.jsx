import Container from '../ui/Container'
import SectionReveal from '../ui/SectionReveal'

// Royal/cobalt-blue hero gradient sampled from the Figma background (1440×704).
const heroBackground = {
  backgroundImage: [
    'radial-gradient(68% 55% at 55% 26%, rgba(86,134,205,0.30) 0%, rgba(86,134,205,0) 60%)',
    'linear-gradient(160deg, #243c88 0%, #2c4f9b 50%, #335ca6 100%)',
  ].join(', '),
}

/**
 * Hero — "RemoteRecruit's Difference". Royal-blue gradient with faint orbs, a
 * gentle white wave cresting centre-right, and a brighter blue circle layered
 * over the wave at the bottom-left (matching the Figma).
 */
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden" style={heroBackground}>
      {/* Faint decorative discs (subtle, so they don't compete with the wave) */}
      <span className="pointer-events-none absolute -left-40 -top-32 h-[440px] w-[440px] rounded-full bg-white/[0.04]" aria-hidden="true" />
      <span className="pointer-events-none absolute -right-24 top-[24%] h-[460px] w-[460px] rounded-full bg-white/[0.035]" aria-hidden="true" />

      <Container className="relative z-10 flex min-h-[600px] flex-col items-center justify-center pb-36 pt-32 text-center sm:min-h-[680px] sm:pb-48 sm:pt-36 lg:min-h-[704px]">
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

      {/* White wave divider — gentle hump cresting ~48%. Fixed height (not vw)
          so it stays consistent across monitor widths. */}
      <svg
        className="absolute inset-x-0 bottom-[-1px] h-[150px] w-full sm:h-[185px] lg:h-[210px]"
        viewBox="0 0 1440 216"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="#ffffff"
          d="M0 216V120C240 116 460 30 660 26C920 21 1200 70 1440 92V216H0Z"
        />
      </svg>

      {/* Brighter blue circle layered over the wave at the bottom-left. Its arc
          forms the whole left half of the bottom curve (matches Figma). Large
          on desktop, modest on mobile. */}
      <span
        className="pointer-events-none absolute -bottom-32 -left-32 h-[380px] w-[380px] rounded-full bg-gradient-to-bl from-[#1f5499] to-[#3a97d4] lg:-bottom-[486px] lg:-left-[330px] lg:h-[780px] lg:w-[780px]"
        aria-hidden="true"
      />
    </section>
  )
}
