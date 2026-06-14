import { SiteData } from "../types/site";

export const siteData: SiteData = {
  company: "ReachNova",

  logo: {
    src: "/images/logo.png",
    alt: "ReachNova Logo",
  },

  topBar: {
    phone: "+977 9865563025",
    email: "info@reachnova.biz",
    address: "Kathmandu, Nepal",
  },

  nav: {
    links: [
      { label: "Home", href: "/" },

      {
        label: "About",
        href: "#about",
        dropdown: [
          { label: "our story", href: "/about/story" },
          { label: "team", href: "/about/team" },
          { label: "careers", href: "/about/careers" },
          { label: "testimonials", href: "/about/testimonials" },
          { label: "blog", href: "/about/blog" },
        ],
      },

      {
        label: "Services",
        href: "#services",
        dropdown: [
          { label: "Visa Processing", href: "/services/visa" },
          { label: "Consultation", href: "/services/consult" },
          { label: "Software Development", href: "/services/software" },
          { label: "UI/UX Design", href: "/services/ui" },
        ],
      },

      {
        label: "Projects",
        href: "#projects",
        dropdown: [
          { label: "Software Development", href: "/projects/software" },
          { label: "UI Design", href: "/projects/ui" },
          { label: "Mobile App Development", href: "/projects/mobile" },
        ],
      },

      {
        label: "Process",
        href: "#process",
        dropdown: [
          { label: "approach", href: "/process/approach" },
          { label: "methodology", href: "/process/methodology" },
          { label: "case studies", href: "/process/case-studies" },
          { label: "testimonials", href: "/process/testimonials" },
        ],
      },

      {
        label: "Contact",
        href: "#contact",
        dropdown: [
          { label: "support", href: "/contact/support" },
          { label: "team", href: "/contact/team" },
          { label: "quote", href: "/contact/quote" },
          { label: "consultation", href: "/contact/consultation" },
        ],
      },
    ],
    ctaLabel: "Get Started",
  },

  /* HERO */
  hero: {
    badge: "WELCOME TO REACHNOVA",

    features: [
       "Language Training & Visa Services",
       "IT Consultancy & Software Development",
      "International Outsourcing Services",
    ],

    cta: {
      primary: "Let's Talk With Us",
      secondary: "Learn More",
    },

    stats: [
      { number: 100, label: "Projects Done" },
      { number: 50, label: "Expert Team" },
      { number: 10, label: "Years Experience" },
    ],

    slides: [
      {
        image: "/images/background.jpg",
        heading: "Comprehensive",
        heading1: "IT Consulting",
        heading2: "& Development",
        subtext: "Leverage innovative frameworks to provide robust synopses for high-level business overview and strategic consultancy. Transform your vision into reality with our expert solutions.",
      },
      {
        image: "/images/car.jpg",
        heading: "Innovative",
        heading1: "Digital Solutions",
        heading2: "& IT Services",
        subtext:  "Empower your future with expert guidance, international pathways, and structured support for study and career advancement worldwide.",
      },
      {
        image: "/images/student.jpg",
        heading: "Strategic",
        heading1: "Business Growth",
        heading2: "& Consulting",
        subtext: "Transform your business with data-driven strategies, automation tools, and next-generation digital ecosystems tailored for growth.",

      },
    ],
  },

  //about data

  about: {
  badge: "ABOUT YOUR COMPANY",

  title: "We Execute Ideas From Start To Finish",

  image: "/images/hero1.png",

  missionTitle: "Our Mission",
  mission:
    "Push boundaries, engage audiences, and drive innovation through excellence in every service",

  visionTitle: "Our Vision",
  vision:
    "Empower Nepali talent to compete globally while delivering innovative solutions to international clients",

  valuesTitle: "Our Values",
  values:
    "Integrity, excellence, innovation, and client satisfaction drive everything we do",

  highlightsTitle: "About ReachNova Team",
  highlights:
    "ReachNova is a consultancy and tech solution company dedicated to bridging global opportunities with skilled talent.",

  descriptionTitle: "Who We Are",
  description:
    "We specialize in Japanese language training, IT consultancy, and international outsourcing services.",

  cards: [
    {
      icon: "Target",
      title: "Our Mission",
      description:
        "Push boundaries, engage audiences, and drive innovation through excellence in every service",
    },
    {
      icon: "Globe",
      title: "Our Vision",
      description:
        "Empower Nepali talent to compete globally while delivering innovative solutions to international clients",
    },
    {
      icon: "ShieldCheck",
      title: "Our Values",
      description:
        "Integrity, excellence, innovation, and client satisfaction drive everything we do",
    },
  ],
},



// about: {
//   badge: "ABOUT YOUR COMPANY",

//   title: "We Execute Ideas From Start To Finish",

//   image: "/images/hero1.png",

//   missionTitle: "Our Mission",
//   mission:
//     "Push boundaries, engage audiences, and drive innovation through excellence in every service",

//   visionTitle: "Our Vision",
//   vision:
//     "Empower Nepali talent to compete globally while delivering innovative solutions to international clients",

//   valuesTitle: "Our Values",
//   values:
//     "Integrity, excellence, innovation, and client satisfaction drive everything we do",

//   highlightsTitle: "About ReachNova Team",
//   highlights:
//     "ReachNova is a consultancy and tech solution company dedicated to bridging global opportunities with skilled talent.",

//   descriptionTitle: "Who We Are",
//   description:
//     "We specialize in Japanese language training, IT consultancy, and international outsourcing services.",
// },

  // about: {
  //   badge: "ABOUT OUR COMPANY",
  //   title: "We Execute Ideas From Start To Finish",
  //   image: "/images/hero1.png",
  //   mission: "Deliver innovation",
  //   vision: "Empower global talent",
  //   values: "Integrity, excellence, innovation",
  //   description: "ReachNova is a consultancy and tech company.",
  //   highlights: "Outsourcing Services",
  //   //  [
  //   //   "Language Training",
  //   //   "IT Consultancy",
  //   //   "Outsourcing Services",
  //   // ],
  // },

//services 

services: {
  badge: "OUR SERVICES",
  title: "What We Provide",
  highlight: "For Your Success",
  description: "We deliver IT solutions, consultancy, and training services for global opportunities.",

  items: [
    {
      id: 1,
      title: "Japanese Language & Visa Services",
      description:
        "High-quality Japanese language training and complete visa assistance for students planning to study in Japan.",
      image: "/images/car.jpg",
      icon: "visa",
      color: "primary",
      features: [
        "Language Training",
        "Visa Processing",
        "University Guidance",
        "Placement Support",
      ],
    },
    {
      id: 2,
      title: "IT Consultancy & Software Development",
      description:
        "Innovative IT consulting and custom software solutions tailored to modern business needs.",
      image: "/images/hero2.png",
      icon: "it",
      color: "secondary",
      features: [
        "System Design",
        "Custom Development",
        "SaaS Solutions",
        "Technical Support",
      ],
    },
    {
      id: 3,
      title: "International Outsourcing Services",
      description:
        "Professional outsourcing solutions including software, digital content, and multimedia production.",
      image: "/images/hero1.png",
      icon: "code",
      color: "primary",
      features: [
        "Software Development",
        "Content Creation",
        "Video Production",
        "Multimedia Solutions",
      ],
    },
    {
      id: 4,
      title: "IT Consultancy & Software Development",
      description: " Professional Outsourcing Solutions Including Software, digital content, and Multimedia Production",
      image: "/images/ketaharu.png",
      icon: "code",
      color: "primary",
      features: [
        "System Design",
        "saas solution",
        "technical Support"
      ]

    },

    {
      id: 5,
      title: "IT Consultancy & Software Development",
      description: " Professional Outsourcing Solutions Including Software, digital content, and Multimedia Production",
      image: "/images/student.jpg",
      icon: "code",
      color: "primary",
      features: [
        "System Design",
        "saas solution",
        "technical Support"
      ]

    },


  
  ],
},

  // services: {
  //   badge: "OUR SERVICES",
  //   title: "What We Provide",
  //   highlight: "For Your Success",
  //   description: "We deliver IT solutions and consultancy.",
  //   items: [
  //     {
  //       id: 1,
  //       title: "Visa Processing",
  //       description: "Complete visa support",
  //       icon: "visa",
  //       color: "primary",
  //     },
  //     {
  //       id: 2,
  //       title: "IT Consultancy",
  //       description: "Business IT solutions",
  //       icon: "it",
  //       color: "secondary",
  //     },
  //     {
  //       id: 3,
  //       title: "Software Development",
  //       description: "Web & mobile apps",
  //       icon: "code",
  //       color: "primary",
  //     },
  //   ],
  // },


  projectsSection: {
    badge: "FEATURED PROJECTS",
    title: "Real-World Case Studies",
    description: "Production-grade system built with Modern UI and Scalable architecture.",

  },

   projects: [
    {
      id: 1,
      title: "Language Learning Platform",
      category: "Education",
      description:
        "Interactive Japanese language learning platform with AI-powered tutoring.",
      image: "/images/image.png",
      stack: ["React", "Node.js", "AI/ML"],
      github: "https://github.com/xxx",
    demo: "https://demo.com",
    },

    {
      id: 2,
      title: "Enterprise ERP System",
      category: "Enterprise",
      description:
        "Custom ERP solution for multi-national corporation with 500+ users.",
      image: "/images/keta2.png",
      stack: [".NET", "SQL Server", "Cloud"],
      github: "https://github.com/xxx",
    demo: "https://demo.com",
    },

    {
      id: 3,
      title: "Digital Marketing Suite",
      category: "SaaS",
      description:
        "Marketing automation and analytics platform for modern businesses.",
      image: "/images/hero1.png",
      stack: ["React", "Python", "Analytics"],
      github: "https://github.com/xxx",
    demo: "https://demo.com",
    },

    {
      id: 4,
      title: "E-commerce Platform",
      category: "E-commerce",
      description:
        "Full-featured online store with payment and inventory system.",
      image: "/images/ketaharu.png",
      stack: ["Next.js", "TypeScript", "Stripe"],
      github: "https://github.com/xxx",
    demo: "https://demo.com",
    },

    {
      id: 5,
      title: "Mobile Healthcare App",
      category: "Healthcare",
      description:
        "Telemedicine app connecting patients with doctors in real time.",
      image: "/images/student.jpg",
      stack: ["React Native", "Firebase", "Medical"],
      github: "https://github.com/xxx",
    demo: "https://demo.com",
    },

    {
      id: 6,
      title: "Content Management System",
      category: "CMS",
      description:
        "Headless CMS with multi-language support for global brands.",
      image: "/images/hero2.png",
      stack: ["Headless", "GraphQL", "Microservices"],
      github: "https://github.com/xxx",
    demo: "https://demo.com",
    },
  ],


  process: {
    badge: "OUR PROCESS",
    title: "A Systematic Approach To",
    highlight: "Delivering Excellence",
    description:
      "We follow a proven workflow that transforms ideas into scalable digital solutions.",

    steps: [
      {
        number: "01",
        title: "Discovery & Planning",
        description:
          "We understand your business goals, challenges, and requirements.",
        icon: "search",
      },
      {
        number: "02",
        title: "Strategy & Design",
        description: "We design tailored solutions.",
        icon: "lightbulb",
      },
      {
        number: "03",
        title: "Development & Implementation",
        description: "We build scalable solutions.",
        icon: "code",
      },
      {
        number: "04",
        title: "Testing & QA",
        description: "We ensure quality and performance.",
        icon: "shield",
      },
      {
        number: "05",
        title: "Deployment & Launch",
        description: "We launch smoothly to production.",
        icon: "rocket",
      },
      {
        number: "06",
        title: "Support & Maintenance",
        description: "We provide continuous support.",
        icon: "support",
      },
    ],
  },


  contact: {
  title: "Contact Us",
  subtitle:
    "Get in touch with us for your next project. We're ready to help you build something great.",
  formTitle: "Send us a message",

  info: {
    address: "Kathmandu, Nepal",
    phones: ["+977 9865563025", "+977 9860848134"],
    email: "info@reachnova.biz",
  },

  form: {
    name: "Your name",
    email: "your@email.com",
    phone: "+977 1 XXXX XXXX",

    subjectOptions: [
      "General Inquiry",
      "Project Discussion",
      "Support",
      "Career",
    ],

    message: "Your Message...",
    button: "Send Message",
  },
},



cta: {
  badge: "Let's Build Something",
  title: "Ready to Transform Your Business",
  description: "Get in touch with our team today and discover how we can help you scale, automate, and grow your digital presence.",

  buttons: {
    primary: "Start Your Journy",
    secondary: "learn More",

  },

  image: "/images/student.jpg",

  stats: [
    {
      number: "50+",
      label: "Happy Clients",
      position: "top-left",

    },

    {
      number: "4+",
      label: "years Experience",
      position: "top-right",

    },

    {
      number: "7+",
      label: "projects Delivered",
      position: "bottom-left",
    },
  ],
},

footer: {
  brand: {
    name: "ReachNova",
    description: "Your Trusted Partner in IT Consultancy, education services, and global outsourcing solutions." ,

    socials: [
      {
        name: "globe",
        href: "https://reachnova.biz",
      },

      {
        name: "facebook",
        href: "https://facebook.com",
      },

      {
        name: "instagram",
        href: "https://instagram.com",
      },

      {
        name: "linkedin",
        href: "https://linkedin.com",
      },
    ],
  },


  services: [
    "Japanese Language Training",
    "IT Consultancy",
    "Software Development",
    "Outsourcing Services",

  ],

  company: [
    {label: "About Us", href: "#"},
    {label: "Our Team", href: "#"},
    {label: "Blog", href: "#"},
    {label: "Careers", href: "#"},
    {label: "Contact", href: "#"},

  ],


  contact: {
    address: "Kathmandu, Nepal",
    phones: ["+977 9865563025", "+977 9860848134"],
    email: "info@reachnova.biz",
  },

  bottom: {
    copyright: "© 2024 ReachNova. All rights reserved.",
    links: [
      {label: "Privacy Policy", href: "/privacy"},
      {label: "Terms of Service", href: "/terms"},
    ],
  },

  

},

};












