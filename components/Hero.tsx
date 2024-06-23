"use client"
import React from 'react'
import { useState } from 'react';
import { WavyBackground } from './ui/WavyBackgroun';

const Hero = () => {

  const [darkMode,setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
      {/* <button className="border-2 border-black" onClick={toggleDarkMode}>{darkMode ? "light" : "dark"}</button> */}

  return (
    <div className={`${darkMode && "dark"} h-screen flex flex-col justify-center items-center`}>
      <WavyBackground className="w-full h-full flex">
        
      </WavyBackground>
    </div>
  )
}

export default Hero