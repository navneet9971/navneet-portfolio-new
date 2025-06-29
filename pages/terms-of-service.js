import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsOfService = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.",
        "If you do not agree to abide by the above, please do not use this service.",
        "These terms apply to all visitors, users, and others who access or use the service."
      ]
    },
    {
      title: "Use License",
      content: [
        "Permission is granted to temporarily download one copy of the materials (information or software) on Navneet Kumar's website for personal, non-commercial transitory viewing only.",
        "This is the grant of a license, not a transfer of title, and under this license you may not:",
        "• Modify or copy the materials",
        "• Use the materials for any commercial purpose or for any public display (commercial or non-commercial)",
        "• Attempt to decompile or reverse engineer any software contained on the website",
        "• Remove any copyright or other proprietary notations from the materials",
        "• Transfer the materials to another person or 'mirror' the materials on any other server"
      ]
    },
    {
      title: "Disclaimer",
      content: [
        "The materials on Navneet Kumar's website are provided on an 'as is' basis. Navneet Kumar makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
        "Further, Navneet Kumar does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site."
      ]
    },
    {
      title: "Limitations",
      content: [
        "In no event shall Navneet Kumar or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Navneet Kumar's website, even if Navneet Kumar or a Navneet Kumar authorized representative has been notified orally or in writing of the possibility of such damage.",
        "Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you."
      ]
    },
    {
      title: "Accuracy of Materials",
      content: [
        "The materials appearing on Navneet Kumar's website could include technical, typographical, or photographic errors. Navneet Kumar does not warrant that any of the materials on its website are accurate, complete or current.",
        "Navneet Kumar may make changes to the materials contained on its website at any time without notice. However, Navneet Kumar does not make any commitment to update the materials."
      ]
    },
    {
      title: "Links",
      content: [
        "Navneet Kumar has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Navneet Kumar of the site.",
        "Use of any such linked website is at the user's own risk."
      ]
    },
    {
      title: "Modifications",
      content: [
        "Navneet Kumar may revise these terms of service for its website at any time without notice.",
        "By using this website you are agreeing to be bound by the then current version of these Terms and Conditions of Use."
      ]
    },
    {
      title: "Governing Law",
      content: [
        "These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location."
      ]
    },
    {
      title: "Contact Information",
      content: [
        "If you have any questions about these Terms of Service, please contact us at:",
        "Email: Navneetjha2012@gmail.com",
        "We will respond to your inquiry as soon as possible."
      ]
    }
  ];

  return (
    <>
      <NextSeo
        title="Terms of Service - Navneet Kumar"
        description="Terms of Service for Navneet Kumar's portfolio website. Read about the terms and conditions for using our services."
        canonical="https://navi.reel-elevate.co.in/terms-of-service"
        openGraph={{
          title: 'Terms of Service - Navneet Kumar',
          description: 'Terms of Service for Navneet Kumar\'s portfolio website. Read about the terms and conditions for using our services.',
          url: 'https://navi.reel-elevate.co.in/terms-of-service',
          siteName: 'Navneet Kumar Portfolio',
        }}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Terms of Service",
              "description": "Terms of Service for Navneet Kumar's portfolio website",
              "url": "https://navi.reel-elevate.co.in/terms-of-service",
            })
          }}
        />
      </Head>
      <div className="bg-black text-white min-h-screen">
        <Navbar />
        
        {/* Hero Section */}
        <motion.div 
          className="pt-32 pb-16 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto max-w-4xl">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                  Terms of Service
                </span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full mb-6"></div>
              <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                Please read these terms and conditions carefully before using our website and services.
              </p>
              <div className="mt-8 text-sm text-gray-400">
                Last updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div 
          className="px-4 sm:px-6 lg:px-8 pb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6 sm:p-8 lg:p-12">
              {sections.map((section, index) => (
                <motion.div 
                  key={index}
                  className="mb-12 last:mb-0"
                  variants={itemVariants}
                >
                  <motion.h2 
                    className="text-2xl sm:text-3xl font-bold mb-6 text-white"
                    whileHover={{ color: "#A78BFA" }}
                    transition={{ duration: 0.3 }}
                  >
                    {section.title}
                  </motion.h2>
                  <div className="space-y-4">
                    {section.content.map((paragraph, pIndex) => (
                      <motion.p 
                        key={pIndex}
                        className="text-gray-300 leading-relaxed text-base sm:text-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: pIndex * 0.1 }}
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                  </div>
                  {index < sections.length - 1 && (
                    <motion.div 
                      className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mt-8"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Back to Home Button */}
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.a
                href="/"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        <Footer />
      </div>
    </>
  );
};

export default TermsOfService; 