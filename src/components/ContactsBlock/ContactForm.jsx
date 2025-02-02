import { useState } from 'react';
import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import AestheticKitchen from '../../assets/images/projects/aesthetic_kitchen.png'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasErrors = false;
    const newErrors = { ...errors };

    // Validate fields
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key] = true;
        hasErrors = true;
      } else {
        newErrors[key] = false;
      }
    });

    setErrors(newErrors);

    if (!hasErrors) {
      // Submit form logic here
      console.log('Form submitted:', formData);
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: false }));
  };

  return (
    <section 
      className="bg-gray-100 rounded-lg mt-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${AestheticKitchen})` }}
    >
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <h1 className="max-w-lg text-lg text-white font-bold">
              Send me a <span className='text-amber-200 text-bold font-bold'>Message</span>
            </h1>

            <div className="mt-8">
              <p  className="text-xl text-white flex items-center gap-2">  <FaEnvelope className="w-4 h-4 text-amber-200" /><span>zjerowricm@gmail.com</span> </p>
              <p  className="text-xl text-white flex items-center gap-2">  <FaPhone className="w-4 h-4 text-amber-200" /><span>09452756283</span> </p>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">Name</label>
                <input
                  className={`w-full rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-400'} p-3 text-sm font-bold`}
                  placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">Name is required</p>}
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">Email</label>
                  <input
                    className={`w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-400'} p-3 text-sm font-bold`}
                    placeholder="Email address"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">Email is required</p>}
                </div>

                <div>
                  <label className="sr-only" htmlFor="subject">Subject</label>
                  <input
                    className={`w-full rounded-lg border ${errors.subject ? 'border-red-500' : 'border-gray-400'} p-3 text-sm font-bold`}
                    placeholder="Subject"
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && <p className="text-red-500 text-xs mt-1">Subject is required</p>}
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">Message</label>
                <textarea
                  className={`w-full rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-400'} p-3 text-sm resize-none font-bold`}
                  placeholder="Message"
                  rows="8"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">Message is required</p>}
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg border-[2px] border-solid border-black px-5 py-3 font-medium text-black sm:w-auto hover:bg-gray-100"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;