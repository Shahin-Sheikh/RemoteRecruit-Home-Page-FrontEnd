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

const footerBg = {
  backgroundImage: 'linear-gradient(180deg, #2c5ba0 0%, #244e8f 55%, #1f3d78 100%)',
}

export default function Footer() {
  return (
    <footer className="text-white" style={footerBg}>
      <Container className="py-12 lg:py-16">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <a href="#top" className="focus-ring rounded-lg" aria-label="RemoteRecruit home">
            <Logo tone="light" className="text-3xl" />
          </a>

          <ul className="flex items-center gap-3">
            {SOCIALS.map(({ label, Icon, href }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="focus-ring flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/30"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/15 pt-10">
          <Monogram className="h-11 w-11 text-lg" />
          <p className="text-xs text-white/60">
            &copy; {2024} RemoteRecruit. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
