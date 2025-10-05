import React from 'react'
import {FileDown, Github, Mail, Linkedin, Youtube, Chromium, ArrowUpRight} from 'lucide-react'
import ifl from '../assets/ifl.png'
import { useOutletContext } from 'react-router-dom'

function School2() {
  const {isLight, setIsLight} = useOutletContext();
  return (
            <div className={`mb-[10px] px-[30px] pb-[30px] space-y-[30px] w-full `}>
              <div className="flex flex-col sm:flex-row gap-x-[15px] justify-start items-start">
                <div className='flex-shrink-0 '> 
                  <img className='h-[70px]' src={ifl} alt="" />
                </div>
                <div className={`${isLight ? "text-gray-950":"text-gray-300"}`}>
                  <p className='text-[14px]'>Nov 2018 - Jul 2022</p>
                  <p className={`font-bold ${isLight ? "text-black":"text-white"}`}>Institute of Foreign Languages (IFL)</p>
                  <p>Bachelor Degree of Arts in English for Translation and Interpreting</p>
                </div>
              </div>
              <hr className={`w-[100%] h-[2px] ${isLight ? " bg-black":" bg-white"}`}/>
            </div>
  )
}

export default School2