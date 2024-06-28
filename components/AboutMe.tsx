import React from 'react';
import Mesh from "./ui/Mesh"
import { MeteorsDemo } from './ui/MeteorBox';

const AboutMe = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center mx-auto container -mt-96 md:-mt-24 2xl:-mt-28">

      <p className="h5" data-aos="fade-down">About Me</p>
      <div className="flex flex-col md:flex-row mt-4 w-full h-3/4" data-aos="zoom-out">
        <div className="p-4 m-2 md:w-1/2">
          <Mesh />
        </div>
        <div className="h3 p-4 md:pt-20 -m-2 md:w-[40%] 2xl:pt-40">
        <MeteorsDemo />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
