import React from "react"
import HeroSection from "./components/HeroSection"
import Skills from './components/Skills';
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";

function App() {

  return (
    <div>
      <HeroSection />
      <Skills />
      <Projects />
      <AboutMe />
      <ContactMe />
    </div>
  )
}

export default App
