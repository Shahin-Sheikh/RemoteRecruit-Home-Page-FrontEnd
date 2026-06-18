/**
 * Reusable button / link. Supports `primary`, `outline`, `ghost` and `cyan`
 * variants. Renders an <a> when `href` is supplied, otherwise a <button>.
 */
const VARIANTS = {
  // Solid cyan pill (navbar "Sign Up") — Figma brand cyan
  cyan: 'bg-[#2DBBDE] text-white hover:bg-[#1ea7ca] shadow-pill hover:-translate-y-0.5',
  // Solid royal-blue gradient (pricing "Get Started")
  primary:
    'bg-gradient-to-r from-royal-600 to-brand-500 text-white hover:from-royal-700 hover:to-brand-600 shadow-soft hover:-translate-y-0.5',
  // Outlined (FAQ "More Questions", free plan "Get Started")
  outline:
    'border-2 border-brand-300 text-ink hover:border-brand-500 hover:text-brand-600 hover:-translate-y-0.5',
  // Text-only (navbar "Sign In")
  ghost: 'text-white/90 hover:text-white',
}

const SIZES = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-7 py-3 text-sm sm:text-base',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  children,
  ...rest
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-ring ${SIZES[size]} ${VARIANTS[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  )
}
