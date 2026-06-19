import React, { useState, useEffect } from "react";
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "projects", label: "Projects" },
    { to: "testimonials", label: "Testimonials" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <nav className={classNames(
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      scrolled ? 'backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-lg' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link 
            to="hero" 
            smooth={true} 
            duration={500}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform"
          >
            Vik
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors relative group"
                spy={true}
                activeClass="text-blue-600 dark:text-blue-400"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
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

          {/* Mobile Menu */}
          <div className="flex md:hidden items-center space-x-4">
            <Switch
              checked={darkMode}
              onChange={toggleDarkMode}
              checkedChildren="🌙"
              unCheckedChildren="☀️"
              size="small"
            />
            <button
              onClick={toggleMenu}
              className="text-gray-800 dark:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <CloseOutlined className="text-2xl" /> : <MenuOutlined className="text-2xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={classNames(
            'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
            isMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'
          )}
        >
          <div className="flex flex-col space-y-4 items-center bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-lg p-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors w-full text-center py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;