import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { blogPosts } from '../../data/blogdata';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function BlogPost({ post }) {
  useEffect(() => {
    const updateReadingProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      const progressBar = document.getElementById('reading-progress');
      if (progressBar) {
        progressBar.style.width = scrollPercent + '%';
      }
    };

    window.addEventListener('scroll', updateReadingProgress);
    return () => window.removeEventListener('scroll', updateReadingProgress);
  }, []);

  if (!post) {
    return (
      <>
        <Head>
          <title>Blog Post Not Found | Navneet Kumar</title>
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 text-center">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/50">
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">Blog Post Not Found</h1>
              <p className="text-gray-400 mb-6 text-sm sm:text-base">The blog post you're looking for doesn't exist.</p>
              <Link href="/blog" className="inline-flex items-center px-4 sm:px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                ← Back to Blog
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Generate structured data for blog post
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.summary,
    "image": `https://navneet-portfolio.vercel.app${post.image}`,
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": "https://navneet-portfolio.vercel.app"
    },
    "publisher": {
      "@type": "Person",
      "name": "Navneet Kumar",
      "url": "https://navneet-portfolio.vercel.app"
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "url": `https://navneet-portfolio.vercel.app/blog/${post.slug}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://navneet-portfolio.vercel.app/blog/${post.slug}`
    },
    "keywords": post.tags.join(", "),
    "articleSection": "Web Development",
    "inLanguage": "en-US"
  };

  // Breadcrumb structured data
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://navneet-portfolio.vercel.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://navneet-portfolio.vercel.app/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://navneet-portfolio.vercel.app/blog/${post.slug}`
      }
    ]
  };

  return (
    <>
      <Head>
        <title>{post.title} | Navneet Kumar's Blog</title>
        <meta name="description" content={post.summary} />
        <meta name="keywords" content={`${post.tags.join(", ")}, web development, programming, tutorial`} />
        <meta name="author" content={post.author} />
        <meta name="article:author" content={post.author} />
        <meta name="article:published_time" content={post.date} />
        <meta name="article:modified_time" content={post.date} />
        <meta name="article:section" content="Web Development" />
        <meta name="article:tag" content={post.tags.join(", ")} />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.summary} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://navneet-portfolio.vercel.app/blog/${post.slug}`} />
        <meta property="og:image" content={`https://navneet-portfolio.vercel.app${post.image}`} />
        <meta property="og:site_name" content="Navneet Kumar Portfolio" />
        <meta property="article:author" content={post.author} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:modified_time" content={post.date} />
        <meta property="article:section" content="Web Development" />
        <meta property="article:tag" content={post.tags.join(", ")} />
        
        {/* Twitter */}
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.summary} />
        <meta name="twitter:image" content={`https://navneet-portfolio.vercel.app${post.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Navi9971" />
        <meta name="twitter:creator" content="@Navi9971" />
        
        {/* Canonical */}
        <link rel="canonical" href={`https://navneet-portfolio.vercel.app/blog/${post.slug}`} />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbData)
          }}
        />
      </Head>
      
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-20">
        {/* Breadcrumbs */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-400" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-blue-400 transition-colors duration-300">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-blue-400 transition-colors duration-300">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-300 truncate">{post.title}</span>
          </nav>
        </div>

        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 sm:mb-8 group transition-all duration-300 text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/50">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-col gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <img 
                      src={post.image} 
                      alt={`Cover image for ${post.title}`}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-xl border-2 border-gray-700/50" 
                    />
                    <div>
                      <span className="block text-gray-300 font-medium text-sm sm:text-base">By {post.author}</span>
                      <span className="block text-gray-500 text-xs sm:text-sm">{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 mt-8">
          <div className="bg-gray-800/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/30">
            <article 
              className="prose prose-sm sm:prose-base lg:prose-lg max-w-none 
                prose-headings:text-white prose-headings:font-bold 
                prose-h2:text-xl sm:prose-h2:text-2xl lg:prose-h2:text-3xl prose-h2:mb-4 sm:prose-h2:mb-6 prose-h2:mt-8 sm:prose-h2:mt-12 
                prose-h3:text-lg sm:prose-h3:text-xl lg:prose-h3:text-2xl prose-h3:mb-3 sm:prose-h3:mb-4 prose-h3:mt-6 sm:prose-h3:mt-8 
                prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4 sm:prose-p:mb-6 prose-p:text-sm sm:prose-p:text-base 
                prose-strong:text-white prose-strong:font-semibold 
                prose-code:bg-gray-700/50 prose-code:text-blue-300 prose-code:px-1 sm:prose-code:px-2 prose-code:py-0.5 sm:prose-code:py-1 prose-code:rounded prose-code:text-xs sm:prose-code:text-sm
                prose-pre:bg-gray-900/80 prose-pre:border prose-pre:border-gray-700/50 prose-pre:rounded-xl prose-pre:p-3 sm:prose-pre:p-6 prose-pre:overflow-x-auto prose-pre:text-xs sm:prose-pre:text-sm
                prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 sm:prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-300 prose-blockquote:text-sm sm:prose-blockquote:text-base
                prose-ul:text-gray-300 prose-ol:text-gray-300 prose-li:mb-1 sm:prose-li:mb-2 prose-li:text-sm sm:prose-li:text-base
                prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300
                prose-img:rounded-lg prose-img:shadow-lg"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </div>
        </div>

        {/* Related Posts Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
          <div className="bg-gray-800/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/30">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">More Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {blogPosts
                .filter(p => p.id !== post.id)
                .slice(0, 2)
                .map(relatedPost => (
                  <Link 
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="group block bg-gray-700/30 rounded-xl p-4 sm:p-6 border border-gray-600/30 hover:border-blue-500/50 transition-all duration-300 hover:bg-gray-700/50"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <img 
                        src={relatedPost.image} 
                        alt={`Cover image for ${relatedPost.title}`}
                        className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg flex-shrink-0" 
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300 mb-2 line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-400 text-xs sm:text-sm line-clamp-2 mb-2">
                          {relatedPost.summary}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500 text-xs">{relatedPost.date}</span>
                          <span className="text-blue-400 text-xs group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>

        {/* Reading Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-40">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
            style={{ width: '0%' }}
            id="reading-progress"
          ></div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: blogPosts.map(post => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = blogPosts.find(p => p.slug === params.slug) || null;
  return {
    props: { post },
  };
} 