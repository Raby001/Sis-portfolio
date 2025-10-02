import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function Layout() {
  const [isLight, setIsLight] = useState(false);
  return (
    <div className={`flex flex-col justify-center items-center px-[20px] md:px-0 ${isLight ? "bg-white text-black" : "bg-gray-950 text-white"}`}>
      <div className = "min-h-[100vh] w-full max-w-[700px]">
          <Navbar isLight = {isLight} setIsLight = {setIsLight}/>
          <main>
              <Outlet context = {{ isLight, setIsLight }}/>
          </main>
          <Footer isLight = {isLight} setIsLight = {setIsLight}/>
      </div>      
    </div>

  )
}

export default Layout