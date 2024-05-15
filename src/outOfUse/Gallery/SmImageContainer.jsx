import React from 'react'
import { HashLink } from 'react-router-hash-link'

export default function SmImageContainer({image, description, index, photoIndex, updatePhotoIndex}) {

    const handleOnClick = () => {
        updatePhotoIndex(index)
    }

    const scrollWithNavbarOffset = (element, offset) => {
      const scrollLocation = element.offsetTop - offset;
      window.scroll({
          top: window.top,
          left: 0,
          behavior: "smooth"
      })
  }

  return (
    <HashLink to={'/gallery/#gallery-top'} scroll={element => scrollWithNavbarOffset(element, -200)} className='flex flex-col items-center cursor-pointer pb-4' onClick={handleOnClick}>
        <img src={image} className='max-h-[200px] max-w-[200px]'/>
    </HashLink>
  )
}
