import { useEffect, useState } from 'react'
import { ArrowUpIcon } from './icons'

/**
 * Floating "back to top" button. Appears after the user scrolls past one
 * viewport height and smoothly returns them to the top when clicked.
 */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollUp = () => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollUp}
      aria-label="Scroll back to top"
      className={`focus-ring fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-royal-600 to-brand-500 text-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-pill ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <ArrowUpIcon className="h-5 w-5" />
    </button>
  )
}
