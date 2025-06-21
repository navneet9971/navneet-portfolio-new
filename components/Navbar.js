import React, { useState } from 'react';
import { navItems } from '../data/data';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e, link) => {
    // If it's a page link (starts with /), let Next.js handle it
    if (link.startsWith('/')) {
      return; // Don't prevent default, let the link work normally
    }
    
    // If it's a hash link, handle smooth scrolling
    e.preventDefault();
    const targetId = link.substring(1); // Remove the # from the link
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const navbarHeight = 80; // Approximate navbar height in pixels
      const targetPosition = targetElement.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  const renderNavItem = (item, index) => {
    // If it's a page link, use Next.js Link
    if (item.link.startsWith('/')) {
      return (
        <Link 
          key={index}
          href={item.link}
          className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium relative group cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        >
          {item.name}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      );
    }
    
    // If it's a hash link, use regular anchor
    return (
      <a 
        key={index}
        href={item.link} 
        onClick={(e) => handleNavClick(e, item.link)}
        className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium relative group cursor-pointer"
      >
        {item.name}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
      </a>
    );
  };

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Navneet
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => renderNavItem(item, index))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-blue-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item, index) => {
                if (item.link.startsWith('/')) {
                  return (
                    <Link 
                      key={index}
                      href={item.link}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium cursor-pointer"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  );
                }
                return (
                  <a 
                    key={index}
                    href={item.link} 
                    onClick={(e) => handleNavClick(e, item.link)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium cursor-pointer"
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 