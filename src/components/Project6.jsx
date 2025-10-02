import React from 'react'
import project6 from '../assets/project6.png'
import { useOutletContext } from 'react-router-dom'
import { Github, Youtube, Chromium } from 'lucide-react';

function Project6() {
    const {isLight, setIsLight} = useOutletContext();
 
  return (
    // className={`shadow-lg  border-2 rounded-lg mt-[12px] w-full max-w-[330px] flex flex-col items-center justify-center py-[30px] ${isLight ? "border-gray-100":"border-gray-700"}`}
    <div className="">
        <div className={`h-full min-h-[450px] shadow-sm px-[40px] border-2 rounded-lg mt-[12px] w-full max-w-[330px] flex flex-col items-start justify-between py-[30px] ${isLight ? "border-gray-300":"border-gray-700"}`}>
            <div className="text-center">
                <img className='shadow-sm shadow-gray-500 w-full max-w-[250px] rounded-[5px]' src={project6} alt="" />
            </div>
            <h1 className='font-medium my-[8px] '>Personal Portfolio (New Version)</h1>
            
            <p className={`text-[10px] ${isLight ? "text-gray-700": "text-gray-300"}`}>
                This Portfolio was built to show about the detail information that relate to me
            </p>
            <div className="my-[30px] flex flex-wrap gap-[10px]">
                <div className={`font-medium text-[12px]  px-[6px] rounded-[2px] ${isLight ? "bg-gray-200": "bg-gray-700"} `}>
                    ReactJS
                </div>
                <div className={`font-medium text-[12px]  px-[6px] rounded-[2px] ${isLight ? "bg-gray-200": "bg-gray-700"} `}>
                    Tailwind Css
                </div>
                <div className={`font-medium text-[12px]  px-[6px] rounded-[2px] ${isLight ? "bg-gray-200": "bg-gray-700"} `}>
                    EmailJS
                </div>
            </div>
            {/* <div className=" bg-black text-white"> */}
            <div className="flex flex-wrap gap-[20px]">
                <div className={`transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 cursor-pointer rounded-md px-[18px] py-[5px] text-[14px] flex flex-row justify-center items-center space-x-[10px] border border-gray-600 ${isLight ? "bg-black text-white hover:text-amber-300": "bg-white text-black hover:text-indigo-600"}`}>
                    <button className='cursor-pointer font-medium' onClick={() => window.open("https://github.com/Raby001/TRADETree", "_blank")}>
                    Github
                    </button>
                    <Github size = "16" />
                </div> 
                <div className={`transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 cursor-pointer rounded-md px-[18px] py-[5px] text-[14px] flex flex-row justify-center items-center space-x-[10px] border border-gray-600 hover:text-green-500 ${isLight ? "bg-black text-white": "bg-white text-black"}`}>
                    <button className='cursor-pointer font-medium' onClick={(e) => setIsLight(!isLight)}>
                    Website
                    </button>
                    <Chromium size = "16" />
                </div>              
            </div>

        </div>
    </div>
  )
}

export default Project6