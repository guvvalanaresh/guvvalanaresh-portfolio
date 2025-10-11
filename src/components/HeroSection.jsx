import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion"; // ✅ Import Framer Motion
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div id="hero" className="flex flex-col-reverse md:flex-row justify-between items-center w-full h-auto md:h-[calc(100vh-80px)] px-4 sm:px-8 md:px-16 py-10 md:py-0">
        
        {/* Left Content with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col justify-center h-full space-y-4 text-center md:text-left w-full md:w-1/2"
        >
          {/* Intro */}
          <h1 className="text-base sm:text-lg md:text-2xl text-gray-800 leading-snug suse-mono">
            Hello, I'm{" "}
            <br />
            <span className="text-green-600 text-lg sm:text-xl md:text-2xl suse-mono">
              naresh guvvala
            </span>
          </h1>

          {/* Developer Section */}
          <div className="relative font-semibold leading-tight w-fit mx-auto md:mx-0">
            <span className="roboto-condensed text-green-900">
              <span className="text-4xl sm:text-5xl md:text-6xl font-bold">D</span>
              <span className="text-2xl sm:text-3xl md:text-3xl font-bold">evelope</span>
              <span className="text-5xl sm:text-6xl md:text-7xl font-bold">r.</span>
            </span>

            {/* Full Stack label above Developer */}
            <span className="absolute left-14 sm:left-20 bottom-8 sm:bottom-10 -translate-x-1/2 text-[10px] sm:text-sm md:text-[12px] text-green-900 roboto-condensed whitespace-nowrap font-medium">
              Python Full Stack
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 max-w-md mx-auto md:mx-0 text-xs sm:text-sm md:text-base roboto-mono px-2">
            Passionate about building efficient, scalable, and user-friendly web
            applications using modern technologies.
          </p>

          {/* Resume Button */}
          <a href="/naresh_developer.pdf" className="mx-auto md:mx-0">
            <button
              className="relative px-5 py-1.5 text-[12px] sm:text-sm font-mono font-semibold uppercase 
                        tracking-widest text-gray-900 bg-white border-2 border-black 
                        shadow-[3px_3px_0px_#000] transition-all duration-300 ease-in-out
                        hover:bg-black hover:text-white hover:translate-x-[-3px] hover:translate-y-[-3px] hover:cursor-pointer
                        hover:shadow-[6px_6px_0px_#22c55e] active:translate-x-0 active:translate-y-0"
            >
              Resume
            </button>
          </a>


          {/* Social Media Links */}
          <div className="flex justify-center md:justify-start gap-3 mt-2">
            <a
              href="https://github.com/guvvalanaresh"
              className="transition-transform duration-300 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <i className="ri-github-fill text-[22px] text-gray-800 hover:text-black"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/nareshkumarreddyguvvala/"
              className="transition-transform duration-300 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <i className="ri-linkedin-box-fill text-[22px] text-[#0077b5] hover:text-[#005582]"></i>
            </a>
            <a
              href="https://x.com/thisisnaresh___"
              className="transition-transform duration-300 hover:-translate-y-1"
              aria-label="Twitter / X"
            >
              <i className="ri-twitter-x-fill text-[22px] text-black hover:text-gray-800"></i>
            </a>
          </div>
        </motion.div>

        {/* Right Image with Fade-In */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex justify-center items-center w-full md:w-1/2 mb-5 md:mb-0"
        >
          <img
            className="
              w-32 h-32             /* small screens */
              sm:w-48 sm:h-48       /* slightly bigger on small screens */
              md:w-[350px] md:h-[420px]  /* desktop size */
              lg:w-[400px] lg:h-[480px]   /* large screens */
              object-contain drop-shadow-md
              transition-all duration-500
            "
            src="/hero-image.png"
            alt="Hero"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
