import { useEffect, useState } from 'react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import Logo from '../ui/Logo'

/**
 * Top navigation — matches the Figma: just the logo on the left and
 * "Sign In" / "Sign Up" on the right (no centre links). Transparent over the
 * hero, gains a solid royal background once the user scrolls.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24)
        ticking = false
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-royal-900/95 shadow-soft backdrop-blur' : 'bg-transparent'
      }`}
    >
      <Container className="flex items-center justify-between py-4 lg:py-5">
        <a href="#top" className="focus-ring rounded-lg" aria-label="RemoteRecruit home">
          <Logo className="h-9 w-auto sm:h-[50px]" />
        </a>

        <nav className="flex items-center gap-3 sm:gap-6" aria-label="Primary">
          <Button variant="ghost" size="sm" href="#top" className="tracking-[0.4px] text-[#F5F7FE]">
            Sign In
          </Button>
          <Button variant="cyan" size="sm" href="#pricing" className="tracking-[0.4px]">
            Sign Up
          </Button>
        </nav>
      </Container>
    </header>
  )
}