// import { SiteData } from "../types/site";

// export const siteData: SiteData = {
//   company: "ReachNova",

//   logo: {
//     src: "/images/logo.png",
//     alt: "ReachNova Logo",
//   },

//   topBar: {
//     phone: "+977 9865563025",
//     email: "info@reachnova.biz",
//     address: "Kathmandu, Nepal",
//   },

//  nav: {
//   links: [
//     {
//       label: "Home",
//       href: "/",
//     },
//     {
//       label: "About",
//       href: "#about",

//       dropdown: [
//         {
//           label: "our story",
//           href: "/about/story",
//         },
//         {
//           label: "team",
//           href: "/about/team",
//         },
//         {
//           label: "careers",
//           href: "/about/careers",
//         },

//         {
//           label: "testimonials",
//           href: "/about/testimonials",
//         },
//         {
//           label: "blog",
//           href: "/about/blog",
//         }

//       ]


//     },

//     // SERVICES WITH DROPDOWN
//     {
//       label: "Services",
//       href: "#services",

//       dropdown: [
//         {
//           label: "Visa Processing",
//           href: "/services/visa",
//         },
//         {
//           label: "Consultation",
//           href: "/services/consult",
//         },

//         {
//           label: "software Development",
//           href: "/services/software",
//         },

//         {
//           label: "UI/UX Design",
//           href: "/services/ui",
//         }

