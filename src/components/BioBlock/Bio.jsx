import React from 'react'
import { useEffect } from 'react';
import aos from 'aos';
import 'aos/dist/aos.css';
import MyTeam from '../../assets/images/my_team.png'

const Bio = () => {

 useEffect (() => {
    aos.init({
      duration: 1000,
      offset: 200,
    });
  }, []);

  return (
    <section>
    <div id="about" className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="max-w-8xl">
      <h1 className='text-xl md:text-3xl lg:text-4xl text-white text-bold text-center' data-aos="fade-up">LET ME <span className='text-gray-400 text-bold'>INTRODUCE</span> MYSELF</h1>
      </div>
  
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">

        <div className="relative h-70 overflow-hidden sm:h-85 lg:h-full">
          <img
            alt=""
            src={MyTeam}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
  
        <div className="lg:py-16">
          <article className="space-y-4 text-gray-600">
            <p className='text-white'>
            Are you looking to bring your dream space to life? Look no further!
            </p>

            <p className='text-white'>
            I'm Zjer Owric Manalo, a passionate 3rd-year Civil Engineering student at Rizal Technological University and a skilled freelance CAD operator and interior designer with one year of hands-on experience in the construction industry.
            </p>

          </article>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Bio
