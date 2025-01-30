import React from 'react'
import { useEffect } from 'react';
import aos from 'aos';
import 'aos/dist/aos.css';
import ServicesBg from '../../assets/images/projects/services_bg.png';

const Projectheading = () => {

  useEffect (() => {
      aos.init({
        duration: 1000,
        offset: 200,
      });
    }, []);

  return (
    <div className="mx-8 md:mx-8 lg:mx-8">
      <section 
         className="relative w-full min-h-[500px] rounded-2xl overflow-hidden mb-16 mt-18"
         style={{
           backgroundImage: `url(${ServicesBg})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
         }}
       >
         <div className="absolute inset-0 bg-black/70"></div>
         <div id="about" className="relative z-10 w-full h-full px-4 py-4 sm:px-6 sm:py-16 lg:px-8">
        
         <div className="max-w-8xl">
         <h1 className='text-xl md:text-3xl lg:text-4xl text-white text-bold text-center' data-aos="fade-up">SERVICES <span className='text-amber-200 text-bold'>OFFERED</span></h1>
         </div>
     
         <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-1 lg:gap-16">
   
           <div className="lg:py-4">
             <article className="space-y-8 text-amber-200">
   
               <p className='text-white text-4xl'>
               Precision <span className='text-amber-200 text-bold'>CAD Drafting</span>: Accurate and detailed CAD drawings tailored to your specifications.
               </p>
               <p className='text-white text-4xl'>
               Creative <span className='text-amber-200 text-bold'>Interior Design</span>: Transform your space with innovative and stylish design solutions.
               </p>
   
             </article>
           </div>
   
         </div>
   
       </div>
     </section>
    </div>
  )
}

export default Projectheading
