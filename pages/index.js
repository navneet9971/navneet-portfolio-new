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
        title="Navneet Kumar - Full Stack Developer Portfolio"
        description="Professional portfolio of Navneet Kumar, a Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. View projects, experience, and skills."
        canonical="https://navneet-portfolio.vercel.app"
        openGraph={{
          title: 'Navneet Kumar - Full Stack Developer Portfolio',
          description: 'Professional portfolio of Navneet Kumar, a Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.',
          url: 'https://navneet-portfolio.vercel.app',
          siteName: 'Navneet Kumar Portfolio',
          images: [
            {
              url: 'https://navneet-portfolio.vercel.app/og-image.png',
              width: 1200,
              height: 630,
              alt: 'Navneet Kumar - Full Stack Developer',
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
            content: 'Full Stack Developer, React Developer, Next.js, Node.js, JavaScript, TypeScript, Web Development, Portfolio, Navneet Kumar, Frontend Developer, Backend Developer',
          },
        ]}
      />
      <Head>
        {/* Page-specific structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Navneet Kumar Portfolio",
              "description": "Professional portfolio of Navneet Kumar, a Full Stack Developer",
              "url": "https://navneet-portfolio.vercel.app",
              "mainEntity": {
                "@type": "Person",
                "name": "Navneet Kumar",
                "jobTitle": "Full Stack Developer",
                "description": "Professional Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies",
                "url": "https://navneet-portfolio.vercel.app",
                "sameAs": [
                  "https://github.com/navneet9971",
                  "https://x.com/Navi9971",
                  "https://www.linkedin.com/in/navneet-kumar-42b75b204/"
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