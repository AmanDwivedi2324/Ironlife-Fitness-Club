import React, {useRef} from 'react'
import HeroImage from '../assets/other/Hero.jpg'

const Hero = () => {
 
    const phoneNumber = "8853293851"; // 
  
    const handleCall = () => {
      // Open the phone dialer
      window.location.href = `tel:${phoneNumber}`;
    }

  return (
    <div className='relative h-screen bg-cover bg-center' style={{backgroundImage:`url(${HeroImage})`}}>
            <div className='relative z-10 flex flex-col justify-center h-full px-10 md:px-20 text-white'>
                  <h1 className='px-2 py-1 border-2 border-gray-300 text-gray-300 font-bold text-lg md:text-xl w-fit tracking-wider mb-4'>IRON LIFE FITNESS</h1>
                  <div className='leading-tight'>
                      <h2 className='mt-25 font-bold text-5xl md:text-6xl '>LET'S</h2>
                      <h2 className='mt-2 font-bold text-5xl md:text-6xl'>GET</h2>
                      <h2 className='mt-2 font-bold text-5xl md:text-6xl'>MOVING</h2>
                  </div>

                  <div className='mt-8'>
                      <h4 className='text-lg md:text-xl font-medium'>Your Journey To Fitness Starts Here</h4>
                      <h4 className='text-lg md:text-xl font-medium text-[#4d8cca] mt-1'>Unleash Your Potential!</h4>
                  </div>


                  <div className=' mt-10 flex flex-wrap gap-4'>
                    <button onClick={handleCall} className='px-6 py-3 bg-[#4d8cca] hover:bg-[#3b7ab0] text-white font-semibold rounded-sm transition duration-200 cursor-pointer'>Contact US</button>
                    <button className='px-6 py-3 bg-[#4d8cca] hover:bg-[#3b7ab0] text-white font-semibold rounded-sm transition duration-200 cursor-pointer'>Discover Your Plan</button>
                  </div>
            </div>
    </div>
  )
}

export default Hero