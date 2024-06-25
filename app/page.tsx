import Hero from "@/components/Hero";
import { NextUIProvider } from "@nextui-org/system";
import NavbarComp from "@/components/NavbarComp";
import AboutMe from "@/components/AboutMe";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Education from "@/components/Education";

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
      </main>
    </NextUIProvider>
    
  );
}
