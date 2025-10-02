import React from 'react'
import { useOutletContext } from 'react-router-dom'
import c from "../assets/skills/c.png"
import cplusplus from "../assets/skills/cplusplus.png"
import java from "../assets/skills/java.png"
import javascript from "../assets/skills/javascript.png"
import html from "../assets/skills/html.png"
import css from "../assets/skills/css.png"
import react from "../assets/skills/react.png"
import express from "../assets/skills/express.png"
import tailwind from "../assets/skills/tailwind.png"
import mongodb from "../assets/skills/mongodb.png"
import mysql from "../assets/skills/mysql.png"
import vscode from "../assets/skills/vscode.png"
import nodejs from "../assets/skills/nodejs.png"
import postman from "../assets/skills/postman.png"
import github from "../assets/skills/github.png"
import netlify from "../assets/skills/netlify.png"
import api from "../assets/skills/api.png"

function Skill() {
  const {isLight, setIsLight} = useOutletContext();

  return (
      <div className="flex flex-wrap justify-between gap-4">

        <div className={`shadow-sm h-full min-h-[300px] px-[40px] border-2 rounded-lg mt-[12px] w-full max-w-[330px] flex flex-col items-center py-[30px] ${isLight ? "border-gray-300":"border-gray-700"}`}>
          <div className="text-[20px] font-bold font-secondary">
            Frontend
            <hr className={`w-full h-[2px] mt-2 mb-4 ${isLight ? "bg-black" : "bg-white"}`} />
          </div>

          <div className="mt-[12px] flex flex-row gap-[20px] flex-wrap justify-between">
            <div className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
              <img className='h-[56px]' src={html} alt="" />
              <h1>HTML</h1>
            </div>
            <div className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
              <img className='h-[56px]' src={css} alt="" />
              <h1>CSS</h1>
            </div>
            <div className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
              <img className='h-[56px]' src={javascript} alt="" />
              <h1>Javascript</h1>
            </div>
            <div className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
              <img className='h-[56px]' src={react} alt="" />
              <h1>ReactJS</h1>
            </div>
            <div className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
              <img className='h-[56px]' src={tailwind} alt="" />
              <h1>TailwindCSS</h1>
            </div>
          </div>
        </div>

        <div className={`h-full min-h-[300px] shadow-sm px-[40px] border-2 rounded-lg mt-[12px] w-full max-w-[330px] flex flex-col items-center py-[30px] ${isLight ? "border-gray-300":"border-gray-700"}`}>
          <div className="text-[20px] font-bold font-secondary">
            Backend
            <hr className={`w-full h-[2px] mt-2 mb-4 ${isLight ? "bg-black" : "bg-white"}`} />
          </div>

          <div className="mt-[12px] flex flex-row gap-[20px] flex-wrap justify-between">
            <div className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
              <img className='h-[56px]' src={nodejs} alt="" />
              <h1>NodeJS</h1>
            </div>
            <div className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
              <img className='h-[56px]' src={express} alt="" />
              <h1>ExpressJS</h1>
            </div>
            <div className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
              <img className='h-[56px]' src={api} alt="" />
              <h1>Rest APIs</h1>
            </div>
          </div>
        </div>


        <div className={`h-full min-h-[300px] shadow-sm px-[40px] border-2 rounded-lg mt-[12px] w-full max-w-[330px] flex flex-col items-center py-[30px] ${isLight ? "border-gray-300":"border-gray-700"}`}>
          <div className="text-[20px] font-bold font-secondary">
            Database 
            <hr className={`w-full h-[2px] mt-2 mb-4 ${isLight ? "bg-black" : "bg-white"}`} />
          </div>

          <div className="mt-[12px] flex flex-row gap-[20px] flex-wrap justify-between">
            <div className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
              <img className='h-[56px]' src={mysql} alt="" />
              <h1>MySQL</h1>
            </div>
            <div className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
              <img className='h-[56px]' src={mongodb} alt="" />
              <h1>MongoDB</h1>
            </div>
          </div>
        </div>

        <div className={`shadow-sm h-full min-h-[300px] px-[40px] border-2 rounded-lg mt-[12px] w-full max-w-[330px] flex flex-col items-center py-[30px] ${isLight ? "border-gray-300":"border-gray-700"}`}>
          <div className="text-[20px] font-bold font-secondary">
            Programming Languages
            <hr className={`w-full h-[2px] mt-2 mb-4 ${isLight ? "bg-black" : "bg-white"}`} />
          </div>

          <div className="mt-[12px] flex flex-row gap-[20px] flex-wrap justify-between">
            <div className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
              <img className='h-[56px]' src={c} alt="" />
              <h1>C</h1>
            </div>
            <div className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
              <img className='h-[56px]' src={cplusplus} alt="" />
              <h1>C++</h1>
            </div>
            <div className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
              <img className='h-[56px]' src={java} alt="" />
              <h1>Java</h1>
            </div>

          </div>
        </div>

        <div className={`shadow-sm h-full min-h-[300px] px-[40px] border-2 rounded-lg mt-[12px] w-full max-w-[330px] flex flex-col items-center py-[30px] ${isLight ? "border-gray-300":"border-gray-700"}`}>
          <div className="text-[20px] font-bold font-secondary">
            Development Tools
            <hr className={`w-full h-[2px] mt-2 mb-4 ${isLight ? "bg-black" : "bg-white"}`} />
          </div>

          <div className="mt-[12px] flex flex-row gap-[20px] flex-wrap justify-between">
            <div className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
              <img className='h-[56px]' src={github} alt="" />
              <h1>GitHub</h1>
            </div>
            <div className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
              <img className='h-[56px]' src={vscode} alt="" />
              <h1>VS Code</h1>
            </div>
            <div className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
              <img className='h-[56px]' src={netlify} alt="" />
              <h1>Netlify</h1>
            </div>
            <div className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
              <img className='h-[56px]' src={postman} alt="" />
              <h1>Postman</h1>
            </div>

          </div>
        </div>

      </div>
  )
}

export default Skill