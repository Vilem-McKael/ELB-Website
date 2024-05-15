import React from 'react'
import { edieImages } from '../../../data/mediaData'
import { HashLink } from 'react-router-hash-link'

export default function ImageList({updateSelectedImageIndex}) {

    // HANDLE CLICK
    const handleOnClick = (imgIndex) => {
        updateSelectedImageIndex(imgIndex)
        scroll()
    }

    // SCROLL FUNCTION
    const scrollWithNavbarOffset = (element, offset) => {
        const scrollLocation = element.offsetTop - offset;
        window.scroll({
            top: window.top,
            left: 0,
            behavior: "smooth"
        })
    }

  return (
    <div className='grid grid-cols-2 sm:grid-cols-4 w-full gap-y-6 sm:gap-2 place-items-center'>

        {/* IMAGES MAP */}
        {edieImages.map((img, index) => {

            {/* IMAGE HASHLINK */}
            return <HashLink to='/media/#image-viewer' scroll={element => scrollWithNavbarOffset(element, 150)} key={index} onClick={() => handleOnClick(index)}>
                <img src={img.image} className='h-[160px] w-[160px] object-cover'/>
            </HashLink>
        })}
    </div>
  )
}
