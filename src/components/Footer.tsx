import React from 'react';
import { GithubOutlined, LinkedinOutlined, TwitterOutlined, FacebookOutlined } from '@ant-design/icons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: <GithubOutlined className="text-xl" />, 
      href: "https://github.com",
      label: "GitHub",
      color: "hover:text-gray-400"
    },
    { 
      icon: <LinkedinOutlined className="text-xl" />, 
      href: "https://linkedin.com",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    { 
      icon: <TwitterOutlined className="text-xl" />, 
      href: "https://twitter.com",
      label: "Twitter",
      color: "hover:text-sky-400"
    },
    { 
      icon: <FacebookOutlined className="text-xl" />, 
      href: "https://facebook.com",
      label: "Facebook",
      color: "hover:text-blue-500"
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Victor Ogunwehin
            </h3>
            <p className="text-gray-400 text-sm mt-1">Software Engineer & SDLC Expert</p>
          </div>
          
          {/* Social Links - Centered */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`w-10 h-10 rounded-full bg-gray-800/50 hover:bg-gray-700/50 flex items-center justify-center transition-all duration-300 text-gray-400 ${social.color} hover:scale-110 hover:shadow-lg`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        
        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gray-900 dark:bg-gray-950 px-4 text-gray-600 text-sm">✦</span>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Victor Ogunwehin. Crafted with ❤️ using React & Tailwind</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;