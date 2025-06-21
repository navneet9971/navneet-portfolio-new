import React from 'react';
import { socialMedia } from '../data/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="text-center lg:text-left order-1 lg:order-1">
            <div className="inline-block">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
                Navneet
              </div>
              <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto lg:mx-0 rounded-full"></div>
            </div>
            <p className="text-gray-300 mt-6 mb-6 text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
              Full Stack Developer passionate about creating innovative web solutions and turning ideas into reality.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              {socialMedia.map((social, index) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 bg-gray-800/50 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 backdrop-blur-sm border border-gray-700/50"
                  aria-label={`Visit ${social.name}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {index === 0 && (
                    <svg className="w-5 h-5 text-gray-300 group-hover:text-white relative z-10 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  )}
                  {index === 1 && (
                    <svg className="w-5 h-5 text-gray-300 group-hover:text-white relative z-10 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  )}
                  {index === 2 && (
                    <svg className="w-5 h-5 text-gray-300 group-hover:text-white relative z-10 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Left side on mobile */}
          <div className="text-center sm:text-left lg:text-left order-2 sm:order-2 lg:order-2">
            <div className="inline-block">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Quick Links</h3>
              <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto sm:mx-0 lg:mx-0 rounded-full"></div>
            </div>
            <ul className="mt-6 space-y-3">
              {[
                { href: "#about", label: "About Me" },
                { href: "#projects", label: "Projects" },
                { href: "#experince", label: "Experience" },
                { href: "#myskills", label: "Skills" },
                { href: "#contact", label: "Contact" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="group inline-flex items-center text-gray-300 hover:text-white transition-all duration-300 text-sm sm:text-base"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                    {link.label}
                    <span className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Right side on mobile */}
          <div className="text-center sm:text-left lg:text-left order-3 sm:order-3 lg:order-3">
            <div className="inline-block">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Get In Touch</h3>
              <div className="h-1 w-12 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto sm:mx-0 lg:mx-0 rounded-full"></div>
            </div>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-center sm:justify-start lg:justify-start group">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-sm">📍</span>
                </div>
                <span className="text-gray-300 text-sm sm:text-base">India</span>
              </div>
              
              <div className="flex items-center justify-center sm:justify-start lg:justify-start group">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-sm">📧</span>
                </div>
                <a 
                  href="mailto:Navneetjha2012@gmail.com" 
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base break-all group-hover:underline"
                >
                  Navneetjha2012@gmail.com
                </a>
              </div>
              
              <div className="flex items-center justify-center sm:justify-start lg:justify-start group">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-sm">⏰</span>
                </div>
                <span className="text-gray-300 text-sm sm:text-base">Available for new projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-center sm:text-left text-sm">
              © {currentYear} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-semibold">Navneet</span>. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm hover:underline">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Made with Love */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center space-x-2 bg-gray-800/30 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-700/50">
            <span className="text-gray-400 text-sm">Made with</span>
            <span className="text-red-500 animate-pulse">❤️</span>
            <span className="text-gray-400 text-sm">by Navneet</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 