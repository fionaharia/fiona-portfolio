import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-foot p-8 z-50 mt-16 flex flex-col justify-center items-center">
      <div className="flex flex-row gap-8">
        <div>
          <a href="https://github.com/fionaharia" target="_blank" rel="noopener noreferrer">
            <FaGithub className="h-6 w-6 fill-white hover:text-gray-500" />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/fionaharia" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="h-6 w-6 fill-white hover:text-gray-500" />
          </a>
        </div>
        <div>
          <a href="mailto:fiona44work@gmail.com" target="_blank" rel="noopener noreferrer">
            <MdOutlineMail className="h-6 w-6 fill-white hover:text-gray-500" />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/fionaharia" target="_blank" rel="noopener noreferrer">
            <FaSquareInstagram className="h-6 w-6 fill-white hover:text-gray-500" />
          </a>
        </div>
      </div>
      <div className="mt-6 h3 text-center text-white">
        Made with &#x2764;&#xfe0f; by Fiona @2024
      </div>
    </div>
  );
};

export default Footer;
