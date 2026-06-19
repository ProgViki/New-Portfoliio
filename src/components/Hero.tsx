import React from 'react';
import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';
import Typewriter from 'typewriter-effect';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="md:w-2/5 relative group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <img
                 src="/assets/ProfilePics.jpg"
                alt="Victor Ogunwehin"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover relative z-10 border-4 border-white dark:border-gray-800 shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg z-20">
              <span className="text-3xl">💻</span>
            </div>
          </div>

          {/* Hero Content */}
          <div className="md:w-3/5 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Victor Ogunwehin
              </span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 h-12">
              <Typewriter
                options={{
                  strings: [
                    'Software Engineer',
                    'SDLC Expert',
                    'Full Stack Developer',
                    'Problem Solver'
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg max-w-2xl">
              Building scalable, robust, and innovative software solutions with modern technologies.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all hover:scale-105 no-underline font-medium"
              >
                Get In Touch
              </a>
              <a
                 href="/assets/VICTOR_OGUNWEHIN_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-full hover:border-blue-600 dark:hover:border-blue-400 transition-all hover:scale-105 no-underline font-medium text-gray-700 dark:text-gray-300"
              >
                View Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
              >
                <GithubOutlined className="text-xl text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
              >
                <LinkedinOutlined className="text-xl text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
              >
                <MailOutlined className="text-xl text-gray-700 dark:text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;