//       ],
//     },

//     {
//       label: "Projects",
//       href: "#projects",

//       dropdown: [
//         {
//           label: "Software Development",
//           href: "/projects/software",
//         },
//         {
//           label: "UI Design",
//           href: "/projects/ui",
//         },
//         {
//           label: "Mobile App Development",
//           href: "/projects/mobile",
//         }
//       ]
//     },
//     {
//       label: "Process",
//       href: "#process",

//       dropdown: [
//         {
//           label: "our approach",
//           href: "/processs/approach",
//         },

//         {
//           label: "methodology",
//           href: "/process/methodology",
//         },

//         {
//           label: "case Studies",
//           href: "/process/casestudies",

//         },
        
//         {
//           label: "testimonials",
//           href: "/process/testimonials",


//         }
//       ]

//     },
//     {
//       label: "Contact",
//       href: "#contact",
      
//       dropdown: [
//         {
//           label: "support",
//           href: "/contact/support",
         
//         },

//         {
//           label: "Meet Our Team",
//           href: "/contact/team",
//         },

//         {
//           label: "Request a Quote",
//           href: "/contact/quote",
//         },

//         {
//           label: "Book a Consultation",
//           href: "/contact/consultation",
//         }

//       ]
//     },
//   ],

//   ctaLabel: "Get Started",
// },
//   hero: {
//     badge: "WELCOME TO REACHNOVA",

