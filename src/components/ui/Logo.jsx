/**
 * RemoteRecruit wordmark. `tone="light"` for dark backgrounds (navbar / footer),
 * `tone="dark"` for light backgrounds. The stacked "Remote / Recruit" lockup
 * mirrors the Figma logo, with "Remote" always in the cyan brand colour.
 */
export default function Logo({ tone = 'light', className = '' }) {
  const recruitColor = tone === 'light' ? 'text-white' : 'text-ink'
  return (
    <span
      className={`inline-flex select-none flex-col font-display font-bold leading-[0.92] tracking-tight ${className}`}
      aria-label="RemoteRecruit"
    >
      <span className="text-brand-400">Remote</span>
      <span className={recruitColor}>
        <span className="text-brand-400">R</span>ecruit
      </span>
    </span>
  )
}

/**
 * Circular "R" monogram (the gradient badge that floats over the mockups and
 * sits centred in the footer).
 */
export function Monogram({ className = '' }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-royal-600 font-display text-white shadow-soft ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="h-1/2 w-1/2" fill="none" aria-hidden="true">
        <path
          d="M6 19V5h7a4 4 0 010 8H8.5M13 13l5 6"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}
