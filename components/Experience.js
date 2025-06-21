import React from 'react';
import { workExperience } from '../data/data';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey in software development, showcasing growth and expertise across various technologies.
          </p>
        </div>

        {/* Desktop Timeline Design (lg and above) */}
        <div className="hidden lg:block max-w-4xl mx-auto">
          {workExperience.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Timeline Line */}
              {index < workExperience.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
              )}
              
              <div className="flex items-start space-x-6 mb-12">
                {/* Timeline Dot */}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {exp.id}
                  </div>
                </div>

                {/* Experience Card */}
                <div className="flex-1 bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">
                      {exp.title}
                    </h3>
                    <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium">
                      {exp.date}
                    </span>
                  </div>
                  
                  <h4 className="text-xl text-blue-400 mb-4 font-semibold">
                    {exp.companyName}
                  </h4>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {exp.desc}
                  </p>

                  {/* Experience Highlights */}
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {exp.id === 1 && (
                      <>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-300 text-sm">User & Admin Panels</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-300 text-sm">International Deployment</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-gray-300 text-sm">CRM & Kiosk Apps</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                          <span className="text-gray-300 text-sm">Performance Optimization</span>
                        </div>
                      </>
                    )}
                    
                    {exp.id === 2 && (
                      <>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-300 text-sm">Project Management</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-300 text-sm">Material UI & CSS</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-gray-300 text-sm">Framer Motion</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                          <span className="text-gray-300 text-sm">Database Integration</span>
                        </div>
                      </>
                    )}
                    
                    {exp.id === 3 && (
                      <>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-300 text-sm">API Integration</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-300 text-sm">Postman & Tools</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-gray-300 text-sm">Client Product</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                          <span className="text-gray-300 text-sm">Full-time Position</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Card Design (sm to lg) */}
        <div className="lg:hidden space-y-4">
          {workExperience.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Experience Number Badge */}
              <div className="absolute -top-2 -left-2 z-20">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg border-2 border-gray-900">
                  {exp.id}
                </div>
              </div>

              {/* Main Experience Card */}
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50 shadow-xl">
                {/* Header Section */}
                <div className="mb-3">
                  <div className="flex flex-col space-y-2 mb-2">
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {exp.title}
                    </h3>
                    <div className="flex-shrink-0">
                      <span className="px-2 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-400 text-xs font-medium">
                        {exp.date}
                      </span>
                    </div>
                  </div>
                  
                  <h4 className="text-base text-blue-400 font-semibold mb-2">
                    {exp.companyName}
                  </h4>
                </div>

                {/* Description */}
                <div className="mb-4">
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {exp.desc}
                  </p>
                </div>

                {/* Highlights Grid */}
                <div className="grid grid-cols-1 gap-2">
                  {exp.id === 1 && (
                    <>
                      <div className="flex items-center space-x-2 bg-gray-700/30 rounded-lg p-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-300 text-xs">User & Admin Panels</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-gray-700/30 rounded-lg p-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-300 text-xs">International Deployment</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-gray-700/30 rounded-lg p-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-300 text-xs">CRM & Kiosk Apps</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-gray-700/30 rounded-lg p-2">
                        <div className="w-1.5 h-1.5 bg-pink-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-300 text-xs">Performance Optimization</span>
                      </div>
                    </>
                  )}
                  
                  {exp.id === 2 && (
                    <>
                      <div className="flex items-center space-x-2 bg-gray-700/30 rounded-lg p-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-300 text-xs">Project Management</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-gray-700/30 rounded-lg p-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-300 text-xs">Material UI & CSS</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-gray-700/30 rounded-lg p-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-300 text-xs">Framer Motion</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-gray-700/30 rounded-lg p-2">
                        <div className="w-1.5 h-1.5 bg-pink-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-300 text-xs">Database Integration</span>
                      </div>
                    </>
                  )}
                  
                  {exp.id === 3 && (
                    <>
                      <div className="flex items-center space-x-2 bg-gray-700/30 rounded-lg p-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-300 text-xs">API Integration</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-gray-700/30 rounded-lg p-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-300 text-xs">Postman & Tools</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-gray-700/30 rounded-lg p-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-300 text-xs">Client Product</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-gray-700/30 rounded-lg p-2">
                        <div className="w-1.5 h-1.5 bg-pink-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-300 text-xs">Full-time Position</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="text-center mt-16">
          {/* Desktop Summary Design */}
          <div className="hidden lg:block bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Ready for the Next Challenge
            </h3>
            <p className="text-gray-300 mb-6">
              With years of experience in full-stack development, I'm always eager to take on new projects and technologies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
                <div className="text-gray-400">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">10+</div>
                <div className="text-gray-400">Projects Delivered</div>
              </div>
            </div>
          </div>

          {/* Mobile Summary Design */}
          <div className="lg:hidden">
            <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20 rounded-xl p-4 mx-2 shadow-xl">
              <h3 className="text-lg font-bold mb-2 text-white">
                Ready for the Next Challenge
              </h3>
              <p className="text-gray-300 text-xs mb-4 leading-relaxed">
                With years of experience in full-stack development, I'm always eager to take on new projects and technologies.
              </p>
              
              {/* Mobile Stats Grid */}
              <div className="grid grid-cols-3 gap-2">
                <div className="text-center bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
                  <div className="text-lg font-bold text-blue-400 mb-1">3+</div>
                  <div className="text-gray-400 text-xs">Companies</div>
                </div>
                <div className="text-center bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
                  <div className="text-lg font-bold text-purple-400 mb-1">3+</div>
                  <div className="text-gray-400 text-xs">Years Experience</div>
                </div>
                <div className="text-center bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
                  <div className="text-lg font-bold text-pink-400 mb-1">10+</div>
                  <div className="text-gray-400 text-xs">Projects Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 