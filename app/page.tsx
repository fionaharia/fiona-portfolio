import Hero from "@/components/Hero";
import { NextUIProvider } from "@nextui-org/system";
import NavbarComp from "@/components/NavbarComp";
import AboutMe from "@/components/AboutMe";

export default function Home() {

  return (
    <NextUIProvider>
      <main>
        <NavbarComp />
        <Hero />
        <AboutMe/>
      </main>
    </NextUIProvider>
    
  );
}
