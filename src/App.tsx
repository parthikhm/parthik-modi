import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import { ThemeProvider } from './components/ThemeProvider';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-primary text-primary overflow-x-hidden">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;