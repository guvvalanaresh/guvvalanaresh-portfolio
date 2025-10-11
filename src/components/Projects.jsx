import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Stampbook",
      img: "/project-images/stamp-book.png",
      link: "https://stampbook-oujl.vercel.app/",
      github: "https://github.com/guvvalanaresh/stampbook",
      readme: "https://github.com/guvvalanaresh/stampbook",
    },
    {
      title: "GitHub PR Dashboard",
      img: "/project-images/git-pr-dashboard.png",
      link: "https://git-pr-dashboard.vercel.app/",
      github: "https://github.com/guvvalanaresh/git-pr-dashboard",
      readme: "https://github.com/guvvalanaresh/git-pr-dashboard",
    },
    {
      title: "Todo App",
      img: "/project-images/todo.png",
      link: "https://todo-react-tawny-delta.vercel.app/",
      github: "https://github.com/guvvalanaresh/todo-react",
      readme: "https://github.com/guvvalanaresh/todo-react",
    },
  ];

  return (
    <section id="projects" className="py-10 bg-gray-50 flex flex-col items-center">
      {/* Projects Heading */}
      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-widest uppercase
                   px-4 sm:px-5 py-2 border-2 border-[#222] bg-[#fff8e7] text-[#111]
                   shadow-[3px_3px_0px_#000] hover:shadow-[6px_6px_0_0_#94d82d]
                   transition-all duration-300 ease-in-out
                   hover:bg-[#222] hover:text-[#fff8e7]
                   hover:-translate-y-1 bbh-sans-bogle-regular text-center mb-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h1>

      {/* Project Cards */}
      <div className="max-w-7xl mx-auto px-5 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white border border-gray-300 rounded-md overflow-hidden 
                       transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg 
                       flex flex-col justify-between w-full max-w-sm"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Responsive Image Section */}
            <div className="w-full h-48 sm:h-52 md:h-54 lg:h-50 overflow-hidden p-3 sm:p-4 flex items-center justify-center">
              <img
                className="w-full h-full object-contain sm:object-cover transition-transform duration-300 hover:scale-105"
                src={project.img}
                alt={project.title}
              />
            </div>

            {/* Project Info */}
            <div className="p-5 text-center flex flex-col gap-3">
              <h2 className="text-xl font-semibold roboto-slab">{project.title}</h2>

              <div className="flex justify-center gap-2 flex-wrap">
                {/* Live Button */}
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <button
                    className="relative px-3 py-1 text-[10px] sm:text-xs font-mono font-semibold uppercase 
                               tracking-widest text-gray-900 bg-white border-2 border-black 
                               shadow-[2px_2px_0px_#000] transition-all duration-300 ease-in-out
                               hover:bg-black hover:text-white hover:-translate-x-[2px] hover:-translate-y-[2px]
                               hover:shadow-[4px_4px_0px_#22c55e] active:translate-x-0 active:translate-y-0
                               flex items-center gap-1 justify-center hover:cursor-pointer"
                  >
                    🔗 Live
                  </button>
                </a>

                {/* Source Code Button */}
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <button
                    className="relative px-3 py-1 text-[10px] sm:text-xs font-mono font-semibold uppercase 
                               tracking-widest text-gray-900 bg-white border-2 border-black 
                               shadow-[2px_2px_0px_#000] transition-all duration-300 ease-in-out
                               hover:bg-black hover:text-white hover:-translate-x-[2px] hover:-translate-y-[2px]
                               hover:shadow-[4px_4px_0px_#22c55e] active:translate-x-0 active:translate-y-0
                               flex items-center gap-1 justify-center hover:cursor-pointer"
                  >
                    <FaGithub size={14} /> Source Code
                  </button>
                </a>

                {/* Readme Button */}
                <a href={project.readme} target="_blank" rel="noopener noreferrer">
                  <button
                    className="relative px-3 py-1 text-[10px] sm:text-xs font-mono font-semibold uppercase 
                               tracking-widest text-gray-900 bg-white border-2 border-black 
                               shadow-[2px_2px_0px_#000] transition-all duration-300 ease-in-out
                               hover:bg-black hover:text-white hover:-translate-x-[2px] hover:-translate-y-[2px]
                               hover:shadow-[4px_4px_0px_#22c55e] active:translate-x-0 active:translate-y-0
                               flex items-center gap-1 justify-center hover:cursor-pointer"
                  >
                    📘 Readme
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View More Button */}
      <motion.div
        className="flex justify-center mt-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <a href="#">
          <button
            className="relative px-6 py-2 text-sm font-mono font-semibold uppercase
                       tracking-widest text-gray-900 bg-white border-2 border-black
                       shadow-[2px_2px_0px_#000] transition-all duration-300 ease-in-out
                       hover:bg-black hover:text-white hover:-translate-x-[2px] hover:-translate-y-[2px]
                       hover:shadow-[4px_4px_0px_#22c55e] active:translate-x-0 active:translate-y-0
                       flex items-center gap-2 hover:cursor-pointer"
          >
            View More →
          </button>
        </a>
      </motion.div>
    </section>
  );
};

export default Projects;
