import React from 'react';
import { languages, frame, tools, libra } from '@/data';

const TechStack = () => {
  return (
    <div className="w-full flex flex-col items-center mx-auto container -mt-10">
      <p className="h2">Skills</p>
      <div className="flex flex-col">
        <div className="flex flex-col text-center md:justify-start">
          <div className="flex flex-col items-center">
            <p className='h3 pt-3'>Languages</p>
            <div className='flex flex-wrap md:flex-nowrap justify-center'>
              {languages.map((item) => (
                <div key={item.id} className="flex items-center flex-col p-2 md:p-4 w-1/4 sm:w-1/4 md:w-auto">
                  <img src={item.icon} className='h-12 w-12 md:h-14 md:w-14 p-[8px] md:p-[10px] bg-black rounded-xl dark:border-2 dark:border-white' />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className='h3 pt-3'>Frameworks</p>
            <div className='flex flex-wrap md:flex-nowrap justify-center'>
              {frame.map((item) => (
                <div key={item.id} className="flex items-center flex-col p-2 md:p-4 w-1/4 sm:w-1/4 md:w-auto">
                  <img src={item.icon} className='h-12 w-12 md:h-14 md:w-14 p-[8px] md:p-[10px] bg-black rounded-xl dark:border-2 dark:border-white' />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className='h3 pt-3'>Tools</p>
            <div className='flex flex-wrap md:flex-nowrap justify-center'>
              {tools.map((item) => (
                <div key={item.id} className="flex items-center flex-col p-2 md:p-4 w-1/4 sm:w-1/4 md:w-auto">
                  <img src={item.icon} className='h-12 w-12 md:h-14 md:w-14 p-[8px] md:p-[10px] bg-black rounded-xl dark:border-2 dark:border-white' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
