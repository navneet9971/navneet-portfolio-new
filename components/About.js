import React from 'react';
import { gridItems } from '../data/data';

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-2 sm:px-0">
              A passionate Full Stack Developer with expertise in modern web technologies, AI integrations, SEO, and creative video editing. I love crafting experiences that are not only functional but also visually engaging.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {gridItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 ${
                index === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg sm:text-xl">
                  {item.id}
                </div>
                {index === 2 && (
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded-full animate-pulse animation-delay-200"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-pink-500 rounded-full animate-pulse animation-delay-400"></div>
                  </div>
                )}
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">{item.title}</h3>

              {item.description && (
                <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">{item.description}</p>
              )}

              {/* Card 1 – Communication & Values */}
              {index === 0 && (
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-gray-300">Transparent communication</span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-gray-300">Client-focused approach</span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-gray-300">Quality-driven development</span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-gray-300">SEO Optimization Expert</span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-gray-300">Creative Video Editing</span>
                  </div>
                </div>
              )}

              {/* Card 2 – Timezone Flexibility */}
              {index === 1 && (
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {['UTC-8', 'UTC+5:30', 'UTC+0'].map((timezone, i) => (
                      <div key={i} className="px-2 sm:px-3 py-1 bg-gray-700 rounded text-xs text-gray-300">
                        {timezone}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Card 3 – Stack Highlight */}
              {index === 2 && (
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {['React', 'Next.js', 'Node.js', 'MongoDB'].map((tech, i) => (
                    <div key={i} className="px-2 sm:px-3 py-2 bg-gray-700 rounded text-xs sm:text-sm text-center text-gray-300">
                      {tech}
                    </div>
                  ))}
                </div>
              )}

              {/* Card 5 – Learning */}
              {index === 4 && (
                <div className="mt-4">
                  <div className="text-xs sm:text-sm text-gray-400 mb-2">Currently exploring:</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 sm:px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded text-blue-400 text-xs sm:text-sm">
                      New Frameworks
                    </span>
                    <span className="px-2 sm:px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded text-purple-400 text-xs sm:text-sm">
                      Emerging Tech
                    </span>
                  </div>
                </div>
              )}

              {/* Card 6 – CTA */}
              {index === 5 && (
                <button className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base">
                  Let's Start a Project
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
