"use client";
import Hero from "@/components/Hero";
import { NextUIProvider } from "@nextui-org/system";
import NavbarComp from "@/components/NavbarComp";
import AboutMe from "@/components/AboutMe";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import WorkTogether from "@/components/WorkTogether";
import HorizontalLine from "@/components/ui/HorizontalLine";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <NextUIProvider>
      <main>
        <NavbarComp />
        <section id="hero">
          <Hero />
        </section>
        <section id="about-me">
          <AboutMe />
        </section>
        <section id="tech-stack">
          <TechStack />
        </section>
        <HorizontalLine />
        <section id="projects">
          <Projects />
        </section>
        <HorizontalLine />
        <section id="education">
          <Education />
        </section>
        <section id="contact">
          <WorkTogether />
        </section>
        <Footer />
      </main>
    </NextUIProvider>
  );
}
