import { NextSeo } from 'next-seo'
import Head from 'next/head'
import { useState } from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ProjectPopup from "../components/ProjectPopup";

export default function Home() {
  const [isProjectPopupOpen, setIsProjectPopupOpen] = useState(false);

  const openProjectPopup = () => setIsProjectPopupOpen(true);
  const closeProjectPopup = () => setIsProjectPopupOpen(false);

  return (
    <>
      <NextSeo
        title="Navneet Kumar - Full Stack Developer Portfolio | React, Next.js, Node.js Expert"
        description="Professional Full Stack Developer portfolio of Navneet Kumar. Specializing in React, Next.js, Node.js, MongoDB, and modern web technologies. View projects, experience, skills, and get in touch for collaboration."
        canonical="https://navneet-portfolio.vercel.app"
        openGraph={{
          title: 'Navneet Kumar - Full Stack Developer Portfolio | React, Next.js, Node.js Expert',
          description: 'Professional Full Stack Developer portfolio of Navneet Kumar. Specializing in React, Next.js, Node.js, MongoDB, and modern web technologies.',
          url: 'https://navneet-portfolio.vercel.app',
          siteName: 'Navneet Kumar Portfolio',
          images: [
            {
              url: 'https://navneet-portfolio.vercel.app/og-image.png',
              width: 1200,
              height: 630,
              alt: 'Navneet Kumar - Full Stack Developer Portfolio',
            },
          ],
          locale: 'en_US',
          type: 'website',
        }}
        twitter={{
          handle: '@Navi9971',
          site: '@Navi9971',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'Full Stack Developer, React Developer, Next.js Developer, Node.js Developer, JavaScript Developer, TypeScript Developer, Web Development, Frontend Developer, Backend Developer, MongoDB Developer, Portfolio, Navneet Kumar, React.js, Node.js, MongoDB, Express.js, Tailwind CSS, Web Applications, Mobile-First Design, Responsive Design',
          },
          {
            name: 'author',
            content: 'Navneet Kumar',
          },
          {
            name: 'robots',
            content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
          },
          {
            name: 'googlebot',
            content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
          },
        ]}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
          {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon.png',
            sizes: '180x180',
          },
          {
            rel: 'manifest',
            href: '/manifest.json',
          },
        ]}
      />
      <Head>
        {/* Additional meta tags for better SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Page-specific structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Navneet Kumar Portfolio",
              "description": "Professional portfolio of Navneet Kumar, a Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies",
              "url": "https://navneet-portfolio.vercel.app",
              "mainEntity": {
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
                  "Express.js",
                  "Tailwind CSS",
                  "Full Stack Development",
                  "Web Development",
                  "Frontend Development",
                  "Backend Development"
                ],
                "hasOccupation": {
                  "@type": "Occupation",
                  "name": "Full Stack Developer",
                  "occupationLocation": {
                    "@type": "Place",
                    "name": "India"
                  }
                }
              },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://navneet-portfolio.vercel.app"
                  }
                ]
              }
            })
          }}
        />
      </Head>
      <div className="bg-black text-white">
        <Navbar />
        <Hero />
        <About onStartProject={openProjectPopup} />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
        <ProjectPopup isOpen={isProjectPopupOpen} onClose={closeProjectPopup} />
      </div>
    </>
  );
}