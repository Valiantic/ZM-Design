import '../index.css'
import React from 'react'
import Navbar from '../components/NavbarBlock/Navbar'
import Footer from '../components/FooterBlock/Footer'
import Projectheading from '../components/ProjectBlock/Projectheading'

const Projects = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">
    <Projectheading />
        
    </main>
   
  </div>
  )
}

export default Projects
