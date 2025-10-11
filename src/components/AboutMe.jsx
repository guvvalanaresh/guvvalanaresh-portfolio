import React from 'react';

const AboutMe = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-white px-6 sm:px-10 md:px-16 lg:px-24 py-12"
    >
      {/* 🔹 Heading */}
      <h1
        className="text-3xl sm:text-4xl font-semibold tracking-widest uppercase
                   px-5 py-2 border-2 border-[#222] bg-[#fff8e7]
                   shadow-[3px_3px_0px_#000] transition-all duration-300
                   hover:shadow-[6px_6px_0px_#22c55e] hover:-translate-x-[3px]
                   hover:-translate-y-[3px]"
      >
        About Me
      </h1>

      {/* 🔹 Content */}
      <div
        className="mt-10 max-w-3xl text-center text-gray-800 font-mono leading-relaxed
                   transition-all duration-700 ease-in-out animate-fadeIn"
      >
        <p className="text-base sm:text-lg">
          Hey there! 👋 I'm <span className="font-semibold text-black">Guvvala Naresh Kumar Reddy</span>, a passionate
          <span className="text-green-600 font-semibold"> Frontend Developer </span> currently exploring full-stack and AI/ML technologies.
        </p>

        <p className="mt-4 text-base sm:text-lg">
          I love building <span className="font-semibold text-amber-700">interactive, clean, and fast</span> web applications using modern tools like
          <span className="text-black font-semibold"> React, Next.js,</span> and <span className="text-black font-semibold">Tailwind CSS.</span>
        </p>

        <p className="mt-4 text-base sm:text-lg">
          Currently, I’m working on projects that combine <span className="font-semibold text-green-700">design</span> and
          <span className="font-semibold text-green-700"> development</span> to create smooth user experiences.
        </p>
      </div>

      {/* 🔹 Animated border card (optional aesthetic box) */}
      <div
        className="mt-10 p-4 border-2 border-black rounded-md shadow-[3px_3px_0px_#000]
                   hover:shadow-[6px_6px_0px_#22c55e] transition-all duration-300 ease-in-out
                   hover:-translate-x-[3px] hover:-translate-y-[3px]"
      >
        <p className="text-[11px] sm:text-base font-mono text-gray-700 font-bold sm:font-normal">
        “Code. Design. Learn. Repeat.” 🚀
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
