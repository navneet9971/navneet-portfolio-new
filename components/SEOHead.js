import Head from 'next/head'

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  ogImage, 
  canonical,
  structuredData,
  articleData,
  noIndex = false,
  type = 'website',
  author = 'Navneet Kumar',
  publishedTime,
  modifiedTime,
  section,
  tags = []
}) => {
  const siteUrl = 'https://navi.reel-elevate.co.in/';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullOgImage = ogImage ? `${siteUrl}${ogImage}` : `${siteUrl}/og-image.png`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      
      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Canonical */}
      {canonical && <link rel="canonical" href={fullCanonical} />}
      
      {/* Open Graph */}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {ogImage && <meta property="og:image" content={fullOgImage} />}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Navneet Kumar Portfolio" />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:locale" content="en_US" />
      
      {/* Article specific Open Graph tags */}
      {type === 'article' && articleData && (
        <>
          <meta property="article:author" content={articleData.author || author} />
          <meta property="article:published_time" content={articleData.publishedTime || publishedTime} />
          <meta property="article:modified_time" content={articleData.modifiedTime || modifiedTime} />
          <meta property="article:section" content={articleData.section || section} />
          <meta property="article:tag" content={articleData.tags ? articleData.tags.join(', ') : tags.join(', ')} />
        </>
      )}
      
      {/* Twitter */}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {ogImage && <meta name="twitter:image" content={fullOgImage} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Navi9971" />
      <meta name="twitter:creator" content="@Navi9971" />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Favicon and Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
    </Head>
  )
}

export default SEOHead 