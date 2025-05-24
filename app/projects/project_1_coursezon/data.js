import {
  FaCode,
  FaJava,
  FaPhp,
  FaPython,
  FaReact,
  FaServer,
  FaCloudDownloadAlt,
  FaNodeJs,
  FaAngular,
  FaVuejs,
  FaSwift,
} from "react-icons/fa";
import { GoRuby } from "react-icons/go";
import { SiTypescript } from "react-icons/si";

export const courses = [
  {
    id: "dsa",
    title: "Advanced Data Structure",
    icon: <FaCode color="#fb923c" />,
  },
  { id: "java", title: "Java Full Stack", icon: <FaJava color="#f97316" /> },
  {
    id: "python",
    title: "Python Full Stack",
    icon: <FaPython color="#38bdf8" />,
  },
  { id: "mern", title: "MERN Full Stack", icon: <FaReact color="#22c55e" /> },
  { id: "php", title: "PHP Full Stack", icon: <FaPhp color="#a855f7" /> },
  {
    id: "fetch",
    title: "Fetch Data (Client)",
    icon: <FaCloudDownloadAlt color="#eab308" />,
  },
  {
    id: "server",
    title: "Fetch Data (Server)",
    icon: <FaServer color="#ec4899" />,
  },
  {
    id: "node",
    title: "Node.js Full Stack",
    icon: <FaNodeJs color="#34d399" />,
  },
  {
    id: "ruby",
    title: "Ruby Full Stack",
    icon: <GoRuby color="#e11d48" />,
  },
  {
    id: "angular",
    title: "Angular Full Stack",
    icon: <FaAngular color="#f4f4f4" />,
  },
  {
    id: "vue",
    title: "Vue Full Stack",
    icon: <FaVuejs color="#3b82f6" />,
  },
  {
    id: "swift",
    title: "Swift Full Stack",
    icon: <FaSwift color="#f1e05a" />,
  },
  {
    id: "typescript",
    title: "TypeScript Full Stack",
    icon: <SiTypescript color="#3178c6" />,
  },
];

