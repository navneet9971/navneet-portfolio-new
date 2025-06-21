import React, { useState } from 'react';
import Image from 'next/image';
import { projects } from '../data/data';
import ProjectPopup from './ProjectPopup';

const Projects = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Function to get technology name from icon path
  const getTechName = (iconPath) => {
    const name = iconPath.replace('/', '').replace('.svg', '').replace('.png', '');
    return name.charAt(0).toUpperCase() + name.slice(1).toUpperCase();
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills and passion for web development.
          </p>
        </div>

        {/* Desktop Layout (lg and above) */}
        <div className="hidden lg:block space-y-16 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group relative overflow-hidden ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex-row items-center gap-12`}
            >
              {/* Project Image Section */}
              <div className="lg:w-1/2 relative">
                <div className="relative h-96 lg:h-[500px] bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className="group-hover:scale-110 transition-all duration-700"
                    />
                  </div>
                  <div className="absolute top-8 right-8">
                    <span className="px-6 py-3 bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-blue-500/50 rounded-2xl text-blue-400 text-lg font-bold backdrop-blur-xl">
                      {project.id}
                    </span>
                  </div>
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-500/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-all duration-700 delay-400"></div>
              </div>

              {/* Project Content Section */}
              <div className="lg:w-1/2 space-y-8">
                <div className="space-y-4">
                  <div className="inline-block">
                    <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest">
                      Project {project.id}
                    </span>
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-bold text-white group-hover:text-blue-400 transition-colors duration-500">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  {project.des}
                </p>

                {/* Tech Stack */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-400 uppercase tracking-wider">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    {project.iconLists.map((icon, iconIndex) => (
                      <div 
                        key={iconIndex}
                        className="px-5 py-3 bg-gradient-to-r from-gray-800/80 to-gray-700/80 rounded-2xl text-gray-300 border border-gray-600/50 hover:border-blue-500/50 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 backdrop-blur-sm hover:scale-105"
                      >
                        <span className="font-semibold text-sm">
                          {getTechName(icon)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 px-8 rounded-2xl font-bold text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 text-lg"
                  >
                    {project.perview}
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 border-2 border-gray-600/50 hover:border-blue-400/50 text-gray-300 hover:text-blue-400 py-4 px-8 rounded-2xl font-bold text-center transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 backdrop-blur-sm text-lg"
                  >
                    {project.gitText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout (below lg) */}
        <div className="lg:hidden space-y-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="group relative bg-gradient-to-br from-gray-800/50 via-gray-700/50 to-gray-800/50 rounded-3xl overflow-hidden border border-gray-600/30 hover:border-blue-500/50 transition-all duration-500 backdrop-blur-sm"
            >
              {/* Project Image */}
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-all duration-700"
                />
                {/* Project Number Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-500/80 to-purple-500/80 border border-blue-400/50 rounded-xl text-blue-100 text-sm font-bold backdrop-blur-xl">
                    #{project.id}
                  </span>
                </div>
                {/* Gradient overlay for better text readability */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-800/90 to-transparent z-10"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-6">
                {/* Project Header */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider bg-blue-500/20 px-3 py-1 rounded-full">
                      Project {project.id}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-500 leading-tight">
                    {project.title}
                  </h3>
                </div>
                
                {/* Project Description */}
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                  {project.des}
                </p>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {project.iconLists.map((icon, iconIndex) => (
                      <div 
                        key={iconIndex}
                        className="px-3 py-2 bg-gradient-to-r from-gray-700/80 to-gray-600/80 rounded-xl text-gray-300 border border-gray-500/50 hover:border-blue-500/50 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 backdrop-blur-sm"
                      >
                        <span className="font-medium text-xs sm:text-sm">
                          {getTechName(icon)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex flex-col gap-3 pt-2">
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 px-6 rounded-2xl font-bold text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 text-base sm:text-lg"
                  >
                    {project.perview}
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full border-2 border-gray-600/50 hover:border-blue-400/50 text-gray-300 hover:text-blue-400 py-4 px-6 rounded-2xl font-bold text-center transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 backdrop-blur-sm text-base sm:text-lg"
                  >
                    {project.gitText}
                  </a>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-2 left-2 w-3 h-3 bg-blue-500/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200"></div>
              <div className="absolute bottom-2 right-2 w-2 h-2 bg-purple-500/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-all duration-700 delay-400"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 sm:mt-20 lg:mt-24">
          <div className="relative bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto backdrop-blur-xl overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-20 h-20 sm:w-40 sm:h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl sm:blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl sm:blur-3xl"></div>
            
            <div className="relative z-10 space-y-4 sm:space-y-6">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Have a project in mind?
              </h3>
              <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto px-2">
                Let's work together to bring your ideas to life with cutting-edge technology and creative solutions.
              </p>
              <div className="pt-2 sm:pt-4">
                <button 
                  onClick={() => setIsPopupOpen(true)}
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 hover:from-blue-600 hover:via-purple-700 hover:to-pink-600 text-white px-6 sm:px-8 lg:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-blue-500/25 text-base sm:text-lg min-h-[56px] sm:min-h-[60px] flex items-center justify-center"
                >
                  Start a Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Popup */}
      <ProjectPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />
    </section>
  );
};

export default Projects; 