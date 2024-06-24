import React from 'react'
import { Typewriter } from 'nextjs-simple-typewriter'

const TypeWriterComp = () => {
  return (
    <div>
      <Typewriter 
      words={['const myName = () =>','Hey there! My name is']}
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