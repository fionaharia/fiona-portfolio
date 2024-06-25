import React from 'react';
import { ThreeDCardDemo } from './ui/Card';

const Projects = () => {
  return (
    <div className='h-full w-full flex flex-col items-center mx-auto container px-4'>
      <p className='h2 mt-10 md:mb-20 sm:mb-12'>Projects</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
        <ThreeDCardDemo title='Project 1' desc='This is my project' image='/fiona.jpg' />
        <ThreeDCardDemo title='Project 2' desc='This is my project' image='/fiona.jpg' />
        <ThreeDCardDemo title='Project 3' desc='This is my project' image='/fiona.jpg' />
      </div>
    </div>
  );
}

export default Projects;
