// skillsData.js
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiMongodb } from "react-icons/si";

export const skills = [
  { name: "HTML5", icon: FaHtml5, level: 95 },
  { name: "CSS3", icon: FaCss3Alt, level: 90 },
  { name: "JavaScript", icon: FaJs, level: 85 },
  { name: "React", icon: FaReact, level: 80 },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: 85 },
  { name: "Node.js", icon: FaNode, level: 75 },
  { name: "Firebase", icon: SiFirebase, level: 70 },
  { name: "MongoDB", icon: SiMongodb, level: 65 },
  { name: "Git", icon: FaGitAlt, level: 80 },
];
