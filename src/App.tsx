import React from 'react';
import { Suspense, lazy } from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import LazySection from './components/LazySection';
import StatsTools from './components/StatsTools';
import './App.css';

// Lazy load components for better performance
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="bg-primary text-white overflow-x-hidden" style={{ backgroundColor: '#060606' }}>
      <Navigation />
      <Hero />
      <StatsTools />
      <LazySection>
        <About />
      </LazySection>
      <LazySection>
        <Skills />
      </LazySection>
      <LazySection>
        <Experience />
      </LazySection>
      <LazySection>
        <Projects />
      </LazySection>
      <LazySection>
        <Contact />
      </LazySection>
      <LazySection>
        <Footer />
      </LazySection>
    </div>
  );
}

export default App;