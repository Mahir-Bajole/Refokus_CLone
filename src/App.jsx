import React from 'react'
import Navbar from './Componants/Navbar'
import Work from './Componants/Work'
import Stripes from './Componants/Stripes'
import Products from './Componants/Products'
import Cards from './Componants/Cards'
import Footer from './Componants/Footer'
import { motion } from "motion/react"

import MArqueess from './MArqueess'
import LocomotiveScroll from 'locomotive-scroll';




function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className=' bg-[#000000]'>
    <Navbar/>
    <Work/>
    <Stripes/>
    <Products/>
    <MArqueess/>
    <Cards/>
    <Footer/>
    
      
    </div>
  )
}

export default App
