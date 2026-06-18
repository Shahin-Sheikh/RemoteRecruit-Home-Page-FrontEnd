import Container from '../ui/Container'
import Badge from '../ui/Badge'
import SectionReveal from '../ui/SectionReveal'

/**
 * Reusable two-column feature row: copy on one side, an illustration on the
 * other. `reverse` swaps the columns so consecutive sections alternate.
 */
export default function FeatureRow({ id, badge, title, children, visual, reverse = false }) {
  return (
    <section id={id} className="overflow-x-clip py-16 sm:py-20 lg:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <SectionReveal className={reverse ? 'lg:order-2' : ''}>
          <Badge>{badge}</Badge>
          <h2 className="mt-5 max-w-md text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            {title}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-body sm:text-lg">
            {children}
          </p>
        </SectionReveal>

        {/* Illustration */}
        <SectionReveal delay={150} className={reverse ? 'lg:order-1' : ''}>
          {visual}
        </SectionReveal>
      </Container>
    </section>
  )
}
