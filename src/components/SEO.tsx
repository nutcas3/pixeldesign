interface SEOProps {
  title: string
  description: string
  image?: string
  type?: string
}

export default function SEO({ 
  title, 
  description, 
  image = '/og-image.jpg',
  type = 'website'
}: SEOProps) {
  const siteUrl = 'https://pixeldesignkitchen.com'
  const fullTitle = `${title} | PixelDesign`

  return (
    <>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${image}`} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="theme-color" content="#000000" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={siteUrl} />
    </>
  )
}
