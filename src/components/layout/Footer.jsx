import Container from '../ui/Container'
import Logo, { Monogram } from '../ui/Logo'
import {
  FacebookIcon,
  InstagramIcon,
  XSocialIcon,
  TwitterIcon,
  LinkedinIcon,
  SnapchatIcon,
} from '../ui/icons'

const SOCIALS = [
  { label: 'Facebook', Icon: FacebookIcon, href: '#' },
  { label: 'Instagram', Icon: InstagramIcon, href: '#' },
  { label: 'X', Icon: XSocialIcon, href: '#' },
  { label: 'Twitter', Icon: TwitterIcon, href: '#' },
  { label: 'LinkedIn', Icon: LinkedinIcon, href: '#' },
  { label: 'Snapchat', Icon: SnapchatIcon, href: '#' },
]

// Exact Figma footer gradient (131.63deg, vertically flipped → 48.37deg).
const footerBg = {
  background: 'linear-gradient(48.37deg, #336DA6 6.87%, #1E3E85 106.04%)',
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-white" style={footerBg}>
      {/* Faint white circle, top-right (Top Right Ellipses — 5% opacity) */}
      <span
        className="pointer-events-none absolute -top-[155px] left-[74%] h-[524px] w-[524px] rounded-full bg-white/[0.05]"
        aria-hidden="true"
      />
      <Container className="relative py-12 lg:py-16">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <a href="#top" className="focus-ring rounded-lg" aria-label="RemoteRecruit home">
            <Logo className="h-14 w-auto" />
          </a>

          <ul className="flex items-center gap-3">
            {SOCIALS.map(({ label, Icon, href }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="focus-ring flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/30"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/15 pt-10">
          <Monogram className="h-12 w-12 drop-shadow-md" />
        </div>
      </Container>
    </footer>
  )
}
