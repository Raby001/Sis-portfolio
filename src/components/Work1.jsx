import React from 'react'
import wing from '../assets/wing.png'
import { useOutletContext } from 'react-router-dom'

function Work1() {
  const {isLight, setIsLight} = useOutletContext();
  return (
            <div className={`mb-[10px] px-[30px] py-[30px] space-y-[30px] w-full `}>
              <div className="flex flex-col sm:flex-row gap-x-[15px] justify-start items-start">
                <div className='flex-shrink-0'> 
                  <img className='h-[70px]' src={wing} alt="" />
                </div>
                <div className={`${isLight ? "text-gray-950":"text-gray-300"}`}>
                  <p className='text-[14px]'>Nov 2024 – Present</p>
                  <p className={`font-bold ${isLight ? "text-black":"text-white"}`}>Wing Bank</p>
                  <p>System Integration and Support Engineer</p>
                  <div className="px-2 mt-[10px]">
                    <ul className='list-disc list-inside'>
                      <li>Collaborated with various related teams to identify and address the root causes of customerreported issues, providing effective technical solutions to enhance user satisfaction.</li>
                      <li>Maintained daily reports on phone top-up transaction failures.</li>
                      <li>Extracted and analyzed failed transaction data from Kibana logs.</li>
                    </ul>
                  </div>
                </div>
                
              </div>
              <hr className={`w-[100%] h-[2px] ${isLight ? " bg-black":" bg-white"}`}/>
            </div>
  )
}

export default Work1