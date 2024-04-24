import React from 'react'

export default function CompanyCard({children}) {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='bg-gray-500 rounded-xl h-[60px] w-[100px]'></div>
        <div className='h-[80px] text-center'>{children}</div>
    </div>
  )
}
