/**
 * Inline SVG icon set. Inlining (vs. an icon library) keeps the bundle tiny and
 * lets every icon inherit `currentColor`. All decorative icons get aria-hidden.
 */

const base = (props) => ({
  viewBox: '0 0 24 24',
  fill: 'none',
  'aria-hidden': 'true',
  focusable: 'false',
  ...props,
})

export const CheckCircleIcon = (props) => (
  <svg {...base(props)} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm4.7 7.7l-5.6 5.6a1 1 0 01-1.4 0l-2.4-2.4a1 1 0 011.4-1.4l1.7 1.7 4.9-4.9a1 1 0 011.4 1.4z" />
  </svg>
)

export const XCircleIcon = (props) => (
  <svg {...base(props)} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm3.5 12.1a1 1 0 01-1.4 1.4L12 13.4l-2.1 2.1a1 1 0 01-1.4-1.4l2.1-2.1-2.1-2.1a1 1 0 011.4-1.4l2.1 2.1 2.1-2.1a1 1 0 011.4 1.4L13.4 12l2.1 2.1z" />
  </svg>
)

export const ArrowRightIcon = (props) => (
  <svg {...base(props)} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const ArrowUpIcon = (props) => (
  <svg {...base(props)} stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19V5M6 11l6-6 6 6" />
  </svg>
)

export const SearchIcon = (props) => (
  <svg {...base(props)} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" />
  </svg>
)

export const BellIcon = (props) => (
  <svg {...base(props)} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 01-3.4 0" />
  </svg>
)

export const PlayIcon = (props) => (
  <svg {...base(props)} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
)

export const MenuIcon = (props) => (
  <svg {...base(props)} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const CloseIcon = (props) => (
  <svg {...base(props)} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
)

export const PaypalIcon = (props) => (
  <svg {...base(props)} fill="currentColor" viewBox="0 0 24 24">
    <path d="M7.2 21.4H4.5a.6.6 0 01-.6-.7L6.6 3.3a.9.9 0 01.9-.7h6.3c2.9 0 5 1.6 4.6 4.6-.5 3.4-3 4.9-6.1 4.9H9.9a.9.9 0 00-.9.7l-.9 7.9a.9.9 0 01-.9.7z" opacity=".55" />
    <path d="M18.6 7.6c.5 3.2-1.8 5.6-5.3 5.6h-1.6a.7.7 0 00-.7.6l-.8 6.9a.7.7 0 01-.7.6H6.8a.5.5 0 01-.5-.6L8.6 4.9a.8.8 0 01.8-.7H15c2 0 3.4.9 3.6 3.4z" />
  </svg>
)

/* ---- Social icons (footer) ---- */

export const FacebookIcon = (props) => (
  <svg {...base(props)} fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0022 12z" />
  </svg>
)

export const InstagramIcon = (props) => (
  <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="3.6" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
  </svg>
)

export const XSocialIcon = (props) => (
  <svg {...base(props)} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.5 3h3l-6.6 7.5L21.8 21h-6l-4.7-6.1L5.7 21h-3l7-8L2.5 3h6.1l4.2 5.6L17.5 3zm-1 16h1.7L7.6 4.8H5.8L16.5 19z" />
  </svg>
)

export const TwitterIcon = (props) => (
  <svg {...base(props)} fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 5.9c-.7.3-1.5.6-2.3.7a4 4 0 001.8-2.2c-.8.5-1.7.8-2.6 1a4 4 0 00-6.9 3.7A11.4 11.4 0 013.6 4.8a4 4 0 001.2 5.4c-.6 0-1.2-.2-1.8-.5a4 4 0 003.2 4 4 4 0 01-1.8.1 4 4 0 003.7 2.8A8 8 0 012 18.3a11.3 11.3 0 006.1 1.8c7.3 0 11.4-6.1 11.4-11.4v-.5c.8-.6 1.5-1.3 2-2.1z" />
  </svg>
)

export const LinkedinIcon = (props) => (
  <svg {...base(props)} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.4 3H3.6A.6.6 0 003 3.6v16.8c0 .3.3.6.6.6h16.8a.6.6 0 00.6-.6V3.6a.6.6 0 00-.6-.6zM8.3 18.3H5.7V9.7h2.6v8.6zM7 8.6a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm11.3 9.7h-2.6v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2v4.3h-2.6V9.7h2.5v1.2h.1a2.8 2.8 0 012.5-1.4c2.7 0 3.2 1.8 3.2 4v4.8z" />
  </svg>
)

export const SnapchatIcon = (props) => (
  <svg {...base(props)} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.3c2.6 0 4.7 2 4.8 4.6 0 .8 0 1.5-.1 2 .2.1.5.2.8.1.7-.2 1.4.7.7 1.4-.4.4-1.2.5-1.6.8-.5.5.6 1.9 2.4 2.6.5.2.4.9-.1 1-.5.1-1 .1-1.3.5-.2.4 0 .9-.5 1.1-.6.2-1.3-.3-2.2-.1-.8.2-1.4 1.3-3.1 1.3s-2.3-1.1-3.1-1.3c-.9-.2-1.6.3-2.2.1-.5-.2-.3-.7-.5-1.1-.3-.4-.8-.4-1.3-.5-.5-.1-.6-.8-.1-1 1.8-.7 2.9-2.1 2.4-2.6-.4-.3-1.2-.4-1.6-.8-.7-.7 0-1.6.7-1.4.3.1.6 0 .8-.1-.1-.5-.1-1.2-.1-2C7.3 4.3 9.4 2.3 12 2.3z" />
  </svg>
)
