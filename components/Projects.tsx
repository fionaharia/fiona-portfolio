import React from 'react';
import { ThreeDCardDemo } from './ui/Card';

const Projects = () => {
  return (
    <div className='w-full overflow-hidden h-full flex flex-col items-center mx-auto container md:pb-0 pt-16 md:pt-4'>
      <p className='h5 mb-24 md:mb-0' data-aos="fade-down">My Projects</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-8 2xl:gap-20" data-aos="zoom-out">
        <ThreeDCardDemo title='ConnectiFy' desc='FullStack Social Media Website' image='/project3.jpg' link='https://github.com/fionaharia/ConnectiFy' />
        <ThreeDCardDemo title='BrainWave' desc='Modern UI/UX Website' image='/project2.png' link='https://github.com/fionaharia/BrainWave' />
        <ThreeDCardDemo title='Excursio' desc='Fullstack Hotel Booking Website' image='/project3.jpg' link='https://github.com/fionaharia/Excursio' />
      </div>
    </div>
  );
}

export default Projects;
