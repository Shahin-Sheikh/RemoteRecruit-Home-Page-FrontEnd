import Container from '../ui/Container'
import SectionReveal from '../ui/SectionReveal'

// Exact Figma background gradients (both are full-frame 1440×704 layers).
const darkBlueBg = {
  background: 'linear-gradient(131.63deg, #1E3E85 6.87%, #336DA6 106.04%)',
}
const lightBlueBg = {
  background: 'linear-gradient(132.56deg, #52B4DA 5.63%, #1E3E85 106.18%)',
}

/**
 * Hero — "RemoteRecruit's Difference".
 *
 * Composition matches the Figma: a full-frame Dark-Blue gradient, with a
 * full-frame Light-Blue gradient layered on top but clipped to the bottom-left
 * circle (so the bright cyan is sampled from the frame, not the circle's own
 * box). A white wave divides into the next section.
 */
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden" style={darkBlueBg}>
      {/* Faint decorative discs */}
      <span className="pointer-events-none absolute -left-40 -top-32 h-[440px] w-[440px] rounded-full bg-white/[0.05]" aria-hidden="true" />
      <span className="pointer-events-none absolute -right-24 top-[24%] h-[460px] w-[460px] rounded-full bg-white/[0.04]" aria-hidden="true" />

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

      {/* White wave divider — low on the left, rising to a crest on the right */}
      <svg
        className="absolute inset-x-0 bottom-[-1px] h-[140px] w-full sm:h-[175px] lg:h-[200px]"
        viewBox="0 0 1440 216"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="#ffffff"
          d="M0 216V148C380 144 760 58 1050 24C1240 33 1360 45 1440 54V216H0Z"
        />
      </svg>

      {/* Light-Blue gradient layer, clipped to a tilted ellipse so the
          bottom-left cyan reads as a flowing curve (frame-relative gradient). */}
      <div
        className="pointer-events-none absolute inset-0 origin-bottom-left rotate-[18deg] [clip-path:ellipse(48%_50%_at_-4%_118%)] lg:rotate-[14deg] lg:[clip-path:ellipse(40%_56%_at_-2%_120%)]"
        style={lightBlueBg}
        aria-hidden="true"
      />
    </section>
  )
}
