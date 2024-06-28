import React from "react";

const Button = ({ title, href }: { title: string; href: string }) => {
  return (
    <div>
      <a href={href}>
        <button className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-yellow-500 dark:from-blue-500 dark:to-green-500 rounded-lg" />
          <div className="px-3 py-1 md:px-4 md:py-2 2xl:px-6 text-sm md:text-lg font-semibold bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
            {title}
          </div>
        </button>
      </a>
    </div>
  );
};

export default Button;
