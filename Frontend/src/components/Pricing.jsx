import React from 'react'
import PricingBox from '../others/PricingBox'

const Pricing = () => {
  return (
    <>
      <div className='px-10 py-10 md:px-30 md:py-20 bg-white min-h-auto'>
          <h2 className='text-center font-bold text-2xl md:text-4xl text-black tracking-wider mb-10'>
            IRONLIFE FITNESS PLANS
          </h2>
          <div className='flex flex-col md:flex-row justify-evenly items-start min-h-screen gap-10'>
            <PricingBox name="QUARTERLY PACKAGE" price="Rs 18000" tenure="For 3 Months" />
            <PricingBox name="HALF YEARLY PACKAGE" price="Rs 34000" tenure="For 6 Months" />
            <PricingBox name="YEARLY PACKAGE" price="Rs 67000" tenure="For 12 Months" />
          </div>
      </div>
    </>
    
  )
}

export default Pricing