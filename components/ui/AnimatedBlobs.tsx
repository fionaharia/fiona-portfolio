import React from "react";

const AnimatedBlobs = () => {
  return (
    <div className="flex md:pl-0 justify-center items-center h-screen overflow-hidden ml-40 md:ml-0">
      <div className="absolute w-36 h-36 md:w-64 md:h-64 2xl:w-80 2xl:h-80 bg-purple-400 dark:bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob 2xl:top-[5%] top-[10%] left-[80%] md:top-0 md:left-0  md:right-[40%] md:bottom-[30%] 2xl:left-[30%]"></div>
      <div className="absolute w-36 h-36 md:w-64 md:h-64 2xl:w-80 2xl:h-80 bg-yellow-400 dark:bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 md:top-0 md:left-[40%] 2xl:left-[60%] 2xl:top-[30%]  left-[90%] top-[30%]"></div>
      <div className="absolute w-36 h-36 md:w-64 md:h-64 2xl:w-80 2xl:h-80 bg-pink-400 dark:bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 md:right-1/3 md:top-[30%] top-[20%] right-[10%]"></div>
    </div>
  );
};

export default AnimatedBlobs;


