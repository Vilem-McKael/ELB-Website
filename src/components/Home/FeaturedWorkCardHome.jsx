import React from 'react'

export default function FeaturedWorkCardHome({image, title, roles}) {
  return (
    <div className='flex flex-col justify-start font-medium'>
      <img src={image} className='h-[100px] sm:h-[140px] md:h-[200px] w-[100px] sm:w-[140px] md:max-w-[200px] object-cover'/>
      <div className='my-4'>
        <div className='text-xs md:text-sm text-wrap w-[100px] sm:w-[120px] md:max-w-[200px]'>
          {title}
        </div>
        <div className='text-[10px] md:text-xs'>
          {roles.map((role) => <div className='italic'>{role}</div>)}
        </div>
      </div>
      
    </div>
  )
}