//     heading: "Comprehensive" ,

//     heading1: "IT Consulting", 
    
//     heading2:  "& Development ",

//     subtext:
//       "Leverage innovative frameworks to provide robust synopses for high-level business overview and strategic consultancy. Transform your vision into reality with our expert solutions.",

//     features: [
//       "Language Training & Visa Services",
//       "IT Consultancy & Software Development",
//       "International Outsourcing Services",
//     ],

//     cta: {
//       primary: "Let's Talk With Us",
//       secondary: "Learn More",
//     },

//     image: "/images/image.png",

//     stats: [
//       {
//         number: 7,
//         label: "Projects Done",
//       },
//       {
//         number: 3,
//         label: "Expert Team",
//       },
//       {
//         number: 4,
//         label: "Years Experience",
//       },
//     ],

//     floatingCards: {
//       topLeft: {
//         title: "Trusted Company",
//         subtitle: "100% Professional Solutions",
//         icon: "shield",
//       },

//       bottomLeft: {
//         title: "Project Delivered",
//         subtitle: "Successfully completed projects",
//         icon: "rocket",
//         badge: "LIVE",
//       },

//       topRight: {
//         number: "4+",
//         label: "Years Experience",
        
//       },

//       bottomRight: {
//         title: "Team Available",
//         subtitle: "Ready For Your Project",
//         icon: "online",
//       },
//     },
//   },



