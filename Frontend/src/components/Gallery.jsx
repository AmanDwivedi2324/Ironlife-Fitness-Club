import React from 'react'
import Masonry from 'react-masonry-css'

import HeroImage from '../assets/other/Hero.jpg'
import WorkoutSessionImage from '../assets/other/WorkoutSessionImage.jpg'
import img1 from '../assets/gallery/img1.webp'
import img2 from '../assets/gallery/img2.jpg'
import img3 from '../assets/gallery/img3.jpg'
import img4 from '../assets/gallery/img4.jpg'
import img5 from '../assets/gallery/img5.jpg'
import img6 from '../assets/gallery/img6.jpg'

const images = [
  img1, img4,WorkoutSessionImage, img2, img5,img3 , HeroImage, img6, 
]

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1
};

const Gallery = () => {
  return (
    <div className='bg-gray-950 min-h-screen px-30 py-20'>
      <h2 className='text-center font-bold text-4xl text-[#3b7ab0] tracking-wider mb-10'>
        BETTER BEATS BEST
      </h2>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-4"
        columnClassName="masonry-column"
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`gym-img-${index}`}
            className='w-full rounded-xl mb-4'
          />
        ))}
      </Masonry>
    </div>
  )
}

export default Gallery
