import React from 'react'

export default function FeaturedWorkCardHome({image, title, work, roles}) {
  return (
    <div className='flex flex-col w-full sm:w-[360px] md:w-[240px] lg:w-[300px] justify-start items-center font-medium'>

      {/* WORK IMAGE */}
      <img src={image} className='w-[360px] h-[360px] md:w-[240px] md:h-[240px] lg:h-[300px] lg:w-[300px] object-cover'/>

      {/* WORK DESCRIPTION */}
      <div className='my-4'>

        {/* TITLE */}
        <div className='font-semibold text-2xl'>
          {title}
        </div>

        {/* WORK (ALBUM OR SONG) */}
        {work ? 
        <div className='text-lg italic'>
          {work}
        </div>
        :
        <></>
        }

        {/* ROLES FOR THIS WORK */}
        <div className='w-[300px] sm:w-[240px] lg:w-[300px] text-sm font-light flex gap-1 justify-start text-wrap'>
          <div>{roles.map((role, index) => index !== roles.length - 1 ? role + ' / ' : role)}</div>
        </div>
        
      </div>
      
    </div>
  )
}
