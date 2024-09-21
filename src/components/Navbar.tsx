import React, { useState } from "react";
import { MenuOutlined } from '@ant-design/icons'; // Ant Design Menu icon
import { Switch } from 'antd'; // Ant Design Switch for Dark Mode
import { Link  } from 'react-scroll'; // For smooth scrolling
import { useDarkMode } from "../hooks/useDarkMode";
import classNames from 'classnames'; // For conditional class names

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control the dropdown menu
  const [darkMode, toggleDarkMode] = useDarkMode(); // Dark mode hook

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-gray-800 dark:text-white no-underline hover:underline">
              Logo
            </a>
          </div>
          {/* Menu items for larger screens */}
        <div className="hidden md:flex space-x-8 items-center dark:text-white">
          <Link to="projects" smooth={true} duration={500} className="nav-item ">
            Projects
          </Link>
          <Link to="skills" smooth={true} duration={500} className="nav-item">
            Skills
          </Link>
          <Link to="about" smooth={true} duration={500} className="nav-item">
            About
          </Link>
          <Link to="contact" smooth={true} duration={500} className="nav-item">
            Contact
          </Link>
          {/* Dark mode switch */}
          <Switch
            checked={darkMode}
            onChange={toggleDarkMode}
            checkedChildren="🌙"
            unCheckedChildren="☀️"
          />
        </div>

        {/* Menu Icon and Dark Mode toggle for small screens */}
        <div className="flex md:hidden items-center space-x-4">
          {/* Dark mode switch */}
          <Switch
            checked={darkMode}
            onChange={toggleDarkMode}
            checkedChildren="🌙"
            unCheckedChildren="☀️"
          />
          {/* Menu Icon */}
          <MenuOutlined className="text-2xl text-gray-800 dark:text-white" onClick={toggleMenu} />
        </div>
      </div>

      {/* Dropdown Menu for small screens */}
      <div
        className={classNames(
          'flex flex-col md:hidden space-y-4 items-center bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out dark:text-white',
          {
            'h-0 opacity-0 overflow-hidden': !isMenuOpen,
            'h-auto opacity-100 py-4': isMenuOpen,
          }
        )}
      >
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="nav-item"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="nav-item"
          onClick={() => setIsMenuOpen(false)}
        >
          Projects
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="nav-item"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="nav-item"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
