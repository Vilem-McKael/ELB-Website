import React from 'react'

export default function FeaturedWorkCardHome({image, title, work, roles}) {
  return (
    <div className='flex flex-col w-[300px] justify-start items-start font-medium'>

      {/* WORK IMAGE */}
      <img src={image} className='h-[300px] w-[300px] object-cover'/>

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
        <div className='w-[300px] text-sm font-light flex gap-1 justify-start text-wrap'>
          <div>{roles.map((role, index) => index !== roles.length - 1 ? role + ' / ' : role)}</div>
        </div>
        
      </div>
      
    </div>
  )
}
