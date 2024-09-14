import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

const App: React.FC = () => {
 

  return (
    

    <div className="bg-gray-50 dark:bg-gray-900 transition-all duration-500 min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="text-center py-4 bg-gray-800 dark:bg-gray-900 text-white">
        &copy; {new Date().getFullYear()} Victor Ogunwehin. All Rights Reserved.
      </footer>
     </div>
  );
};

export default App;
