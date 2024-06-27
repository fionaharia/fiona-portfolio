import React from "react";
import Button from "./ui/Button";

const WorkTogether = () => {
  return (
    <div className="mx-4 md:mx-auto md:mt-40 w-full max-w-lg flex flex-col justify-center items-center container rounded-xl bg-white/5 shadow-lg ring-1 ring-black/5 p-8">
      <p className="h5 text-center">
        Let's work{" "}
        <span className="dark:from-blue-600 dark:via-green-500 dark:to-indigo-400 bg-gradient-to-r bg-clip-text text-transparent">
          Together.
        </span>
      </p>
      <p className="h4 font-normal pt-4 text-center">
        I'm currently available for working as an intern and freelancing.
      </p>
      <p className="h4 font-normal pt-2 text-center">
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
  );
};

export default WorkTogether;
