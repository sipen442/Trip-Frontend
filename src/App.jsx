import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing '
import About from './pages/About'
import Contact from './pages/contact'
import Hero from './components/landingComponents/Hero'

const  App = () => {
  return (
    <BrowserRouter>
    <Routes>
<Route path="/" element={<Landing />}/>
<Route path="/About" element={<About />}/>
<Route path="/Contact" element={<Contact/>}/>
<Route path="/Hero" element={<Hero/>}/>


    </Routes>
    </BrowserRouter>
    )
}

export default  App