//  about: {
//     badge: "ABOUT OUR COMPANY",
//     title: "We Execute Ideas From Start To Finish",
//     image: "/images/hero1.png",

//     mission:
//       "Push boundaries, engage audiences, and drive innovation through excellence in every service",

//     vision:
//       "Empower Nepali talent to compete globally while delivering innovative solutions to international clients",

//     values:
//       "Integrity, excellence, innovation, and client satisfaction drive everything we do",

//     description:
//       "ReachNova is a consultancy and tech solution company dedicated to bridging global opportunities with skilled talent. We specialize in Japanese language training, IT consultancy, and international outsourcing services.",

//     highlights: [
//       "Japanese Language Training & Visa Support",
//       "IT Consultancy & Software Development",
//       "International Outsourcing Services",
//     ],
//   },


//   services: {
//   badge: "OUR SERVICES",
//   title: "What We Provide",
//   highlight: "For Your Success",

//   description:
//     "We deliver professional solutions in IT, consultancy, and global services designed to help you grow faster and smarter.",

//   items: [
//     {
//       id: 1,
//       title: "Visa Processing",
//       description:
//         "Complete guidance for student, work, tourist, and family visa applications with expert support.",
//       icon: "visa",
//       color: "primary",
//     },
//     {
//       id: 2,
//       title: "IT Consultancy",
//       description:
//         "Professional IT consulting for business growth, system design, and digital transformation.",
//       icon: "it",
//       color: "secondary",
//     },
//     {
//       id: 3,
//       title: "Software Development",
//       description:
//         "Custom web apps, enterprise systems, and scalable software solutions using modern technology.",
//       icon: "code",
//       color: "primary",
//     },
//     {
//       id: 4,
//       title: "UI/UX Design",
//       description:
//         "Modern, user-friendly, and conversion-focused UI/UX design for web and mobile apps.",
//       icon: "design",
//       color: "secondary",
//     },
//     {
//       id: 5,
//       title: "Global Outsourcing",
//       description:
//         "Reliable international outsourcing services connecting global clients with skilled professionals.",
//       icon: "global",
//       color: "primary",
//     },
//   ],
// },

  
// };

