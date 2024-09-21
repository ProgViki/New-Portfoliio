
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
      title: "Rebzee Website",
      description:
      "An e-commerce platform where users can browse products, add items to their cart, and make secure payments.",
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
    {
      title: "Geophia Academy Website",
      description: "An SEO-friendly and eye-catching website built with modern technologies for an academic and Edtech organization",
      technologies: ["Next.js", "MongoDB", "Stripe API", "Tailwind CSS"],
      link: "https://example.com/",
      github: "https://github.com/"
    },
    {
      title: "The Realtor App",
      description:
        "An e-commerce platform where users can browse products, add items to their cart, and make secure payments.",
      technologies: ["Next.js", "MongoDB", "Stripe API", "Tailwind CSS"],
      link: "https://example.com/ecommerce",
    },
    {
      title: "Employee Management System",
      description:
        "A comprehensive employee management system that allows HR managers to manage their employees' data, payroll system, leave management and track their performance.",
      technologies: ["React", "Node.js", "PostgreSQL", "Express", "NestJS", "Tailwind CSS"],
      link: "https://lms.miro.zoracom.com",
    },
   
  ];
  

  export const skillsList = [
    {
      category: "Frontend",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Redux",
        "React Native",
        "Bootstrap",
      ],
    },
    {
      category: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "NestJS",
        "REST APIs",
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "JWT Auth",
        "WebSockets",
        "Redis",
      ],
    },
    {
      category: "DevOps",
      skills: [
        "Git",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Jenkins",
        "AWS",
        "Azure",
        "Google Cloud",
        "Linux",
        "Nginx",
      ],
    },
    {
      category: "Others",
      skills: [
        "JIRA",
        "Trello",
        "UI/UX Design Principles",
        "Software Testing",
        "Fusion 360",
        "Embedded Systems",
        "IoT",
        "Android",
        "Python",
        "Java"
      ],
    },
  ];
  
  
  

