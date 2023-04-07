import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Services",
  },
  {
    id: "team",
    title: "Teams",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Admin ",
    icon: web,
  },
  {
    title: "Acedmics",
    icon: mobile,
  },
  {
    title: "Accounts",
    icon: backend,
  },
  {
    title: "Student",
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "figma",
    icon: figma,
  },
 
];

const experiences = [
  {
    title: "Some special Impact",
    company_name: "Campus Crate",
    icon: starbucks,
    iconBg: "#383E56",
    
    points: [
      "A centralize administration manager. ",
      "Paperless office. ",
      "Systematic efficient work.",
      "Less labourers required.",
      "Very low human errors.",
    ],
  },
  {
    title: "Admin",
    company_name: "Campus create",
    icon: tesla,
    iconBg: "#E6DEDD",
  
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Student",
    company_name: "Campus Crate",
    icon: shopify,
    iconBg: "#383E56",
    
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Accounts",
    company_name: "Campus Crate",
    icon: meta,
    iconBg: "#E6DEDD",
    
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Library",
    company_name: "Campus Crate",
    icon: meta,
    iconBg: "#E6DEDD",
    
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Acedmics",
    company_name: "Campus Crate",
    icon: meta,
    iconBg: "#E6DEDD",
    
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Nitish Kumar",
    description:
      "Backend Developer",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      
    ],
    image: carrent,
    source_code_link: "https://github.com/rajneeshrana0",
  },
  {
    name: "Rajneesh Rana",
    description:
      "Frontend Development",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "orange-text-gradient",
      },
      
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Himanshu Gupta",
    description:
      "Frontend Developer",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "BootStrap",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Vishal Sharma",
    description:
      "Documentation",
    tags: [
      {
        name: "Power Point",
        color: "blue-text-gradient",
      },
      {
        name: "Documentation",
        color: "green-text-gradient",
      },
     
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
