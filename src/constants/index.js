import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    jambopay,
    savoir,
    jobit,
    tripguide,
    threejs,
    vue,
    flutter,
    innovativetoll
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Fullstack Developer",
      icon: mobile,
    },
    {
      title: "Mobile App Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Vue",
      icon: vue,
    },
    {
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },

    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full stack Developer",
      company_name: "Jambo pay",
      icon: jambopay,
      iconBg: "#FFFFFF",
      date: "Nov 2019 - Jan 202",
      points: [
        "Implemented website and landing pages from concept through development",
        "Standardized all output with new, responsive, mobile first-approach and strategy.",
        "Assessed UX and UI design for technical feasibility.",
        "Collaborated with product team members to implement new feature developments.",
        "Ensuring proper documentation and reports in all stages of product life cycles.",
        "Designed and implemented HTML email templates and newsletters for marketing campaigns.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Innovative Toll Solutions",
      icon: innovativetoll,
      iconBg: "#FFFFFF",
      date: "June 2023 - May 2025",
      points: [
        "Developed and managed the company's corporate website and multiple service-specific websites",
        "Created and implemented a comprehensive ticketing system for customer support and issue tracking",
        "Built a transponder management system for tracking and managing toll devices",
        "Implemented responsive, mobile-first designs across all web platforms",
        "Collaborated with cross-functional teams to integrate payment systems and user management",
        "Maintained documentation throughout development lifecycle and provided training for system users",
      ],
    },
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Savoir",
      description:
        "Web-based CMS platform for savoir faire company to manage their website and blog.",
      tags: [
        {
          name: "vue",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
       
      ],
      image: savoir,
      source_code_link: "https://savoir-faire-y2lq.vercel.app/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };