import React from 'react'

export default function CompanyCard({children, img}) {
  return (
    <div className='flex flex-col items-center justify-center mx-4'>
        <img src={img} className='w-[160px] h-[120px] object-contain' />
        {/* <div className='h-[80px] text-center'>{children}</div> */}
    </div>
  )
}
