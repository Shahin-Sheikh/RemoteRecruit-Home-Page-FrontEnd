import { useState } from 'react'

/**
 * Image wrapper that lazy-loads off-screen images. Uses the browser's native
 * `loading="lazy"` + async decoding, and fades the image in once it has
 * loaded to avoid layout jank. A lightweight skeleton shows while loading.
 */
export default function LazyImage({
  src,
  alt,
  className = '',
  wrapperClassName = '',
  width,
  height,
  ...rest
}) {
  const [loaded, setLoaded] = useState(false)

  return (
    <span
      className={`relative block overflow-hidden ${wrapperClassName}`}
      aria-hidden={alt ? undefined : 'true'}
    >
      {!loaded && (
        <span className="absolute inset-0 animate-pulse bg-royal-50" aria-hidden="true" />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        {...rest}
      />
    </span>
  )
}
