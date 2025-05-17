
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { setupScrollAnimations } from '../utils/scrollAnimations';

const Index: React.FC = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Diogo Mello | Desenvolvedor Backend';
    
    // Initialize scroll animations
    setupScrollAnimations();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
