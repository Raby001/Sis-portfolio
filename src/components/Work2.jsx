import React from 'react'
import wing from '../assets/wing.png'
import { useOutletContext } from 'react-router-dom'

function Work2() {
  const {isLight, setIsLight} = useOutletContext();
  return (
            <div className={`mb-[10px] px-[30px] pb-[30px] space-y-[30px] w-full `}>
              <div className="flex flex-col sm:flex-row gap-x-[15px] justify-start items-start">
                <div className='flex-shrink-0'> 
                  <img className='h-[70px]' src={wing} alt="" />
                </div>
                <div className={`${isLight ? "text-gray-950":"text-gray-300"}`}>
                  <p className='text-[14px]'>Mar 2024 – Oct 2024</p>
                  <p className={`font-bold ${isLight ? "text-black":"text-white"}`}>Wing Bank</p>
                  <p>MLOps Engineer Apprentice</p>
                  <div className="px-2 mt-[10px]">
                    <ul className='list-disc list-inside'>
                      <li>Analyzed and interpreted data from Wingmall and the Call Center to uncover trends and patterns.</li>
                      <li>Extracted Treasure Hunt data from the Hives database to support cross-functional teams.</li>
                      <li>Conducted monthly updates of analytic tables derived from raw data, ensuring accuracy and relevance for enhanced data analysis and modeling.</li>
                    </ul>
                  </div>
                </div>
                
              </div>
              <hr className={`w-[100%] h-[2px] ${isLight ? " bg-black":" bg-white"}`}/>
            </div>
  )
}

export default Work2