import React from "react";
import AnimatedBlobs from "./ui/AnimatedBlobs";
import { words } from "@/data";
import TypeWriterComp from "./ui/TypeWriterComp";

const Hero = () => {
  return (
    <div className="h-screen w-full flex items-start justify-start mx-auto container">
      <div className="flex-1 flex items-center justify-center">
        <div className="z-100">
          <div className="mt-20 text-newpink transition-colors duration-200 dark:text-navblue font-semibold md:text-xl">
            <TypeWriterComp />
          </div>
          <p className="text-black pt-4 dark:text-white h1 w-full">
            Fiona Haria.
          </p>
          <p className="h2 w-full bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text whitespace-nowrap">
            Passionate Web Developer
          </p>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center relative z-20">
        <AnimatedBlobs />
      </div>
    </div>
  );
};

export default Hero;
