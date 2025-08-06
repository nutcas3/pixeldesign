import { lazy } from 'react'

// Utility function to handle lazy loading with proper typing
export function lazyImport<
  T extends React.ComponentType<any>,
  I extends { [K2 in K]: T },
  K extends keyof I
>(factory: () => Promise<I>, name: K): React.LazyExoticComponent<T> {
  return lazy(() => factory().then((module) => ({ default: module[name] })))
}

// Intersection Observer utility for lazy loading images
export function setupImageLazyLoading() {
  if (!('IntersectionObserver' in window)) return

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement
        if (img.dataset.src) {
          img.src = img.dataset.src
          img.removeAttribute('data-src')
          imageObserver.unobserve(img)
        }
      }
    })
  }, {
    rootMargin: '50px 0px',
    threshold: 0.01
  })

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img)
  })

  return imageObserver
}
