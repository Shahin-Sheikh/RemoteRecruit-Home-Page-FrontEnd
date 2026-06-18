/**
 * Small rounded label used above section headings ("Global Reach",
 * "Custom Profile", "Actually Fee Free").
 */
export default function Badge({ className = '', children }) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-ink ${className}`}
    >
      {children}
    </span>
  )
}
