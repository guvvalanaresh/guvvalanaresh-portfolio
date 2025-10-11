import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    { title: "Stampbook", img: "/project-images/stamp-book.png", link: "https://stampbook-oujl.vercel.app/", github: "https://github.com/guvvalanaresh/stampbook", readme: "https://github.com/guvvalanaresh/stampbook"},
    { title: "GitHub PR Dashboard", img: "/project-images/git-pr-dashboard.png", link: "https://git-pr-dashboard.vercel.app/", github: "https://github.com/guvvalanaresh/git-pr-dashboard", readme: "https://github.com/guvvalanaresh/git-pr-dashboard"},
    { title: "Todo App", img: "/project-images/todo.png", link: "https://todo-react-tawny-delta.vercel.app/", github: "https://github.com/guvvalanaresh/todo-react", readme: "https://github.com/guvvalanaresh/todo-react"},
  ]

  return (
    <section id='projects' className="py-10 bg-gray-50">
      {/* Projects Heading */}
      <div className="flex justify-center mb-10">
        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-widest uppercase
                     px-4 sm:px-5 py-2 border-2 border-[#222] bg-[#fff8e7] text-[#111]
                     shadow-[3px_3px_0px_#000] hover:shadow-[6px_6px_0_0_#94d82d]
                     transition-all duration-300 ease-in-out cursor-pointer
                     hover:bg-[#222] hover:text-[#fff8e7]
                     hover:-translate-y-1 bbh-sans-bogle-regular text-center"
        >
          Projects
        </h1>
      </div>

      {/* Project Cards */}
      <div className="max-w-7xl mx-auto px-5 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white border border-gray-300 rounded-xs overflow-hidden 
                       transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md flex flex-col justify-between"
          >
            <div className="w-full h-54 overflow-hidden p-5">
              <img 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 border border-black" 
                src={project.img} 
                alt={project.title} 
              />
            </div>
            <div className="p-5 text-center flex flex-col gap-3">
              <h2 className="text-xl font-semibold roboto-slab">{project.title}</h2>
              
              <div className="flex justify-center gap-2 flex-wrap">
                <a href={project.link}>
                  <button
                    className="relative px-3 py-1 text-[10px] sm:text-xs font-mono font-semibold uppercase 
                               tracking-widest text-gray-900 bg-white border-2 border-black 
                               shadow-[2px_2px_0px_#000] transition-all duration-300 ease-in-out
                               hover:bg-black hover:text-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:cursor-pointer
                               hover:shadow-[4px_4px_0px_#22c55e] active:translate-x-0 active:translate-y-0 flex items-center gap-1 justify-center"
                  >
                    🔗 Live
                  </button>
                </a>
                <a href={project.github}>
                  <button
                    className="relative px-3 py-1 text-[10px] sm:text-xs font-mono font-semibold uppercase 
                               tracking-widest text-gray-900 bg-white border-2 border-black 
                               shadow-[2px_2px_0px_#000] transition-all duration-300 ease-in-out
                               hover:bg-black hover:text-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:cursor-pointer
                               hover:shadow-[4px_4px_0px_#22c55e] active:translate-x-0 active:translate-y-0 flex items-center gap-1 justify-center"
                  >
                    <FaGithub size={14}/> Source Code
                  </button>
                </a>
                <a href={project.readme}>
                  <button
                    className="relative px-3 py-1 text-[10px] sm:text-xs font-mono font-semibold uppercase 
                               tracking-widest text-gray-900 bg-white border-2 border-black 
                               shadow-[2px_2px_0px_#000] transition-all duration-300 ease-in-out
                               hover:bg-black hover:text-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:cursor-pointer
                               hover:shadow-[4px_4px_0px_#22c55e] active:translate-x-0 active:translate-y-0 flex items-center gap-1 justify-center"
                  >
                    📘 Readme
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-10">
        <a href="#">
          <button
            className="relative px-6 py-2 text-sm font-mono font-semibold uppercase
                       tracking-widest text-gray-900 bg-white border-2 border-black
                       shadow-[2px_2px_0px_#000] transition-all duration-300 ease-in-out
                       hover:bg-black hover:text-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:cursor-pointer
                       hover:shadow-[4px_4px_0px_#22c55e] active:translate-x-0 active:translate-y-0 flex items-center gap-2"
          >
            View More →
          </button>
        </a>
      </div>
    </section>
  )
}

export default Projects
