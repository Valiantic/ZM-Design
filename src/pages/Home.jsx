import { useState } from 'react'
import '../index.css'
import React from 'react'
import Navbar from '../components/NavbarBlock/Navbar'
import Footer from '../components/FooterBlock/Footer'

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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow w-full">
        <div className="w-[90%] mx-auto mt-17 md:mt-17 lg:mt-18 sm:mt-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
              <Profile />
          </div>
        </div>

        <div className="w-[90%] mx-auto mt-4 md:mt-12 lg:mt-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
              <Bio />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home