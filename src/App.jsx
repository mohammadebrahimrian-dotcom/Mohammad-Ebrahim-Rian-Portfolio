// src/App.jsx

import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";

const sections = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "contact",
];

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
  });

  const [isHovering, setIsHovering] = useState(false);

  // Track mouse position for the custom cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Detect the currently active portfolio section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);

        if (
          el &&
          el.offsetTop <= scrollPos &&
          el.offsetTop + el.offsetHeight > scrollPos
        ) {
          setActiveSection(section);
          return;
        }
      }

      if (window.scrollY < 200) {
        setActiveSection("home");
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      className="relative min-h-screen animated-bg"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Custom Cursor */}
      <div
        className="hidden lg:block fixed w-6 h-6 pointer-events-none z-[9999] transition-transform duration-150 ease-out"
        style={{
          left: cursorPos.x - 12,
          top: cursorPos.y - 12,
          transform: isHovering ? "scale(2)" : "scale(1)",
        }}
      >
        <div className="w-full h-full rounded-full border-2 border-[#00ff88] opacity-60" />

        <div className="absolute inset-2 rounded-full bg-[#00ff88] opacity-20" />
      </div>

      {/* Animated Background */}
      <ParticlesBackground />

      {/* Main Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Portfolio Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
