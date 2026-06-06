import { useEffect, useRef } from 'react'

/**
 * Returns a ref. When the ref'd element enters the viewport,
 * the class `is-visible` is added to it — triggering `.fade-up` children.
 */
export function useInView(threshold = 0.1) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
