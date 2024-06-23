"use client"
import React, { useState } from "react";

const Hero = () => {
  return (
      <div className="h-screen w-full flex items-center justify-center px-16 bg-gray-50 z-1 dark:bg-black">
        <div className="relative w-full max-w-lg z-10">
          <div className="absolute 2xl:-right-96 2xl:bottom-0 md:-bottom-10 md:-right-56 2xl:w-96 2xl:h-96 md:w-64 md:h-64 bg-purple-300 dark:bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute 2xl:top-0 2xl:-right-[500px] md:-right-[300px] 2xl:w-96 2xl:h-96 md:w-64 md:h-64 bg-yellow-300 dark:bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute 2xl:-right-52 md:-right-16 2xl:w-96 2xl:h-96 md:w-64 md:h-64 bg-pink-300 dark:bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>    
  );
};

export default Hero;
