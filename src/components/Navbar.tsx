import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Get the stored theme from localStorage
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
              Your Logo
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#about" className="text-gray-800 dark:text-white no-underline hover:underline">
              About
            </a>
            <a href="#skills" className="text-gray-800 dark:text-white no-underline hover:underline">
              Skills
            </a>
            <a href="#projects" className="text-gray-800 dark:text-white no-underline hover:underline">
              Projects
            </a>
            <a href="#contact" className="text-gray-800 dark:text-white no-underline hover:underline">
              Contact
            </a>
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none"
            >
              {darkMode ? (
                <span role="img" aria-label="sun" className="text-yellow-400">☀️</span>
              ) : (
                <span role="img" aria-label="moon" className="text-gray-800 dark:text-gray-300">🌙</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
