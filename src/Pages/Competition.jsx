import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Competition1 from '../components/Competition1'
import Competition2 from '../components/Competition2';
import Competition3 from '../components/Competition3';

function Competition() {
  const {isLight, setIsLight} = useOutletContext();
  return (
    <div className='mt-[100px]'>
      <div className="my-[100px]">
        <div className="flex flex-row justify-between items-center mb-[30px]">
          <h1 className = "text-[32px] md:text-[38px] font-secondary font-black">Competition & Certificate </h1>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-between gap-[20px]">
          <Competition1/>
          <Competition2/>
          <Competition3/>

        </div>
      </div>
    </div>
  )
}

export default Competition