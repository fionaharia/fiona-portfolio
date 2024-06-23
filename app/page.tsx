import Hero from "@/components/Hero";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { NextUIProvider } from "@nextui-org/system";
import NavbarComp from "@/components/NavbarComp";

export default function Home() {

  return (
    <NextUIProvider>
      <main>
        <NavbarComp />
        <Hero />
      </main>
    </NextUIProvider>
    
  );
}
