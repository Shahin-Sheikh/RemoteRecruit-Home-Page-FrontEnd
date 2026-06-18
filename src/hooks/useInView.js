import { useEffect, useRef, useState } from 'react'

/**
 * Reveal-on-scroll hook built on IntersectionObserver (no animation library
 * needed — keeps the bundle small for Lighthouse). Returns a ref to attach to
 * the element and a boolean that flips to `true` the first time it enters view.
 *
 * @param {Object}  [options]
 * @param {number}  [options.threshold=0.15] portion visible before triggering
 * @param {string}  [options.rootMargin='0px 0px -10% 0px']
 * @param {boolean} [options.once=true] stop observing after the first reveal
 */
export default function useInView({
  threshold = 0.15,
  rootMargin = '0px 0px -10% 0px',
  once = true,
} = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Graceful fallback for SSR / very old browsers: show immediately.
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.unobserve(entry.target)
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return [ref, inView]
}
