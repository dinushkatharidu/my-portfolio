import {
  FaGraduationCap,
  FaLaptopCode,
  FaBook,
  FaSchool,
} from "react-icons/fa";

export const personalInfo = {
  name: "Dinushka Tharidu",
  title: "Intern Software Engineer",
  email: "asdinushkatharidu@gmail. com",
  phone: "+94 71 067 7047",
  whatsapp: "+94 72 937 1523",
  location: "406 A, Karawwa, Panapitiya, Kahawatta",
  github: "https://github.com/dinushkatharidu",
  linkedin: "https://www.linkedin.com/in/dinushka-tharidu",
  website: "https://www.dinushkatharidu.dev/",
  birthDate: "2002/03/06",
  bio: `Motivated Software Engineering undergraduate at the Open University of Sri Lanka with hands-on experience in Java, Spring Boot, React. js, and database systems. Strong foundation in object-oriented programming, basic data structures, and software engineering principles. Actively seeking an internship or entry-level software engineering role to apply technical skills, gain industry exposure, and grow as a professional developer.`,
};

export const skills = {
  languages: [
    { name: "Java", level: 85 },
    { name: "JavaScript", level: 60 },
  ],
  frontend: [
    { name: "React. js", level: 75 },
    { name: "HTML/CSS", level: 90 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Bootstrap", level: 82 },
  ],
  backend: [
    { name: "Spring Boot", level: 75 },
    { name: "REST API", level: 80 },
    { name: "Node.js", level: 65 },
    { name: "Express.js", level: 60 },
  ],
  databases: [
    { name: "MySQL", level: 85 },
    { name: "SQL Server", level: 75 },
    { name: "PostgreSQL", level: 60 },
    { name: "MongoDB", level: 60 },
  ],
  tools: [
    { name: "Git & GitHub", level: 80 },
    { name: "Postman", level: 80 },
    { name: "VS Code", level: 88 },
    { name: "IntelliJ IDEA", level: 82 },
  ],
  core: [
    { name: "OOP", level: 88 },
    { name: "SQL Queries", level: 82 },
    { name: "Software Engineering", level: 75 },
    { name: "Data Structures", level: 70 },
  ],
  soft: [
    "Problem Solving",
    "Analytical Thinking",
    "Willingness to Learn",
    "Team Collaboration",
    "Time Management",
  ],
};

export const projects = [
  {
    title: "Library Management System",
    subtitle: "Full-Stack Web App",
    description:
      "Built a full-stack web application for managing library books with CRUD operations.  Developed responsive frontend with React + TypeScript and integrated Bootstrap components.  Designed and implemented backend APIs using Spring Boot and connected to PostgreSQL via JPA.",
    tags: [
      "React",
      "TypeScript",
      "Spring Boot",
      "PostgreSQL",
      "REST APIs",
      "Bootstrap",
    ],
    gradient: "from-blue-600 to-cyan-600",
    icon: "📚",
    features: [
      "Full CRUD operations for library books",
      "Responsive frontend with React + TypeScript",
      "Backend APIs with Spring Boot",
      "PostgreSQL database with JPA",
      "RESTful services for frontend-backend communication",
    ],
    status: "Completed",
  },
  {
    title: "University Lost & Found System",
    subtitle: "Group Project - Ongoing",
    description:
      "Developing a web-based Lost & Found System to replace the existing manual, paper-based process at OUSL, serving 30,000+ students across multiple campuses. Working on core system features including user registration & authentication (JWT-based), lost/found item reporting, search & filtering, and role-based access.",
    tags: [
      "React",
      "Spring Boot",
      "Java",
      "MySQL",
      "JWT",
      "REST APIs",
      "Bootstrap",
    ],
    gradient: "from-purple-600 to-pink-600",
    icon: "🔍",
    features: [
      "JWT-based user authentication",
      "Lost/found item reporting system",
      "Search & filtering functionality",
      "Role-based access (student/admin)",
      "Item claiming workflows & notifications",
      "Admin dashboards",
    ],
    status: "Ongoing",
    team: "5-member agile team",
  },
  {
    title: "Online Bookstore",
    subtitle: "MERN Stack Application",
    description:
      "Full-stack bookstore with login, cart, and checkout functionality.  Implemented JWT authentication & protected routes with React Context API for state management.",
    tags: ["React", "Node. js", "Express", "MongoDB", "JWT"],
    gradient: "from-green-600 to-emerald-600",
    icon: "🛒",
    features: [
      "User login & registration",
      "Shopping cart & checkout",
      "JWT authentication & protected routes",
      "React Context API for state management",
      "REST APIs with Node.js & Express",
    ],
    status: "Completed",
  },
  {
    title: "School Management System",
    subtitle: "Desktop Application",
    description:
      "Developed a 3-tier desktop application for administrative data management using C# . NET and SQL Server.  Engineered SQL Server backend to handle extensive student/staff records with secure login verification.",
    tags: ["C#", ".NET", "SQL Server", "Visual Studio 2022"],
    gradient: "from-orange-600 to-red-600",
    icon: "🏫",
    features: [
      "3-tier desktop architecture",
      "Administrative data management",
      "SQL Server backend",
      "Secure login verification",
      "Full CRUD functionality",
      "Data binding implementation",
    ],
    status: "Completed",
  },
];

export const education = [
  {
    degree: "Bachelor of Software Engineering (Hons)",
    institution: "The Open University of Sri Lanka",
    location: "Colombo",
    period: "11/2023 – Present",
    status: "In Progress",
    icon: FaGraduationCap ,
    color: "primary",
  },
  {
    degree: "Diploma in Information Technology",
    institution: "ESOFT Metro Campus",
    certification: "Pearson Assured",
    period: "03/2023 – 03/2024",
    status: "Completed",
    icon: FaLaptopCode ,
    color: "secondary",
  },
  {
    degree: "Diploma in English",
    institution: "ESOFT Metro Campus",
    period: "03/2023 – 03/2024",
    status: "Completed",
    icon: FaBook ,
    color: "accent",
  },
  {
    degree: "GCE Advanced Level – Mathematical Stream",
    institution: "Rahula National School, Godakawela",
    period: "2022 – 2023",
    status: "Completed",
    icon: FaSchool ,
    color: "green",
  },
];

export const certifications = {
  tier1: [
    {
      name: "Neo4j Graph Data Science Certification",
      issuer: "Neo4j",
      date: "2025",
    },
    { name: "Neo4j Certified Professional", issuer: "Neo4j", date: "2025" },
    {
      name: "KodeKloud Engineer – Git (Level 1)",
      issuer: "KodeKloud",
      date: "2025",
    },
    {
      name: "AWS Educate:  Introduction to Cloud 101",
      issuer: "Amazon Web Services",
      date: "2024",
    },
    { name: "Java (Basic) Certificate", issuer: "HackerRank", date: "2024" },
  ],
  tier2: [
    {
      name: "Certified Agile Associate:  Fundamentals of Agility",
      issuer: "Udemy",
    },
    { name: "Python Developer", issuer: "SoloLearn" },
    { name: "SQL Intermediate", issuer: "SoloLearn" },
  ],
};
