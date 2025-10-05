import React, { useState } from 'react'
import profile1 from '../assets/profile1.jpg'

import {FileDown, Github, Mail, Linkedin, ArrowUpRight} from 'lucide-react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import Project6 from '../components/Project6'
import Project1 from '../components/Project1'
import School1 from '../components/School1'
import School2 from '../components/School2'
import School3 from '../components/School3'
import Work1 from '../components/Work1'
import Work2 from '../components/Work2'
import Skill from '../components/Skill'

function Home() {
  const {isLight, setIsLight} = useOutletContext();
  const [isLeft, setIsLeft] = useState(true);
  const navigate = useNavigate();


  return (
  <>
    <div className='mt-[100px] flex flex-col sm:flex-row justify-between items-center space-x-[30px]'>

      <div className="block sm:hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 ">
        <img className='rounded-xl max-h-[220px] w-auto' src={profile1} alt="" />
      </div>

      <div className="w-[50vw] md:w-auto">
        <h1 className = "text-[24px] mt-[20px] sm:mt-0 sm:text-[32px] md:text-[44px] font-secondary font-black">This is Chandeth 👋</h1>
        <div className="flex flex-row justify-center font-secondary text-[12px] sm:text-[18px]">
          <p className='font-light text-[12px] sm:text-[16px]'>A detail-oriented professional with a Master's in Data Science and a Bachelor's in Statistics, currently a System Integration and Support Engineer.</p>
        </div>
        <p className='text-[12px] sm:text-[16px] mt-10 font-bold font-secondary'>Aspiring Data Scientist / Data Analyst</p>
        
        <p className='mt-4 text-[12px] sm:text-[14px]'>For Q&A, Just Contact Me for an Interview 🤣</p>
        <div className=" mt-10 flex md:flex-row  items-center justify-start flex-col gap-[30px]">
          <div className={`cursor-pointer rounded-md px-[18px] py-[5px] text-[14px] flex flex-row justify-center items-center space-x-[10px] border border-gray-600 ${isLight?"hover:text-indigo-600":"hover:text-amber-300"} `}>
            <button className='cursor-pointer font-medium' onClick={() => window.open("https://drive.google.com/file/d/1eKTJgNmb8Ijxj25l7CflxXZJtCy2xMX3/view?usp=drivesdk", "_blank")}>
              My CV
            </button>
            <FileDown size = "16" />
            
          </div> 
          <div className="">
            <div className="flex flex-row justify-center space-x-2 sm:space-x-4">
              <a href='https://github.com/Chandeth-H?tab=repositories' target="_blank"  rel="noopener noreferrer" className={`cursor-pointer ${isLight?"hover:text-indigo-600":"hover:text-amber-300"}`}>
                <Github size = "20"/>
              </a>
              <a onClick ={() => navigate("/contact")} className={`cursor-pointer ${isLight ? "hover:text-indigo-600" : "hover:text-amber-300"}`}>
                <Mail size={20} />
              </a>

              <a href="https://www.linkedin.com/in/chandeth-han-9ab6ab24b/" target="_blank" rel="noopener noreferrer" className={`cursor-pointer ${isLight?"hover:text-indigo-600":"hover:text-amber-300"}`}>
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
          <div className="flex flex-col items-start">
            <School1/>
            <School2/>
            <School3/>
          </div>
        )}  
        {isLeft && (
          <div className="flex flex-col items-start">
            <Work1/>
            <Work2/>
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
        <h1 className = "text-[32px] md:text-[38px] font-secondary font-black">Personal Project 🫡</h1>
        <div onClick={() => navigate("/projects")} className="hover:text-indigo-400 cursor-pointer font-secondary font-medium flex flex-row justify-between items-center space-x-1.5">
          <p>View more</p> 
          <ArrowUpRight />
        </div>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-between ">
        <Project6/>
        <Project1/>
      </div>
    </div>

  </>
  )
}

export default Home