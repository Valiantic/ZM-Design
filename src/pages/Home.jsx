import { useState } from 'react'
import '../index.css'
import React from 'react'
import Navbar from '../components/NavbarBlock/Navbar'

// BLOCKS
import Profile from '../components/ProfileBlock/Profile'
import Bio from '../components/BioBlock/Bio'

const waveAnimation = {
  animation: 'wave 2s infinite',
  transformOrigin: '70% 70%',
  display: 'inline-block'
}

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-8 min-h-screen mt-16 md:mt-24 lg:mt-32">

        <div className="flex flex-col md:flex-row items-center justify-between">
            <Profile />
        </div>

      </div>

      <div className="container mx-auto px-8 min-h-screen mt-8 md:mt-12 lg:mt-16">

        <div className="flex flex-col md:flex-row items-center justify-between">
            <Bio />
        </div>
        
      </div>

  
    </div>
  )
}

export default Home