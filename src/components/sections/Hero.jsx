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
      <span className="pointer-events-none absolute -left-40 -top-32 h-[460px] w-[460px] rounded-full bg-white/[0.05]" aria-hidden="true" />
      <span className="pointer-events-none absolute right-[2%] top-[20%] h-[560px] w-[560px] rounded-full bg-white/[0.045]" aria-hidden="true" />

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

      {/* White wave divider — gentle hump cresting left-of-centre (~44%) */}
      <svg
        className="absolute inset-x-0 bottom-[-1px] h-[15vw] min-h-[130px] w-full"
        viewBox="0 0 1440 216"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="#ffffff"
          d="M0 216V128C200 124 430 20 630 14C920 6 1210 84 1440 122V216H0Z"
        />
      </svg>

      {/* Brighter blue circle layered over the wave at the bottom-left */}
      <span
        className="pointer-events-none absolute -bottom-24 -left-24 h-[360px] w-[360px] rounded-full bg-gradient-to-tl from-[#205ea8] to-[#3f93d2]"
        aria-hidden="true"
      />
    </section>
  )
}
