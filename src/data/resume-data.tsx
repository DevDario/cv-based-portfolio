import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Dário Silva",
  initials: "DS",
  location: "Luanda, Angola - África",
  locationLink: "https://www.google.com/maps/place/Luanda",
  about:
    "Frontend Developer & UI/UX Designer",
  summary:
    "As a Frontend Engineer, I have successfully taken multiple products from 0 to 1. Since 2021 I've been building real life projects that helps solving a real life project. Currently, I work mostly with JavaScript, React, SQL, and MySQL.",
  avatarUrl: "https://avatars.githubusercontent.com/u/101002847?s=400&u=cb446dd87af7a26637a580e88d13b5785b202d14&v=4",
  personalWebsiteUrl: "https://github.com/DevDario/",
  contact: {
    email: "dariosilva13222@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/DevDario",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "linkedin.com/in/dário-silva-648651234/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Politecnic Institute 30 de Setembro",
      degree: "Graduation in Informatics",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Carvalho Artes",
      link: "https://carvalho-artes.vercel.app",
      badges: ["Remote"],
      title: "Web Developer",
      logo: ,
      start: "2021",
      end: "2022",
      description:
        "Developed the official website of Carvalho Artes and maintened it. I've used the most advanced technologies, such HTML, SCSS and Vanilla JS",
    },
    {
      company: "Freelancer",
      link: "",
      badges: ["Remote"],
      title: "Frontend Developer",
      logo: ,
      start: "2021",
      end: "2023",
      description:
        "Working as a freelancer frontent developer in various platforms, such as Workana, and Freelancer.",
    },
  ],
  skills: [
    "JavaScript",
    "SCSS",
    "React/Next.js",
    "Node.js",
    "SQL",
    "MySQL",
    "Java",
  ],
  projects: [
    {
      title: "Costs-Web",
      techStack: [
        "Side Project",
        "HTML",
        "SCSS",
        "JS",
      ],
      description: "A project managment system",
      logo:"" ,
      link: {
        label: "costs-web",
        href: "https://costs-web.vercel.app/",
      },
    },
    {
      title: "PurpleBird",
      techStack: ["Side Project", "ReactJS", "SCSS", "Vite"],
      description:
        "Simple E-mail Browser Tool",
      logo:"" ,
      link: {
        label: "purple-bird",
        href: "https://purple-bird.vercel.app/",
      },
    },
  ],
} as const;
