import "@/styles/globals.css"
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import { useGoogleAnalytics } from '../components/useGoogleAnalytics'

const SEO_CONFIG = {
  title: 'Navneet Kumar - Full Stack Developer Portfolio',
  description: 'Professional portfolio of Navneet Kumar, a Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. View projects, experience, and skills.',
  canonical: 'https://navneet-portfolio.vercel.app',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://navneet-portfolio.vercel.app',
    siteName: 'Navneet Kumar Portfolio',
    title: 'Navneet Kumar - Full Stack Developer Portfolio',
    description: 'Professional portfolio of Navneet Kumar, a Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.',
    images: [
      {
        url: 'https://navneet-portfolio.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Navneet Kumar - Full Stack Developer',
      },
    ],
  },
  twitter: {
    handle: '@Navi9971',
    site: '@Navi9971',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'Full Stack Developer, React Developer, Next.js, Node.js, JavaScript, TypeScript, Web Development, Portfolio, Navneet Kumar',
    },
    {
      name: 'author',
      content: 'Navneet Kumar',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#000000',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
  ],
}

export default function App({ Component, pageProps }) {
  // Initialize Google Analytics
  useGoogleAnalytics()

  // Get GA measurement ID from environment variable
  const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_IDS || 'G-J5GZHCVZ5L'

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://navneet-portfolio.vercel.app" />
        
        {/* Google Analytics 4 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `,
          }}
        />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Navneet Kumar",
              "jobTitle": "Full Stack Developer",
              "description": "Professional Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies",
              "url": "https://navneet-portfolio.vercel.app",
              "image": "https://navneet-portfolio.vercel.app/profile-image.jpg",
              "sameAs": [
                "https://github.com/navneet9971",
                "https://x.com/Navi9971",
                "https://www.linkedin.com/in/navneet-kumar-42b75b204/"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "AiCansell Pvt. Ltd."
              },
              "knowsAbout": [
                "React.js",
                "Next.js",
                "Node.js",
                "JavaScript",
                "TypeScript",
                "MongoDB",
                "Tailwind CSS",
                "Full Stack Development"
              ]
            })
          }}
        />
      </Head>
      <DefaultSeo {...SEO_CONFIG} />
      <Component {...pageProps} />
    </>
  )
}