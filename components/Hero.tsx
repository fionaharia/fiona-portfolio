"use client";
import React from "react";
import AnimatedBlobs from "./ui/AnimatedBlobs";
import TypeWriterComp from "./ui/TypeWriterComp";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <div className="font-headings h-auto w-full mx-auto container md:w-full md:flex-row flex flex-col items-start justify-start md:mx-auto md:container px-3">
      <div className="flex-1 flex items-center justify-center relative z-10 md:pl-10">
        <div className="z-20 relative max-w-full">
          <div className="text-sm 2xl:text-lg mt-10 md:mt-20 text-newpink transition-colors duration-200 dark:text-navblue font-semibold md:text-xl">
            <TypeWriterComp />
          </div>
          <p
            className="text-black pt-2 md:pt-4 uppercase md:-mb-5 2xl:-mb-8 dark:text-white h1 w-full"
            data-aos="fade-up"
          >
            Fiona Haria
          </p>
          <p
            className="h2 w-full bg-gradient-to-r dark:from-blue-600 dark:via-green-500 dark:to-indigo-400 from-purple-400 via-pink-400 to-yellow-400 text-transparent bg-clip-text md:whitespace-nowrap"
            data-aos="fade-up"
          >
            Passionate Web Developer
          </p>
          <p
            className="mt-6 md:mt-4 px-1 md:px-0 relative h3 z-30 pt-2 text-black dark:text-white transition-colors duration-200 break-words"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            A fullstack web developer dedicated to transform ideas into sleek digital experiences, crafting efficient and scalable code.
          </p>
          <div className="flex flex-row flex-wrap md:flex-nowrap items-center justify-center md:items-start md:justify-start mt-4 md:mt-0">
            <div
              className="md:pt-8 pt-6 2xl:pt-12 -ml-1"
              data-aos="zoom-out-up"
            >
              <Button title="Connect" href="mailto:fiona44work@gmail.com" />
            </div>
            <div className="md:pt-8 pt-6 2xl:pt-12 ml-6" data-aos="zoom-out-up">
              <Button title="Know More" href="#about-me" />
            </div>
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
