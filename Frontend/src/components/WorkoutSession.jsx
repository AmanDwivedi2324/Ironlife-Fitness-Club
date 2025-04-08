import React from 'react'
import WorkoutSessionImage from '../assets/other/WorkoutSessionImage.jpg'

const WorkoutSession = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between px-5 md:px-20 py-10 md:py-20 bg-white min-h-screen gap-15'>
       <div className='w-full md:w-1/2'>
          <h2 className='text-black text-2xl md:text-3xl font-bold mb-3 md:mb-5 tracking-wide'>TOP WORKOUT SESSION</h2>
          <p className='text-gray-700 text-sm md:text-sm font-medium mb-5 tracking-wide'>Welcome to your ultimate calorie-burning ride! This workout session is designed to push your limits while keeping you energized and focused.</p>
          <img src={WorkoutSessionImage} alt="WorkoutSession" className='w-full rounded-md object-cover'/>
       </div>
       <div className='w-full md:w-1/2'>
          <h2 className='text-black text-2xl md:text-3xl font-bold mb-3 md:mb-5 tracking-wide'>FEATURED BOOTCAMPS</h2>
          <p className='text-gray-700 text-sm md:text-sm font-medium mb-5 tracking-wide'>Combining resistance cycling with guided intervals keeps your metabolism high even after your workout ends. This session promotes cardiovascular health while toning your legs and core.</p>
          <div className='flex flex-col gap-6'>
              <div className='border-2 border-gray-500 bg-gray-200 px-2 py-3 rounded-sm hover:bg-gray-950 transition duration-200'>
                  <h2 className='text-black text-2xl md:text-3xl font-bold mb-3 md:mb-5 tracking-wide hover:text-blue-600'>Fat Burning Blast</h2>
                  <p className='text-gray-700 text-sm md:text-sm font-medium mb-5 tracking-wide hover:text-white'>Torch fat fast with this high-intensity cycling session. Perfect for morning energy boosts and quick results. Burn 300+ calories in 25 minutes!</p>
              </div>
              <div className='border-2 border-gray-500 bg-gray-200 px-2 py-3 rounded-sm hover:bg-gray-950 transition duration-200'>
                  <h2 className='text-black text-2xl md:text-3xl font-bold mb-3 md:mb-5 tracking-wide hover:text-blue-600'>Strength & Stamina Ride</h2>
                  <p className='text-gray-700 text-sm md:text-sm font-medium mb-5 tracking-wide hover:text-white'>Push your limits with added resistance. This session builds endurance while sculpting your quads and calves. Great for weekly progress tracking!</p>
              </div>
              <div className='border-2 border-gray-500 bg-gray-200 px-2 py-3 rounded-sm hover:bg-gray-950 transition duration-200'>
                  <h2 className='text-black text-2xl md:text-3xl font-bold mb-3 md:mb-5 tracking-wide hover:text-blue-600'>Power Pedal Challenge</h2>
                  <p className='text-gray-700 text-sm md:text-sm font-medium mb-5 tracking-wide hover:text-white'>A high-resistance cycling session that activates core and lower body muscles. Includes sprints and uphill simulations for maximum burn!</p>
              </div>
              <div className='border-2 border-gray-500 bg-gray-200 px-2 py-3 rounded-sm hover:bg-gray-950 transition duration-200'>
                  <h2 className='text-black text-2xl md:text-3xl font-bold mb-3 md:mb-5 tracking-wide hover:text-blue-600'>Endurance Warrior Mode</h2>
                  <p className='text-gray-700 text-sm md:text-sm font-medium mb-5 tracking-wide hover:text-white'>Longer session (40+ mins) to test your physical and mental stamina. Helps build discipline, increase metabolism, and burn deep fat.</p>
              </div>
              <div className='border-2 border-gray-500 bg-gray-200 px-2 py-3 rounded-sm hover:bg-gray-950 transition duration-200'>
                  <h2 className='text-black text-2xl md:text-3xl font-bold mb-3 md:mb-5 tracking-wide hover:text-blue-600'>Recovery Ride</h2>
                  <p className='text-gray-700 text-sm md:text-sm font-medium mb-5 tracking-wide hover:text-white'>Low-intensity cycling with deep breathing and slow pace. Helps reduce muscle soreness and promotes faster recovery post-workout.</p>
              </div>
              
          </div>
       </div>
    </div>
  )
}

export default WorkoutSession