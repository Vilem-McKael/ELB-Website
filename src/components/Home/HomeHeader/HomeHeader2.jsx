import React from 'react'
import { HashLink } from 'react-router-hash-link'

export default function HomeHeader2() {

    const scrollWithNavbarOffset = (element, offset) => {
        const scrollLocation = element.offsetTop - offset;
        window.scroll({
            top: scrollLocation,
            left: 0,
            behavior: "smooth"
        })
    }

  return (
    <div id="home-header" className='w-full h-[360px] sm:h-[240px] flex flex-col sm:flex-row justify-between items-center'>
      <div className='pt-8 flex flex-col items-center justify-center h-full sm:w-[40%]'>
        <div className='text-3xl sm:text-2xl md:text-3xl lg:text-4xl text-black text-leading bg-opacity-95 font-normal px-4 sm:pl-6 md:pl-12 lg:pl-8 py-8 w-full'>
          <div className=''>
            <span className='text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gold4'>E</span>die
          </div>
          <div className='pl-4 sm:pl-8 lg:pl-16'>
            <span className='text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-teal4'>L</span>ehmann
          </div>
          <div className='pl-8 sm:pl-16 lg:pl-32'>
            <span className='text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-burntOrange4'>B</span>oddicker
          </div>
        </div>
      </div>
      {/* <div className='w-full'>
        <img src={'/deruta/deruta tile2.jpeg'} className='h-full'/>
      </div> */}
      <div className='sm:w-[60%] h-full flex flex-col items-center justify-evenly text-sm lg:text-2xl text-center'>
        <div className='flex w-full h-full justify-end items-center my-1'>
            <HashLink to='/#vocalist' scroll={element => scrollWithNavbarOffset(element, 150)} className='w-[100px] sm:w-[160px] lg:w-[200px] rounded-xl mx-1 my-1 h-full flex items-center justify-center bg-yellow2 text-light7 hover:opacity-80'>
                <div className='flex w-[90%] h-[80%] items-center justify-center hover:bg-light7 rounded-xl text-black'>Vocalist</div>
            </HashLink>
            <HashLink to='/#vocal-contractor' scroll={element => scrollWithNavbarOffset(element, 150)} className='w-[100px] sm:w-[160px] lg:w-[200px] rounded-xl mx-1 my-1 h-full flex items-center justify-center bg-gold2 text-white  hover:opacity-80'>
                Vocal Contractor
            </HashLink>
            <HashLink to='/#conductor' scroll={element => scrollWithNavbarOffset(element, 150)} className='w-[100px] sm:w-[160px] lg:w-[200px] rounded-xl mx-1 my-1 h-full flex items-center justify-center bg-terracotta text-white hover:opacity-80'>
                Conductor
            </HashLink>
        </div>
        <div className='flex w-full h-full justify-end items-center mt-1'>
            <HashLink to='/#vocal-coach' scroll={element => scrollWithNavbarOffset(element, 150)} className='w-[100px] sm:w-[160px] lg:w-[200px] rounded-xl mx-1 my-1 h-full flex items-center justify-center bg-teal2 text-light7 hover:opacity-80'>
                Vocal Coach
            </HashLink>
            <HashLink to='/#musician' scroll={element => scrollWithNavbarOffset(element, 150)} className='w-[100px] sm:w-[160px] lg:w-[200px] rounded-xl mx-1 my-1 h-full flex items-center justify-center bg-green text-light7 hover:opacity-80'>
                Musician
            </HashLink>
            <HashLink to='/#contract-prep' scroll={element => scrollWithNavbarOffset(element, 150)} className='w-[100px] sm:w-[160px] lg:w-[200px] rounded-xl mx-1 my-1 h-full flex items-center justify-center bg-darkBlue3 text-light7 hover:opacity-80'>
                Contract Prep
            </HashLink>
        </div>
        
      </div>
    </div>
  )
}
