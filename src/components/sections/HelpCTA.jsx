import Container from '../ui/Container'
import SectionReveal from '../ui/SectionReveal'
import LazyImage from '../ui/LazyImage'
import { ArrowRightIcon } from '../ui/icons'

const bg = {
  backgroundImage: [
    'radial-gradient(55% 60% at 88% 18%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 60%)',
    'linear-gradient(120deg, #eef0fb 0%, #eaeafb 100%)',
  ].join(', '),
}

/**
 * "Help is only a few clicks away!" CTA over a soft lavender background. The
 * "Let's Find Work" dashboard bleeds off the left edge (Figma), with the copy
 * and a gradient arrow "Get Started" button on the right.
 */
export default function HelpCTA() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:h-[610px] lg:py-0" style={bg}>
      {/* Decorative orbs */}
      <span className="pointer-events-none absolute -right-24 -top-10 h-[440px] w-[440px] rounded-full bg-white/40" aria-hidden="true" />
      <span className="pointer-events-none absolute left-[24%] top-6 z-20 h-12 w-12 rounded-full bg-amber-400 shadow-md lg:left-[20%]" aria-hidden="true" />
      <span className="pointer-events-none absolute bottom-24 right-[24%] h-7 w-7 rounded-full bg-gradient-to-br from-[#52B4DA] to-[#1E3E85]" aria-hidden="true" />

      <Container className="relative grid items-center gap-12 lg:grid-cols-2 lg:items-start lg:gap-8 lg:pt-[92px]">
        {/* Dashboard — bleeds off the left edge (and bottom) on desktop */}
        <SectionReveal delay={120}>
          <div className="overflow-hidden rounded-[20px] shadow-card ring-1 ring-black/5 lg:ml-[-34%] lg:w-[134%] lg:max-w-none lg:rounded-[24px]">
            <LazyImage
              src="/avatars/help_image.webp"
              alt=""
              width={940}
              height={1066}
              wrapperClassName="block aspect-[16/11] w-full lg:aspect-[16/13]"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </SectionReveal>

        {/* Copy + CTA */}
        <SectionReveal>
          <p className="text-sm font-bold uppercase tracking-wide text-royal-700">
            Are you ready?
          </p>
          <h2 className="mt-3 max-w-md text-4xl font-bold leading-tight text-[#11142D] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
            Help is only a few clicks away!
          </h2>
          <p className="mt-6 max-w-sm text-[17px] leading-[30px] text-[rgba(17,20,45,0.643)] sm:text-[19px] sm:leading-[35px]">
            Click below to get set up super quickly and find help now!
          </p>

          <a
            href="#pricing"
            className="focus-ring mt-8 inline-flex items-center gap-4 rounded-full bg-brand-100 py-2 pl-2 pr-8 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-200/80"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#52B4DA] to-[#1E3E85] text-white shadow-pill">
              <ArrowRightIcon className="h-5 w-5" />
            </span>
            <span className="text-lg font-semibold text-[#11142D]">Get Started</span>
          </a>
        </SectionReveal>
      </Container>
    </section>
  )
}
