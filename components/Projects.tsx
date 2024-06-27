import React from 'react';
import { ThreeDCardDemo } from './ui/Card';

const Projects = () => {
  return (
    <div className='w-full h-full flex flex-col md:mt-20 items-center mx-auto container px-4 md:pb-20 md:pt-20 pt-16'>
      <p className='h5 mb-24 md:mb-0' data-aos="fade-down">My Projects</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 2xl:gap-20" data-aos="zoom-out">
        <ThreeDCardDemo title='ConnectiFy' desc='FullStack Social Media Website' image='/project3.jpg' link='https://github.com/fionaharia/ConnectiFy' />
        <ThreeDCardDemo title='BrainWave' desc='Modern UI/UX Website' image='/project2.png' link='https://github.com/fionaharia/BrainWave' />
        <ThreeDCardDemo title='Excursio' desc='Fullstack Hotel Booking Website' image='/project3.jpg' link='https://github.com/fionaharia/Excursio' />
      </div>
    </div>
  );
}

export default Projects;
