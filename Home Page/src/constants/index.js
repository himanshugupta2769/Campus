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
  lib,
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
  // {
  //   id: "Works",
  //   title: "Team",
  // },

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
      "Admin have super powers to access the whole data and manage various functions of the organization",
      "Managing Master file for all student hostel or aceedmics",
      "Directly consider any type of grievances",
      "Able to control function all the branches like; admission, academics, accounts, faculty management, hostel and transport allotment, library , etc..",
    ],
  },
  {
    title: "Student",
    company_name: "Campus Crate",
    icon: shopify,
    iconBg: "#383E56",

    points: [
      "A student management system gives you a flexible option to configure and personalise your managing experience.",
      "Time Table managment Sytem With Live Attendence Tracking .",
      "Student Data Maintenance.",
      "CAMPUS CRATE provides you with complete data insights. You can look at your dashboard and configure your reports on student grades, outcomes, performance, schedules, fees, and events..",
    ],
  },
  {
    title: "Accounts",
    company_name: "Campus Crate",
    icon: meta,
    iconBg: "#E6DEDD",

    points: [
      "Evaluating information to prepare a realistic and balanced budget for the college and forecast annual budgets.",
      "Maintain accurate financial data, including accurate monthly financial statements.",
      "To manage and further develop all aspects of the college’s day-to-day financial operations.",
      "Documenting financial transactions.",
      "Creating and maintaining an appropriate internal control manual that is up to date and in line with best practice.",
    ],
  },
  {
    title: "Library",
    company_name: "Campus Crate",
    icon: lib,
    iconBg: "#E6DEDD",

    points: [
      "Proper maintenance of books records.",
      "Sending notifications about the deadline of issued book submission.",
      "Helps in collecting fine from the students.",
      "Providing digital library.",
    ],
  },
  {
    title: "Acedmics",
    company_name: "Campus Crate",
    icon: meta,
    iconBg: "#E6DEDD",

    points: [
      "Improved communication between teachers, students, and parents/guardians..",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality productsReduced paperwork and administrative tasks..",
      "Easier tracking of student progress and performance.",
      "Greater transparency and accountability..",
      "Participating in code reviews and providing constructive feedback to other developersAbility to quickly generate reports on student data.",
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
