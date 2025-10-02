import React from 'react'
import project4 from '../assets/project4.png'
import { useOutletContext } from 'react-router-dom'
import { Github, Youtube, Chromium } from 'lucide-react';

function Project4() {
    const {isLight, setIsLight} = useOutletContext();
 
  return (
    <div className="">
        <div className={`h-full min-h-[450px] shadow-sm px-[40px] border-2 rounded-lg mt-[12px] w-full max-w-[330px] flex flex-col items-start  justify-between py-[30px] ${isLight ? "border-gray-300":"border-gray-700"}`}>
            <div className="text-center">
                <img className='shadow-sm shadow-gray-500 w-full max-w-[250px] rounded-[5px]' src={project4} alt="" />
            </div>
            <h1 className='font-medium my-[8px] '>University Website</h1>
            
            <p className={`text-[10px] ${isLight ? "text-gray-700": "text-gray-300"}`}>
                This is the first website that I have done when trying to learn html Css
            </p>
            <div className="my-[30px] flex flex-wrap gap-[10px]">
                <div className={`font-medium text-[12px]  px-[6px] rounded-[2px] ${isLight ? "bg-gray-200": "bg-gray-700"} `}>
                    HTML
                </div>
                <div className={`font-medium text-[12px]  px-[6px] rounded-[2px] ${isLight ? "bg-gray-200": "bg-gray-700"} `}>
                    CSS
                </div>
            </div>
            {/* <div className=" bg-black text-white"> */}
            <div className="flex flex-wrap gap-[20px]">
                <div className={`transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 cursor-pointer rounded-md px-[18px] py-[5px] text-[14px] flex flex-row justify-center items-center space-x-[10px] border border-gray-600 ${isLight ? "bg-black text-white hover:text-amber-300": "bg-white text-black hover:text-indigo-600"}`}>
                    <button className='cursor-pointer font-medium' onClick={() => window.open("https://github.com/Raby001/First-Website", "_blank")}>
                    Github
                    </button>
                    <Github size = "16" />
                </div>              
            </div>

        </div>
    </div>
  )
}

export default Project4