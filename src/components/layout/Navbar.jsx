import { useEffect, useState } from 'react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import Logo from '../ui/Logo'
import { MenuIcon, CloseIcon } from '../ui/icons'

const LINKS = [
  { label: 'Features', href: '#global-reach' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Questions', href: '#questions' },
]

/**
 * Sticky top navigation. Transparent over the hero, gains a solid royal
 * background once the user scrolls. Collapses to a slide-down menu on mobile.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'bg-royal-900/95 shadow-soft backdrop-blur' : 'bg-transparent'
      }`}
    >
      <Container className="flex items-center justify-between py-4 lg:py-5">
        <a href="#top" className="focus-ring rounded-lg" aria-label="RemoteRecruit home">
          <Logo tone="light" className="text-xl" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring rounded text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <Button variant="ghost" size="sm" href="#top" className="font-medium">
            Sign In
          </Button>
          <Button variant="cyan" size="sm" href="#pricing">
            Sign Up
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="focus-ring rounded-lg p-2 text-white md:hidden"
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-royal-900/95 backdrop-blur transition-[max-height] duration-300 md:hidden ${
          open ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <Container className="flex flex-col gap-2 pb-6 pt-2">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="focus-ring rounded-lg px-2 py-3 text-base font-medium text-white/85 hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 flex flex-col gap-3">
            <Button variant="outline" href="#top" onClick={() => setOpen(false)} className="border-white/40 text-white hover:border-white hover:text-white">
              Sign In
            </Button>
            <Button variant="cyan" href="#pricing" onClick={() => setOpen(false)}>
              Sign Up
            </Button>
          </div>
        </Container>
      </div>
    </header>
  )
}
