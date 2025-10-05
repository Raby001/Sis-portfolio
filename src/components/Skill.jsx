import React from 'react'
import { useOutletContext } from 'react-router-dom'
import sql from "../assets/skills/sql.png"
import python from "../assets/skills/python.png"
import jupyter from "../assets/skills/jupyter.png"
import hive from "../assets/skills/hive.png"
import oracle from "../assets/skills/oracle.png"
import kibana from "../assets/skills/kibana.png"
import vscode from "../assets/skills/vscode.png"
import powerbi from "../assets/skills/powerbi.png"
import excel from "../assets/skills/excel.png"

function Skill() {
  const {isLight, setIsLight} = useOutletContext();

  return (
      <div className="flex flex-wrap justify-between gap-4">

        <div className={`shadow-sm h-full min-h-[320px] px-[40px] border-2 rounded-lg mt-[12px] w-full max-w-[330px] flex flex-col items-center py-[30px] ${isLight ? "border-gray-300":"border-gray-700"}`}>
          <div className="text-[20px] font-bold font-secondary">
            Programming Languages
            <hr className={`w-full h-[2px] mt-2 mb-4 ${isLight ? "bg-black" : "bg-white"}`} />
          </div>

          <div className="mt-[12px] flex flex-row gap-[20px] flex-wrap justify-between">
            <div className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
              <img className='h-[56px]' src={python} alt="" />
              <h1>Python</h1>
            </div>
            <div className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
              <img className='h-[56px]' src={sql} alt="" />
              <h1>SQL</h1>
            </div>
          </div>
        </div>

        <div className={`h-full min-h-[320px] shadow-sm px-[40px] border-2 rounded-lg mt-[12px] w-full max-w-[330px] flex flex-col items-center py-[30px] ${isLight ? "border-gray-300":"border-gray-700"}`}>
          <div className="text-[20px] font-bold font-secondary">
            Platforms
            <hr className={`w-full h-[2px] mt-2 mb-4 ${isLight ? "bg-black" : "bg-white"}`} />
          </div>

          <div className="mt-[12px] flex flex-row gap-[20px] flex-wrap justify-between">
            <div className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
              <img className='h-[56px]' src={jupyter} alt="" />
              <h1>Jupyter</h1>
            </div>
            <div className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
              <img className='h-[56px]' src={vscode} alt="" />
              <h1>VS Code</h1>
            </div>
            <div className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
              <img className='h-[56px]' src={oracle} alt="" />
              <h1>Oracle</h1>
            </div>
            <div className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
              <img className='h-[56px]' src={kibana} alt="" />
              <h1>Kibana</h1>
            </div>
            <div className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
              <img className='h-[56px]' src={hive} alt="" />
              <h1>Hive</h1>
            </div>
          </div>
        </div>

        <div className={`h-full min-h-[320px] shadow-sm px-[40px] border-2 rounded-lg mt-[12px] w-full max-w-[330px] flex flex-col items-center py-[30px] ${isLight ? "border-gray-300":"border-gray-700"}`}>
          <div className="text-[20px] font-bold font-secondary">
            Tools
            <hr className={`w-full h-[2px] mt-2 mb-4 ${isLight ? "bg-black" : "bg-white"}`} />
          </div>

          <div className="mt-[12px] flex flex-row gap-[20px] flex-wrap justify-between">
            <div className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
              <img className='h-[56px]' src={powerbi} alt="" />
              <h1>Power BI</h1>
            </div>
            <div className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
              <img className='h-[56px]' src={excel} alt="" />
              <h1>Excel</h1>
            </div>
          </div>
        </div>

      </div>
  )
}

export default Skill