import Container from '../ui/Container'
import Button from '../ui/Button'
import SectionReveal from '../ui/SectionReveal'
import { ArrowRightIcon } from '../ui/icons'
import JobBoardMockup from '../mockups/JobBoardMockup'

const bg = {
  backgroundImage:
    'radial-gradient(60% 50% at 85% 20%, rgba(214,219,250,0.7) 0%, rgba(214,219,250,0) 60%), linear-gradient(120deg, #eef0fb 0%, #e9ecfb 100%)',
}

/**
 * "Help is only a few clicks away!" call-to-action over a soft lavender
 * background with the full job-board dashboard illustration.
 */
export default function HelpCTA() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28" style={bg}>
      {/* Decorative orbs */}
      <span className="pointer-events-none absolute left-1/4 top-10 h-12 w-12 rounded-full bg-amber-400/90 blur-[1px]" aria-hidden="true" />
      <span className="pointer-events-none absolute bottom-16 right-1/4 h-6 w-6 rounded-full bg-brand-500" aria-hidden="true" />

      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <SectionReveal delay={120}>
          <JobBoardMockup />
        </SectionReveal>

        <SectionReveal>
          <p className="text-sm font-bold uppercase tracking-wide text-royal-600">
            Are you ready?
          </p>
          <h2 className="mt-3 max-w-md text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Help is only a few clicks away!
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-body sm:text-lg">
            Click below to get set up super quickly and find help now!
          </p>
          <Button variant="cyan" size="lg" href="#pricing" className="mt-8">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/25">
              <ArrowRightIcon className="h-4 w-4" />
            </span>
            Get Started
          </Button>
        </SectionReveal>
      </Container>
    </section>
  )
}
