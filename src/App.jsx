import React from "react"
import HeroSection from "./components/HeroSection"
import Skills from './components/Skills';
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import ProjectsPage from "./components/ProjectsPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={
          <>
            <HeroSection />
            <Skills />
            <Projects /> {/* View More button here will work */}
            <AboutMe />
            <ContactMe />
          </>
        } />

        {/* Projects Page */}
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  )
}

export default App
