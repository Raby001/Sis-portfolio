import React, { useState } from 'react'
import { Bot, MoonStar, Sun, BotOff } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

function Navbar({isLight, setIsLight}) {

  const [isBot, setIsBot] = useState(true);
  const navigate = useNavigate();

  return (
    
      <div className = {`fixed top-0 left-0 right-0 z-50 mb-[40px] sm:mb-[60px] text-[16px] max-w-[700px] mx-auto backdrop-blur-sm`}>
        <div className=" my-[30px] flex flex-row justify-between items-center md:mx-0 mx-[20px]">
          <div className="flex items-center">
            <ul className='flex flex-row space-x-4 sm:space-x-8 text-[12px] sm:text-[16px]'>
              <li onClick ={() => navigate("/")} className={`cursor-pointer ${!isLight ? "hover:text-amber-200": "hover:text-indigo-600"}`}>Home</li>
              <li onClick ={() => navigate("/projects")} className={`cursor-pointer ${!isLight ? "hover:text-amber-200": "hover:text-indigo-600"}`}>Project</li>
              <li onClick ={() => navigate("/competition")} className={`cursor-pointer ${!isLight ? "hover:text-amber-200": "hover:text-indigo-600"}`}>Competition</li>
              <li onClick ={() => navigate("/contact")} className={`cursor-pointer ${!isLight ? "hover:text-amber-200": "hover:text-indigo-600"}`}>Contact</li>
            </ul>
          </div>
          <div className="flex items-center space-x-4 sm:space-x-8 text-[12px] sm:text-[16px]">
            <div className={`cursor-pointer ${!isLight ? "hover:text-amber-200": "hover:text-indigo-600"}`} onClick={() => setIsLight(!isLight)}>{isLight ?<MoonStar size={16}/>: <Sun size={16}/> }</div>
          </div>

        </div>      
      </div>   
 


  )
}

export default Navbar