import React from 'react';
import { gridItems } from '../data/data';
import ScrollAnimation from './ScrollAnimation';

const About = ({ onStartProject }) => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <ScrollAnimation direction="up" delay={0.2}>
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-2xl mb-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
              About Me
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
                A passionate <span className="text-blue-400 font-semibold">Full Stack Developer</span> with expertise in modern web technologies, 
                <span className="text-purple-400 font-semibold"> AI integrations</span>, <span className="text-pink-400 font-semibold">SEO</span>, and 
                <span className="text-green-400 font-semibold"> creative video editing</span>.
              </p>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                I love crafting experiences that are not only functional but also visually engaging and user-centric.
              </p>
            </div>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-7xl mx-auto">
          {gridItems.map((item, index) => (
            <ScrollAnimation 
              key={item.id} 
              direction="up"
              delay={0.1 * (index + 1)}
              duration={0.8}
            >
              <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    {item.id}
                  </div>
                  
                  {index === 2 && (
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-4 text-white">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="text-gray-300 mb-6 leading-relaxed">{item.description}</p>
                )}

                {/* Card 1 – Communication & Values */}
                {index === 0 && (
                  <div className="space-y-3">
                    {[
                      { text: "Transparent communication", color: "bg-green-500" },
                      { text: "Client-focused approach", color: "bg-blue-500" },
                      { text: "Quality-driven development", color: "bg-purple-500" },
                      { text: "SEO Optimization Expert", color: "bg-yellow-500" },
                      { text: "Creative Video Editing", color: "bg-red-500" }
                    ].map((value, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 ${value.color} rounded-full`}></div>
                        <span className="text-gray-300">{value.text}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Card 2 – Timezone Flexibility */}
                {index === 1 && (
                  <div className="space-y-4">
                    <div className="text-center">
                      {/* <div className="text-3xl mb-3">🌍</div> */}
                      <p className="text-gray-300 mb-4">Available across multiple timezones</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {['UTC-8', 'UTC+5:30', 'UTC+0'].map((timezone, i) => (
                          <div key={i} className="px-3 py-1 bg-gray-700 rounded-lg text-sm text-gray-300">
                            {timezone}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Card 3 – Stack Highlight */}
                {index === 2 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      {['React', 'Next.js', 'Node.js', 'MongoDB'].map((tech, i) => (
                        <div key={i} className="px-3 py-2 bg-gray-700 rounded-lg text-center text-gray-300">
                          {tech}
                        </div>
                      ))}
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-400">Constantly improving and learning</p>
                    </div>
                  </div>
                )}

                {/* Card 4 – Learning & Growth */}
                {index === 3 && (
                  <div className="space-y-3">
                    {[
                      { text: "Continuous Learning", color: "bg-green-500" },
                      { text: "Problem Solving", color: "bg-blue-500" },
                      { text: "Innovation Focus", color: "bg-purple-500" },
                      { text: "Adaptability", color: "bg-pink-500" }
                    ].map((skill, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 ${skill.color} rounded-full`}></div>
                        <span className="text-gray-300">{skill.text}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Card 5 – Learning */}
                {index === 4 && (
                  <div className="space-y-4">
                    <div className="text-center">
                      {/* <div className="text-3xl mb-3">🔬</div> */}
                      <p className="text-gray-300 mb-4">Currently exploring:</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        <span className="px-3 py-1 bg-blue-600 rounded-lg text-blue-200 text-sm">
                          New Frameworks
                        </span>
                        <span className="px-3 py-1 bg-purple-600 rounded-lg text-purple-200 text-sm">
                          Emerging Tech
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Card 6 – CTA */}
                {index === 5 && (
                  <div className="space-y-4">
                    <div className="text-center">
                      {/* <div className="text-3xl mb-3">🚀</div> */}
                      <p className="text-gray-300 mb-4">Ready to bring your ideas to life?</p>
                      <button 
                        onClick={onStartProject}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-colors duration-300"
                      >
                        Let's Start a Project
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
