import React from 'react'

export default function HomeHeader() {
  return (
    <div id="home-header" className='section h-[160px] sm:h-[240px] md:h-[320px] lg:h-[400px] w-full grid grid-cols-2'>
      
      <div className='flex flex-col items-start justify-center h-full w-full'>
        <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black text-leading bg-opacity-95 font-normal px-8 py-8 w-full'>
          <div className=''>
            <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gold4'>E</span>die
          </div>
          <div className='pl-4 sm:pl-8 lg:pl-16'>
            <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-blue1'>L</span>ehmann
          </div>
          <div className='pl-8 sm:pl-16 lg:pl-32'>
            <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-burntOrange4'>B</span>oddicker
          </div>
        </div>
      </div>
      <div className='flex items-end justify-center h-full w-full'>
        <img src='/edieImages/elbHeadshot2.png' className='h-[120px] sm:h-[180px] md:h-[240px] lg:h-[300px] max-h-[360px] object-contain'/>
      </div>
    </div>
  )
}
