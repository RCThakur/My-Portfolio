import React from "react";
import { projects } from "../lib/projectData";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="projects"
      className="w-full px-6 sm:px-10 md:px-16 lg:px-24 py-20 border-b"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10 text-center">
        {/* Section Header */}
        <div>
          <h2 className="text-primary text-sm uppercase tracking-widest font-semibold mb-2">
            Projects
          </h2>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            What I've Built
          </h1>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03, rotate: 0.3 }}
              className="relative bg-background/80 border border-border backdrop-blur-lg rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-5 flex flex-col gap-3 text-left">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 text-xs mt-2">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-200"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary hover:underline flex items-center gap-1 transition-all duration-200"
                  >
                    <Github size={16} /> Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary hover:underline flex items-center gap-1 transition-all duration-200"
                    >
                      <ExternalLink size={16} /> Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
