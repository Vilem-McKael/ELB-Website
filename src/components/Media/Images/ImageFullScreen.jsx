import React, { useEffect, useState } from 'react'
import { edieImages } from '../../../data/mediaData'

export default function ImageFullScreen({imgIndex, updateSelectedImageIndex, updateIsShowingImageFullScreen}) {

    const [deviceWidth, setDeviceWidth] = useState(null)
    const [deviceHeight, setDeviceHeight] = useState(null)
    const [heightOffset, setHeightOffset] = useState(null)

    const handleShowNext = () => {
        updateSelectedImageIndex((imgIndex + 1) % edieImages.length )
    }

    // SHOW PREVIOUS IMAGE
    const handleShowPrev = () => {
        updateSelectedImageIndex(((imgIndex - 1) + edieImages.length) % edieImages.length)
      }

    const handleOnClick = () => {
        updateIsShowingImageFullScreen(false)
    }

    const updateDimensions = () => {
        const width = document.documentElement.clientWidth
        const height = document.documentElement.clientHeight
        setDeviceWidth(width)
        if (height < 500) {
            setDeviceHeight(document.documentElement.clientHeight)
            setHeightOffset(0)
        } else if (width < 640) {
            setDeviceHeight(height - 80)
            setHeightOffset(80)
        } else {
            setDeviceHeight(height - 150)
            setHeightOffset(150)
        }
    }

    useEffect(() => {
        updateDimensions()

        const listener = () => updateDimensions()
        window.addEventListener('resize', listener)

        return () => window.removeEventListener('resize', listener)
    })
    

  return (
    <div className='w-full h-full flex justify-center z-50 bg-black' style={{minHeight: deviceHeight}}>
        <button className='bg-white text-black p-2 px-4 absolute right-0 rounded-lg' onClick={handleOnClick} style={{top: 4 + heightOffset, right: 4}}>X</button>
        <div className='w-full flex items-center justify-between'>
            <button className='flex flex-col items-center justify-center w-[80px] h-[100px] sm:h-[100px] sm:w-[80px] rounded-r-full bg-black bg-opacity-60 border border-light7/20 sm:hover:bg-opacity-100 text-light7 absolute left-0' onClick={handleShowPrev}>
                <i className='flaticon-left-arrow text-2xl sm:text-4xl'></i>
            </button>
            <img src={edieImages[imgIndex].image} className='h-full w-full object-contain'  style={{maxWidth: deviceWidth, maxHeight: deviceHeight}}/>
            <button className='flex flex-col items-center justify-center w-[80px] h-[100px] sm:h-[100px] sm:w-[80px] rounded-l-full bg-black bg-opacity-60 border border-light7/20 sm:hover:bg-opacity-100 text-light7 absolute right-0' onClick={handleShowNext}>
                <i className='flaticon-right-arrow text-2xl sm:text-4xl'></i>
            </button>
        </div>
    </div>
  )
}
