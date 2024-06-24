import Hero from "@/components/Hero";
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
