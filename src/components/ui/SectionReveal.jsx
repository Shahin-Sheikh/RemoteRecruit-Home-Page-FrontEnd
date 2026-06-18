import useInView from '../../hooks/useInView'

/**
 * Wraps children in a scroll-reveal animation (fade + slide-up). An optional
 * `delay` (ms) staggers grouped reveals. Renders as any tag via `as`.
 *
 * Pass `immediate` for above-the-fold / LCP content: it renders visible on the
 * first paint (no `opacity:0` start, no IntersectionObserver gate), so the
 * hero heading isn't hidden behind JS and the LCP isn't delayed.
 */
export default function SectionReveal({
  as: Tag = 'div',
  delay = 0,
  immediate = false,
  className = '',
  children,
  ...rest
}) {
  const [ref, inView] = useInView({ skip: immediate })
  const visible = immediate || inView

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={delay && !immediate ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
