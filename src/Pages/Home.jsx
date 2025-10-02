import React, { useState } from 'react'
import profile1 from '../assets/profile1.png'
import itc from '../assets/itc.png'
import western from '../assets/western.png'
import nothing from '../assets/nothing.png'

import {FileDown, Github, Mail, Linkedin, Youtube, Chromium, ArrowUpRight} from 'lucide-react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import Project6 from '../components/Project6'
import Project2 from '../components/Project2'
import School1 from '../components/School1'
import School2 from '../components/School2'
import Skill from '../components/Skill'

function Home() {
  const {isLight, setIsLight} = useOutletContext();
  const [isLeft, setIsLeft] = useState(false);
  const navigate = useNavigate();


  return (
  <>
    <div className='mt-[100px] flex flex-col sm:flex-row justify-between items-center space-x-[30px]'>

      <div className="block sm:hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 ">
        <img className='rounded-xl max-h-[220px] w-auto' src={profile1} alt="" />
      </div>

      <div className="w-[50vw] md:w-auto">
        <h1 className = "text-[24px] mt-[20px] sm:mt-0 sm:text-[32px] md:text-[44px] font-secondary font-black">Raby is here👋 </h1>
        <div className="flex flex-row justify-center font-secondary text-[12px] sm:text-[18px]">
          <div className="flex flex-row justify-center font-black">
            <p>4</p>
            <p className='text-[12px] sm:text-[16px]'>th</p>            
          </div>
          <p className='pl-2'>years student from Institute of Technology of Cambodia <span className='font-black'>(ITC)</span> </p>
        </div>
        <p className='text-[12px] sm:text-[14px] mt-10 font-bold font-secondary'>A Computer Science Student | Aspiring Full Stack Developer</p>
        
        <p className='mt-4 text-[12px] sm:text-[14px]'>For Q&A, Just Call Me for Interview 🤣</p>
        <div className=" mt-10 flex md:flex-row  items-center justify-start flex-col gap-[30px]">
          <div className={`cursor-pointer rounded-md px-[18px] py-[5px] text-[14px] flex flex-row justify-center items-center space-x-[10px] border border-gray-600 ${isLight?"hover:text-indigo-600":"hover:text-amber-300"} `}>
            <button className='cursor-pointer font-medium' onClick={() => window.open("https://drive.google.com/file/d/1iUv6ZCv0PsKjnkXrgbXI1Qukfvu6D-g1/view?usp=sharing", "_blank")}>
              Resume
            </button>
            <FileDown size = "16" />
            
          </div> 
          <div className="">
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
        </div>
      </div>
      <div className="w-[23vw] flex flex-row justify-end">
        <div className="hidden sm:block transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 ">
          <img className='rounded-xl max-h-[220px] w-auto' src={profile1} alt="" />
        </div>
      </div>
    </div>

    <div className={`mt-[100px]  rounded-lg ${isLight ? "bg-gray-200": "bg-gray-800"}`}>
      <div className="flex flex-row justify-center items-center  p-[4px]">
        <div onClick={() => setIsLeft(true)} className={`w-[50vw] rounded-lg py-[3px] text-center font-bold cursor-pointer transition-colors duration-100 
                  ${isLight ? (isLeft ? "bg-white text-black":"bg-gray-200 text-gray-500"):(isLeft ?"bg-black text-white": "bg-gray-800 text-gray-400")} `}>Work</div>
        <div onClick={() => setIsLeft(false)} className={`w-[50vw] rounded-lg py-[3px] text-center font-bold cursor-pointer transition-colors duration-100
                  ${isLight? (!isLeft ?"bg-white text-black":"bg-gray-200 text-gray-500"):(!isLeft ?"bg-black text-white": "bg-gray-800 text-gray-400")}`}>Education</div>        
      </div>
    </div>

    <div className={`shadow-lg  border-2 rounded-lg mt-[12px] ${isLight ? "border-gray-300":"border-gray-700"}`}>
      <div className="">
        {!isLeft && (
          <div className="flex flex-col">
            <School1/>
            <School2/>
          </div>
        )}  
        {isLeft && (
          <div className="flex flex-col">
            {/* school 1 */}
            <div className={`mb-[10px] px-[30px] py-[30px] space-y-[30px]`}>
              <div className="flex flex-col justify-center items-center sm:flex-row space-x-[15px]">
                <div className=""> 
                  <img className='h-[60px]' src={nothing} alt="" />
                </div>
                <div className={`${isLight ? "text-gray-950":"text-gray-300"}`}>
                  <p className={`font-bold ${isLight ? "text-black":"text-white"}`}>Unfortunately, I don't have work experience yet</p>
                </div>
              </div>
              <hr className={`h-[2px] font-bold ${isLight ? " bg-black":" bg-white"}`}/>
            </div>
          </div>
        )} 
      </div>
    </div>

    {/* Skill  */}
    <div className="my-[100px]">
      <div className="flex flex-row justify-between items-center mb-[30px]">
        <h1 className = "text-[32px] md:text-[38px] font-secondary font-black">Skills </h1>
      </div>
        <Skill/>
    </div>



    {/* Project  */}
    <div className="my-[100px]">
      <div className="flex flex-row justify-between items-center mb-[30px]">
        <h1 className = "text-[32px] md:text-[38px] font-secondary font-black">Project 🫡</h1>
        <div onClick={() => navigate("/projects")} className="hover:text-indigo-400 cursor-pointer font-secondary font-medium flex flex-row justify-between items-center space-x-1.5">
          <p>View more</p> 
          <ArrowUpRight />
        </div>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-between ">
        <Project6/>
        <Project2/>
      </div>
    </div>

  </>
  )
}

export default Home