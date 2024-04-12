import React, { useState } from 'react'
import SmImageContainer from '../../components/Gallery/SmImageContainer'
import LgImageContainer from '../../components/Gallery/LgImageContainer'

import { edieImages } from '../../data/galleryMedia'
import Footer from '../../components/Footer/Footer'

export default function GalleryPage() {

  const [photoIndex, setPhotoIndex] = useState(0)

  const updatePhotoIndex = (newIndex) => {
    setPhotoIndex(newIndex)
  }

  const handleShowNext = () => {
    setPhotoIndex((photoIndex + 1) % edieImages.length)
  }

  const handleShowPrev = () => {
    setPhotoIndex((photoIndex - 1) % edieImages.length)
  }

  return (
    <div className='flex flex-col items-center pt-16 bg-light7'>
      <div id='gallery-top'></div>
       

      <div className='w-[800px] h-[600px] flex justify-center items-center bg-light7 rounded-xl border-black border-[1px] mb-12'>
        <div className='h-full w-[80px] flex flex-col items-center justify-center bg-gradient-to-b from-burntOrange5 hover:from-gold to-terracotta hover:to-terracotta rounded-l-xl cursor-pointer' onClick={handleShowPrev}>
            <i className='flaticon-left-arrow text-4xl text-center text-white'></i>
        </div>
        <div className='w-full h-[600px] flex flex-col justify-between items-center'>
          <div className='text-4xl h-[80px] font-semibold flex justify-center items-center'>
            ELB Gallery
          </div>
          <div>
            <img src={edieImages[photoIndex].image} className='max-h-[440px] transition px-4'/>
          </div>
          <div className='pt-2 h-[80px] text-black text-sm px-4 text-justify'>This will consist of a short description of each photo, describing the context and location they were taken. This is simply a sentence showing what the description text will look like underneath.</div>
        </div>
        <div className='h-full w-[80px] flex flex-col items-center justify-center bg-gradient-to-b from-burntOrange5 hover:from-gold to-terracotta hover:to-terracotta rounded-r-xl cursor-pointer hover:bg-gold text-4xl' onClick={handleShowNext}>
            <i className='flaticon-right-arrow text-center text-white'></i>
        </div>
      </div>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-center my-12'>
      { 
        edieImages.map((image, index) => (
            <SmImageContainer key={index} image={image.image} description={image.description} index={index} photoIndex={photoIndex} updatePhotoIndex={updatePhotoIndex}/>
        ))
      }
      </div>

      <Footer />
    </div>
  )
}
