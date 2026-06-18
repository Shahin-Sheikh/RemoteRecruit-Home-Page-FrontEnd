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
      {/* Faint decorative discs */}
      <span className="pointer-events-none absolute -left-40 -top-32 h-[480px] w-[480px] rounded-full bg-white/[0.05]" aria-hidden="true" />
      <span className="pointer-events-none absolute -right-32 top-4 h-[620px] w-[620px] rounded-full bg-white/[0.04]" aria-hidden="true" />

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

      {/* White wave divider — gentle hump cresting centre-right */}
      <svg
        className="absolute inset-x-0 bottom-[-1px] h-[12vw] min-h-[110px] w-full"
        viewBox="0 0 1440 170"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="#ffffff"
          d="M0 170V92C260 90 520 26 830 24C1110 22 1290 78 1440 86V170H0Z"
        />
      </svg>

      {/* Brighter blue circle layered over the wave at the bottom-left */}
      <span
        className="pointer-events-none absolute -bottom-40 -left-40 h-[560px] w-[560px] rounded-full bg-[#2c6cb6]"
        aria-hidden="true"
      />
    </section>
  )
}
