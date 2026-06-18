import useInView from '../../hooks/useInView'

/**
 * Wraps children in a scroll-reveal animation (fade + slide-up). An optional
 * `delay` (ms) staggers grouped reveals. Renders as any tag via `as`.
 */
export default function SectionReveal({
  as: Tag = 'div',
  delay = 0,
  className = '',
  children,
  ...rest
}) {
  const [ref, inView] = useInView()

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
