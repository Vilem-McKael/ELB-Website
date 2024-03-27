import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SocialButton({to, logo}) {
  return (
    <Link to={to} target="_blank" rel="noopener noreferrer">
        <div className='flex flex-col justify-center items-center mx-2 transform hover:scale-110 duration-100 '>
            <img src={logo} className='w-[30px] h-[30px]'/>
            {/* <div className='text-xs'>{name}</div> */}
        </div>
    </Link>
  )
}
