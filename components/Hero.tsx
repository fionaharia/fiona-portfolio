import React from "react";
import AnimatedBlobs from "./ui/AnimatedBlobs";
import TypeWriterComp from "./ui/TypeWriterComp";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <div className="h-screen w-screen md:w-full md:flex-row flex flex-col items-start justify-start mx-auto container">
      <div className="flex-1 flex items-center justify-center relative z-10 pl-5 md:pl-10">
        <div className="z-20 relative">
          <div className="text-sm 2xl:text-lg mt-10 md:mt-20 text-newpink transition-colors duration-200 dark:text-navblue font-semibold md:text-xl">
            <TypeWriterComp />
          </div>
          <p className="text-black pt-2 md:pt-4 uppercase md:-mb-2 2xl:-mb-4 dark:text-white h1 w-full">
            Fiona Haria.
          </p>
          <p className="h2 w-full bg-gradient-to-r dark:from-blue-600 dark:via-green-500 dark:to-indigo-400 from-purple-400 via-pink-400 to-yellow-400 text-transparent bg-clip-text md:whitespace-nowrap">
            Passionate Web Developer
          </p>
          <p className="mt-4 2xl:mt-6 relative h3 z-30 pt-2 text-black dark:text-white transition-colors duration-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
          <div className="md:pt-8 pt-6 2xl:pt-12 -ml-1">
            <Button title="Know more" />
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center relative z-0">
        <AnimatedBlobs />
      </div>
    </div>
  );
};

export default Hero;
