/**
 * Home Page - Main portfolio website
 * Combines all portfolio sections in a responsive single page layout
 */
import Sidebar from '../components/layout/Sidebar';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import { useSmoothScroll, useScrollAnimation } from '../hooks/useSmoothScroll';

export default function Home() {
  // Enable smooth scrolling and scroll animations
  useSmoothScroll();
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      {/* Header (fixed di atas, hanya untuk navigasi global / branding) */}
      <Header />

      {/* Wrapper utama untuk Sidebar dan konten */}
      <div className="flex flex-1 pt-16"> 
        {/* Sidebar (responsif: permanen di desktop, toggle di HP) */}
        <Sidebar />

        {/* Konten utama */}
        <main
          className="
            flex-1
            px-6
            md:px-12
            pt-6
            pb-16
            md:ml-80
            transition-all
            duration-300
          "
        >
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
