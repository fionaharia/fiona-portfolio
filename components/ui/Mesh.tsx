import React from "react";

export function Mesh() {
  return (
    <div className="h-full w-full dark:bg-bgblue bg-blue-50 dark:bg-grid-white/[0.2] bg-grid-pink-500/[0.9] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-bgblue bg-blue-50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <img
        src="/fiona.jpg"
        alt="Background Image"
        className="relative z-20 w-[150px] h-[150px] md:w-[300px] md:h-[300px] 2xl:w-[400px] 2xl:h-[400px] object-cover rounded-full"
      />
    </div>
  );
}
