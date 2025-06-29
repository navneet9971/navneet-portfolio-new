import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
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
      title: "Information We Collect",
      content: [
        "We collect information you provide directly to us, such as when you contact us through our website, subscribe to our newsletter, or engage with our services.",
        "This may include your name, email address, phone number, and any other information you choose to provide.",
        "We also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, and usage patterns."
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "We use the information we collect to provide, maintain, and improve our services.",
        "To communicate with you about our services, respond to your inquiries, and provide customer support.",
        "To send you technical notices, updates, security alerts, and support messages.",
        "To monitor and analyze trends, usage, and activities in connection with our services."
      ]
    },
    {
      title: "Information Sharing",
      content: [
        "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent.",
        "We may share your information with trusted third-party service providers who assist us in operating our website and providing our services.",
        "We may also disclose your information if required by law or to protect our rights, property, or safety."
      ]
    },
    {
      title: "Data Security",
      content: [
        "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
        "However, no method of transmission over the internet or electronic storage is 100% secure.",
        "We cannot guarantee absolute security, but we strive to protect your information to the best of our ability."
      ]
    },
    {
      title: "Cookies and Tracking Technologies",
      content: [
        "We use cookies and similar tracking technologies to enhance your experience on our website.",
        "These technologies help us understand how you use our site and improve our services.",
        "You can control cookie settings through your browser preferences."
      ]
    },
    {
      title: "Your Rights",
      content: [
        "You have the right to access, update, or delete your personal information.",
        "You can opt out of receiving marketing communications from us at any time.",
        "You may also request a copy of the personal information we hold about you."
      ]
    },
    {
      title: "Children's Privacy",
      content: [
        "Our services are not intended for children under the age of 13.",
        "We do not knowingly collect personal information from children under 13.",
        "If you believe we have collected information from a child under 13, please contact us immediately."
      ]
    },
    {
      title: "Changes to This Policy",
      content: [
        "We may update this Privacy Policy from time to time.",
        "We will notify you of any changes by posting the new Privacy Policy on this page.",
        "Your continued use of our services after any changes constitutes acceptance of the updated policy."
      ]
    },
    {
      title: "Contact Us",
      content: [
        "If you have any questions about this Privacy Policy or our data practices, please contact us at:",
        "Email: Navneetjha2012@gmail.com",
        "We will respond to your inquiry as soon as possible."
      ]
    }
  ];

  return (
    <>
      <NextSeo
        title="Privacy Policy - Navneet Kumar"
        description="Privacy Policy for Navneet Kumar's portfolio website. Learn how we collect, use, and protect your personal information."
        canonical="https://navi.reel-elevate.co.in/privacy-policy"
        openGraph={{
          title: 'Privacy Policy - Navneet Kumar',
          description: 'Privacy Policy for Navneet Kumar\'s portfolio website. Learn how we collect, use, and protect your personal information.',
          url: 'https://navi.reel-elevate.co.in/privacy-policy',
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
              "name": "Privacy Policy",
              "description": "Privacy Policy for Navneet Kumar's portfolio website",
              "url": "https://navi.reel-elevate.co.in/privacy-policy",
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
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Privacy Policy
                </span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-6"></div>
              <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
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
                    whileHover={{ color: "#60A5FA" }}
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
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
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

export default PrivacyPolicy; 