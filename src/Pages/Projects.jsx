import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Project1 from '../components/Project1';
import Project2 from '../components/Project2';
import { ArrowUpRight } from 'lucide-react';
import Project3 from '../components/Project3';
import Project4 from '../components/Project4';
import Project5 from '../components/Project5';
import Project6 from '../components/Project6';


function Projects() {
  const {isLight, setIsLight} = useOutletContext();
  return (
    <div className='mt-[100px]'>
      <div className="my-[100px]">
        <div className="flex flex-row justify-between items-center mb-[30px]">
          <h1 className = "text-[32px] md:text-[38px] font-secondary font-black">Project 🫡</h1>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-between gap-[20px]">
          <Project2/>
          <Project6/>
          <Project1/>
          <Project5/>          
          <Project3/>
          <Project4/>
        </div>
      </div>
    </div>
  )
}

export default Projects