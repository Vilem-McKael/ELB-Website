import React from 'react'
import { HashLink } from 'react-router-hash-link'

export default function HomeHeader3() {

    const scrollWithNavbarOffset = (element, offset) => {
        const scrollLocation = element.offsetTop - offset;
        window.scroll({
            top: scrollLocation,
            left: 0,
            behavior: "smooth"
        })
    }

  return (
    <div id="home-header" className='w-full h-[360px] sm:h-[800px] sm:min-w-[800px] md:min-w-[1100px] flex flex-col items-center bg-light7'> {/* TOP OF PAGE */}
        <div className='flex flex-row w-full h-full items-center justify-center'> {/* MAIN BODY OF HEADER */}
            <div className='w-full h-full flex justify-end bg-green/25 px-8'>
                <div className='w-[400px] flex flex-col justify-start items-end'>
                    <img src={'/edieImages/elbHeadshot2.jpeg'} className='object-cover object-left-top h-[500px] w-[400px] mt-12'/>
                    <div className='font-light text-md text-gray-500 italic mt-4 w-[400px] text-end'>Edie Lehmann Boddicker in her backyard<br />c. 2024, photo by Somebody</div>
                </div>
            </div>
            <div className='w-full h-full flex flex-col items-start justify-start'>
                <div className='w-[700px] flex flex-col items-start justify-start px-16 pt-4 bg-blue2'>
                    <div className='w-full flex flex-row justify-between items-center mb-8'>
                        <div className='text-3xl sm:text-2xl md:text-3xl lg:text-4xl text-black text-leading font-normal w-full mt-8'>
                            <div className=''>
                                <span className='text-4xl md:text-5xl font-semibold text-gold4'>E</span>die
                            </div>
                            <div className='pl-16'>
                                <span className='text-4xl md:text-5xl font-semibold text-teal4'>L</span>ehmann
                            </div>
                            <div className='pl-32'>
                                <span className='text-4xl md:text-5xl font-semibold text-burntOrange4'>B</span>oddicker
                            </div>
                        </div>
                        <img src={'/deruta/deruta tile3.jpeg'} className='h-[160px] w-[160px] '/>
                    </div>
                    <div className='w-full h-[120px] grid grid-cols-3 gap-2 text-center text-[18px] font-medium mb-24 text-black'>
                            <HashLink to={'/#vocal-contractor'} scroll={element => scrollWithNavbarOffset(element, 150)} className='w-full h-[60px] border-yellow2 border-8 flex items-center justify-center transform hover:scale-105 hover:font-semibold duration-150 origin-top'>Vocal Contractor</HashLink>
                            <HashLink to={'/#musician'} scroll={element => scrollWithNavbarOffset(element, 150)} className='w-full h-[60px] border-gold2 border-8 flex items-center justify-center transform hover:scale-105 hover:font-semibold duration-150 origin-top'>Musician</HashLink>
                            <HashLink to={'/#conductor'} scroll={element => scrollWithNavbarOffset(element, 150)} className='w-full h-[60px] border-terracotta border-8 flex items-center justify-center transform hover:scale-105 hover:font-semibold duration-150 origin-top'>Conductor</HashLink>
                            <HashLink to={'/#vocalist'} scroll={element => scrollWithNavbarOffset(element, 150)} className='w-full h-[60px] border-teal2 border-8 flex items-center justify-center transform hover:scale-105 hover:font-semibold duration-150 origin-top'>Vocalist</HashLink>
                            <HashLink to={'/#vocal-coach'} scroll={element => scrollWithNavbarOffset(element, 150)} className='w-full h-[60px] border-green border-8 flex items-center justify-center transform hover:scale-105 hover:font-semibold duration-150 origin-top'>Vocal Coach</HashLink>
                            <HashLink to={'/#arranger'} scroll={element => scrollWithNavbarOffset(element, 150)} className='w-full h-[60px] border-darkBlue3 border-8 flex items-center justify-center transform hover:scale-105 hover:font-semibold duration-150 origin-top'>Arranger</HashLink>
                        </div>
                    <div className=' font-barlow text-[16px] w-full font-light text-justify mb-8'>
                        A multifaceted musician, vocalist and vocal contractor residing in Los Angeles, California, Edie Lehmann Boddicker's credits include over one thousand works, including hundreds of films & albums, as well as dozens of TV Shows and live performances. She has worked with some of the biggest names in the industry; whether working on scores for  Hans Zimmer, Danny Elfman, or Michael Abels, or singing background vocals for Michael Jackson, Aretha Franklin, or Madonna, you most likely hear the impact Edie has had - and continues to have - on the music industry more often than you'd think.
                    </div>
                </div>
            </div>
            
        </div>
        <div className='w-full h-[150px] max-w-[1100px] flex flex-row items-center justify-evenly text-sm font-barlow pt-4 font-default'>
            <HashLink to={'/#studio-collaborations'} scroll={element => scrollWithNavbarOffset(element, 150)} className='border-teal4 border-b-[4px] flex flex-col items-center justify-center text-lg group' >
                <i className='flaticon-right-arrow text-xl rotate-[-90deg] transform group-hover:rotate-90 group-hover:text-teal4 duration-200'></i>
                <div className='transform duration-100 group-hover:text-xl object-center'>Studio Collaborations</div>
            </HashLink>
            <HashLink to={'/#up-and-coming'} scroll={element => scrollWithNavbarOffset(element, 150)} className='border-burntOrange5 border-b-[4px] flex flex-col items-center justify-center text-lg group' >
                <i className='flaticon-right-arrow text-xl rotate-[-90deg] transform group-hover:rotate-90 group-hover:text-burntOrange5 duration-200'></i>
                <div className='transform duration-100 group-hover:text-[20px] object-center'>Up & Coming</div>
            </HashLink>
            <HashLink to={'/#recent-work'} scroll={element => scrollWithNavbarOffset(element, 150)} className='border-gold border-b-[4px] flex flex-col items-center justify-center text-lg group' >
                <i className='flaticon-right-arrow text-xl rotate-[-90deg] transform group-hover:rotate-90 group-hover:text-gold duration-200'></i>
                <div className='transform duration-100 group-hover:text-xl object-center'>Recent Work</div>
            </HashLink>
            <HashLink to={'/#classic-credits'} scroll={element => scrollWithNavbarOffset(element, 150)} className='border-green border-b-[4px] flex flex-col items-center justify-center text-lg group' >
                <i className='flaticon-right-arrow text-xl rotate-[-90deg] transform group-hover:rotate-90 group-hover:text-green duration-200'></i>
                <div className='transform duration-100 group-hover:text-xl object-center'>Classic Credits</div>
            </HashLink>
            <HashLink to={'/#roles-&-highlights'} scroll={element => scrollWithNavbarOffset(element, 150)} className='border-terracotta border-b-[4px] flex flex-col items-center justify-center text-lg group' >
                <i className='flaticon-right-arrow text-xl rotate-[-90deg] transform group-hover:rotate-90 group-hover:text-terracotta duration-200'></i>
                <div className='transform duration-100 group-hover:text-xl object-center'>Roles & Highlights</div>
            </HashLink>
            {/* <HashLink ></HashLink>
            <HashLink ></HashLink>
            <HashLink ></HashLink> */}
        </div>

    </div>
  )
}
