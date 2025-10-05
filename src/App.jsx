import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './Layout'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Projects from './Pages/Projects'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element = {<Layout/>}>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/contact" element = {<Contact/>} />
          <Route path = "/projects" element = {<Projects/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App