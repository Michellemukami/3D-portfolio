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
    gsap,
    innovativetoll,
    graghql,
    nuxt,
    wamara,
    shipit,
    tich,
    yaani,
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
      title: "Backend Developer",
      icon: mobile,
    },
    {
      title: "UI/UX Developer",
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
      name: "Nuxt",
      icon: nuxt,
    },
    {
      name: "Vue",
      icon: vue,
    },
    {
      name: "GraghQl",
      icon: graghql,
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
    {
      name: "GSAP",
      icon: gsap,
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
        "Designed and developed a real-time CRM platform enabling customers to raise utility-related issues directly with service providers.",
        "Utilized Django as the backend framework, with WebSockets and Redis for real-time issue tracking and communication.",
        "Employed PostgreSQL for robust data storage and management.",
        "Integrated Chart.js for dynamic data visualization and performance insights.",
        "Delivered a modern, responsive front-end using Bootstrap, HTML, CSS, and JavaScript.",
        "•	Focused on user experience, performance, and scalability across the full application lifecycle.",
      ],
    },
    
    {
      title: "Full stack Developer",
      company_name: "Innovative Toll Solutions",
      icon: innovativetoll,
      iconBg: "#FFFFFF",
      date: "June 2023 - June 2025",
      points: [
        "Developed and managed the company's corporate website and multiple service-specific websites",
        "Developed features for an asset management dashboard to simplify tracking and auditing of client assetsg",
        "Implemented change logging with a full audit trail for transparency and compliance.",
        "Enabled transponder ordering, replacement handling, and real-time order tracking.",
        "Integrated inline editing within DataTables for fast, in-context data updates.",
        "•	Built logic to detect and flag mismatched asset records across agency systems, enhancing data accuracy and resolution time.",
      ],
    },
    {
      title: "Lead Web Developer",
      company_name: "Wamara Design Studio",
      icon: wamara,
      iconBg: "#FFFFFF",
      date: "FreeLance - Remote",
      points: [
        "Developed cutting-edge time sensitive CMS websites for a diverse range of clients, handling everything from creation to ongoing maintenance and web hosting.",
        "Leveraged modern technologies including Payload (Headless CMS), Nuxt.js, Tailwind CSS, HTML, CSS, and GSAP to deliver fast, responsive, and highly customizable web experiences.",
        "Architected scalable content structures within Payload to allow flexible and intuitive content editing for non-technical users",
        "Integrated smooth, on-scroll animations and transitions using GSAP for engaging, interactive front-end experiences.",
        "Deployed websites with continuous monitoring and handled routine web hosting, DNS management, and SSL setup.",
        "Collaborated with designers, marketers, and stakeholders to align website functionality with brand goals and campaign needs.",
     
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
      name: "Savoir Faire",
      description:
        "A custom-crafted web CMS for Savoir Faire, empowering seamless website and blog management with refined control and sophisticated design",
      tags: [
        {
          name: "vue",
          color: "blue-text-gradient",
        },
        {
          name: "Nuxt",
          color: "orange-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Payload",
          color: "pink-text-gradient",
        },
       
      ],
      image: savoir,
      source_code_link: "https://savoir-faire-y2lq.vercel.app/",
    },
    {
      name: "Shop We Ship",
      description:
        "A seamless cross-border shopping platform that lets users in Kenya purchase products from U.S. stores and have them shipped directly to their address.",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
         {
          name: "graphql",
          color: "pink-text-gradient",
        },
         {
          name: "NodeJs",
          color: "orange-text-gradient",
        },
        {
          name: "postgres",
          color: "green-text-gradient",
        },
      ],
      image: shipit,
      source_code_link: "https://cargonexpress.com/",
    },
    {
      name: "Yaani",
      description:
        "A tailored CMS solution for Yaani, built to effortlessly manage rich video content — all wrapped in a polished, animated, and user-friendly interface that brings content to life.",
    tags: [
        {
          name: "vue",
          color: "blue-text-gradient",
        },
        {
          name: "Nuxt",
          color: "orange-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Payload",
          color: "pink-text-gradient",
        },
       
      ],
      image: yaani,
      source_code_link: "https://www.yaani-creative.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };