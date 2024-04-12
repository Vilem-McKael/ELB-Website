import React from 'react'

export default function HomeBio() {
  return (
    <div className='flex flex-col md:flex-row md:justify-start items-center w-full h-[300px] md:h-[400px]'>
        <div className='flex h-full bg-light2 max-w-[40%]'>
            <img src={'/edieImages/elbHeadshot2.jpeg'} className='object-cover w-full object-left-top'/>
        </div>
        <div className='w-full h-full flex flex-col items-center justify-center text-justify p-8 text-black border-black border-y-[1px]'>
            <div className='text-sm sm:text-md md:text-lg'>
            Edie Lehmann Boddicker is a multifaceted musician, vocalist and vocal contractor residing in Los Angeles, California. Her credits include over three hundred films, hundreds of albums, and dozens of TV Shows and live performances. She has worked alongside legendary artists (Aretha, Madonna, Michael Jackson, Quincy Jones, Herbie Hancock) and film composers (Hans Zimmer, Germaine Franco, John Powell, Michael Abels).
            </div>
            {/* <div className='text-xs sm:text-sm md:text-md pt-4'>
            Edie Lehmann Boddicker is a multifaceted musician, vocalist and vocal contractor residing in Los Angeles, California. Her credits include over three hundred films, hundreds of albums, and dozens of TV Shows and live performances. She has worked alongside legendary artists, such as Madonna and Michael Jackson, and film composers, such as Hans Zimmer and Danny Elfman.
            </div> */}
        </div>
    </div>
  )
}
