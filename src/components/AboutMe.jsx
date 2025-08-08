import React from "react";
import { motion } from "framer-motion";

export const AboutMe = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.6, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="about"
      className="w-full px-6 sm:px-10 md:px-16 lg:px-24 py-20 border-b"
    >
      <motion.div
        className="max-w-5xl mx-auto flex flex-col items-center gap-10 text-center lg:text-left"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants}>
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 text-sm uppercase tracking-widest font-semibold mb-2">
            About Me
          </h2>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            Who is <span className="text-primary">Rinkesh Thakur?</span>
          </h1>
        </motion.div>

        {/* Content */}
        <motion.p
          variants={itemVariants}
          className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed tracking-wide max-w-3xl"
        >
          I'm a passionate <span className="text-primary font-medium">Full Stack Web Developer</span> from India, specializing in building
          modern, responsive, and user-friendly web applications. With a strong foundation in both frontend and backend technologies, I enjoy solving problems and bringing ideas to life through clean code and intuitive design.
          <br />
          <br />
          My approach is focused on crafting high-performance websites and applications using
          the latest tools and technologies. I'm currently exploring advanced UI/UX practices and constantly upgrading my skills to stay in sync with the fast-evolving tech landscape.
        </motion.p>

        {/* Info Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 text-left w-full"
          variants={containerVariants}
        >
          {[
            {
              title: "Currently Learning",
              desc: "Building real-world web projects to sharpen my skills",
            },
            {
              title: "5+ Projects",
              desc: "Built using modern stacks",
            },
            {
              title: "Tech Stack",
              desc: "React, Express.js, Node.js, Firebase, MongoDB",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-background border border-border rounded-xl p-5 shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {card.title}
              </h3>
              <p className="text-muted-foreground text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
