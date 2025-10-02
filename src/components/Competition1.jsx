import React from 'react'
import ade from '../assets/competitons/ade.png'
import { useOutletContext } from 'react-router-dom'
import { FileBadge, TvMinimalPlay } from 'lucide-react';

function Competition1() {
    const {isLight, setIsLight} = useOutletContext();
 
  return (
    // className={`shadow-lg  border-2 rounded-lg mt-[12px] w-full max-w-[330px] flex flex-col items-center justify-center py-[30px] ${isLight ? "border-gray-100":"border-gray-700"}`}
    <div className=" ">
        <div className={`h-full min-h-[500px] shadow-sm px-[40px] border-2 rounded-lg mt-[12px] w-full max-w-[330px] flex flex-col justify-between py-[30px] gap-[20px] ${isLight ? "border-gray-300":"border-gray-700"}`}>
            <div className="text-center">
                <img className='shadow-sm shadow-gray-500 w-full max-w-[250px] rounded-[5px]' src={ade} alt="" />
            </div>
            <div className="">
                <h1 className={`font-bold my-[8px] text-[14px] cursor-pointer ${isLight ? "hover:underline decoration-black" : "hover:underline decoration-white"}`} onClick={()=> window.open("https://aseandse.org/", "_blank")}>ASEAN DATA SCIENCE EXPLORERS</h1>
                <p className={`text-[14px] font-medium ${isLight ? "text-gray-700": "text-gray-300"}`}>Top10, Finalist</p>
                <p className={`text-[14px] font-medium ${isLight ? "text-gray-700": "text-gray-300"}`}>22, August 2025</p>                
            </div>
            <p className={`text-[12px] ${isLight ? "text-gray-700": "text-gray-300"}`}>Collaborated with a team to analyze real-world datasets, generate insights, and present data-driven solutions.</p>


            {/* <div className=" bg-black text-white"> */}
            <div className="flex flex-wrap justify-between gap-[20px]">
                <div className={`transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 cursor-pointer rounded-md px-[18px] py-[5px] text-[14px] flex flex-row justify-center items-center space-x-[10px] border border-gray-600 ${isLight ? "bg-black text-white hover:text-amber-300": "bg-white text-black hover:text-indigo-600"}`}>
                    <button className='cursor-pointer font-medium' onClick={() => window.open("https://drive.google.com/file/d/1DH39r20vtxsEyh2NSrxKEs5FcUTUDqcL/view?usp=sharing", "_blank")}>
                    Certificate
                    </button>
                    <FileBadge size = "16" />
                </div> 
                <div className={`transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 cursor-pointer rounded-md px-[18px] py-[5px] text-[14px] flex flex-row justify-center items-center space-x-[10px] border border-gray-600 hover:text-lime-500 ${isLight ? "bg-black text-white": "bg-white text-black"}`}>
                    <button className='cursor-pointer font-medium' onClick={() => window.open("https://drive.google.com/file/d/18aTJ2GvgmSUo5v-sD22bVHs8oXXiymMn/view?usp=sharing", "_blank")}>
                    Slide
                    </button>
                    <TvMinimalPlay size = "16" />
                </div>                
            </div>

        </div>
    </div>
  )
}

export default Competition1