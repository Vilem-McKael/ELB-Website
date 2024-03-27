import React from 'react'

export default function MediaContainer({title, img, roles, notes}) {
  return (
    <div className='flex flex-col justify-start items-center w-[100px] h-[140px] md:w-[160px] md:h-[224px] text-wrap text-center'>
        <img src={img} className='w-[100px] h-[100px] md:w-[160px] md:h-[160px] object-cover'/>
        <div className='mt-2'>
            {title}
        </div>
    </div>
  )
}
