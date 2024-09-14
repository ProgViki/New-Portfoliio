
interface Project {
    title: string;
    description: string;
    technologies: string[];
    link: string;
    github?: string;  // Optional GitHub link
  }
  
 export const projects: Project[] = [
    {
      title: "Trip Booking App",
      description:
        "A full-stack trip booking system where passengers can book trips and bus drivers can manage schedules. It includes admin monitoring features for users and drivers.",
      technologies: ["React", "Node.js", "PostgreSQL", "Express", "NestJS", "Tailwind CSS"],
      link: "https://example.com/trip-booking",
      github: "https://github.com/username/trip-booking-app",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing my projects, skills, and professional experience in the software development life cycle.",
      technologies: ["React", "Tailwind CSS", "TypeScript"],
      link: "https://example.com/portfolio",
      github: "https://github.com/username/portfolio-website",
    },
    {
      title: "E-Commerce Platform",
      description:
        "An e-commerce platform where users can browse products, add items to their cart, and make secure payments.",
      technologies: ["Next.js", "MongoDB", "Stripe API", "Tailwind CSS"],
      link: "https://example.com/ecommerce",
      github: "https://github.com/username/ecommerce-platform",
    },
  ];
  

  export const skills = [
    'React', 'ReactNative' ,'Node.js', 'PostgreSQL', 'CI/CD', 'Docker', 'TailwindCSS', 'NextJs'
  ]
  
  

