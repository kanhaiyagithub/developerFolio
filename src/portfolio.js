/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to true for Lottie animations in Skills section
};

const greeting = {
  username: "Nidhi Kumari",
  title: "Hi all, I'm Nidhi",
  subTitle: emoji(
    "Building Enterprise products that don't break when it matters most  | A Product Manager delivering SaaS Enterprise Products from 0 to 1 | Driving Efficiency Gains Through Data-Driven Solutions."
  ),
  resumeLink:
    "/docs/Nidhi_PM_resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/nidhi-kumari-805658193/",
  gmail: "nk370510@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "A PRODUCT MANAGER DELIVERING SAAS ENTERPRISE PRODUCTS FROM 0 TO 1",
  skills: [
    emoji(
      " Product Strategy & Analytics: Product Strategy, Product Vision, Product Analytics, Product Discovery, User Research, Roadmapping, Wireframing, PRD Writing, A/B Testing, Agile, Scrum, RICE Prioritization, AARRR Metrics, OKRs, GTM Strategy, Competitive & Market Analysis, Stakeholder Management"
    ),
    emoji(
      " Analytics & Technical: SQL, Funnel Analysis, A/B Testing, Root Cause Analysis, Data-Driven Decision-Making, KPI Development & Monitoring, Google Analytics, Dashboard Development, MIS Reporting"
    ),
    emoji(
      " Tools & Platforms: Figma, Jira, Advanced Excel, Power BI, Notion, Shopify, Facebook Ads Manager, Payment Gateways / UPI Systems"
    ),
    emoji(
      " AI & Automation: ChatGPT, Claude, Gemini, Cursor AI, Perplexity AI, n8n, Make"
    ),
    emoji(
      " Key Highlights & Metrics: 10M+ Data Points | 99.5% Uptime | 50+ Clients"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "Jira",
      fontAwesomeClassname: "fab fa-jira"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Google Analytics",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "Product Analytics",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "Agile / Scrum",
      fontAwesomeClassname: "fas fa-tasks"
    },
    {
      skillName: "AI Tools",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Automation",
      fontAwesomeClassname: "fas fa-cogs"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Galgotias University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "B.Tech, Electronics and Communication Engineering",
      duration: "2016 – 2020",
      desc: "Graduated with a Bachelor of Technology in Electronics and Communication Engineering.",
      descBullets: []
    },
    {
      schoolName: "Airtribe",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Product Management Launchpad",
      duration: "June 2024 – Nov 2024",
      desc: "Intensive Product Management Bootcamp focusing on 0-to-1 product strategy, discovery, PRDs, and GTM.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Product Strategy & Discovery",
      progressPercentage: "95%"
    },
    {
      Stack: "Analytics & Data-Driven Decisions",
      progressPercentage: "90%"
    },
    {
      Stack: "Growth & GTM Execution",
      progressPercentage: "85%"
    },
    {
      Stack: "Agile, Scrum & PLM",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Associate Product Manager",
      company: "PXY Media",
      companylogo: require("./assets/images/pxymedia_logo.webp"),
      date: "12/2024 – 06/2025 | Hyderabad",
      desc: "As an Associate Product Manager, led product strategy and discovery-to-launch for key SaaS and growth initiatives.",
      descBullets: [
        "Product Strategy & Launch: Launched Visaz 0→1 in 30 days by defining product vision, wireframes, PRDs, and GTM strategy while leading a 5-person team and applying stakeholder management across 8 partners in Engineering, Design, QA, and Business.",
        "User Experience & Engagement: Grew cross-device engagement by 15 points (25% relative lift) across a 10K-user base and cut bounce rate by 15% via user research - heatmaps and behavioral analytics - to redesign mobile-first journeys.",
        "Product Lifecycle Management (PLM): Delivered 100% on-time releases across 10+ features by owning discovery-to-launch - requirements, PRDs, sprint planning, and QA - within Agile/Scrum.",
        "SEO & Growth Hacking: Grew organic traffic from 10K to 11.5K monthly visits (+15%) and session duration by 20% via CMS-driven content and SEO optimizations, informed by competitive and market analysis.",
        "Operational Efficiency & Tooling: Cut bug resolution time from 5 days to 1 day (80% faster) by designing a Jira-based bug-tracking workflow with severity tagging and SLA monitoring."
      ]
    },
    {
      role: "Manager – Growth & Product",
      company: "Unacademy",
      companylogo: require("./assets/images/images.png"),
      date: "05/2021 – 06/2024 | Noida",
      desc: "Owned payment roadmap, GTM execution, and data-driven UX optimization for core subscription products.",
      descBullets: [
        "Product Strategy & Monetization: Owned the payment roadmap end-to-end, aligned to quarterly OKRs, shipping an A/B-tested redesign that lifted paid subscriptions by 25% within 6 months.",
        "Growth & GTM Execution: Co-owned GTM strategy with Marketing - segments, activation flows, messaging - growing new user sign-ups by 35% in a quarter.",
        "Data-Driven UX Optimization: Increased average watch time by 20% and user retention by 30% via discovery on Live Class, turning research into a prioritized roadmap.",
        "Customer Insights & Roadmap Ownership: Built a continuous voice-of-customer program for premium tiers (Iconic & Plus), lifting CSAT by 40% and feeding quarterly roadmap planning.",
        "Cross-Functional Leadership: Served as central product point of contact across Sales, Marketing, and Engineering, using stakeholder management to align acquisition strategy with execution."
      ]
    },
    {
      role: "Senior Business Development Associate",
      company: "Unacademy",
      companylogo: require("./assets/images/images.png"),
      date: "05/2020 – 05/2021 | Noida",
      desc: "Owned market analysis and team productivity initiatives contributing to significant organizational growth.",
      descBullets: [
        "Strategic Growth & Market Analysis: Owned market analysis across a 2,000-user base, identifying gaps that contributed to 180% organizational growth over two years.",
        "Process Improvement & Training: Built structured training modules that boosted team productivity by 20%."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github
  display: false // Set false to hide this section
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "PRODUCT MANAGEMENT CASE STUDIES & STRATEGIC PROJECTS",
  projects: [
    {
      image: require("./assets/images/snitch_cover-01.png"),
      projectName: "Project 1: Snitch Clothing Case Study",
      projectDesc:
        "Comprehensive Product Case Study on increasing Snitch's Average Order Value (AOV) from ₹2,500 to ₹5,000 within 12 months, driving higher AOV and Customer Lifetime Value (CLTV).\n\nSkills Learned: Product Thinking, User Research, Product Sense, Product Analytics, Metrics, Wireframing, Feature Prioritization.\nTime to Complete: 3 Weeks | Tools: Figma, MixPanel, Google Analytics, Canva, Loom",
      footerLink: [
        {
          name: "View Case Study PDF",
          url: "/docs/Snitch_Case_Study_Nidhi_Kumari.pdf"
        }
      ]
    },
    {
      image: require("./assets/images/rapido_image.jpeg"),
      projectName: "Project 2: Rapido Case Study",
      projectDesc:
        "Product Discovery, Market & User Research case study for Rapido's supply pod. Formulated short & medium-term solutions to overcome friction between bike taxi captains and auto-rickshaw drivers to revive driver retention and supply growth.\n\nSkills Learned: Product Thinking, Market Research, Problem Solving, Prioritization, Product Sense, Product Analytics, Stakeholder Management, Project Management.\nTools: Canva",
      footerLink: [
        {
          name: "View Case Study PDF",
          url: "/docs/Rapido_Case_Study_Nidhi_Kumari.pdf"
        }
      ]
    },
    {
      image: require("./assets/images/shorts.jpeg"),
      projectName: "Project 3: YouTube Shorts Case Study",
      projectDesc: "Problem framing & prioritization case study for YouTube Shorts. Identified 6 top engagement strategies (3 low-effort, 3 high-effort/impact) derived from 20+ user interviews and prioritized using the RICE framework.\n\nSkills Learned: Product Thinking, Problem Solving, Prioritization, User Research, Feature Prioritization, MoM Framework, Product Sense, Product Analytics.\nTools: Jira, Canva, Google Analytics",
      footerLink: [
        {
          name: "View Case Study PDF",
          url: "/docs/YouTube_Shorts_Case_Study_Nidhi_Kumari.pdf"
        }
      ]
    },
    {
      image: require("./assets/images/sriMandir.png"),
      projectName: "Project 4: Sri Mandir PRD",
      projectDesc: "Drafted a comprehensive PRD to implement and test a personalized discount nudge feature, aiming to enhance the subscription renewal rate for the Sri Mandir app.\n\nSkills Learned: Empathy Mapping, Business Reporting, Stakeholder Management, Data Visualization, Project Management.\nTools: Figma, Canva",
      footerLink: [
        {
          name: "View Case Study PDF",
          url: "/docs/Sri_Mandir_PRD_Nidhi_Kumari.pdf"
        }
      ]
    },
    {
      image: require("./assets/images/Analytics.jpeg"),
      projectName: "Project 5: Analytics and Metrics",
      projectDesc: "Brainstormed North Star Metrics and OKRs (2+ Objectives, 3+ KRs each) for Amazon Prime (churn reduction), YouTube Music (acquiring 1st time users vs Spotify in India), and Zepto (reducing contact center cost).\n\nSkills Learned: Problem Solving, Competitor Analysis, Market Research, MoM Framework, Product Analytics",
      footerLink: [
        {
          name: "View Case Study PDF",
          url: "/docs/Analytics_and_Metrics_Nidhi_Kumari.pdf"
        }
      ]
    },
    {
      image: require("./assets/images/instagram.jpeg"),
      projectName: "Project 6: Growth Loops Identification for Instagram",
      projectDesc: "Analyzed and optimized growth loops for Instagram. Defined Epics for feature improvements, supported by clear user research/product strategy rationale, and prioritized via RICE.\n\nSkills Learned: Product Thinking, Problem Solving, Data Analysis, Business Reporting.\nTools: Google Analytics, Notion",
      footerLink: [
        {
          name: "View Case Study PDF",
          url: "/docs/Instagram_Growth_Loops_Nidhi_Kumari.pdf"
        }
      ]
    },
    {
      image: require("./assets/images/fitness.jpeg"),
      projectName: "Project 7: UI/UX for a Fitness App",
      projectDesc: "Created a 1-pager for design teams and basic wireframe flows for an engaging, personalized fitness app that helps users achieve fitness goals and track progress.\n\nSkills Learned: Personas, Empathy Mapping, User Flow, Customer Journey Map, Product Sense, Wireframing.\nTools: Figma",
      footerLink: [
        {
          name: "View Case Study PDF",
          url: "/docs/Fitness_App_Wireframes_Nidhi_Kumari.pdf"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle:
    "Certifications, Awards, and Key Recognition in Product Management, UI/UX, and Analytics!",

  achievementsCards: [
    {
      title: "Airtribe — Product Management Bootcamp",
      subtitle:
        "Completed Product Management Launchpad covering product discovery, PRD writing, roadmapping, and GTM strategy.",
      image: require("./assets/images/airtribe.png"),
      imageAlt: "Airtribe Certificate",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.airtribe.live/product-management/certificate/09PYEL4NU8JX"
        }
      ]
    },
    {
      title: "UI / UX for Beginners — Great Learning",
      subtitle:
        "Certificate of Completion for UI / UX for Beginners awarded to Nidhi Kumari by Great Learning Academy.",
      image: require("./assets/images/uiux_certificate-1.png"),
      imageAlt: "UI/UX Great Learning Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.mygreatlearning.com/certificate/RSEAXUVT"
        }
      ]
    },
    {
      title: "Google Analytics — Great Learning",
      subtitle:
        "Certificate of Completion for Google Analytics awarded to Nidhi Kumari by Great Learning Academy.",
      image: require("./assets/images/google_analytics_certificate-1.png"),
      imageAlt: "Google Analytics Great Learning Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.mygreatlearning.com/certificate/FFHNVOUR"
        }
      ]
    },
    {
      title: "SQL for Data Science — Great Learning",
      subtitle:
        "Certificate of Completion for SQL for Data Science awarded to Nidhi Kumari by Great Learning Academy.",
      image: require("./assets/images/sql_certificate.png"),
      imageAlt: "SQL for Data Science Great Learning Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.mygreatlearning.com/certificate/QGGRPRPP"
        }
      ]
    },
    // {
    //   title: "Star Performer, Product & Growth",
    //   subtitle:
    //     "Unacademy, 2023 — Awarded Star Performer for driving key growth and retention metrics.",
    //   image: require("./assets/images/saayaHealthLogo.webp"),
    //   imageAlt: "Star Performer",
    //   footerLink: []
    // },
    // {
    //   title: "Sales Champion",
    //   subtitle:
    //     "Unacademy, 2020 — Generated ₹1 Cr in revenue within 6 months.",
    //   image: require("./assets/images/nextuLogo.webp"),
    //   imageAlt: "Sales Champion",
    //   footerLink: []
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false // Set false to hide this section
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "",
  talks: [],
  display: false // Set false to hide this section
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false // Set false to hide this section
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "View or contact to request resume",
  display: true // Set false to hide this section
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open to Product Management opportunities & discussions. Feel free to reach out!",
  number: "+91-9911525020",
  email_address: "nk370510@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "",
  display: false // Set false to hide this section
};

const isHireable = true; // Set true if open for opportunities

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
