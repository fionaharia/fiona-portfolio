import React from 'react';
import { ThreeDCardDemo } from './ui/Card';

const Projects = () => {
  return (
    <div className='h-full w-full flex flex-col items-center mx-auto container px-4 mt-20'>
      <p className='h5 mb-28 md:mb-0'>&lt; My Projects /&gt;</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 2xl:gap-16">
        <ThreeDCardDemo title='ConnectiFy' desc='FullStack Social Media Website' image='/project3.jpg' link='https://github.com/fionaharia/ConnectiFy' />
        <ThreeDCardDemo title='BrainWave' desc='Modern UI/UX Website' image='/project2.png' link='https://github.com/fionaharia/BrainWave' />
        <ThreeDCardDemo title='Excursio' desc='Fullstack Hotel Booking Website' image='/project3.jpg' link='https://github.com/fionaharia/Excursio' />
      </div>
    </div>
  );
}

export default Projects;
