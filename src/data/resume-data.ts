import type {
  Skill,
  Experience,
  Project,
  Education,
  Achievement,
  NavLink,
} from "@/lib/types";

import {
  SiSpringboot,
  SiHibernate,
  SiPostgresql,
  SiOracle,
  SiRedis,
  SiGooglecloud,
  SiDocker,
  SiJenkins,
  SiApachemaven,
  SiGit,
  SiJunit5,
  SiSonarqube,
  SiSwagger,
  SiPostman,
  SiGithub,
  SiOpenai,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import { FaJava, FaCubes } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

export const personalInfo = {
  name: "Nithya Alagupandian",
  title: "Java Backend Engineer",
  tagline:
    "6.5+ years building scalable enterprise backend systems with Java, Spring Boot & Cloud technologies",
  email: "nithyadhanya97@gmail.com",
  phone: "+91 9384528060",
  linkedin: "https://linkedin.com/in/nithya-alagupandian",
  resumeUrl: "/Nithya_2026_Resume.pdf",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const aboutText =
  "Experienced Java Backend Engineer with 6.5+ years of hands-on experience building and modernizing enterprise-grade backend systems using Java and Spring Boot. Strong expertise in RESTful API design, microservices architecture, PostgreSQL, and secure, scalable application development for large clients including Ford Motor Company and Bank of America through Fiserv. Proven experience in legacy system migration, resolving code quality and security issues using SonarQube and 42Crunch in Agile environments.";

export const skills: Skill[] = [
  {
    name: "Java 8 / 17 / 21",
    category: "Languages & Frameworks",
    icon: FaJava,
  },
  {
    name: "Spring Boot",
    category: "Languages & Frameworks",
    icon: SiSpringboot,
  },
  {
    name: "JPA / Hibernate",
    category: "Languages & Frameworks",
    icon: SiHibernate,
  },
  {
    name: "Microservices",
    category: "Languages & Frameworks",
    icon: FaCubes,
  },
  {
    name: "REST API / JWT",
    category: "Languages & Frameworks",
    icon: MdSecurity,
  },

  {
    name: "PostgreSQL",
    category: "Databases & Caching",
    icon: SiPostgresql,
  },
  {
    name: "Oracle DB",
    category: "Databases & Caching",
    icon: SiOracle,
  },
  {
    name: "MongoDB",
    category: "Databases & Caching",
    icon: SiMongodb,
  },
  {
    name: "MySQL",
    category: "Databases & Caching",
    icon: SiMysql,
  },
  {
    name: "Redis",
    category: "Databases & Caching",
    icon: SiRedis,
  },

  {
    name: "GCP (GCS, Cloud Run)",
    category: "Cloud & DevOps",
    icon: SiGooglecloud,
  },
  {
    name: "Docker",
    category: "Cloud & DevOps",
    icon: SiDocker,
  },
  {
    name: "Jenkins / CI/CD",
    category: "Cloud & DevOps",
    icon: SiJenkins,
  },
  {
    name: "Maven / Gradle",
    category: "Cloud & DevOps",
    icon: SiApachemaven,
  },
  {
    name: "Git / SVN",
    category: "Cloud & DevOps",
    icon: SiGit,
  },

  // Testing & Security
  {
    name: "JUnit",
    category: "Testing & Security",
    icon: SiJunit5,
  },
  {
    name: "SonarQube",
    category: "Testing & Security",
    icon: SiSonarqube,
  },
  {
    name: "Fortify",
    category: "Testing & Security",
    icon: MdSecurity,
  },
  {
    name: "42Crunch",
    category: "Testing & Security",
    icon: MdSecurity,
  },
  {
    name: "Swagger",
    category: "Testing & Security",
    icon: SiSwagger,
  },
  {
    name: "Postman",
    category: "Testing & Security",
    icon: SiPostman,
  },

  // AI Tools
  {
    name: "GitHub Copilot",
    category: "AI Tools",
    icon: SiGithub,
  },
  {
    name: "Claude",
    category: "AI Tools",
    icon: SiOpenai,
  },
  {
    name: "GPT",
    category: "AI Tools",
    icon: SiOpenai,
  },
];

export const experiences: Experience[] = [
  {
    id: "cognizant",
    company: "Cognizant Technology Solutions",
    role: "Programmer Analyst",
    period: "Oct 2025 \u2013 Present",
    location: "Chennai, India",
    projects: [
      {
        name: "Ford Motors \u2013 Global Capacity Planning (GCP)",
        period: "Oct 2025 \u2013 Present",
        highlights: [
          "Migrated legacy Struts application to Spring Boot with PostgreSQL, transforming monolith to microservices",
          "Developed RESTful APIs including multipart file upload endpoints with JUnit tests",
          "Implemented async processing and scheduled jobs, uploading files to GCS via Cloud Run Jobs",
          "Enhanced API security and code quality using 42Crunch and SonarQube",
        ],
        techStack: [
          "Java 21",
          "Spring Boot",
          "PostgreSQL",
          "GCP Cloud Run",
          "GCS",
          "Docker",
        ],
      },
      {
        name: "Ford Motors \u2013 Incentive Single Input System (ISIS)",
        period: "Jan 2024 \u2013 Sep 2025",
        highlights: [
          "Developed functionalities migrating monolithic Struts app to Spring Boot microservices",
          "Implemented RESTful APIs with comprehensive JUnit tests and 42Crunch/SonarQube security enforcement",
          "Streamlined CI/CD using Tekton pipelines on GCP with GitHub Copilot for efficient workflows",
        ],
        techStack: ["Java", "Spring Boot", "GCP", "Tekton", "GitHub Copilot"],
      },
    ],
  },
  {
    id: "ibytecode",
    company: "iBytecode Technologies Pvt. Ltd.",
    role: "Software Developer",
    period: "Jun 2019 \u2013 Dec 2023",
    location: "Chennai, India",
    projects: [
      {
        name: "Fiserv \u2013 Bank of America (Mobile Banking API Platform)",
        period: "Jan 2022 \u2013 Dec 2023",
        highlights: [
          "Implemented multi-language (English/Spanish) support with Java i18n and resource bundles",
          "Built request validation logic for REST APIs across Account, Recipient, Payment, and Audit modules",
          "Contributed to database schema design, code reviews, and production support",
          "Remediated Fortify security vulnerabilities and ensured compliance with security standards",
        ],
        techStack: ["Java", "Spring Boot", "JSP", "JavaScript", "Fortify"],
      },
      {
        name: "Fiserv \u2013 UVM Vulnerability Fixing (Legacy EJB)",
        period: "Apr 2021 \u2013 Dec 2021",
        highlights: [
          "Analyzed security findings using SAST (Fortify) and DAST (WebInspect)",
          "Fixed vulnerabilities: input validation, null pointer dereferences, insecure logging, hardcoded credentials",
          "Reviewed source code to validate findings and identify false positives",
        ],
        techStack: ["Java", "EJB", "Fortify", "WebInspect"],
      },
      {
        name: "Braincubate (Mobile Game for Kids)",
        period: "Jul 2020 \u2013 Apr 2021",
        highlights: [
          "Developed responsive Android UI screens using XML and Java",
          "Integrated REST APIs using Retrofit HTTP client",
          "Enabled Firebase Cloud Messaging (FCM) push notifications",
        ],
        techStack: ["Java", "Android", "Retrofit", "Firebase"],
      },
      {
        name: "Homevents (Event Services Marketplace App)",
        period: "Jun 2019 \u2013 Jun 2020",
        highlights: [
          "Developed responsive Android UI with proper layout scaling across devices",
          "Integrated REST APIs via Retrofit for vendor listings, bidding, and order tracking",
          "Implemented Firebase Analytics for user behavior and crash monitoring",
        ],
        techStack: ["Java", "Android", "Retrofit", "Firebase Analytics"],
      },
    ],
  },
];

export const projects: Project[] = [
  {
    id: "ford-gcp",
    name: "Global Capacity Planning",
    client: "Ford Motor Company",
    company: "Cognizant",
    description:
      "Migrated a legacy Struts-based application to a modern Spring Boot framework with PostgreSQL, transforming monolithic architecture into microservices for improved scalability. Implemented async processing with GCP Cloud Run Jobs.",
    techStack: [
      "Java 21",
      "Spring Boot",
      "PostgreSQL",
      "GCP Cloud Run",
      "GCS",
      "Docker",
      "42Crunch",
    ],
    highlights: [
      "Legacy to microservices migration",
      "Multipart file upload APIs",
      "Async processing with Cloud Run Jobs",
    ],
    category: "enterprise",
  },
  {
    id: "ford-isis",
    name: "Incentive Single Input System",
    client: "Ford Motor Company",
    company: "Cognizant",
    description:
      "Developed functionalities migrating from a monolithic legacy Struts application to Spring Boot microservices with comprehensive testing and CI/CD automation on GCP.",
    techStack: [
      "Java",
      "Spring Boot",
      "GCP",
      "Tekton",
      "SonarQube",
      "GitHub Copilot",
    ],
    highlights: [
      "Monolith to microservices migration",
      "CI/CD with Tekton pipelines",
      "API security enforcement",
    ],
    category: "enterprise",
  },
  {
    id: "fiserv-bofa",
    name: "Mobile Banking API Platform",
    client: "Bank of America",
    company: "iBytecode (Fiserv)",
    description:
      "Built multi-language support and request validation logic for Spring Boot REST APIs across multiple banking modules including Account, Recipient, Payment, and Audit.",
    techStack: ["Java", "Spring Boot", "JSP", "JavaScript", "Fortify", "i18n"],
    highlights: [
      "Multi-language (EN/ES) support",
      "Cross-module API validation",
      "Security vulnerability remediation",
    ],
    category: "enterprise",
  },
  {
    id: "fiserv-uvm",
    name: "UVM Vulnerability Fixing",
    client: "Fiserv",
    company: "iBytecode",
    description:
      "Analyzed and fixed application security vulnerabilities using SAST (Fortify) and DAST (WebInspect) tools across a legacy EJB application, ensuring compliance with security standards.",
    techStack: ["Java", "EJB", "Fortify", "WebInspect"],
    highlights: [
      "SAST & DAST security analysis",
      "Secure coding remediation",
      "False positive identification",
    ],
    category: "enterprise",
  },
  {
    id: "braincubate",
    name: "Braincubate",
    company: "iBytecode",
    description:
      "An educational mobile game for kids on Android with responsive UI, REST API integration, and Firebase push notifications for user achievements.",
    techStack: ["Java", "Android SDK", "Retrofit", "Firebase FCM"],
    highlights: [
      "Educational game for children",
      "Push notifications via FCM",
      "REST API integration with Retrofit",
    ],
    category: "mobile",
    link: "https://play.google.com/store/apps/details?id=tech.appstra.braincubate",
  },
  {
    id: "homevents",
    name: "Homevents",
    company: "iBytecode",
    description:
      "An event services marketplace app for Android enabling vendor listings, bidding, and order tracking with Firebase Analytics for user behavior monitoring.",
    techStack: ["Java", "Android SDK", "Retrofit", "Firebase Analytics"],
    highlights: [
      "Event services marketplace",
      "Vendor bidding & order tracking",
      "Analytics-driven user insights",
    ],
    category: "mobile",
    link: "https://play.google.com/store/apps/details?id=in.homevents.vendor",
  },
];

export const education: Education[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "RVS College of Engineering and Technology",
    location: "Dindigul, TN",
    period: "2017 \u2013 2019",
    score: "8.0",
    scoreLabel: "CGPA",
  },
  {
    degree: "B.Sc. Computer Science",
    institution: "GTN Arts and Science College",
    location: "Dindigul, TN",
    period: "2014 \u2013 2017",
    score: "73.8%",
    scoreLabel: "Percentage",
  },
];

export const achievements: Achievement[] = [
  {
    title: "WOW Award",
    description:
      "Earned for outstanding performance and exceptional contribution to project delivery in Q4 2021 by Expleo Solutions.",
    year: "2021",
    icon: "\uD83C\uDFC6",
  },
  {
    title: "Core Java & Android Programming",
    description:
      "Professional certification from Tech Stack Technology (August 2018 \u2013 December 2018).",
    year: "2018",
    icon: "\uD83D\uDCDC",
  },
];
