import React from 'react'

export default function Footer() {
  return (
    <div className='flex w-full bg-gray-200 text-black justify-evenly items-center text-xs h-[40px] px-4'>
        <div className='h-full flex items-center w-[50%] p-2'>
            © 2024 EML Productions. All Rights Reserved.
        </div>
        <div className='h-full flex items-center w-[50%] p-2'>
            Developed by Vilem McKael
        </div>
    </div>
  )
}
