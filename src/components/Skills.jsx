import React from "react";
import { skills } from "../lib/skillsData";
import { PieChart, Pie, Cell } from "recharts";
import { motion } from "framer-motion";

export const Skills = () => {
  const primaryColor = "hsl(var(--primary))";
  const secondaryColor = "hsl(var(--muted-foreground))";

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.15, duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="skills"
      className="w-full px-6 sm:px-10 md:px-16 lg:px-24 py-20 border-b"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10 text-center">
        {/* Title */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm uppercase tracking-widest font-semibold mb-2"
          >
            Skills
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-foreground"
          >
            My Tech Toolbox
          </motion.h1>
        </div>

        {/* Skill Cards */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skills.map(({ name, icon: Icon, level }) => {
            const data = [
              { name: "Skill", value: level },
              { name: "Remaining", value: 100 - level },
            ];
            return (
              <motion.div
                key={name}
                variants={cardVariants}
                whileHover={{ scale: 1.08, rotate: 1 }}
                className="group bg-background border border-border rounded-xl p-4 flex flex-col items-center shadow-sm hover:shadow-lg hover:border-primary/50 transition-all"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ y: -4, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className="text-4xl text-muted-foreground group-hover:text-primary mb-2 transition-colors" />
                </motion.div>

                {/* Pie Chart with animation */}
                <PieChart width={80} height={80}>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={24}
                    outerRadius={35}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                    isAnimationActive={true}
                    animationBegin={0}
                    animationDuration={1000}
                  >
                    <Cell key="value" fill={primaryColor} />
                    <Cell key="remaining" fill={secondaryColor} />
                  </Pie>
                </PieChart>

                {/* Skill Name */}
                <span className="mt-2 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {name}
                </span>

                {/* Proficiency */}
                <span className="text-xs text-muted-foreground">
                  {level}% proficient
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
