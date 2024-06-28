import React from 'react';

const WorkTogether = () => {
  return (
    <div className="px-4 md:px-0 md:pt-10 md:pb-10 2xl:pt-16 2xl:pb-16" data-aos="zoom-in">  {/* Parent div with padding for mobile screens */}
      <div className="mx-auto container flex flex-col justify-center items-center rounded-xl bg-black dark:bg-white/5 shadow-lg ring-1 ring-black/5 p-8 md:p-16">
        <p className="h5 text-center text-white">
          Let&apos;s work{" "}
          <span className="dark:from-blue-600 dark:via-green-500 dark:to-indigo-400 from-purple-400 via-pink-400 to-yellow-400 bg-gradient-to-r bg-clip-text text-transparent">
            Together.
          </span>
        </p>
        <p className="h3 font-normal pt-4 text-white">
          I&apos;m currently available for working as an intern and freelancing.
        </p>
        <p className="h3 font-normal pt-2 text-center text-white">
          Email me at{" "}
          <a href="mailto:fiona44work@gmail.com" className="hover:underline">
            fiona44work@gmail.com
          </a>{" "}
          or connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/fionaharia/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
          !
        </p>
      </div>
    </div>
  );
};

export default WorkTogether;
