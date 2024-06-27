"use client"
import Hero from "@/components/Hero";
import { NextUIProvider } from "@nextui-org/system";
import NavbarComp from "@/components/NavbarComp";
import AboutMe from "@/components/AboutMe";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import WorkTogether from "@/components/WorkTogether";

export default function Home() {

  return (
    <NextUIProvider>
      <main>
        <NavbarComp />
        <Hero />
        <AboutMe/>
        <TechStack />
        <Projects />
        <Education />
        <WorkTogether />
      </main>
    </NextUIProvider>
    
  );
}
