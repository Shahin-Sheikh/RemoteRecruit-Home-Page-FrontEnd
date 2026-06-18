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
          <h2 className="mt-6 max-w-lg font-medium text-[#11142D] text-[32px] leading-[42px] sm:text-[36px] sm:leading-[48px] lg:text-[40px] lg:leading-[52px]">
            {title}
          </h2>
          <p className="mt-6 max-w-[480px] font-normal text-[17px] leading-[30px] text-[rgba(17,20,45,0.643)] sm:text-[19px] sm:leading-[35px]">
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
