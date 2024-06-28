import React from "react";
import { Meteors } from "./Meteor";

export function MeteorsDemo() {
  return (
    <div className="">
      <div className="w-full relative">
        <div className="absolute inset-0 h-full w-full  transform scale-[0.80] rounded-full blur-3xl" />
        <div className="relative dark:bg-bgblue bg-blue-50 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <p className="dark:text-white text-black h3 mb-4 relative z-10">
            I'm a Computer Science undergraduate from Mumbai. I'm driven by the challenge of creating digital experiences that captivate and inspire.
          </p>
          <p className="dark:text-white text-black h3 mb-4 relative z-10">
          Recently, I've been delving into the fascinating world of deep learning, exploring its potential to transform how we perceive and interact with technology. 
          </p>
          <p className="dark:text-white text-black h3 mb-4 relative z-10">
          When I'm not crafting code, you can often find me lost in music, finding inspiration for both my projects and personal playlists.
          </p>
          <Meteors number={40} />
        </div>
      </div>
    </div>
  );
}
