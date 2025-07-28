import React, { useState } from 'react'

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className='relative flex flex-col items-center justify-center w-full min-h-screen bg-gray-100 p-4'>
      <h1 className='text-2xl md:text-4xl font-extrabold mb-6 text-gray-800 text-center z-10'>Contact Us</h1>
      <p className='text-base md:text-lg mb-8 text-gray-600 text-center z-10'>We would love to hear from you!</p>
      
      <div className='grid grid-cols-1 lg:grid-cols-2 w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden z-10'>
        <div className='order-2 lg:order-1'>
          <img
            src='./contact.jpg'
            alt='Contact Us'
            className='w-full h-64 lg:h-full object-cover'
          />
        </div>
        
        <div className='order-1 lg:order-2 w-full bg-white p-6 lg:p-8'>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Name</label>
            <input 
              type='text' 
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='w-full text-gray-700 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200' 
              placeholder='Your Name' 
              required 
            />
          </div>
          
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Email</label>
            <input 
              type='email' 
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200' 
              placeholder='Your Email' 
              required 
            />
          </div>
          
          <div className='mb-6'>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Message</label>
            <textarea 
              name='message'
              value={formData.message}
              onChange={handleChange}
              className='w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 resize-none' 
              placeholder='Your Message' 
              rows='4' 
              required
            />
          </div>
          
          <button 
            onClick={handleSubmit}
            className='w-full bg-teal-500 text-white py-3 px-6 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-300 font-medium transform hover:scale-105'
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contactus