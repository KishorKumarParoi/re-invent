const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: true,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
  {
    id: 4,
    date: "Sep 16, 2023",
    title: "Infinity Image Scrolling Using Intersection Observer API",
    image: "/images/blog1.png",
    link: "https://kishorsblog.hashnode.dev/infinity-image-scrolling-using-intersection-observer-api",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React", "Next", "TypeScript", "Redux", "Tanstack"],
  },
  {
    category: "3D & Animation",
    items: ["Three.js", "GSAP", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Rust", "Node.js", "Express", "NestJS", "Go", "Java"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo", "Flutter"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "MySQL", "DynamoDB"],
  },
  {
    category: "Web APIs",
    items: ["GraphQL", "REST", "WebSockets", "WebRTC", "WebVR"],
  },
  {
    category: "Others",
    items: ["Redis", "Kafka", "Nx", "Swagger.io", "Drizzle"],
  },
  {
    category: "AI & ML",
    items: ["Python", "TensorFlow", "n8n", "LangChain"],
  },
  {
    category: "RAG & MCP",
    items: ["Pinecone", "Weaviate", "AWS Bedrock", "Supabase"],
  },
  {
    category: "DevOps",
    items: ["Linux", "Ansible", "Kubernetes", "Terraform"],
  },
  {
    category: "AWS",
    items: ["EC2", "ECR", "S3", "Lambda", "RDS", "CloudFront"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker", "Jenkins", "bun", "Figma"],
  },
  {
    category: "Log/Monitor",
    items: ["ELK Stack", "Prometheus", "Grafana", "DataDog"],
  },
  {
    category: "CI/CD",
    items: ["GitHub Actions", "Travis CI", "Argo CD"],
  },
  {
    category: "Cloud",
    items: ["AWS", "AZURE", "GCP", "Vercel", "Netlify"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS", "Styled-Components"],
  },
  {
    category: "Authentication",
    items: ["JWT", "BetterAuth", "Cognito", "KeyCloack", "Clerk"],
  },
  {
    category: "System Design",
    items: ["Microservices", "Serverless", "Design Patterns"],
  },
  {
    category: "Test/Security",
    items: ["Jest", "Cypress", "E2E", "OWASP", "Postman"],
  },
  {
    category: "Agile Tools",
    items: ["Jira", "Confluence", "Trello", "Asana", "Slack"],
  },
  {
    category: "CS Concepts",
    items: ["DSA", "Networking", "OS", "OOP", "Embedded Systems"],
  },
  {
    category: "Web3",
    items: ["Solidity", "Solana", "Smart Contracts"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/KishorKumarParoi",
  },
  {
    id: 3,
    text: "Facebook",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://www.facebook.com/codewithparoi/",
  },
  {
    id: 2,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/paroi_kishor",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/kishor-paroi-b06344166/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/1.jpeg",
  },
  {
    id: 2,
    img: "/images/2.jpeg",
  },
  {
    id: 3,
    img: "/images/3.jpeg",
  },
  {
    id: 4,
    img: "/images/4.jpeg",
  },
  {
    id: 5,
    img: "/images/5.jpeg",
  },
  {
    id: 6,
    img: "/images/6.jpeg",
  },
  {
    id: 7,
    img: "/images/7.jpg",
  },
  {
    id: 8,
    img: "/images/8.jpg",
  },
  {
    id: 9,
    img: "/images/9.jpeg",
  },
  {
    id: 10,
    img: "/images/10.jpeg",
  },
  { id: 11, img: "/images/11.jpg" },
  { id: 12, img: "/images/12.jpg" },
  { id: 13, img: "/images/13.jpg" },
  { id: 14, img: "/images/14.jpg" },
  { id: 15, img: "/images/15.jpg" },
  { id: 16, img: "/images/16.jpg" },
  { id: 17, img: "/images/17.jpg" },
  { id: 18, img: "/images/18.jpg" },
  { id: 19, img: "/images/19.jpg" },
  { id: 20, img: "/images/20.jpg" },
  { id: 21, img: "/images/21.jpg" },
  { id: 22, img: "/images/22.jpg" },
  { id: 23, img: "/images/23.jpg" },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  path: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Nike Ecommerce Website Application",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-8 left-8",
      windowPosition: "top-[12vh] left-8",
      children: [
        {
          id: 1,
          name: "Nike Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-8 left-8",
          description: [
            "The Nike eCommerce website is a sleek and modern platform designed for shopping the latest Nike collections.",
            "Instead of a simple online store, it delivers an immersive experience with bold visuals, interactive product displays, and smooth navigation.",
            "Think of it like walking into a flagship Nike store—but right from your phone or laptop.",
            "It's built with Next.js and Tailwind, ensuring fast performance, responsive design, and a clean, premium look.",
          ],
        },
        {
          id: 2,
          name: "nike.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/fZdTYswuZjU?si=Awjl-pIst9e09_UU",
          position: "top-8 left-40",
        },
        {
          id: 4,
          name: "nike.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-32 left-8",
          imageUrl: "/images/project-1.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-32 left-40",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "AI Resume Analyzer",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-8 left-40",
      windowPosition: "top-[12vh] left-[38vw]",
      children: [
        {
          id: 1,
          name: "AI Resume Analyzer Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-8 left-8",
          description: [
            "AI Resume Analyzer is a smart tool that helps you perfect your resume with instant feedback.",
            "Instead of guessing what recruiters want, you get AI-powered insights on keywords, formatting, and overall impact.",
            "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
            "It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
          ],
        },
        {
          id: 2,
          name: "ai-resume-analyzer.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/iYOz165wGkQ?si=R1hs8Legl200m0Cl",
          position: "top-8 left-40",
        },
        {
          id: 4,
          name: "ai-resume-analyzer.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-32 left-8",
          imageUrl: "/images/project-2.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-32 left-40",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Food Delivery App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-8 left-72",
      windowPosition: "top-[12vh] left-[66vw]",
      children: [
        {
          id: 1,
          name: "Food Delivery App Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-8 left-8",
          description: [
            "Our Food Delivery App is a fast and convenient way to order meals from your favorite restaurants.",
            "Instead of making calls or waiting in line, you can browse menus, customize orders, and track deliveries in real time.",
            "Think of it like having your favorite restaurants in your pocket—ready to deliver anytime, anywhere.",
            "It’s built with React Native, so it works smoothly on both iOS and Android with a clean, modern design.",
          ],
        },
        {
          id: 2,
          name: "food-delivery-app.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/LKrX390fJMw?si=cExkuVhf2DTV9G2-",
          position: "top-8 left-40",
        },
        {
          id: 4,
          name: "food-delivery-app.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-32 left-8",
          imageUrl: "/images/project-3.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-32 left-40",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  path: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-8 left-8",
      imageUrl: "/images/12.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-8 left-40",
      imageUrl: "/images/7.jpg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-32 left-8",
      imageUrl: "/images/15.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-32 left-40",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/17.jpg",
      description: [
        "Hey! I’m Kishor 👋, Full Stack Data/Software Engineer + DevOps + AI/ML.I Love building Product, Scaling, System Design, Solving Complex Problems, Open Source and Competitive Programming.I enjoy building sleek, interactive websites that actually work well.",
        "I specialize in System Design, DevOps, AI/ML,latest Frontend and Backend Technologies and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  path: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      position: "top-8 left-8",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  path: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-8 left-8",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-8 left-48",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

const GALLERY_LOCATION = {
  id: 5,
  type: "gallery",
  path: "gallery",
  name: "Gallery",
  icon: "/icons/gicon1.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "1.jpeg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-8 left-8",
      imageUrl: "/images/1.jpeg",
    },
    {
      id: 2,
      name: "2.jpeg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-8 left-40", // closer
      imageUrl: "/images/2.jpeg",
    },
    {
      id: 3,
      name: "3.jpeg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-8 left-72", // closer
      imageUrl: "/images/3.jpeg",
    },
    {
      id: 4,
      name: "4.jpeg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-8 left-[26rem]", // closer than 30rem
      imageUrl: "/images/4.jpeg",
    },
    {
      id: 5,
      name: "5.jpeg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-36 left-8", // row closer (from top-40)
      imageUrl: "/images/5.jpeg",
    },
    {
      id: 6,
      name: "6.jpeg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-36 left-40", // closer
      imageUrl: "/images/6.jpeg",
    },
    {
      id: 7,
      name: "7.jpg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-36 left-72", // closer
      imageUrl: "/images/7.jpg",
    },
    {
      id: 8,
      name: "8.jpg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-36 left-[26rem]", // closer
      imageUrl: "/images/8.jpg",
    },
    {
      id: 9,
      name: "9.jpeg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-64 left-8", // closer (from top-72)
      imageUrl: "/images/9.jpeg",
    },
    {
      id: 10,
      name: "10.jpeg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-64 left-40", // closer
      imageUrl: "/images/10.jpeg",
    },
  ],
};

// Optional: increase spacing inside project folders too
WORK_LOCATION.children[0].children[1].position = "top-8 left-48";
WORK_LOCATION.children[0].children[3].position = "top-32 left-48";
WORK_LOCATION.children[1].children[1].position = "top-8 left-48";
WORK_LOCATION.children[1].children[3].position = "top-32 left-48";
WORK_LOCATION.children[2].children[1].position = "top-8 left-48";
WORK_LOCATION.children[2].children[3].position = "top-32 left-48";

ABOUT_LOCATION.children[1].position = "top-8 left-48";
ABOUT_LOCATION.children[3].position = "top-32 left-48";

TRASH_LOCATION.children[1].position = "top-8 left-48";

// Update locations export:
export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
  gallery: GALLERY_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  trash: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
