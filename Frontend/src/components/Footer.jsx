import React from 'react'
import footerImage from '../assets/gallery/img1.webp'

const Footer = () => {
  return (
      <footer className='footer min-h-72 w-full text-white bg-gray-900 mt-10 p-5 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${footerImage})` }}>
     
      {/* Footer Content */}
      <div className='flex flex-wrap md:flex-nowrap py-10 items-start justify-between md:justify-evenly gap-5'>
        {/* Address Section */}
        <div className='w-full md:w-auto text-center md:text-left'>
          <h2 className='text-xl font-bold mb-2'>ADDRESS</h2>
          <h4 className='text-lg font-medium mb-1'>Gulmohar Colony, Old Haiderganj, Aishbagh</h4>
          <h4 className='text-lg font-medium mb-1'>Lucknow, Uttar Pradesh-226004</h4>
        </div>

        {/* Contact Section */}
        <div className='w-full md:w-auto text-center md:text-left'>
          <h2 className='text-xl font-bold mb-2'>CONTACTS</h2>
          <h4 className='text-lg font-medium mb-1'>8853293851</h4>
          <h4 className='text-lg font-medium mb-1'>ironlife@gmail.com</h4>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='text-center mt-5 border-t border-gray-600 pt-5'>
        <h4 className='mb-2 font-semibold'>IRON LIFE FITNESS</h4>
        <h6 className='font-semibold'>All Rights Reserved | 2024-2025 | Design & Developed by Aman Dwivedi</h6>
      </div>
    </footer>

  )
}

export default Footer