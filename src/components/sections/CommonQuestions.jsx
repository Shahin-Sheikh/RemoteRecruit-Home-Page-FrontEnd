import { useState } from 'react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import SectionReveal from '../ui/SectionReveal'
import { faqs } from '../../data/faq'

/** Single accessible accordion item. */
function FaqItem({ item, isOpen, onToggle, index }) {
  const panelId = `faq-panel-${item.id}`
  const buttonId = `faq-button-${item.id}`
  return (
    <div className="border-b border-black/10 py-6">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="focus-ring flex w-full items-center justify-between gap-4 rounded-lg text-left"
        >
          <span className="text-lg font-semibold text-ink sm:text-xl">{item.question}</span>
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600 transition-transform duration-300 ${
              isOpen ? 'rotate-45' : ''
            }`}
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? 'mt-4 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-3xl text-base leading-relaxed text-body">{item.answer}</p>
        </div>
      </div>
    </div>
  )
}

/**
 * Common Questions — an accessible FAQ accordion driven by mock data.
 */
export default function CommonQuestions() {
  const [openId, setOpenId] = useState(faqs[0]?.id ?? null)

  return (
    <section id="questions" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionReveal>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl lg:text-[2.75rem]">
            Common Questions
          </h2>
        </SectionReveal>

        <SectionReveal delay={100} className="mt-8">
          <div className="border-t border-black/10">
            {faqs.map((item, i) => (
              <FaqItem
                key={item.id}
                item={item}
                index={i}
                isOpen={openId === item.id}
                onToggle={() => setOpenId(openId === item.id ? null : item.id)}
              />
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={150} className="mt-10">
          <Button variant="outline" href="#questions">
            More Questions
          </Button>
        </SectionReveal>
      </Container>
    </section>
  )
}
