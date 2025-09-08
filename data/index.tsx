import { AiOutlineApi, AiOutlineGlobal } from "react-icons/ai";
import { FaJsSquare, FaMobileAlt, FaSearch } from "react-icons/fa";
import {
  FaCss3,
  FaFacebook,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaReact,
  FaWhatsapp,
} from "react-icons/fa6";
import { MdOutlineSpeed } from "react-icons/md";
import {
  SiAxios,
  SiBootstrap,
  SiFramer,
  SiGraphql,
  SiNextdotjs,
  SiRedux,
  SiSass,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { z } from "zod";

export const cvUrl =
  "https://drive.google.com/file/d/12gzvz9wdAYERDe-WNzmwpwbwV3d-00mf/view?usp=sharing";


export const projects = [
  {
    id: 3,
    title: "E-commerce Website",
    des: "🚀 Building a Scalable E-Commerce Platform with React & APIs 🛒Excited to share my latest project: E-Commerce, a full-fledged online shopping platform built with React, APIs, and a robust tech stack to deliver an optimized, user-friendly experience. 🎯",
    img: "/E-Commerce.jpeg",
    iconsList: ["/react.svg", "/js.svg", "/tailwind.svg", "/framer-motion.svg"],
    link: "https://marwanabdalr.github.io/E-Commerce/",
    sourceCode: "https://github.com/MarwanabdalR/E-Commerce",
  },
  {
    id: 2,
    title: "Book Marker Website",
    des: "The BookMarker project is a simple web-based application designed to help users save and manage their favorite website links. It provides a user-friendly interface for adding, storing, and deleting bookmarks.",
    img: "/BookManger.png",
    iconsList: ["/next.svg", "/ts.svg", "/tailwind.svg", "/framer-motion.svg"],
    link: "https://marwanabdalr.github.io/BookMarker/",
    sourceCode: "https://github.com/MarwanabdalR/BookMarker",
  },
  {
    id: 4,
    title: "Fokir Portfolio Website",
    des: "The Fokir project, available on GitHub, is a personal portfolio website built using HTML, CSS, JavaScript, and jQuery. It provides a modern and visually appealing way to showcase a developer's or designer’s work, skills, and contact information.",
    img: "/Fokir.png",
    iconsList: ["/react.svg", "/js.svg", "/tailwind.svg", "/framer-motion.svg"],
    link: "https://marwanabdalr.github.io/Fokir/",
    sourceCode: "https://github.com/MarwanabdalR/Fokir",
  },
  {
    id: 1,
    title: "E-prova - Fashion AI App",
    des: "E-Prova is a platform for how you present yourself to the world, especially today, when human communication is so fast. Fashion is an instant language. Fashion is the armor to survive the reality of everyday life.",
    img: "/e-prova.png",
    iconsList: ["/next.svg", "/ts.svg", "/tailwind.svg", "/framer-motion.svg"],
    link: "https://e-prova-ten.vercel.app/e-prova/home",
    sourceCode: "https://github.com/MarwanabdalR/GraduationProject/tree/main/E-ProvaUI",
  },
];

const date = new Date();
const yearsOfExperience = date.getFullYear() - 2023;
const projectsCompleted = 15;
const clients = 5;

export const aboutData = [
  {
    number: yearsOfExperience,
    text: "Years of Experience",
  },
  {
    number: projectsCompleted,
    text: "Project Completed",
  },
  {
    number: clients,
    text: "Clients",
  },
];

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const skills = [
  { id: 1, icon: <SiNextdotjs />, text: "Next.js" },
  { id: 2, icon: <SiTypescript />, text: "TypeScript" },
  { id: 3, icon: <FaReact />, text: "React.js" },
  { id: 4, icon: <FaJsSquare />, text: "JavaScript" },
  { id: 5, icon: <FaHtml5 />, text: "HTML" },
  { id: 6, icon: <FaCss3 />, text: "CSS" },
  { id: 7, icon: <SiSass />, text: "Sass" },
  { id: 8, icon: <SiTailwindcss />, text: "Tailwind CSS" },
  { id: 9, icon: <SiBootstrap />, text: "Bootstrap" },
  { id: 10, icon: <SiStyledcomponents />, text: "Styled Components" },
  { id: 11, icon: <SiFramer />, text: "Framer Motion" },
  { id: 12, icon: <SiRedux />, text: "Redux Toolkit" },
  { id: 13, icon: <SiAxios />, text: "Axios" },
  { id: 14, icon: <FaGitAlt />, text: "Git & Github" },
  { id: 15, icon: <AiOutlineApi />, text: "REST APIs" },
  { id: 16, icon: <SiGraphql />, text: "GraphQL" },
  { id: 17, icon: <FaSearch />, text: "SEO Best Practices" },
  { id: 18, icon: <MdOutlineSpeed />, text: "Web Performance Optimization" },
  { id: 19, icon: <FaMobileAlt />, text: "Responsive Design" },
  { id: 20, icon: <AiOutlineGlobal />, text: "Cross-Browser Compatibility" },
];

export const socialMedia = [
  {
    id: 1,
    link: "https://github.com/MarwanabdalR",
    icon: <FaGithub />,
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/marwan-abdalrady-57b87b222/",
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    link: "https://www.facebook.com/mrwan.abdalrady.5",
    icon: <FaFacebook />,
  },
  {
    id: 4,
    link: "https://wa.me/+201120636239",
    icon: <FaWhatsapp />,
  },
];

export const contactSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First name is required" })
    .max(255, { message: "First name is too long" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phoneNumber: z
    .string()
    .min(4, { message: "Phone number is too short" })
    .regex(
      /^\+\d{1,3}\d{4,14}$/,
      "Phone Number Format: +[country code][number] (e.g., +1234567890)"
    ),
  subject: z.string(),
  message: z.string().min(1, { message: "Message is required" }),
});