export const courseDetails = [
  {
    id: 1,
    title: "Java Full Stack",
    duration: "6 months",
    level: "Advanced",
    imageUrl: "https://www.oracle.com/img/tech/cb88-java-logo-001.jpg",
    projects: [
      { id: 101, title: "E-Commerce Website" },
      { id: 102, title: "Online Banking System" },
      { id: 103, title: "Job Portal" },
      { id: 104, title: "Library Management System" },
    ],
  },
  {
    id: 2,
    title: "Advance Data Structure - DSA",
    duration: "4 months",
    level: "Intermediate",
    imageUrl: "https://www.oxfordinstitute.in/img/dsa-course.jpg",
    projects: [
      { id: 201, title: "File Compression Tool" },
      { id: 202, title: "Data Caching System" },
      { id: 203, title: "Memory Management Simulator" },
      { id: 204, title: "Graph-based Social Network" },
    ],
  },
  {
    id: 3,
    title: "MERN Full Stack",
    duration: "5 months",
    level: "Advanced",
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2024/05/1-1.webp",
    projects: [
      { id: 301, title: "Social Media Application" },
      { id: 302, title: "Task Management System" },
      { id: 303, title: "E-Learning Platform" },
      { id: 304, title: "Real-Time Chat Application" },
    ],
  },
  {
    id: 4,
    title: "Python Full Stack",
    duration: "5 months",
    level: "Intermediate",
    imageUrl:
      "https://www.guvi.in/blog/wp-content/uploads/2023/10/python-libraries-653279153c735-2-1200x675.webp",
    projects: [
      { id: 401, title: "Blogging Platform" },
      { id: 402, title: "Weather Forecast App" },
      { id: 403, title: "Hospital Management System" },
      { id: 404, title: "Online Quiz Application" },
    ],
  },
  {
    id: 5,
    title: "Php Full Stack",
    duration: "4 months",
    level: "Basic",
    imageUrl:
      "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/4085715/cover_image/regular_1708x683/0925-3D_Data_Visualization_with_Open_Source_Tools_A_Tutorial_Using_VTK_Dan_Newsletter-8de886e8cfe7817dd6f2502c43aacdce.png",
    projects: [
      { id: 501, title: "Portfolio Website" },
      { id: 502, title: "Event Management System" },
      { id: 503, title: "CRM Application" },
      { id: 504, title: "Inventory Management System" },
    ],
  },
  {
    id: 6,
    title: "Fetch Data (Client)",
    duration: "2 months",
    level: "Basic",
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:1400/1*8hsBLfp9VMGuKvXyX71FKg.jpeg",
    projects: [
      { id: 601, title: "Fetch API with JavaScript" },
      { id: 602, title: "REST API Integration" },
      { id: 603, title: "GraphQL Query Client" },
      { id: 604, title: "Real-Time Data Fetching App" },
    ],
  },
  {
    id: 7,
    title: "Fetch Data (Server)",
    duration: "3 months",
    level: "Intermediate",
    imageUrl: "https://www.easeout.co/images/uploads/fetch2.png",
    projects: [
      { id: 701, title: "API Server with Node.js" },
      { id: 702, title: "Server-Side Data Caching" },
      { id: 703, title: "Microservices Data Fetching" },
      { id: 704, title: "Streaming Data API" },
    ],
  },
  {
    id: 8,
    title: "Node.js Full Stack",
    duration: "5 months",
    level: "Advanced",
    imageUrl:
      "https://graffersid.com/wp-content/uploads/2023/03/NodeJS-1-scaled.webp",
    projects: [
      { id: 801, title: "Real-Time Collaboration Tool" },
      { id: 802, title: "IoT Dashboard" },
      { id: 803, title: "Serverless Architecture App" },
      { id: 804, title: "Event-Driven Microservices" },
    ],
  },
  {
    id: 9,
    title: "Ruby Full Stack",
    duration: "4 months",
    level: "Intermediate",
    imageUrl:
      "https://ucarecdn.com/051964a1-ecb8-42f0-bccb-2b5025ca121c/-/resize/1050/",
    projects: [
      { id: 901, title: "Web Scraper" },
      { id: 902, title: "Task Automation Tool" },
      { id: 903, title: "Custom CMS" },
      { id: 904, title: "E-Commerce Platform" },
    ],
  },

  {
    id: 10,
    title: "Angular Full Stack",
    duration: "5 months",
    level: "Advanced",
    imageUrl:
      "https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/2023/2023-11/angular-logo.gif?sfvrsn=240a6236_3",
    projects: [
      { id: 1001, title: "CRM Dashboard" },
      { id: 1002, title: "E-commerce Frontend" },
    ],
  },
  {
    id: 11,
    title: "Vue Full Stack",
    duration: "4 months",
    level: "Intermediate",
    imageUrl:
      "https://runcode-app-public.s3.amazonaws.com/images/vuejs-online-editor-compiler.original.png",
    projects: [
      { id: 1101, title: "Social Media Feed" },
      { id: 1102, title: "Blog Platform" },
    ],
  },
  {
    id: 12,
    title: "Swift Full Stack",
    duration: "6 months",
    level: "Advanced",
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:1400/1*saOldy_-VnU4eNQ5Ywcfqw.png",
    projects: [
      { id: 1201, title: "iOS Mobile App" },
      { id: 1202, title: "Backend API for iOS" },
    ],
  },
  {
    id: 13,
    title: "TypeScript Full Stack",
    duration: "5 months",
    level: "Advanced",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4D12AQEX5JBJk1uQsw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1668380307275?e=2147483647&v=beta&t=fdV-a7Ck61P1IbL1AY0VTwHvV9vY-ByjIGQQ0OLSxmM",
    projects: [
      { id: 1301, title: "Scalable Web API" },
      { id: 1302, title: "Type-Safe Frontend" },
    ],
  },
];
