import Head from 'next/head';
import Link from 'next/link';
import { blogPosts } from '../data/blogdata';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Blog() {
  // Generate structured data for blog listing
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Navneet Kumar's Blog",
    "description": "Technical blogs on HTML, CSS, JavaScript, React, and web development by Navneet Kumar.",
    "url": "https://navneet-portfolio.vercel.app/blog",
    "author": {
      "@type": "Person",
      "name": "Navneet Kumar",
      "url": "https://navneet-portfolio.vercel.app"
    },
    "publisher": {
      "@type": "Person",
      "name": "Navneet Kumar"
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.summary,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "datePublished": post.date,
      "dateModified": post.date,
      "url": `https://navneet-portfolio.vercel.app/blog/${post.slug}`,
      "image": `https://navneet-portfolio.vercel.app${post.image}`,
      "keywords": post.tags.join(", ")
    }))
  };

  return (
    <>
      <Head>
        <title>Blog - Web Development & Tech Insights | Navneet Kumar</title>
        <meta name="description" content="Explore technical blogs on HTML, CSS, JavaScript, React, Node.js, and modern web development. Learn from practical examples and industry insights by Full Stack Developer Navneet Kumar." />
        <meta name="keywords" content="web development blog, HTML tutorials, CSS guides, JavaScript tips, React development, Node.js, MongoDB, frontend development, backend development, full stack development" />
        <meta name="author" content="Navneet Kumar" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Blog - Web Development & Tech Insights | Navneet Kumar" />
        <meta property="og:description" content="Explore technical blogs on HTML, CSS, JavaScript, React, Node.js, and modern web development. Learn from practical examples and industry insights." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://navneet-portfolio.vercel.app/blog" />
        <meta property="og:image" content="https://navneet-portfolio.vercel.app/blog.png" />
        <meta property="og:site_name" content="Navneet Kumar Portfolio" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Blog - Web Development & Tech Insights | Navneet Kumar" />
        <meta name="twitter:description" content="Explore technical blogs on HTML, CSS, JavaScript, React, Node.js, and modern web development." />
        <meta name="twitter:image" content="https://navneet-portfolio.vercel.app/blog.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Navi9971" />
        <meta name="twitter:creator" content="@Navi9971" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://navneet-portfolio.vercel.app/blog" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </Head>
      <div className="bg-black text-white min-h-screen">
        <Navbar />
        
        {/* Hero Section */}
        <div className="relative pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Blog
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Exploring the latest in web development, design patterns, and technical insights
              </p>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="max-w-7xl mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <article key={post.id} className="group h-full">
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-800/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm h-full flex flex-col">
                    
                    {/* Image Container */}
                    <div className="relative h-48 overflow-hidden rounded-t-2xl flex-shrink-0">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map(tag => (
                          <span 
                            key={tag} 
                            className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full border border-blue-500/30 backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300 line-clamp-2 flex-shrink-0">
                        {post.title}
                      </h2>

                      {/* Summary */}
                      <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                        {post.summary}
                      </p>

                      {/* Date and Read More */}
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-gray-400 text-xs font-medium">
                          {post.date}
                        </span>
                        <div className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors duration-300">
                          Read More
                          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {blogPosts.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No blog posts yet</h3>
              <p className="text-gray-400">Check back soon for new content!</p>
            </div>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
} 