import { useState } from 'react'
import '../index.css'
import React from 'react'
import Navbar from '../components/NavbarBlock/Navbar'
import Avatar from '../assets/images/me.jpg'
import TypingText from '../components/TypingBlock/TypingText'

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
            
          {/* Text Content - Left Side */}
          <div className="w-full text-white md:w-1/2 order-1 md:order-none mt-8 md:mt-0">
            <h1 className='text-2xl sm:text-xl md:text-4xl'>
              Hi There! <span style={waveAnimation}>👋</span>
              <span className="whitespace-nowrap">I'm Zjer Owric Manalo</span>
            </h1>
            <TypingText />
          </div>

          {/* Avatar - Right Side */}
          <div className="mt-8 md:mt-0 order-0 md:order-none">
            <img 
              src={Avatar} 
              className="rounded-full object-cover w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
              alt="Profile"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  )
}

export default Home