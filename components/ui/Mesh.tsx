import React from "react";

export function Mesh() {
  return (
    <div className="h-full w-full dark:bg-black bg-gray-50 dark:bg-grid-white/[0.2] bg-grid-black/[0.5] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <img
        src="/fiona.jpg"
        alt="Background Image"
        className="relative z-20 w-[180px] h-[180px] md:w-[300px] md:h-[300px] 2xl:w-[400px] 2xl:h-[400px] object-cover rounded-full"
      />
    </div>
  );
}
