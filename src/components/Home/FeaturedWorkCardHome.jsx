import React from 'react'

export default function FeaturedWorkCardHome({image, title, roles}) {
  return (
    <div className='flex flex-col w-[300px] justify-start items-start font-medium'>
      <img src={image} className='h-[300px] w-[300px] object-cover'/>
      <div className='my-4'>
        <div className='font-semibold text-2xl'>
          {title}
        </div>
        <div className='text-md'>
          {roles.map((role, index) => <div key={index} className='italic'>{role}</div>)}
        </div>
      </div>
      
    </div>
  )
}
