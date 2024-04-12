import React from 'react'

export default function HomeHeader3() {
  return (
    <div className='flex-col md:flex-row'>
        <div>
            <img src={'/edieImages/elbHeadshot2.png'} />
        </div>
        <div>
            <div>
                <div className='flex flex-col items-center justify-center h-full w-full'>
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
                <div className='text-xs sm:text-sm md:text-md'>
                    Edie Lehmann Boddicker is a multifaceted musician, vocalist and vocal contractor residing in Los Angeles, California. Her credits include over three hundred films, hundreds of albums, and dozens of TV Shows and live performances. She has worked alongside legendary artists, such as Madonna and Michael Jackson, and film composers, such as Hans Zimmer and Danny Elfman.
                </div>
            </div>
        </div>
    </div>
  )
}
