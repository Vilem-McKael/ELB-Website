import React from 'react'

export default function HomeHeader() {
  return (
    <div id="home-header" className='h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] w-full grid grid-cols-2'>
      <div className='flex items-end justify-center h-full w-full'>
        <img src='/edieImages/edieicon.png' className='h-[160px] sm:h-[240px] md:h-[320px] lg:h-[400px] max-h-[360px] object-contain'/>
      </div>
      <div className='flex flex-col items-start justify-center h-full w-full'>
        <div className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-black text-leading bg-opacity-95 font-normal px-8 py-8 w-full'>
          <div className=''>
            <span className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold'>E</span>die
          </div>
          <div className='pl-16'>
            <span className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold'>L</span>ehmann
          </div>
          <div className='pl-32'>
            <span className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold'>B</span>oddicker
          </div>
        </div>
      </div>
    </div>
  )
}
