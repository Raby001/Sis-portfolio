import React from 'react'
import {FileDown, Github, Mail, Linkedin, Youtube, Chromium, ArrowUpRight} from 'lucide-react'
import itc from '../assets/itc.png'
import { useOutletContext } from 'react-router-dom'

function School1() {
  const {isLight, setIsLight} = useOutletContext();
  return (
            <div className={`mb-[10px] px-[30px] py-[30px] space-y-[30px]`}>
              <div className="flex flex-col sm:flex-row space-x-[15px]">
                <div className=""> 
                  <img className='h-[60px]' src={itc} alt="" />
                </div>
                <div className={`${isLight ? "text-gray-950":"text-gray-300"}`}>
                  <p className='text-[14px]'>Jan 2022 - Sep 2027</p>
                  <p className={`font-bold ${isLight ? "text-black":"text-white"}`}>Institute of Technology of Cambodia (ITC)</p>
                  <p>Bachelor's Degree in Génie Informatique et Communication (GIC)</p>
                  <div className="px-2">
                    <ul className='list-disc list-inside'>
                      <li>1 month volunteer in sharing knowledge to juniors </li>
                      <li>Maintance 3.5 GPA for 3 year</li>
                    </ul>
                  </div>
                  <div className="mt-[14px] flex flex-col sm:flex-row justify-start items-start gap-[10px]">
                    <div className="rounded-md px-[18px] py-[5px] text-[14px] flex flex-row justify-center items-center space-x-[10px] border border-gray-600 ">
                      <p className={`font-bold text-center ${isLight ? "text-black":"text-white"}`}>Y3S1 Project</p>
                      <button className='cursor-pointer font-medium hover:text-amber-300' onClick={() => window.open("https://github.com/Raby001/Coffee-Management-System-Project", "_blank")}>
                         <Github size = "16"/>
                      </button>
                      <button className='cursor-pointer font-medium hover:text-red-500' onClick={() => window.open("https://youtu.be/MIZ76H0B6gs", "_blank")}>
                        <Youtube size = "16" />
                      </button>
                    </div>
                    <div className="rounded-md px-[18px] py-[5px] text-[14px] flex flex-row justify-center items-center space-x-[10px] border border-gray-600 ">
                      <p className={`font-bold text-center ${isLight ? "text-black":"text-white"}`}>Y3S2 Project</p>
                      <button className='cursor-pointer font-medium hover:text-amber-300' onClick={() => window.open("https://github.com/Raby001/TRADETree", "_blank")}>
                         <Github size = "16"/>
                      </button>
                      <button className='cursor-pointer font-medium hover:text-red-500' onClick={() => window.open("https://youtu.be/u5Y5O0CXd_8", "_blank")}>
                        <Youtube size = "16" />
                      </button>
                      <button className='cursor-pointer font-medium hover:text-green-600' onClick={() => window.open("https://tradetree.netlify.app/", "_blank")}>
                        <Chromium size = "16" />
                      </button>
                    </div>  
                  </div>
                </div>
              </div>
              <hr className={`h-[2px] font-bold ${isLight ? " bg-black":" bg-white"}`}/>
            </div>
  )
}

export default School1