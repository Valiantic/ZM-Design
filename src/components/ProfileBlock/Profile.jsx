import React from 'react'
import Avatar from '../../assets/images/me.jpg'
import BgImage from '../../assets/images/projects/deluxe_living.jpg'
import TypingText from '../TypingBlock/TypingText'

const waveAnimation = {
    animation: 'wave 2s infinite',
    transformOrigin: '70% 70%',
    display: 'inline-block'
}

const Profile = () => {
  return (
    <div className="relative w-full min-h-[500px] rounded-2xl overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${BgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-between p-8">
        {/* Text Content - Left Side */}
        <div className="w-full text-white md:w-1/2 order-1 md:order-none mt-8 md:mt-0 text-center md:text-left">
          <h1 className='text-2xl sm:text-xl md:text-4xl'>
            Hi There! 
            {/* ANIMATION HAND REMOVED */}
            <span style={waveAnimation}></span>
            <span className="whitespace-nowrap">I'm <span className='text-amber-200 text-bold font-bold'>Zjer Owric Manalo</span></span>
          </h1>
          <TypingText />
        </div>
        
        {/* Avatar - Right Side */}
        <div className="mt-8 md:mt-0 order-0 md:order-none">
          <img 
            src={Avatar} 
            className="rounded-full object-cover w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 brightness-80"
            alt="Profile"
          />
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

export default Profile
