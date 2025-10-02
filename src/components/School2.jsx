import React from 'react'
import {FileDown, Github, Mail, Linkedin, Youtube, Chromium, ArrowUpRight} from 'lucide-react'
import western from '../assets/western.png'
import { useOutletContext } from 'react-router-dom'

function School2() {
  const {isLight, setIsLight} = useOutletContext();
  return (
            <div className={`mb-[10px] px-[30px] pb-[30px] space-y-[30px]`}>
              <div className="flex flex-col sm:flex-row space-x-[15px]">
                <div className=""> 
                  <img className='h-[60px]' src={western} alt="" />
                </div>
                <div className={`${isLight ? "text-gray-950":"text-gray-300"}`}>
                  <p className='text-[14px]'>Feb 2022 - Sep 2026</p>
                  <p className={`font-bold ${isLight ? "text-black":"text-white"}`}>Western University (WU)</p>
                  <p>Bachelor's Degree in English for Communication (EC)</p>
                  <div className="px-2">
                    <ul className='list-disc list-inside'>
                      <li>Have a research in: The Impact of Social Media on College Student's Mental Health </li>
                      <li>Maintance &lt;3 GPA for 3 year</li>
                    </ul>
                  </div>
                  <div className="mt-[14px] flex flex-row justify-start space-x-[10px]">

                    <div className="cursor-pointer rounded-md hover:text-indigo-600 px-[18px] py-[5px] text-[14px] flex flex-row justify-center items-center space-x-[10px] border border-gray-600 ">
                    
                      <button className={`font-bold ${isLight ? " text-black":"text-white"}`}  onClick={() => window.open("https://drive.google.com/file/d/1fVnEg4cOr92JOeVCPHMSJg_cl_Mokh6_/view?usp=sharing", "_blank")}>
                        Research
                      </button>
                      <FileDown size = "16" />
                      
                    </div> 
                  </div>
                </div>
              </div>
              <hr className={`h-[2px] font-bold ${isLight ? " bg-black":" bg-white"}`}/>
            </div>
  )
}

export default School2