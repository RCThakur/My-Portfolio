// data/projectData.js
import edugame from "../assets/images/edugamify.png";
import finance from "../assets/images/personalFinance.png";
import smart from "../assets/images/SmartInventory.png";

export const projects = [
  {
    title: "SmartInventory",
    description:
      "A smart inventory management system with demand forecasting, QR/barcode integration, and stock alerts.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    github: "https://github.com/RCThakur/smart-inventory",
    live: "https://smartinventory-app.netlify.app/",
    image: smart,
  },
  {
    title: "EduGamify – Learning Through Play",
    description:
      "A gamified EdTech platform focused on interactive quizzes, rewards, and progress tracking. Built with Firebase for auth and Firestore database.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    github: "https://github.com/RCThakur/edtech-payout-system",
    live: "https://edugamify.netlify.app/home.html",
    image: edugame,
  },
  {
    title: "Personal Finance Tracker",
    description:
      "A Firebase-powered React app to manage income, expenses, and charts with login system.",
    tech: ["React", "Firebase", "Chart.js"],
    github: "https://github.com/RCThakur/personal-finance-tracker",
    live: "https://personal-finance-trackes.netlify.app/",
    image: finance,
  },
];
