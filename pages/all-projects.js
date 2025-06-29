import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../data/data';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollAnimation from "../components/ScrollAnimation";

export default function AllProjects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [showAllCategories, setShowAllCategories] = useState(false);
  
  // Ref for project details section
  const projectDetailsRef = useRef(null);

  // Auto-scroll to project details on mobile when project is selected
  useEffect(() => {
    const handleProjectSelect = () => {
      if (window.innerWidth < 1024 && projectDetailsRef.current) { // lg breakpoint
        setTimeout(() => {
          projectDetailsRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    };

    handleProjectSelect();
  }, [selectedProject]);

  // Get unique categories from projects
  const categories = ['all', ...new Set(projects.flatMap(project => 
    project.iconLists.map(icon => {
      const name = icon.replace('/', '').replace('.svg', '').replace('.png', '');
      return name.charAt(0).toUpperCase() + name.slice(1).toUpperCase();
    })
  ))];

  // Get categories to display (first 5 or all based on state)
  const displayedCategories = showAllCategories ? categories : categories.slice(0, 5);

  // Filter projects based on search and category
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.des.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           project.iconLists.some(icon => {
                             const name = icon.replace('/', '').replace('.svg', '').replace('.png', '');
                             return (name.charAt(0).toUpperCase() + name.slice(1).toUpperCase()) === selectedCategory;
                           });
    return matchesSearch && matchesCategory;
  });

  // Function to get technology name from icon path
  const getTechName = (iconPath) => {
    const name = iconPath.replace('/', '').replace('.svg', '').replace('.png', '');
    return name.charAt(0).toUpperCase() + name.slice(1).toUpperCase();
  };

  return (
    <>
      <NextSeo
        title="All Projects - Navneet Kumar | Full Stack Developer Portfolio"
        description="Explore all projects by Navneet Kumar - Full Stack Developer. View web applications, mobile apps, and innovative solutions built with React, Next.js, Node.js, and modern technologies."
        canonical="https://navi.reel-elevate.co.in/all-projects"
        openGraph={{
          title: 'All Projects - Navneet Kumar | Full Stack Developer Portfolio',
          description: 'Explore all projects by Navneet Kumar - Full Stack Developer. View web applications, mobile apps, and innovative solutions built with React, Next.js, Node.js, and modern technologies.',
          url: 'https://navi.reel-elevate.co.in/all-projects',
          siteName: 'Navneet Kumar Portfolio',
          images: [
            {
              url: 'https://navi.reel-elevate.co.in/og-image.png',
              width: 1200,
              height: 630,
              alt: 'All Projects - Navneet Kumar Portfolio',
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
            content: 'Projects, Web Development, React Projects, Next.js Projects, Node.js Projects, Full Stack Projects, JavaScript Projects, TypeScript Projects, MongoDB Projects, Express.js Projects, Web Applications, Mobile Apps, Portfolio Projects, Navneet Kumar Projects',
          },
          {
            name: 'author',
            content: 'Navneet Kumar',
          },
          {
            name: 'robots',
            content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
          },
        ]}
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#000000" />
        
        {/* Structured data for projects page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "All Projects - Navneet Kumar",
              "description": "Complete collection of projects by Navneet Kumar, Full Stack Developer",
              "url": "https://navi.reel-elevate.co.in/all-projects",
              "mainEntity": {
                "@type": "ItemList",
                "itemListElement": projects.map((project, index) => ({
                  "@type": "ListItem",
                  "position": index + 1,
                  "item": {
                    "@type": "SoftwareApplication",
                    "name": project.title,
                    "description": project.des,
                    "url": project.live,
                    "applicationCategory": "WebApplication",
                    "operatingSystem": "Web Browser",
                    "author": {
                      "@type": "Person",
                      "name": "Navneet Kumar"
                    }
                  }
                }))
              }
            })
          }}
        />
      </Head>

      <div className="bg-black text-white min-h-screen">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-10 md:pb-12 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation direction="up" delay={0.2}>
              <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <div className="inline-block mb-4 sm:mb-6">
                  <Link 
                    href="/#projects" 
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 text-xs sm:text-sm font-semibold uppercase tracking-wider"
                  >
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="hidden sm:inline">Back to Featured Projects</span>
                    <span className="sm:hidden">Back</span>
                  </Link>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
                  All Projects
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4">
                  Explore my complete portfolio of web applications, mobile apps, and innovative solutions built with cutting-edge technologies.
                </p>
              </div>
            </ScrollAnimation>

            {/* Search and Filter Section */}
            <ScrollAnimation direction="up" delay={0.4}>
              <div className="max-w-4xl mx-auto mb-6 sm:mb-8 space-y-4 sm:space-y-6">
                {/* Search Bar */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl sm:rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:bg-gray-800/70 transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                  {displayedCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 backdrop-blur-sm text-xs sm:text-sm ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                          : 'bg-gray-800/50 border border-gray-600/50 text-gray-300 hover:border-blue-500/50 hover:bg-gray-800/70'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                {/* Show More Button */}
                <div className="text-center">
                  {showAllCategories ? (
                    <button
                      onClick={() => setShowAllCategories(false)}
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-xs sm:text-sm font-semibold uppercase tracking-wider"
                    >
                      Show Less
                    </button>
                  ) : (
                    <button
                      onClick={() => setShowAllCategories(true)}
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-xs sm:text-sm font-semibold uppercase tracking-wider"
                    >
                      Show More
                    </button>
                  )}
                </div>

                {/* Results Count */}
                <div className="text-center">
                  <p className="text-gray-400 text-sm sm:text-base">
                    Showing {filteredProjects.length} of {projects.length} projects
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Main Content - Responsive Layout */}
        <section className="pb-12 sm:pb-16 md:pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
                {/* Left Panel - Project Details */}
                <ScrollAnimation direction="left" delay={0.2}>
                  <div className="lg:sticky lg:top-8 h-fit order-2 lg:order-1" ref={projectDetailsRef}>
                    <div className="bg-gradient-to-br from-gray-800/50 via-gray-700/50 to-gray-800/50 rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-600/30 backdrop-blur-sm">
                      {/* Project Image */}
                      <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                        <Image
                          src={selectedProject.img}
                          alt={selectedProject.title}
                          fill
                          className="object-cover"
                        />
                        {/* Project Number Badge */}
                        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20">
                          <span className="px-2 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-blue-500/80 to-purple-500/80 border border-blue-400/50 rounded-lg sm:rounded-xl text-blue-100 text-xs sm:text-sm font-bold backdrop-blur-xl">
                            #{selectedProject.id}
                          </span>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
                        {/* Project Header */}
                        <div className="space-y-3 sm:space-y-4">
                          <div className="flex items-center gap-3">
                            <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider bg-blue-500/20 px-2 sm:px-3 py-1 rounded-full">
                              Project {selectedProject.id}
                            </span>
                          </div>
                          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
                            {selectedProject.title}
                          </h2>
                        </div>
                        
                        {/* Project Description */}
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                          {selectedProject.des}
                        </p>

                        {/* Tech Stack */}
                        <div className="space-y-3 sm:space-y-4">
                          <h4 className="text-base sm:text-lg font-semibold text-gray-200">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2 sm:gap-3">
                            {selectedProject.iconLists.map((icon, iconIndex) => (
                              <div 
                                key={iconIndex}
                                className="px-2 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-gray-700/80 to-gray-600/80 rounded-lg sm:rounded-xl text-gray-300 border border-gray-500/50 hover:border-blue-500/50 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 backdrop-blur-sm"
                              >
                                <span className="font-medium text-xs sm:text-sm">
                                  {getTechName(icon)}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Project Links */}
                        <div className="flex flex-col gap-3 sm:gap-4 pt-4">
                          {selectedProject.live && selectedProject.live !== "Not" && selectedProject.live.trim() !== "" && (
                            <a 
                              href={selectedProject.live} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl font-bold text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 text-sm sm:text-base"
                            >
                              {selectedProject.perview}
                            </a>
                          )}
                          {selectedProject.github && selectedProject.github !== "Not" && selectedProject.github.trim() !== "" && (
                            <a 
                              href={selectedProject.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="w-full border-2 border-gray-600/50 hover:border-blue-400/50 text-gray-300 hover:text-blue-400 py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl font-bold text-center transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 backdrop-blur-sm text-sm sm:text-base"
                            >
                              {selectedProject.gitText}
                            </a>
                          )}
                        </div>

                        {/* Project Note */}
                        {selectedProject.note && (
                          <div className="pt-4 border-t border-gray-600/30">
                            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-3 sm:p-4">
                              <div className="flex items-start gap-3">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div>
                                  <h5 className="text-xs sm:text-sm font-semibold text-yellow-400 mb-1">Project Note</h5>
                                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                                    {selectedProject.note}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>

                {/* Right Panel - Project List */}
                <ScrollAnimation direction="right" delay={0.4}>
                  <div className="space-y-3 sm:space-y-4 order-1 lg:order-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                      Project List
                    </h3>
                    {filteredProjects.map((project, index) => (
                      <div
                        key={project.id}
                        onClick={() => setSelectedProject(project)}
                        className={`group cursor-pointer bg-gradient-to-r from-gray-800/30 via-gray-700/30 to-gray-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border transition-all duration-300 backdrop-blur-sm hover:transform hover:scale-105 ${
                          selectedProject.id === project.id
                            ? 'border-blue-500/50 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 shadow-lg shadow-blue-500/25'
                            : 'border-gray-600/30 hover:border-blue-500/50 hover:bg-gradient-to-r hover:from-gray-700/50 hover:to-gray-600/50'
                        }`}
                      >
                        <div className="flex items-center gap-3 sm:gap-4">
                          {/* Project Thumbnail */}
                          <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl overflow-hidden flex-shrink-0">
                            <Image
                              src={project.img}
                              alt={project.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          
                          {/* Project Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                              <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider bg-blue-500/20 px-1 sm:px-2 py-1 rounded-full">
                                #{project.id}
                              </span>
                              <h4 className="text-sm sm:text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300 truncate">
                                {project.title}
                              </h4>
                            </div>
                            <p className="text-gray-400 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                              {project.des}
                            </p>
                            
                            {/* Tech Preview */}
                            <div className="flex flex-wrap gap-1 sm:gap-2 mt-2 sm:mt-3">
                              {project.iconLists.slice(0, 3).map((icon, iconIndex) => (
                                <span 
                                  key={iconIndex}
                                  className="px-1 sm:px-2 py-1 bg-gray-700/50 rounded-md sm:rounded-lg text-gray-300 text-xs font-medium"
                                >
                                  {getTechName(icon)}
                                </span>
                              ))}
                              {project.iconLists.length > 3 && (
                                <span className="px-1 sm:px-2 py-1 bg-gray-700/50 rounded-md sm:rounded-lg text-gray-300 text-xs font-medium">
                                  +{project.iconLists.length - 3}
                                </span>
                              )}
                            </div>
                          </div>
                          
                          {/* Arrow Icon */}
                          <div className="flex-shrink-0">
                            <svg 
                              className={`w-4 h-4 sm:w-6 sm:h-6 transition-all duration-300 ${
                                selectedProject.id === project.id 
                                  ? 'text-blue-400 transform rotate-90' 
                                  : 'text-gray-400 group-hover:text-blue-400'
                              }`} 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollAnimation>
              </div>
            ) : (
              <ScrollAnimation direction="up" delay={0.2}>
                <div className="text-center py-12 sm:py-16 md:py-20">
                  <div className="max-w-md mx-auto px-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-4 sm:mb-6 bg-gray-800/50 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">No projects found</h3>
                    <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
                      Try adjusting your search terms or category filter to find what you're looking for.
                    </p>
                    <button
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory('all');
                      }}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-2 sm:py-3 px-6 sm:px-8 rounded-xl sm:rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 text-sm sm:text-base"
                    >
                      Clear Filters
                    </button>
                  </div>
                </div>
              </ScrollAnimation>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
} 