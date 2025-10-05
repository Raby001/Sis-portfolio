import React from 'react'
import {Github, Mail, Linkedin} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function footer({isLight, setIsLight}) {
  const navigate = useNavigate();
  return (
    <div className="my-[100px] text-[12px] flex flex-row justify-between items-center">
      <div className="">
        <p> @ 2025 Chadeth-portfolio | <span className='font-bold'> Is this porfolio good? </span> </p>
      </div>
      <div className="flex flex-row justify-center space-x-2 sm:space-x-4">
        <a href='https://github.com/Chandeth-H?tab=repositories' target="_blank"  rel="noopener noreferrer" className={`cursor-pointer ${isLight?"hover:text-indigo-600":"hover:text-amber-300"}`}>
          <Github size = "20"/>
        </a>
        <a onClick ={() => navigate("/contact")} className={`cursor-pointer ${isLight?"hover:text-indigo-600":"hover:text-amber-300"}`}>
          <Mail size = "20"/>
        </a>
        <a href="https://www.linkedin.com/in/chandeth-han-9ab6ab24b/" target="_blank" rel="noopener noreferrer" className={`cursor-pointer ${isLight?"hover:text-indigo-600":"hover:text-amber-300"}`}>
          <Linkedin size = "20" />
        </a>
      </div>
    </div>
  )
}

export default footer