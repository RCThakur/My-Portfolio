import React from "react";

export const AboutMe = () => {
  return (
    <section
      id="about"
      className="w-full px-6 sm:px-10 md:px-16 lg:px-24 py-20 border-b"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-10 text-center lg:text-left">
        {/* Section Header */}
        <div>
          <h2 className="text-primary text-sm uppercase tracking-widest font-semibold mb-2">
            About Me
          </h2>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            Who is Rinkesh Thakur?
          </h1>
        </div>

        {/* Content */}
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed tracking-wide max-w-3xl">
          I'm a passionate Full Stack Web Developer from India, specializing in building
          modern, responsive, and user-friendly web applications. With a strong foundation in both frontend and backend technologies, I enjoy solving problems and bringing ideas to life through clean code and intuitive design.
          <br /><br />
          My approach is focused on crafting high-performance websites and applications using
          the latest tools and technologies. I'm currently exploring advanced UI/UX practices and constantly upgrading my skills to stay in sync with the fast-evolving tech landscape.
        </p>

        {/* Info Cards or Stats - Optional */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 text-left w-full">
          <div className="bg-background border border-border rounded-xl p-4 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground">Currently Learning</h3>
            <p className="text-muted-foreground text-sm">Building real-world web projects to sharpen my skills</p>
          </div>
          <div className="bg-background border border-border rounded-xl p-4 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground">5+ Projects</h3>
            <p className="text-muted-foreground text-sm">Built using modern stacks</p>
          </div>
          <div className="bg-background border border-border rounded-xl p-4 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground">Tech Stack</h3>
            <p className="text-muted-foreground text-sm">React,Express.js Node.js, Firebase, MongoDB</p>
          </div>
        </div>
      </div>
    </section>
  );
};
