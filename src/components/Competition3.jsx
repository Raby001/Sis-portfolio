import React from 'react'
import gic from '../assets/competitons/gic.png'
import { useOutletContext } from 'react-router-dom'
import { FileBadge, TvMinimalPlay, Camera } from 'lucide-react';

function Competition3() {
    const {isLight, setIsLight} = useOutletContext();
 
  return (
    // className={`shadow-lg  border-2 rounded-lg mt-[12px] w-full max-w-[330px] flex flex-col items-center justify-center py-[30px] ${isLight ? "border-gray-100":"border-gray-700"}`}
    <div className=" ">
        <div className={`h-full min-h-[500px] shadow-sm px-[40px] border-2 rounded-lg mt-[12px] w-full max-w-[330px] flex flex-col justify-between py-[30px] gap-[20px] ${isLight ? "border-gray-300":"border-gray-700"}`}>
            <div className="text-center">
                <img className='shadow-sm shadow-gray-500 w-full max-w-[250px] rounded-[5px]' src={gic} alt="" />
            </div>
            <div className="">
                <h1 className={`font-bold my-[8px] text-[14px] cursor-pointer ${isLight ? "hover:underline decoration-black" : "hover:underline decoration-white"}`} onClick={()=> window.open("https://www.facebook.com/share/p/16FqqCSAeu/", "_blank")}>A Senior Volunteer Mentor</h1>
                <p className={`text-[14px] font-medium ${isLight ? "text-gray-700": "text-gray-300"}`}>Fundamental of Database</p>
                <p className={`text-[14px] font-medium ${isLight ? "text-gray-700": "text-gray-300"}`}>01, September - 02, October 2025</p>                
            </div>
            <p className={`text-[12px] ${isLight ? "text-gray-700": "text-gray-300"}`}>It is about guiding junior students in the Fundamental of Database and helping them learn and grow.</p>


            <div className="flex flex-wrap gap-[20px]">
                <div className={` transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 cursor-pointer rounded-md px-[18px] py-[5px] text-[14px] flex flex-row justify-center items-center space-x-[10px] border border-gray-600 ${isLight ? "bg-black text-white hover:text-amber-300": "bg-white text-black hover:text-indigo-600"}`}>
                    <button className='cursor-pointer font-medium' onClick={() => window.open("https://drive.google.com/file/d/1lF_tPdqYB_N06qVpFcjdnesT2s10WV-9/view?usp=sharing", "_blank")}>
                    Certificate
                    </button>
                    <FileBadge size = "16" />
                </div> 
                <div className={` transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 cursor-pointer rounded-md px-[18px] py-[5px] text-[14px] flex flex-row justify-center items-center space-x-[10px] border border-gray-600 ${isLight ? "bg-black text-white hover:text-amber-300": "bg-white text-black hover:text-indigo-600"}`}>
                    <button className='cursor-pointer font-medium' onClick={() => window.open("https://photos.app.goo.gl/qZXkLA3n41dK8NBL8", "_blank")}>
                    Images
                    </button>
                    <Camera size = "16" />
                </div>           
            </div>

        </div>
    </div>
  )
}

export default Competition3