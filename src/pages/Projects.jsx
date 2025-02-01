import '../index.css'
import React from 'react'
import Navbar from '../components/NavbarBlock/Navbar'
import Footer from '../components/FooterBlock/Footer'
import ImageCarousel from '../components/ProjectBlock/ImageCarousel'
import Services from '../components/ProjectBlock/Services'

const Projects = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">
    <ImageCarousel />
        
    </main>
    <Services />
    <Footer />
  </div>
  )
}

export default Projects
