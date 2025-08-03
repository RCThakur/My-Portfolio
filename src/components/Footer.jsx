import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="w-full px-6 sm:px-10 md:px-16 lg:px-24 py-10 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-between gap-6 text-center">

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="flex gap-6 text-muted-foreground"
        >
          <a
            href="https://github.com/RCThakur"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/rinkesh-thakur-3b985a160/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:rinkeshthakur1997@gmail.com"
            className="hover:text-primary transition-colors"
          >
            <Mail size={22} />
          </a>
        </motion.div>

        {/* Footer Text */}
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Rinkesh Thakur. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
