export const blogPosts = [
    {
      id: 1,
      title: "Getting Started with HTML: The Building Blocks of the Web",
      slug: "getting-started-with-html",
      summary: "Learn the basics of HTML, the foundational language for creating web pages.",
      content: `
        <h2>Introduction</h2>
        <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages. It provides the structure for web content and is essential for anyone starting in web development.</p>
        <h3>Basic Structure</h3>
        <pre><code>&lt;!DOCTYPE html&gt;
  &lt;html&gt;
    &lt;head&gt;
      &lt;title&gt;My First HTML Page&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
      &lt;h1&gt;Hello, World!&lt;/h1&gt;
    &lt;/body&gt;
  &lt;/html&gt;</code></pre>
        <p>This is the basic structure of an HTML document.</p>
      `,
      author: "Navneet Kumar",
      date: "2024-06-01",
      tags: ["HTML", "Web Development", "Beginner"],
      image: "/blog.png"
    },
    {
      id: 2,
      title: "Mastering CSS: Styling the Web",
      slug: "mastering-css-styling-the-web",
      summary: "A comprehensive guide to CSS for making your websites beautiful and responsive.",
      content: `
        <h2>Introduction</h2>
        <p>CSS (Cascading Style Sheets) is used to style and layout web pages. With CSS, you can control colors, fonts, spacing, and even create animations.</p>
        <h3>Example: Changing Text Color</h3>
        <pre><code>h1 {
    color: blue;
  }</code></pre>
        <p>This CSS rule will make all &lt;h1&gt; elements blue.</p>
      `,
      author: "Navneet Kumar",
      date: "2024-06-02",
      tags: ["CSS", "Web Design", "Frontend"],
      image: "/blog.png"
    },
    {
      id: 3,
      title: "Responsive Web Design: Mobile First Approach",
      slug: "responsive-web-design-mobile-first",
      summary: "Learn how to make your websites look great on all devices using responsive design techniques.",
      content: `
        <h2>Why Responsive Design?</h2>
        <p>With the variety of devices available today, responsive design ensures your website looks good on phones, tablets, and desktops.</p>
        <h3>Media Query Example</h3>
        <pre><code>@media (max-width: 600px) {
    body {
      background-color: lightgray;
    }
  }</code></pre>
        <p>This CSS will change the background color on small screens.</p>
      `,
      author: "Navneet Kumar",
      date: "2024-06-03",
      tags: ["Responsive Design", "CSS", "Mobile"],
      image: "/blog.png"
    },
    {
      id: 4,
      title: "JavaScript Essentials: Making Web Pages Interactive",
      slug: "javascript-essentials",
      summary: "Understand how JavaScript enhances web pages with interactivity and logic through DOM manipulation and event handling.",
      content: `
        <h2>What is JavaScript?</h2>
        <p>JavaScript is a high-level programming language primarily used for client-side development. It allows dynamic content updates, control of multimedia, animation, and more.</p>
        
        <h3>Basic Syntax</h3>
        <pre><code>// Declaring variables
  let name = "Alice";
  const PI = 3.14;
  var age = 25;
  
  // Functions
  function greet() {
    console.log("Hello, " + name);
  }</code></pre>
  
        <h3>DOM Manipulation</h3>
        <p>JavaScript can change HTML content dynamically:</p>
        <pre><code>document.getElementById("demo").innerHTML = "Updated with JS!";</code></pre>
  
        <h3>Events</h3>
        <p>You can handle user actions using events:</p>
        <pre><code>document.querySelector("button").addEventListener("click", function() {
    alert("Button clicked!");
  });</code></pre>
  
        <p>JavaScript is also used with frameworks like React, Angular, and Vue for full web applications.</p>
      `,
      author: "Navneet Kumar",
      date: "2025-06-21",
      tags: ["JavaScript", "DOM", "Events", "Frontend"],
      image: "/blog.png"
    },
    {
      id: 5,
      title: "MongoDB Basics: NoSQL for Modern Applications",
      slug: "mongodb-basics",
      summary: "Explore MongoDB, a NoSQL document database ideal for scalable and flexible applications.",
      content: `
        <h2>What is MongoDB?</h2>
        <p>MongoDB stores data in BSON (binary JSON) format, offering schema-less flexibility and fast development cycles.</p>
  
        <h3>Installing MongoDB</h3>
        <p>Use the official website or run:</p>
        <pre><code>brew tap mongodb/brew
  brew install mongodb-community@6.0</code></pre>
  
        <h3>Creating a Document</h3>
        <pre><code>db.users.insertOne({
    name: "Alice",
    email: "alice@example.com",
    created_at: new Date()
  });</code></pre>
  
        <h3>Querying Data</h3>
        <pre><code>db.users.find({ name: "Alice" })</code></pre>
  
        <p>MongoDB works well with Node.js using the Mongoose library for schema validation.</p>
      `,
      author: "Navneet Kumar",
      date: "2025-06-21",
      tags: ["MongoDB", "NoSQL", "Backend", "Database"],
      image: "/blog.png"
    },
    {
      id: 6,
      title: "Smooth Animations in React with Framer Motion",
      slug: "framer-motion-animations",
      summary: "Use Framer Motion to bring elegant animations to your React UI components.",
      content: `
        <h2>Why Framer Motion?</h2>
        <p>Framer Motion offers declarative animations with great defaults, layout transitions, and gesture support in React.</p>
  
        <h3>Installation</h3>
        <pre><code>npm install framer-motion</code></pre>
  
        <h3>Simple Fade In</h3>
        <pre><code>import { motion } from 'framer-motion';
  
  const FadeIn = () => (
    &lt;motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}&gt;
      Hello World
    &lt;/motion.div&gt;
  );</code></pre>
  
        <h3>Animate on Hover</h3>
        <pre><code>&lt;motion.button whileHover={{ scale: 1.1 }}&gt;Hover me&lt;/motion.button&gt;</code></pre>
  
        <p>Framer Motion also supports scroll-based animations and layout animations with ease.</p>
      `,
      author: "Navneet Kumar",
      date: "2025-06-21",
      tags: ["React", "Framer Motion", "Animation", "Frontend"],
      image: "/blog.png"
    },
    {
      id: 7,
      title: "Powerful Web Animations with GSAP",
      slug: "gsap-animations-guide",
      summary: "Master GSAP for complex, performant animations across any web platform.",
      content: `
        <h2>What is GSAP?</h2>
        <p>GSAP (GreenSock Animation Platform) is a fast and robust library to animate HTML, SVG, and JavaScript elements.</p>
  
        <h3>Basic Animation</h3>
        <pre><code>gsap.to(".box", {
    x: 300,
    duration: 2,
    ease: "bounce"
  });</code></pre>
  
        <h3>Timeline Control</h3>
        <pre><code>let tl = gsap.timeline();
  tl.to(".box", { x: 200 })
    .to(".box", { rotate: 360 })
    .to(".box", { scale: 1.5 });</code></pre>
  
        <p>GSAP can be used with ScrollTrigger for scroll animations and integrates well with React and Vue.</p>
      `,
      author: "Navneet Kumar",
      date: "2025-06-21",
      tags: ["GSAP", "Web Animation", "Frontend"],
      image: "/blog.png"
    },
    {
      id: 8,
      title: "Complete SEO Guide: Optimize Your Website for Search Engines",
      slug: "complete-seo-guide-optimize-website",
      summary: "Master the fundamentals of Search Engine Optimization (SEO) to improve your website's visibility and ranking in search results.",
      content: `
        <h2>What is SEO?</h2>
        <p>Search Engine Optimization (SEO) is the practice of optimizing your website to increase its visibility in search engine results pages (SERPs). Good SEO helps your site rank higher, driving more organic traffic.</p>
  
        <h2>On-Page SEO Fundamentals</h2>
        
        <h3>1. Title Tags</h3>
        <p>Title tags are crucial for SEO. They should be descriptive, include your target keyword, and be under 60 characters.</p>
        <pre><code>&lt;title&gt;Complete SEO Guide: Optimize Your Website for Search Engines&lt;/title&gt;</code></pre>
  
        <h3>2. Meta Descriptions</h3>
        <p>Meta descriptions appear in search results and should be compelling, under 160 characters, and include your target keyword.</p>
        <pre><code>&lt;meta name="description" content="Master the fundamentals of Search Engine Optimization (SEO) to improve your website's visibility and ranking in search results." /&gt;</code></pre>
  
        <h3>3. Header Tags (H1, H2, H3)</h3>
        <p>Use header tags to structure your content hierarchically. Each page should have one H1 tag.</p>
        <pre><code>&lt;h1&gt;Complete SEO Guide&lt;/h1&gt;
  &lt;h2&gt;On-Page SEO Fundamentals&lt;/h2&gt;
  &lt;h3&gt;Title Tags&lt;/h3&gt;</code></pre>
  
        <h3>4. Image Optimization</h3>
        <p>Always include alt text for images to improve accessibility and SEO.</p>
        <pre><code>&lt;img src="seo-guide.jpg" alt="Complete SEO optimization guide for websites" /&gt;</code></pre>
  
        <h2>Technical SEO</h2>
        
        <h3>1. Site Speed</h3>
        <p>Page loading speed is a ranking factor. Optimize images, minify CSS/JS, and use a CDN.</p>
        
        <h3>2. Mobile-First Design</h3>
        <p>Google uses mobile-first indexing. Ensure your site is responsive and mobile-friendly.</p>
        
        <h3>3. SSL Certificate</h3>
        <p>HTTPS is essential for security and SEO. Google favors secure websites.</p>
  
        <h2>Content SEO</h2>
        
        <h3>1. Keyword Research</h3>
        <p>Use tools like Google Keyword Planner, Ahrefs, or SEMrush to find relevant keywords with good search volume.</p>
        
        <h3>2. Quality Content</h3>
        <p>Create comprehensive, valuable content that answers user queries. Aim for at least 1,500 words for in-depth articles.</p>
        
        <h3>3. Internal Linking</h3>
        <p>Link to other relevant pages on your site to help search engines understand your site structure.</p>
  
        <h2>Structured Data</h2>
        <p>Use JSON-LD structured data to help search engines understand your content better.</p>
        <pre><code>&lt;script type="application/ld+json"&gt;
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete SEO Guide",
    "author": {
      "@type": "Person",
      "name": "Navneet Kumar"
    },
    "datePublished": "2024-01-15",
    "description": "Master the fundamentals of SEO"
  }
  &lt;/script&gt;</code></pre>
  
        <h2>Local SEO</h2>
        <p>For local businesses, optimize for local search by:</p>
        <ul>
          <li>Creating a Google My Business profile</li>
          <li>Including local keywords in your content</li>
          <li>Getting listed in local directories</li>
          <li>Encouraging customer reviews</li>
        </ul>
  
        <h2>SEO Tools</h2>
        <p>Essential tools for SEO optimization:</p>
        <ul>
          <li><strong>Google Search Console:</strong> Monitor your site's performance in search results</li>
          <li><strong>Google Analytics:</strong> Track website traffic and user behavior</li>
          <li><strong>Ahrefs/SEMrush:</strong> Keyword research and competitor analysis</li>
          <li><strong>PageSpeed Insights:</strong> Test your site's loading speed</li>
          <li><strong>Yoast SEO:</strong> WordPress SEO plugin for on-page optimization</li>
        </ul>
  
        <h2>Common SEO Mistakes to Avoid</h2>
        <ul>
          <li>Keyword stuffing</li>
          <li>Duplicate content</li>
          <li>Slow loading times</li>
          <li>Poor mobile optimization</li>
          <li>Missing meta descriptions</li>
          <li>Broken links</li>
          <li>Ignoring local SEO (for local businesses)</li>
        </ul>
  
        <h2>SEO Best Practices</h2>
        <ol>
          <li>Create high-quality, relevant content</li>
          <li>Optimize for user experience</li>
          <li>Use descriptive URLs</li>
          <li>Implement proper heading structure</li>
          <li>Optimize images with alt text</li>
          <li>Build quality backlinks</li>
          <li>Monitor and analyze your performance</li>
          <li>Stay updated with SEO trends</li>
        </ol>
  
        <h2>Conclusion</h2>
        <p>SEO is a long-term strategy that requires consistent effort and optimization. Focus on creating valuable content for your users while following technical SEO best practices. Remember, good SEO takes time, but the results are worth the investment.</p>
  
        <blockquote>
          <p>"SEO is not about gaming the system. It's about creating content that people want to find and share." - Rand Fishkin</p>
        </blockquote>
      `,
      author: "Navneet Kumar",
      date: "2024-01-15",
      tags: ["SEO", "Search Engine Optimization", "Web Development", "Digital Marketing", "Google", "Content Marketing"],
      image: "/blog.png"
    },
    {
      id: 9,
      title: "Next.js SEO Optimization: Best Practices for React Applications",
      slug: "nextjs-seo-optimization-best-practices",
      summary: "Learn how to implement comprehensive SEO strategies in Next.js applications for better search engine visibility and performance.",
      content: `
        <h2>Why SEO Matters in Next.js</h2>
        <p>Next.js provides excellent SEO capabilities out of the box, but proper implementation is crucial for maximum search engine visibility. This guide covers the best practices for optimizing your Next.js application.</p>
  
        <h2>1. Server-Side Rendering (SSR) and Static Generation</h2>
        
        <h3>getServerSideProps for Dynamic Content</h3>
        <pre><code>export async function getServerSideProps(context) {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();
  
    return {
      props: {
        data,
      },
    };
  }</code></pre>
  
        <h3>getStaticProps for Static Content</h3>
        <pre><code>export async function getStaticProps() {
    return {
      props: {
        data: staticData,
      },
      revalidate: 60, // ISR: revalidate every 60 seconds
    };
  }</code></pre>
  
        <h2>2. Dynamic Meta Tags with Next.js</h2>
        
        <h3>Using Next/Head</h3>
        <pre><code>import Head from 'next/head';
  
  export default function BlogPost({ post }) {
    return (
      &lt;&gt;
        &lt;Head&gt;
          &lt;title&gt;{post.title} | My Blog&lt;/title&gt;
          &lt;meta name="description" content={post.excerpt} /&gt;
          &lt;meta property="og:title" content={post.title} /&gt;
          &lt;meta property="og:description" content={post.excerpt} /&gt;
            &lt;meta property="og:image" content={post.featuredImage} /&gt;
          &lt;link rel="canonical" href={\`https://navi.reel-elevate.co.in//blog/\${post.slug}\`} /&gt;
        &lt;/Head&gt;
        &lt;div&gt;
          &lt;h1&gt;{post.title}&lt;/h1&gt;
          &lt;p&gt;{post.excerpt}&lt;/p&gt;
        &lt;/div&gt;
      &lt;/&gt;
    );
  }</code></pre>
  
        <h2>3. Sitemap Generation</h2>
        
        <h3>Using Next/Sitemap</h3>
        <pre><code>// next.config.js
  const withSitemap = require('next-sitemap');
  
  module.exports = withSitemap({
    siteUrl: 'https://navi.reel-elevate.co.in/',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'daily',
    priority: 0.7,
    exclude: ['/admin/*'],
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://navi.reel-elevate.co.in//sitemap.xml',
      ],
    },
  });</code></pre>

      <h2>4. Image Optimization with Next.js Image</h2>
      
      <h3>Optimized Images</h3>
      <pre><code>import Image from 'next/image';

&lt;Image
  src="/blog-post-image.jpg"
  alt="Descriptive alt text for SEO"
  width={800}
  height={400}
  priority={true} // For above-the-fold images
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/&gt;</code></pre>

      <h2>5. Performance Optimization</h2>
      
      <h3>Code Splitting</h3>
      <pre><code>import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('../components/HeavyComponent'), {
  loading: () => &lt;p&gt;Loading...&lt;/p&gt;,
  ssr: false // If component uses browser APIs
});</code></pre>

      <h2>6. SEO-Friendly URLs</h2>
      
      <h3>Dynamic Routes</h3>
      <pre><code>// pages/blog/[slug].js
export async function getStaticPaths() {
  const posts = await getBlogPosts();
  
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: 'blocking', // or false
  };
}</code></pre>

      <h2>7. Open Graph and Social Media</h2>
      
      <h3>Comprehensive Social Meta Tags</h3>
      <pre><code>&lt;Head&gt;
  {/* Open Graph */}
  &lt;meta property="og:type" content="article" /&gt;
  &lt;meta property="og:title" content={post.title} /&gt;
  &lt;meta property="og:description" content={post.excerpt} /&gt;
  &lt;meta property="og:image" content={post.featuredImage} /&gt;
  &lt;meta property="og:url" content={\`https://navi.reel-elevate.co.in//blog/\${post.slug}\`} /&gt;
  &lt;meta property="og:site_name" content="My Blog" /&gt;
  
  {/* Twitter */}
  &lt;meta name="twitter:card" content="summary_large_image" /&gt;
  &lt;meta name="twitter:site" content="@yourhandle" /&gt;
  &lt;meta name="twitter:creator" content="@yourhandle" /&gt;
  &lt;meta name="twitter:title" content={post.title} /&gt;
  &lt;meta name="twitter:description" content={post.excerpt} /&gt;
  &lt;meta name="twitter:image" content={post.featuredImage} /&gt;
&lt;/Head&gt;</code></pre>

      <h2>8. Core Web Vitals Optimization</h2>
      
      <h3>Largest Contentful Paint (LCP)</h3>
      <ul>
        <li>Use Next.js Image component with priority prop</li>
        <li>Implement proper caching strategies</li>
        <li>Optimize server response times</li>
      </ul>

      <h3>First Input Delay (FID)</h3>
      <ul>
        <li>Minimize JavaScript bundle size</li>
        <li>Use code splitting effectively</li>
        <li>Optimize third-party scripts</li>
      </ul>

      <h3>Cumulative Layout Shift (CLS)</h3>
      <ul>
        <li>Set explicit dimensions for images</li>
        <li>Avoid inserting content above existing content</li>
        <li>Use CSS transforms instead of changing layout properties</li>
      </ul>

      <h2>9. SEO Monitoring and Analytics</h2>
      
      <h3>Google Search Console Integration</h3>
      <pre><code>// Add verification meta tag
&lt;Head&gt;
  &lt;meta name="google-site-verification" content="your-verification-code" /&gt;
&lt;/Head&gt;</code></pre>

      <h3>Analytics Setup</h3>
      <pre><code>// pages/_app.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return &lt;Component {...pageProps} /&gt;;
}</code></pre>

      <h2>10. Advanced SEO Techniques</h2>
      
      <h3>Breadcrumbs</h3>
      <pre><code>const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://navi.reel-elevate.co.in/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://navi.reel-elevate.co.in//blog"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": post.title,
        "item": \`https://navi.reel-elevate.co.in//blog/\${post.slug}\`
    }
  ]
};</code></pre>

      <h3>FAQ Schema</h3>
      <pre><code>const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Next.js?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Next.js is a React framework that enables server-side rendering and static site generation."
      }
    }
  ]
};</code></pre>

      <h2>Best Practices Checklist</h2>
      <ul>
        <li>✅ Use SSR or SSG for all pages</li>
        <li>✅ Implement proper meta tags</li>
        <li>✅ Add structured data</li>
        <li>✅ Optimize images with Next.js Image</li>
        <li>✅ Generate dynamic sitemaps</li>
        <li>✅ Configure robots.txt</li>
        <li>✅ Use SEO-friendly URLs</li>
        <li>✅ Implement Open Graph tags</li>
        <li>✅ Monitor Core Web Vitals</li>
        <li>✅ Set up analytics tracking</li>
        <li>✅ Add breadcrumb navigation</li>
        <li>✅ Optimize for mobile devices</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Next.js provides powerful tools for SEO optimization. By implementing these best practices, you can significantly improve your application's search engine visibility and user experience. Remember to monitor your performance regularly and stay updated with the latest SEO trends and Next.js features.</p>

      <blockquote>
        <p>"SEO is not about tricking Google. It's about creating content that people want to find and share, and making it easy for search engines to understand and index."</p>
      </blockquote>
    `,
    author: "Navneet Kumar",
    date: "2024-01-20",
    tags: ["Next.js", "SEO", "React", "Web Development", "Performance", "Search Engine Optimization"],
    image: "/blog.png"
  }
];