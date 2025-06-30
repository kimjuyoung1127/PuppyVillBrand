"use client"

import { useState, useEffect } from "react";
import Navigation from "@/components/jason/Navigation";
import HeroSection from "@/components/jason/HeroSection";
import About from "@/components/jason/About";
import Experience from "@/components/jason/Experience";
import Services from "@/components/jason/Services";
import Gallery from "@/components/jason/Gallery";
import Contact from "@/components/jason/Contact";
import Footer from "@/components/jason/Footer";

export default function DogTrainerPortfolio() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "services", "gallery", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <About />
      <Experience />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
