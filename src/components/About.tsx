import React from 'react';
import { CheckCircleOutlined, CodeOutlined, TeamOutlined } from '@ant-design/icons';

const About: React.FC = () => {
  const highlights = [
    { icon: <CodeOutlined />, text: '5+ Projects Delivered' },
    { icon: <TeamOutlined />, text: 'Agile Methodology' },
    { icon: <CheckCircleOutlined />, text: '100% Client Satisfaction' },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Innovative and results-driven Software Engineer with extensive experience in the complete 
              Software Development Lifecycle (SDLC), encompassing requirements gathering, system design, 
              development, testing, and maintenance.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              Proficient in modern frameworks including React, React Native, and NestJs, with a strong 
              focus on delivering scalable and robust web and mobile applications.
            </p>
            
            <div className="grid grid-cols-3 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <div className="text-2xl text-blue-600 dark:text-blue-400 mb-2">{item.icon}</div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Node.js', 'NestJS', 'Python', 'Tailwind CSS', 'MongoDB', 'PostgreSQL'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-white dark:bg-gray-700 rounded-full text-sm shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;