import React, { useState, useEffect } from "react";
import { MenuOutlined, CloseOutlined, HomeOutlined, UserOutlined, CodeOutlined, ProjectOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
import { Link } from 'react-scroll';
import { useDarkMode } from "../hooks/useDarkMode";
import classNames from 'classnames';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, toggleDarkMode] = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { to: "hero", label: "Home", icon: <HomeOutlined /> },
    { to: "about", label: "About", icon: <UserOutlined /> },
    { to: "skills", label: "Skills", icon: <CodeOutlined /> },
    { to: "projects", label: "Projects", icon: <ProjectOutlined /> },
    { to: "testimonials", label: "Testimonials", icon: <StarOutlined /> },
    { to: "contact", label: "Contact", icon: <MessageOutlined /> },
  ];

  return (
    <nav className={classNames(
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      scrolled ? 'backdrop-blur-md bg-white/90 dark:bg-gray-900/90 shadow-lg' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link 
            to="hero" 
            smooth={true} 
            duration={500}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform"
          >
            ProgViki
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors relative group text-sm font-medium"
                spy={true}
                activeClass="text-blue-600 dark:text-blue-400"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <Switch
              checked={darkMode}
              onChange={toggleDarkMode}
              checkedChildren="🌙"
              unCheckedChildren="☀️"
              className="ml-2"
            />
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center space-x-3">
            <Switch
              checked={darkMode}
              onChange={toggleDarkMode}
              checkedChildren="🌙"
              unCheckedChildren="☀️"
              size="small"
            />
            
            {/* Animated Menu Button */}
            <button
              onClick={toggleMenu}
              className={classNames(
                'relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none',
                isMenuOpen 
                  ? 'bg-blue-600 dark:bg-blue-500 text-white' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              )}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <div className="relative w-5 h-5 flex items-center justify-center">
                <span className={classNames(
                  'absolute h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out',
                  isMenuOpen ? 'rotate-45 w-5' : '-translate-y-1.5 w-5'
                )}></span>
                <span className={classNames(
                  'absolute h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out',
                  isMenuOpen ? 'opacity-0 w-0' : 'w-5'
                )}></span>
                <span className={classNames(
                  'absolute h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out',
                  isMenuOpen ? '-rotate-45 w-5' : 'translate-y-1.5 w-5'
                )}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown - Full Screen Overlay */}
        <div
          className={classNames(
            'fixed inset-0 top-16 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg transition-all duration-500 ease-in-out md:hidden',
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          )}
          style={{
            transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          }}
        >
          <div className="flex flex-col h-full py-8 px-6 overflow-y-auto">
            {/* Navigation Items */}
            <div className="flex-1 space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className={classNames(
                    'flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer',
                    'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400',
                    'hover:bg-blue-50 dark:hover:bg-blue-900/20',
                    'transform hover:scale-105 hover:translate-x-2'
                  )}
                  style={{
                    transitionDelay: `${index * 50}ms`,
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                  }}
                  onClick={() => setIsMenuOpen(false)}
                  activeClass="text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-lg font-medium">{item.label}</span>
                  <span className="ml-auto text-gray-400 text-sm">→</span>
                </Link>
              ))}
            </div>

            {/* Footer in Mobile Menu */}
            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-center gap-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                >
                  <span className="sr-only">GitHub</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
              <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-4">
                © 2024 Victor Ogunwehin
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;