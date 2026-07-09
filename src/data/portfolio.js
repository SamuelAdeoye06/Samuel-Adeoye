// ────────────────────────────────────────────────────────────
// PORTFOLIO CONTENT
// This is the only file you need to touch to update your site.
// Edit text, add/remove projects, update links — save, push to
// GitHub, and Vercel redeploys automatically.
// ────────────────────────────────────────────────────────────

export const profile = {
  name: "Samuel Adeoye",
  shortName: "Samuel",
  role: "Full-Stack Developer",
  subRole: "Computer Engineering Student — Exploring Application Security",
  heroIntro:
    "I'm a Full-Stack Developer and Computer Engineering student building software and learning how to secure it.",
  tagline:
    "I design and build web applications of all types, while actively exploring application security and learning how to protect systems from vulnerabilities.",
  base: "Osogbo, Nigeria",
  status: "Available for projects",
  bio: `I'm studying Computer Engineering at Redeemer's University, and right now I'm splitting my time between coursework and a placement at SQI College of ICT, where I'm getting hands-on with application security alongside web development. Most of what I know about building software, I've learned by shipping it — a school logbook platform now being pitched to institutions, a farming app that turns weather data into planting advice, a handful of client sites.

I do this work under ALSOEM VENTURES, my family's business — I run the ICT and development side of it, taking on freelance and volunteer projects where I can build something people actually use.`,
  email: "adeoyesamuelolamidemails@gmail.com",
  whatsapp: "2347039094213", // international format, no + or spaces
  linkedin: "https://www.linkedin.com/in/samuel-adeoye-1861343b5/",
  education: {
    school: "Redeemer's University",
    program: "B.Eng, Computer Engineering",
    period: "2022 — Present",
  },
  experience: {
    role: "Student Intern — Cybersecurity & Web Development",
    org: "SQI College of ICT",
    period: "Mar 2026 — Present",
  },
};

export const skills = [
  {
    group: "Frontend",
    items: ["React", "Vite", "JavaScript (ES6+)", "Bootstrap", "HTML5 / CSS3"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "MongoDB", "Mongoose", "REST APIs"],
  },
  {
    group: "Tools & Practices",
    items: [
      "JWT Auth",
      "Cloudinary",
      "Git / GitHub",
      "Vercel Deployment",
      "Railway Deployment",
      "Zustand",
      "Formik & Yup",
      "Nodemailer",
      "Resend"
    ],
  },
  {
    group: "Currently Exploring",
    items: ["Application Security", "Secure System Design"],
  },
];

import siweslogImg from "../assets/projects/siweslog.jpg";
import smartAgriClimateImg from "../assets/projects/smartagriclimate.jpg";
import brightmatesImg from "../assets/projects/brightmates.jpg";

// status options used for the tag on each project card:
// "live" | "progress" | "client"
export const projects = [
  {
    id: "siweslog",
    name: "SIWESlog",
    tagline: "Digital SIWES logbook platform for Nigerian universities",
    status: "live",
    statusLabel: "Live — In pitch to institutions",
    tone: "professional",
    image: siweslogImg,
    description:
      "Nigerian universities still run their SIWES (industrial training) programmes on paper logbooks. SIWESlog replaces that with a proper multi-tenant platform: students log weekly entries and generate supervisor-ready reports, supervisors track visits and sign off on progress, school admins manage their institution's placements, and a super admin layer oversees every school on the platform from one place. It handles automated PDF report generation, secure authentication, and cloud document storage — built to actually be adopted by a school, not just demoed to one.",
    stack: [
      "React",
      "Vite",
      "Zustand",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "PDFKit",
      "Cloudinary",
    ],
    link: "https://siweslog.com/",
    linkLabel: "View live site",
  },
  {
    id: "smartagriclimate",
    name: "SmartAgriClimate",
    tagline: "Weather-intelligence platform for Nigerian farmers",
    status: "live",
    statusLabel: "Personal project — Live",
    tone: "casual",
    image: smartAgriClimateImg,
    description:
      "Built to answer a farmer's actual question — not 'what's the weather' but 'should I plant, spray, or wait this week.' It pulls a 7-day forecast and runs it through a rules engine (tunable by an admin, not hardcoded) to turn raw weather data into plain-language guidance across planting, spraying, irrigation, and harvest. Also includes a pest & disease checker and a way to save key dates so farmers can track their own crop calendar.",
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "OpenWeatherMap API"],
    link: "https://smart-agri-climate.vercel.app/",
    linkLabel: "View live site",
  },
  {
    id: "brightmates",
    name: "Brightmates",
    tagline: "Business website for a Lagos cleaning service",
    status: "client",
    statusLabel: "Client project — Live",
    tone: "casual",
    image: brightmatesImg,
    description:
      "A straightforward brief: get visitors to actually book a cleaning job. Built plain HTML/CSS/JS on purpose — no framework overhead, fast load, clear service breakdown, and calls to action that don't make people hunt for how to get in touch.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://brightmates.org/",
    linkLabel: "View live site",
  },
  {
    id: "ymc",
    name: "Young Minds Conference",
    tagline: "Platform for a youth & parent development movement",
    status: "progress",
    statusLabel: "In development — Volunteer project",
    tone: "casual",
    image: null,
    description:
      "YMC is a movement built around one idea: age isn't a ceiling on what a young person can achieve, and parents should be catalysts for that, not limits. I'm volunteering as the developer on their site — public-facing pages covering the movement's pillars (academics, leadership, health, finance, and more), plus an operations layer I proposed on top: a super admin dashboard for the movement's leadership, and role-based dashboards for individual units handling events, content, and follow-up with past attendees.",
    stack: ["React", "Node.js", "MongoDB"],
    link: null,
    linkLabel: "In development",
  },
];

// Workshop — practice builds & learning experiments shown in a horizontal carousel.
export const otherProjects = [
  {
    id: "quickconnect",
    name: "QuickConnect",
    description:
      "A real-time chat app built while first learning Firebase — auth, live messaging, and Firestore data sync. This is where I first got comfortable with real-time backends.",
    stack: ["HTML", "CSS", "JavaScript", "Firebase"],
    link: "https://chatapp-d3328.web.app/",
  },
  {
    id: "ciphervault",
    name: "CipherVault",
    description:
      "An encryption tool — type any text, lock it with a password, and decrypt it later with the same key. Built to explore cryptography concepts hands-on.",
    stack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    link: "https://samueladeoye06.github.io/Cipher-Vault/",
  },
  {
    id: "runmia",
    name: "RunMia",
    description:
      "A campus marketplace connecting students and vendors, with wallet-based checkout and real-time order updates. Co-built with another developer — formerly called Vendora.",
    stack: ["React", "TypeScript", "Vite", "Supabase"],
    link: null,
  },
];

