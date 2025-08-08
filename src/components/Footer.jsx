import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const iconHover = {
    scale: 1.2,
    rotate: 10,
    transition: { type: "spring", stiffness: 300, damping: 10 },
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full px-6 sm:px-10 md:px-16 lg:px-24 py-10 bg-background border-t border-border"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 text-center">
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex gap-6"
        >
          {[
            { icon: <Github size={22} />, href: "https://github.com/RCThakur" },
            { icon: <Linkedin size={22} />, href: "https://www.linkedin.com/in/rinkesh-thakur-3b985a160/" },
            { icon: <Mail size={22} />, href: "mailto:rinkeshthakur1997@gmail.com" },
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary relative group"
              whileHover={iconHover}
            >
              <span className="absolute -inset-2 rounded-full bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-sm text-muted-foreground relative group"
        >
          © {new Date().getFullYear()} Rinkesh Thakur.{" "}
          <span className="relative">
            All rights reserved.
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"></span>
          </span>
        </motion.p>
      </div>
    </motion.footer>
  );
};
