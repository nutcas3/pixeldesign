import { useState, useEffect, useRef } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  sizes?: string
  loading?: 'lazy' | 'eager'
  width?: number
  height?: number
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  sizes = '100vw',
  loading = 'lazy',
  width,
  height
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true)
    }
  }, [])

  // Generate responsive image URLs
  const generateSrcSet = () => {
    const widths = [320, 640, 768, 1024, 1280, 1536]
    const baseUrl = new URL(src, window.location.origin)
    
    return widths
      .map(w => {
        const optimizedUrl = new URL(baseUrl)
        optimizedUrl.searchParams.set('w', w.toString())
        optimizedUrl.searchParams.set('q', '75') // Add quality parameter for optimization
        return `${optimizedUrl.toString()} ${w}w`
      })
      .join(', ')
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder/Skeleton */}
      <div
        className={`absolute inset-0 bg-gray-200 dark:bg-gray-700 transition-opacity duration-300 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ aspectRatio: width && height ? `${width}/${height}` : 'auto' }}
        aria-hidden="true"
      />
      
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={loading}
        sizes={sizes}
        srcSet={generateSrcSet()}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        width={width}
        height={height}
      />
    </div>
  )
}
