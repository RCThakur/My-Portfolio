import React from "react";
import { skills } from "../lib/skillsData";
import { PieChart, Pie, Cell } from "recharts";
import { motion } from "framer-motion";

export const Skills = () => {
  const primaryColor = "hsl(var(--primary))";
  const secondaryColor = "hsl(var(--muted-foreground))";

  return (
    <section
      id="skills"
      className="w-full px-6 sm:px-10 md:px-16 lg:px-24 py-20 border-b"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10 text-center">
        <div>
          <h2 className="text-primary text-sm uppercase tracking-widest font-semibold mb-2">
            Skills
          </h2>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            My Tech Toolbox
          </h1>
        </div>

        <motion.div
          className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {skills.map(({ name, icon: Icon, level }) => {
            const data = [
              { name: "Skill", value: level },
              { name: "Remaining", value: 100 - level },
            ];
            return (
              <motion.div
                key={name}
                whileHover={{ scale: 1.05 }}
                className="group bg-background border border-border rounded-xl p-4 flex flex-col items-center shadow-sm hover:shadow-xl transition-all"
              >
                <Icon className="text-4xl text-muted-foreground group-hover:text-primary mb-2" />
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
                  >
                    <Cell key="value" fill={primaryColor} />
                    <Cell key="remaining" fill={secondaryColor} />
                  </Pie>
                </PieChart>
                <span className="mt-2 text-sm font-medium text-foreground group-hover:text-primary">
                  {name}
                </span>
                <span className="text-xs text-muted-foreground">{level}% proficient</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
