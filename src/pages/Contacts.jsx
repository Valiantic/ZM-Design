import '../index.css'
import React from 'react'
import Navbar from '../components/NavbarBlock/Navbar'
import Footer from '../components/FooterBlock/Footer'
import ContactForm from '../components/ContactsBlock/ContactForm'

const Contacts = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="flex-grow w-full pt-16">
        {/* Render ContactForm here */}
        <ContactForm />
          <Footer /> {/* Add Footer component */}
      </main>
    
    </div>
  )
}

export default Contacts