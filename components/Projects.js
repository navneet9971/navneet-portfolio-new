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

        <div className="space-y-16 max-w-7xl mx-auto">
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

        {/* Call to Action */}
        <div className="text-center mt-24">
          <div className="relative bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20 rounded-3xl p-12 max-w-4xl mx-auto backdrop-blur-xl overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-6 text-white">
                Have a project in mind?
              </h3>
              <p className="text-gray-300 mb-8 text-xl leading-relaxed">
                Let's work together to bring your ideas to life with cutting-edge technology and creative solutions.
              </p>
              <button 
                onClick={() => setIsPopupOpen(true)}
                className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 hover:from-blue-600 hover:via-purple-700 hover:to-pink-600 text-white px-12 py-5 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 text-lg"
              >
                Start a Project
              </button>
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