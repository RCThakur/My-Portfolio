import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import BannerPhoto from "../assets/images/BannerPhoto.png";

export const HeroSection = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Web Designer", "UI/UX Designer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <section
      id="hero"
      className="w-full px-6 sm:px-10 md:px-16 lg:px-24 pt-32 pb-20 flex flex-col lg:flex-row items-center gap-10 border-b font-bold"
    >
      {/* Left Column */}
      <div className="w-full lg:w-1/2 flex flex-col gap-10">
        {/* Intro Text */}
        <div className="flex flex-col gap-3 text-center lg:text-left">
          <h4 className="text-base font-normal uppercase tracking-widest">
            Welcome to my world
          </h4>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Hi, I'm
            <span className="text-primary capitalize"> RinkeshThakur </span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            a <span className="text-primary">{text}</span>
            <Cursor cursorColor="hsl(var(--primary))" cursorStyle="_" />
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed tracking-wide">
            I'm a Full Stack Web Developer based in India. <br />
            I have a passion for creating beautiful and functional websites.
          </p>
        </div>

        {/* Social Links */}
        <div className="text-center lg:text-left">
          <h2 className="text-sm sm:text-base uppercase font-bold mb-4">
            Find me on
          </h2>
          <div className="flex justify-center lg:justify-start gap-4 text-xl">
            {[
              {
                icon: <FaFacebook />,
                link: "https://www.facebook.com/rinkesh.thakur.98/",
              },
              {
                icon: <FaLinkedin />,
                link: "https://www.linkedin.com/in/rinkesh-thakur-3b985a160/",
              },
              { icon: <FaGithub />, link: "https://github.com/RCThakur" },
              {
                icon: <FaInstagram />,
                link: "https://www.instagram.com/r_c_thakur/",
              },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white
                  transition-all duration-300 ease-out
                  animate-float
                  hover:scale-125 hover:rotate-12 hover:shadow-lg hover:shadow-primary/50"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Resume Button */}
        <div className="flex justify-center lg:justify-start">
          <a
            href="https://drive.google.com/file/d/1IEeufiCcr4C4gm64K2ijbI2_vgUjZ1V4/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full font-semibold text-sm shadow-lg
              bg-gradient-to-r from-primary to-pink-500 text-white
              hover:scale-105 hover:shadow-pink-500/50
              transition-all duration-300 ease-out"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full flex justify-center lg:justify-end relative pt-10 lg:pt-0 group">
        {/* Animated Glow */}
        <div
          className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-0 -z-10
          w-80 h-80 md:w-96 md:h-96 rounded-full bg-primary/20 blur-3xl 
          animate-pulse group-hover:blur-[100px] group-hover:bg-primary/40 transition-all duration-500"
        />
        {/* Image */}
        <img
          src={BannerPhoto}
          alt="Rinkesh Thakur"
          className="w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 object-cover object-top 
            rounded-full border-4 border-primary shadow-xl 
            transition-transform duration-300 group-hover:scale-110"
        />
      </div>
    </section>
  );
};
