import React from 'react'
import {Github, Mail, Linkedin} from 'lucide-react'

function footer({isLight, setIsLight}) {
  return (
    <div className="my-[100px] text-[12px] flex flex-row justify-between items-center">
      <div className="">
        <p> @ 2025 raby-portfolio | <span className='font-bold'> Is this porfolio good? </span> </p>
      </div>
      <div className="flex flex-row justify-center space-x-2 sm:space-x-4">
        <a href='https://github.com/Raby001' target="_blank"  rel="noopener noreferrer" className={`cursor-pointer ${isLight?"hover:text-indigo-600":"hover:text-amber-300"}`}>
          <Github size = "20"/>
        </a>
        <a href = "mailto:hanraby001@gmail.com" target="_blank" rel="noopener noreferrer" className={`cursor-pointer ${isLight?"hover:text-indigo-600":"hover:text-amber-300"}`}>
          <Mail size = "20"/>
        </a>
        <a href="https://www.linkedin.com/in/raby-han-4106a535a/" target="_blank" rel="noopener noreferrer" className={`cursor-pointer ${isLight?"hover:text-indigo-600":"hover:text-amber-300"}`}>
          <Linkedin size = "20" />
        </a>
      </div>
    </div>
  )
}

export default footer