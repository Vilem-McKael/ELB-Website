import React, { useState } from 'react'
import SmImageContainer from '../../components/Gallery/SmImageContainer'
import LgImageContainer from '../../components/Gallery/LgImageContainer'

import { edieImages } from '../../data/galleryMedia'
import Footer from '../../components/Footer/Footer'

export default function GalleryPage() {

  const [photoIndex, setPhotoIndex] = useState(0)
  const [isShowingAllPhotos, setIsShowingAllPhotos] = useState(false)

  const updatePhotoIndex = (newIndex) => {
    setPhotoIndex(newIndex)
  }

  const handleShowNext = () => {
    setPhotoIndex((photoIndex + 1) % edieImages.length)
  }

  const handleShowPrev = () => {
    setPhotoIndex((photoIndex - 1) % edieImages.length)
  }

  const handleShowOrHideAll = () => {
    setIsShowingAllPhotos(!isShowingAllPhotos)
  }

  return (
    <div className='flex flex-col items-center justify-start pt-16 bg-darkBlue3'>
      <div id='gallery-top'></div>

        <div className='text-4xl h-[80px] font-semibold flex justify-center items-center text-light7 mb-4'>
            ELB Gallery
          </div>
       
      <div className='w-[800px] h-[500px] flex justify-center items-center bg-transparent rounded-xl'>
        <div className='h-[20%] w-[80px] flex flex-col items-center justify-center bg-black hover:bg-gray-800 rounded-l-xl cursor-pointer' onClick={handleShowPrev}>
            <i className='flaticon-left-arrow text-4xl text-center text-white'></i>
        </div>
        <div className='w-full h-full flex flex-col justify-center items-center'>
          <div>
            <img src={edieImages[photoIndex].image} className='max-h-[500px] max-w-[600px] transition shadow-md shadow-black object-cover'/>
          </div>
        </div>
        <div className='h-[20%] w-[80px] flex flex-col items-center justify-center bg-gradient-to-b bg-black hover:bg-gray-800 rounded-r-xl cursor-pointer text-4xl' onClick={handleShowNext}>
            <i className='flaticon-right-arrow text-center text-white'></i>
        </div>
      </div>

      <div className='pt-2 h-[80px] text-light7 text-sm px-4 text-justify w-[600px] mb-12'>
        This will consist of a short description of each photo, describing the context and location they were taken. This is simply a sentence showing what the description text will look like underneath.
      </div>

      {/* <div className='w-[800px] h-[600px] flex justify-center items-center bg-light7 rounded-xl border-black border-[1px] mb-12'>
        <div className='h-full w-[80px] flex flex-col items-center justify-center bg-gradient-to-b from-burntOrange5 hover:from-gold to-terracotta hover:to-terracotta rounded-l-xl cursor-pointer' onClick={handleShowPrev}>
            <i className='flaticon-left-arrow text-4xl text-center text-white'></i>
        </div>
        <div className='w-full h-[600px] flex flex-col justify-between items-center'>
          <div className='text-4xl h-[80px] font-semibold flex justify-center items-center'>
            ELB Gallery
          </div>
          <div>
            <img src={edieImages[photoIndex].image} className='max-h-[440px] max-w-[600px] transition px-4'/>
          </div>
          <div className='pt-2 h-[80px] w text-black text-sm px-4 text-justify'>
            This will consist of a short description of each photo, describing the context and location they were taken. This is simply a sentence showing what the description text will look like underneath.
          </div>
          <div>

          </div>
        </div>
        <div className='h-full w-[80px] flex flex-col items-center justify-center bg-gradient-to-b from-burntOrange5 hover:from-gold to-terracotta hover:to-terracotta rounded-r-xl cursor-pointer hover:bg-gold text-4xl' onClick={handleShowNext}>
            <i className='flaticon-right-arrow text-center text-white'></i>
        </div>
      </div> */}

      <button className='mb-16 p-4 bg-light7 rounded-xl' onClick={handleShowOrHideAll} >
        {isShowingAllPhotos ? "Hide Photos" : "Show All"}
      </button>
      
      {isShowingAllPhotos ?
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-center my-12'>
        { 
          edieImages.map((image, index) => (
              <SmImageContainer key={index} image={image.image} description={image.description} index={index} photoIndex={photoIndex} updatePhotoIndex={updatePhotoIndex}/>
          ))
        }
        </div>
        :
        <></>
      }

      <Footer />
    </div>
  )
}
