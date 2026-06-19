import { CheckCircleOutlined, CodeOutlined, TeamOutlined, RocketOutlined } from '@ant-design/icons';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    { icon: <CodeOutlined />, text: '5+ Projects Delivered', delay: 0 },
    { icon: <TeamOutlined />, text: 'Agile Methodology', delay: 100 },
    { icon: <CheckCircleOutlined />, text: '100% Client Satisfaction', delay: 200 },
    { icon: <RocketOutlined />, text: 'Full Stack Development', delay: 300 },
  ];

  const techStack = [
    'React', 'TypeScript', 'Node.js', 'NestJS', 
    'Python', 'Tailwind CSS', 'MongoDB', 'PostgreSQL',
    'Docker', 'AWS', 'GraphQL', 'Redis'
  ];

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-pulse-slow-delayed"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header with Animation */}
        <div 
          className={`text-center mb-12 transition-all duration-1000 transform ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded"></div>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div 
              className={`transition-all duration-700 transform ${
                inView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Innovative and results-driven Software Engineer with extensive experience in the complete 
                Software Development Lifecycle (SDLC), encompassing requirements gathering, system design, 
                development, testing, and maintenance.
              </p>
            </div>
            
            <div 
              className={`transition-all duration-700 transform ${
                inView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Proficient in modern frameworks including React, React Native, and NestJs, with a strong 
                focus on delivering scalable and robust web and mobile applications.
              </p>
            </div>
            
            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`text-center p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl ${
                    inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${300 + item.delay}ms` }}
                >
                  <div className="text-3xl text-blue-600 dark:text-blue-400 mb-2 transition-transform duration-300 hover:rotate-12">
                    {item.icon}
                  </div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Tech Stack */}
          <div 
            className={`relative transition-all duration-700 transform ${
              inView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
                <span className="inline-block animate-bounce-slow">⚡</span>
                Tech Stack & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span
                    key={tech}
                    className={`px-3 py-1.5 bg-white dark:bg-gray-700 rounded-full text-sm shadow-sm border border-gray-200/50 dark:border-gray-600/50 transition-all duration-300 hover:scale-105 hover:shadow-md hover:border-blue-400 dark:hover:border-blue-400 ${
                      inView ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                    }`}
                    style={{ 
                      transitionDelay: `${500 + index * 50}ms`,
                      animation: inView ? `fadeInScale 0.5s ease-out ${500 + index * 50}ms both` : 'none'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Animated Decorative Element */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;