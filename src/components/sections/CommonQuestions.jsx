import Container from '../ui/Container'
import SectionReveal from '../ui/SectionReveal'
import { faqs } from '../../data/faq'

/**
 * Common Questions — a static FAQ list (matching the Figma: every answer is
 * visible) followed by a "More Questions" button.
 */
export default function CommonQuestions() {
  return (
    <section id="questions" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionReveal>
          <h2 className="font-medium text-[#11142D] text-[32px] leading-[42px] sm:text-[40px] sm:leading-[52px]">
            Common Questions
          </h2>
        </SectionReveal>

        <dl className="mt-10 space-y-9">
          {faqs.map((item, i) => (
            <SectionReveal key={item.id} as="div" delay={i * 80}>
              <dt className="text-lg font-semibold text-[#11142D] sm:text-xl">
                {item.question}
              </dt>
              <dd className="mt-3 max-w-5xl text-[17px] leading-[30px] text-[rgba(17,20,45,0.643)] sm:text-[19px] sm:leading-[34px]">
                {item.answer}
              </dd>
            </SectionReveal>
          ))}
        </dl>

        <SectionReveal delay={120} className="mt-10">
          <a
            href="#questions"
            className="focus-ring inline-flex items-center justify-center rounded-2xl border border-brand-300 px-8 py-4 text-sm font-semibold text-[#11142D] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500"
          >
            More Questions
          </a>
        </SectionReveal>
      </Container>
    </section>
  )
}
