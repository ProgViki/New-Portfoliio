import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { skillsList } from "./dummyData";
import { CodeOutlined, DatabaseOutlined, CloudOutlined, ToolOutlined } from '@ant-design/icons';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [animatedSkills, setAnimatedSkills] = useState<{[key: string]: number}>({});

  // Enhanced skills data with proficiency levels and icons
  const enhancedSkills = skillsList.map(category => ({
    ...category,
    icon: getCategoryIcon(category.category),
    skills: category.skills.map(skill => ({
      name: skill,
      proficiency: Math.floor(Math.random() * 30) + 70 // Random 70-100%
    }))
  }));

  function getCategoryIcon(category: string) {
    const icons: {[key: string]: any} = {
      'Frontend': <CodeOutlined />,
      'Backend': <DatabaseOutlined />,
      'DevOps': <CloudOutlined />,
      'Tools': <ToolOutlined />,
    };
    return icons[category] || <CodeOutlined />;
  }

  // Animate skill bars when in view
  useEffect(() => {
    if (inView) {
      const timeouts: NodeJS.Timeout[] = [];
      enhancedSkills.forEach((category, catIndex) => {
        category.skills.forEach((skill, skillIndex) => {
          const timeout = setTimeout(() => {
            setAnimatedSkills(prev => ({
              ...prev,
              [`${category.category}-${skillIndex}`]: skill.proficiency
            }));
          }, 200 + (catIndex * 150) + (skillIndex * 100));
          timeouts.push(timeout);
        });
      });
      return () => timeouts.forEach(t => clearTimeout(t));
    }
  }, [inView]);

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div ref={ref} className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div 
          className={`text-center mb-12 transition-all duration-1000 transform ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to build exceptional software solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {enhancedSkills.map((skillCategory, catIndex) => (
            <div
              key={skillCategory.category}
              className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50 ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${catIndex * 150}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full flex items-center justify-center text-2xl text-blue-600 dark:text-blue-400 transition-transform duration-300 hover:rotate-12">
                  {skillCategory.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {skillCategory.category}
                </h3>
              </div>

              {/* Skills with Animated Progress Bars */}
              <div className="space-y-4">
                {skillCategory.skills.map((skill, skillIndex) => {
                  const skillKey = `${skillCategory.category}-${skillIndex}`;
                  const currentProficiency = animatedSkills[skillKey] || 0;
                  
                  return (
                    <div 
                      key={skillIndex}
                      className="group"
                    >
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-blue-600 dark:text-blue-400 font-medium transition-all duration-300">
                          {currentProficiency}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden relative">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out relative"
                          style={{ 
                            width: `${currentProficiency}%`,
                            transition: `width 1.5s cubic-bezier(0.4, 0, 0.2, 1) ${skillIndex * 100}ms`
                          }}
                        >
                          {/* Animated shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Hover Effect Decoration */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Additional Stats with Animation */}
        <div 
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          {[
            { number: '5+', label: 'Projects Delivered', icon: '🚀' },
            { number: '3+', label: 'Years Experience', icon: '💼' },
            { number: '12+', label: 'Technologies', icon: '💻' },
            { number: '100%', label: 'Client Satisfaction', icon: '⭐' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-500 hover:scale-105 hover:shadow-xl"
            >
              <div className="text-3xl mb-2 animate-bounce-slow">{stat.icon}</div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;




