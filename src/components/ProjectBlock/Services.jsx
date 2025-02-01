import React from 'react'
import { useEffect } from 'react';
import aos from 'aos';
import 'aos/dist/aos.css';
import ServicesBg from '../../assets/images/projects/services_bg.png';

const Services = () => {

  useEffect (() => {
      aos.init({
        duration: 1000,
        offset: 200,
      });
    }, []);

  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid bg-white p-4 rounded-lg grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
      <div>
        <div className="max-w-lg md:max-w-none">
          <h2 className="text-4xl font-semibold text-center text-black sm:text-4xl font-['Poppins']" data-aos="fade-up">
            Services <span className='text-amber-500 text-bold font-bold'>Offered</span>
          </h2>

              <p className='text-black text-xl mt-4'>
               Precision <span className='text-amber-500 text-bold'>CAD Drafting</span>: Accurate and detailed CAD drawings tailored to your specifications.
               </p>
               <p className='text-black text-xl mt-4'>
               Creative <span className='text-amber-500 text-bold'>Interior Design</span>: Transform your space with innovative and stylish design solutions.
               </p>
        </div>
      </div>

      <div>
        <img
          src={ServicesBg}
          className="rounded"
          alt=""
        />
      </div>
    </div>
  </div>
</section>
  )
}

export default Services
