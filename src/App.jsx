import React from 'react';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Languages from './components/Languages';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="portfolio-app">
      <div className="main-container">
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Languages />
        <Contact />
      </div>
    </div>
  );
}
