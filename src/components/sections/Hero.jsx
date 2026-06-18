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
      {/* Faint decorative circles (Top Ellipses 2% / Bottom Ellipses 5%) */}
      <span className="pointer-events-none absolute -left-[6px] -top-[367px] h-[524px] w-[524px] rounded-full bg-white/[0.02]" aria-hidden="true" />
      <span className="pointer-events-none absolute left-[44%] top-[53%] h-[524px] w-[524px] rounded-full bg-white/[0.05]" aria-hidden="true" />

      <Container className="relative z-10 flex min-h-[600px] flex-col items-center justify-center pb-36 pt-32 text-center sm:min-h-[680px] sm:pb-48 sm:pt-36 lg:min-h-[704px]">
        <SectionReveal immediate>
          <h1 className="mx-auto max-w-4xl font-bold text-white text-[36px] leading-[44px] sm:text-[44px] sm:leading-[56px] lg:text-[53px] lg:leading-[68px]">
            RemoteRecruit&rsquo;s Difference
          </h1>
        </SectionReveal>

        <SectionReveal immediate>
          <p className="mx-auto mt-6 max-w-[800px] font-medium text-white/80 text-[17px] leading-[28px] sm:text-[20px] sm:leading-[32px]">
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

 
      {/* Light-Blue gradient layer, clipped to the bottom-left circle and laid
          over the wave (the bright cyan is sampled frame-relative). */}
      <div
        className="pointer-events-none absolute inset-0 [clip-path:circle(270px_at_30px_560px)] lg:[clip-path:circle(400px_at_70px_792px)]"
        style={lightBlueBg}
        aria-hidden="true"
      />
    </section>
  )
}
