import React from 'react'
import { Typewriter } from 'nextjs-simple-typewriter'
import { words } from '@/data'

const TypeWriterComp = () => {
  return (
    <div>
      <Typewriter 
      words={words}
      loop={0}
      cursor
      typeSpeed={60}
      delaySpeed={1200}
      cursorStyle='|'
      cursorBlinking
      />
    </div>
  )
}

export default TypeWriterComp