import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-white font-poppins shadow-lg">
      <div className="max-w-screen-xl px-4 py-6 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Email - Left */}
          <div className="flex items-center gap-2 text-gray-700">
            <FaEnvelope className="w-4 h-4" />
            <span className="text-sm">zjerowricm@gmail.com</span>
          </div>

          {/* Copyright - Center */}
          <div className="order-first sm:order-none">
            <p className="text-sm text-center text-gray-600">
              © {new Date().getFullYear()} Zjer Owric. All rights reserved.
            </p>
          </div>

          {/* Phone - Right */}
          <div className="flex items-center gap-2 text-gray-700">
            <FaPhone className="w-4 h-4" />
            <span className="text-sm">09452756283</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
