import React from "react";

const AnimatedBlobs = () => {
  return (
    <div className="flex justify-center items-center h-screen overflow-hidden">
      <div className="absolute w-80 h-80 bg-purple-300 dark:bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob md:right-[40%] md:bottom-[30%] 2xl:left-[30%] 2xl:top-[20%]"></div>
      <div className="absolute w-80 h-80 bg-yellow-300 dark:bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 md:left-[40%] 2xl:left-[60%] 2xl:top-[30%]"></div>
      <div className="absolute w-80 h-80 bg-pink-300 dark:bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 md:right-1/3 md:top-1/2"></div>
    </div>
  );
};

export default AnimatedBlobs;
