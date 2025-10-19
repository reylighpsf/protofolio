
/**
 * Home Page - Main portfolio website
 * Combines all portfolio sections in a single page layout
 */
import Sidebar from '../components/layout/Sidebar';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
import { useSmoothScroll, useScrollAnimation } from '../hooks/useSmoothScroll';

export default function Home() {
  // Enable smooth scrolling and scroll animations
  useSmoothScroll();
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar />
      <main className="ml-80">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
