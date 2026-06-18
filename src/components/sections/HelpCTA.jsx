import Container from '../ui/Container'
import SectionReveal from '../ui/SectionReveal'
import LazyImage from '../ui/LazyImage'
import { ArrowRightIcon } from '../ui/icons'

// Exact Figma background: blue→purple gradient (Rectangle 14).
const bg = {
  background: 'linear-gradient(132.56deg, #5799EB 5.63%, #9F74FB 106.18%)',
}

/**
 * "Help is only a few clicks away!" CTA over a soft lavender background. The
 * "Let's Find Work" dashboard bleeds off the left edge (Figma), with the copy
 * and a gradient arrow "Get Started" button on the right.
 */
export default function HelpCTA() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:h-[610px] lg:py-0" style={bg}>
      {/* Soft white circles (Ellipse 13 / 12 / 10 — 30% opacity) */}
      <span className="pointer-events-none absolute -left-[85px] -top-[92px] h-[321px] w-[321px] rounded-full bg-white/30" aria-hidden="true" />
      <span className="pointer-events-none absolute left-[20%] top-1/2 h-[493px] w-[493px] rounded-full bg-white/30" aria-hidden="true" />
      <span className="pointer-events-none absolute -top-[138px] left-[81%] h-[380px] w-[380px] rounded-full bg-white/30" aria-hidden="true" />

      {/* Accent orbs: yellow→orange (Ellipse 49) and blue (Ellipse 51) */}
      <span className="pointer-events-none absolute left-[18%] top-7 z-20 h-[53px] w-[53px] rounded-full bg-gradient-to-br from-[#FFED43] to-[#F29939] shadow-md" aria-hidden="true" />
      <span className="pointer-events-none absolute left-[78%] top-[86%] h-[29px] w-[29px] rounded-full bg-gradient-to-br from-[#52B4DA] to-[#1E3E85]" aria-hidden="true" />

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
