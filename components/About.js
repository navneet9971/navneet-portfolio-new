import React from 'react';
import { gridItems } from '../data/data';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A passionate Full Stack Developer with expertise in modern web technologies, AI integrations, SEO, and creative video editing. I love crafting experiences that are not only functional but also visually engaging.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {gridItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 ${
                index === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  {item.id}
                </div>
                {index === 2 && (
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse animation-delay-200"></div>
                    <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse animation-delay-400"></div>
                  </div>
                )}
              </div>

              <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>

              {item.description && (
                <p className="text-gray-300 mb-4">{item.description}</p>
              )}

              {/* Card 1 – Communication & Values */}
              {index === 0 && (
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300">Transparent communication</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-300">Client-focused approach</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">Quality-driven development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-300">SEO Optimization Expert</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-300">Creative Video Editing</span>
                  </div>
                </div>
              )}

              {/* Card 2 – Timezone Flexibility */}
              {index === 1 && (
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-1">
                    {['UTC-8', 'UTC+5:30', 'UTC+0'].map((timezone, i) => (
                      <div key={i} className="px-3 py-1 bg-gray-700 rounded text-xs text-gray-300">
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
                    <div key={i} className="px-3 py-2 bg-gray-700 rounded text-sm text-center text-gray-300">
                      {tech}
                    </div>
                  ))}
                </div>
              )}

              {/* Card 5 – Learning */}
              {index === 4 && (
                <div className="mt-4">
                  <div className="text-sm text-gray-400 mb-2">Currently exploring:</div>
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded text-blue-400 text-sm">
                      New Frameworks
                    </span>
                    <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded text-purple-400 text-sm">
                      Emerging Tech
                    </span>
                  </div>
                </div>
              )}

              {/* Card 6 – CTA */}
              {index === 5 && (
                <button className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300">
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
