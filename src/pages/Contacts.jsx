import '../index.css'
import React from 'react'
import Navbar from '../components/NavbarBlock/Navbar'
import Footer from '../components/FooterBlock/Footer'
import ContactForm from '../components/ContactsBlock/ContactForm'

const Contacts = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Render ContactForm here */}
        <ContactForm />
      </main>
      <Footer /> {/* Add Footer component */}
    </div>
  )
}

export default Contacts