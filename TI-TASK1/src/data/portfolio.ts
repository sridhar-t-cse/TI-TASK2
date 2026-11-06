export const profile = {
  name: "Sridhar T.",
  title: "Computer Science and Engineering Student",
  tagline: "Building practical solutions through software and thoughtful problem-solving.",
  about:
    "I am a Computer Science and Engineering student interested in software development, artificial intelligence, web technologies, databases, and practical problem-solving.",
  email: "sridhar19366@gmail.com",
  github: "https://github.com/sridhar-t-cse",
  linkedin: "https://www.linkedin.com/in/sridhar-t-cse",
  resume:
    "https://docs.google.com/document/d/1cFUz9vPIRj2hNn1LASUNoeDRCqK9ZgBK/edit?usp=drivesdk&ouid=115190551691429087819&rtpof=true&sd=true",
} as const;

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Internship", href: "/#experience" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Achievements", href: "/#achievements" },
  { label: "Education", href: "/#education" },
  { label: "Resume", href: "/#resume" },
  { label: "Contact", href: "/contact" },
] as const;

export const skillGroups = [
  {
    category: "Areas of interest",
    skills: [
      "Software development",
      "Artificial intelligence",
      "Web technologies",
      "Databases",
      "Practical problem-solving",
    ],
  },
] as const;

export const projects = [
  {
    title: "Designathon 1.0 — Institute Management System",
    description:
      "A role-based institute management system with separate admin, faculty, and student dashboards.",
    status: "Hackathon project",
    outcome: "Secured first place in the Institute Management System domain.",
    repository: "https://github.com/sridhar-t-cse/designathon.git",
    demo: "",
    image: "",
    imageAlt: "",
  },
  {
    title: "Protothon and Biothon — OPD Queue and Bed Management System",
    description: "A hospital OPD queue and bed management system.",
    status: "Hackathon project",
    outcome: "Qualified in Biothon Round 1 and was selected for the final list.",
    repository: "https://github.com/sridhar-t-cse/BIOTHON-.git",
    demo: "",
    image: "",
    imageAlt: "",
  },
] as const;

export const internship = {
  organization: "Cognifyz Technologies",
  role: "Frontend Development Intern",
  duration: "One month",
  status: "Completed",
  description:
    "Completed a one-month online frontend development internship and received an internship completion certificate.",
  certificate: "/certificates/cognifyz-internship.pdf",
} as const;

export const certifications = [
  {
    issuer: "MongoDB",
    technology: "MongoDB",
    title: "AI Agents, MongoDB",
    score: "",
    date: "31 July 2026",
    file: "/certificates/mongodb-ai-agents.pdf",
  },
  {
    issuer: "UDEMY",
    technology: "HTML, CSS, JavaScript",
    title: "HTML CSS & JavaScript Projects: A Beginner's Guide to JS",
    score: "",
    date: "25 July 2025",
    file: "/certificates/udemy-certificate.pdf",
  },
  {
    issuer: "NPTEL",
    technology: "Java Programming",
    title: "Programming in Java",
    score: "",
    date: "July–October 2025",
    file: "/certificates/nptel-java.pdf",
  },
  {
    issuer: "GDG MAD",
    technology: "HTML, CSS, Web Development",
    title: "HTML & CSS Bootcamp",
    score: "",
    date: "",
    file: "/certificates/gdg-mad-certificate.pdf",
  },
  {
    issuer: "IIT Bombay Spoken Tutorial",
    technology: "Java Programming",
    title: "Java Programming Training",
    score: "",
    date: "3 February 2026",
    file: "/certificates/iit-bombay-java-training.pdf",
  },
] as const;

export const achievements = [
  {
    event: "Designathon 1.0",
    result: "First place",
    detail: "Institute Management System domain.",
    certificate: "/certificates/designathon-award.pdf",
  },
  {
    event: "Biothon",
    result: "Round 1 qualified; selected for the final list",
    detail: "OPD Queue and Bed Management System.",
    certificate: "/certificates/biothon-qualification.pdf",
  },
] as const;

export const education = {
  degree: "Computer Science and Engineering",
  institution: "Rajalakshmi Institute of Technology, Chennai",
  expectedGraduation: "2028",
} as const;
