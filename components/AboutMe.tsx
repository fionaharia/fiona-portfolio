import React from 'react';
import {Mesh} from "./ui/Mesh"
import { Meteors } from './ui/Meteor';
import { MeteorsDemo } from './ui/MeteorBox';

const AboutMe = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center mx-auto container -mt-10">

      <p className="h2 dark:text-white text-black duration-200 transition-colors">&lt; About Me /&gt;</p>
      <div className="flex flex-col md:flex-row mt-4 w-full h-3/4">
        <div className="p-4 m-2 md:w-1/2">
          <Mesh />
        </div>
        <div className="h3 p-4 m-2 md:w-[40%]">
        <MeteorsDemo />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;