import React from 'react'

export default function MediaContainer({title, img, roles, notes}) {
  return (
    <div className='flex flex-col justify-start items-center w-[300px] h-[400px] text-wrap text-center'>

      {/* TITLE */}
      <div className='h-[60px] w-full text-2xl font-zilla text-light7 flex items-center justify-center p-2 bg-black'>
          {title}
      </div>

      {/* IMAGE */}
      <img src={img} className='w-[300px] h-[300px] object-cover'/>
        
      {/* ROLES WORKED */}
      <div className='h-[40px] w-full text-md text-light7 italic p-1 bg-black'>
        {roles.length ? 
        roles.map((role, index) =>
          <div key={index}>{role}</div>
        )
        :
        <></>
        }
      </div>

    </div>
  )
}
