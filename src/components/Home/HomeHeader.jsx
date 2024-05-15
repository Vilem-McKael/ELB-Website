import React from 'react'
import { HashLink } from 'react-router-hash-link'

export default function HomeHeader() {

    const scrollWithNavbarOffset = (element, offset) => {
        const scrollLocation = element.offsetTop - offset;
        window.scroll({
            top: scrollLocation,
            left: 0,
            behavior: "smooth"
        })
    }

  return (
    <div id="home-header" className='w-full md:h-[800px] md:min-w-[800px] xl:min-w-[1100px] flex flex-col items-center bg-light7'> {/* TOP OF PAGE */}
        <div className='flex flex-col-reverse md:flex-row w-full h-full items-center justify-center'> {/* HEADER BODY // ROW */}

            {/* HEADSHOT & IMAGE DESCRIPTION // COL */}
            <div className='w-full h-full flex justify-end bg-green/25 px-8'>
                <div className='w-full sm:w-[400px] flex flex-col justify-start items-center md:items-end'>
                    <img src={'/edieImages/elbHeadshot2.jpeg'} className='object-cover object-left-top h-[500px] w-[400px] mt-12'/>
                    <div className='font-light text-md text-gray-500 italic mt-4 sm:w-[400px] text-center md:text-end pb-4 md:pb-0'>Edie Lehmann Boddicker in her backyard<br />c. 2024, photo by Somebody</div>
                </div>
            </div>

            {/* MAIN HEADER BODY // COL */}
            <div className='w-full h-full sm:flex-col items-start justify-start'>
                <div className='w-full sm:w-[700px] flex flex-col items-start justify-start px-8 sm:px-16 pt-4'>

                    {/* STYLIZED NAME AND DECORATIVE TILE */}
                    <div className='w-full flex flex-row justify-center sm:justify-between items-center mb-8'>
                        <div className='pl-8 sm:pl-0 text-3xl sm:text-2xl md:text-3xl lg:text-4xl text-black text-leading font-normal w-full mt-8'>
                            <div className=''>
                                <span className='text-4xl md:text-5xl font-semibold text-gold4'>E</span>die
                            </div>
                            <div className='pl-12 sm:pl-16'>
                                <span className='text-4xl md:text-5xl font-semibold text-teal4'>L</span>ehmann
                            </div>
                            <div className='pl-24 sm:pl-32'>
                                <span className='text-4xl md:text-5xl font-semibold text-burntOrange4'>B</span>oddicker
                            </div>
                        </div>
                        <img src={'/deruta/deruta tile3.jpeg'} className='hidden sm:block sm:h-[160px] sm:w-[160px] '/>
                    </div>

                    {/* LIST OF ROLES & LINKS TO ROLE SECTIONS */}
                    <div className='w-full h-[120px] grid grid-cols-2 sm:grid-cols-3 gap-2 text-center text-[18px] font-medium mb-24 text-black'>

                        {/* VOCAL CONTRACTOR */}
                        <HashLink to={'/#vocal-contractor'} scroll={element => scrollWithNavbarOffset(element, document.documentElement.clientWidth >= 640 ? 150 : 80)} className='w-full h-[60px] border-yellow2 border-8 flex items-center justify-center transform sm:hover:scale-105 sm:hover:font-semibold duration-150 origin-top'>Vocal Contractor</HashLink>

                        {/* MUSICIAN */}
                        <HashLink to={'/#musician'} scroll={element => scrollWithNavbarOffset(element, document.documentElement.clientWidth >= 640 ? 150 : 80)} className='w-full h-[60px] border-gold2 border-8 flex items-center justify-center transform sm:hover:scale-105 sm:hover:font-semibold duration-150 origin-top'>Musician</HashLink>

                        {/* CONDUCTOR */}
                        <HashLink to={'/#conductor'} scroll={element => scrollWithNavbarOffset(element, document.documentElement.clientWidth >= 640 ? 150 : 80)} className='w-full h-[60px] border-terracotta border-8 flex items-center justify-center transform sm:hover:scale-105 sm:hover:font-semibold duration-150 origin-top'>Conductor</HashLink>

                        {/* VOCALIST */}
                        <HashLink to={'/#vocalist'} scroll={element => scrollWithNavbarOffset(element, document.documentElement.clientWidth >= 640 ? 150 : 80)} className='w-full h-[60px] border-teal2 border-8 flex items-center justify-center transform sm:hover:scale-105 sm:hover:font-semibold duration-150 origin-top'>Vocalist</HashLink>

                        {/* VOCAL COACH */}
                        <HashLink to={'/#vocal-coach'} scroll={element => scrollWithNavbarOffset(element, document.documentElement.clientWidth >= 640 ? 150 : 80)} className='w-full h-[60px] border-green border-8 flex items-center justify-center transform sm:hover:scale-105 sm:hover:font-semibold duration-150 origin-top'>Vocal Coach</HashLink>

                        {/* ARRANGER */}
                        <HashLink to={'/#arranger'} scroll={element => scrollWithNavbarOffset(element, document.documentElement.clientWidth >= 640 ? 150 : 80)} className='w-full h-[60px] border-darkBlue3 border-8 flex items-center justify-center transform sm:hover:scale-105 sm:hover:font-semibold duration-150 origin-top'>Arranger</HashLink>

                    </div>

                    {/* HEADER BIO */}
                    <div className=' font-barlow text-[16px] w-full font-light text-justify mb-8'>
                        A multifaceted vocalist, vocal contractor and musician residing in Los Angeles, California, Edie Lehmann Boddicker's credits include over one thousand works, including hundreds of films & albums, as well as dozens of TV Shows and live performances. She has worked with some of the biggest names in the industry; whether working on scores for  Hans Zimmer, Danny Elfman, or Michael Abels, or singing background vocals for Michael Jackson, Aretha Franklin, or Madonna, you most likely hear the impact Edie has had - and continues to have - on the music industry more often than you'd think.
                    </div>

                </div>
            </div>
        </div>

        {/* HASHLINKS TO SECTIONS OF HOMEPAGE */}
        <div className='w-full h-[150px] max-w-[1100px] flex flex-row items-center justify-evenly text-sm font-barlow pt-4 font-default'>

            {/* STUDIO COLLABORATIONS */}
            <HashLink to={'/#studio-collaborations'} scroll={element => scrollWithNavbarOffset(element, document.documentElement.clientWidth >= 640 ? 150 : 80)} className='border-teal4 border-b-[4px] flex flex-col items-center justify-center text-sm sm:text-lg group' >
                <i className='flaticon-right-arrow text-xl rotate-[90deg] sm:rotate-[-90deg] transform sm:group-hover:rotate-90 sm:group-hover:text-teal4 duration-200'></i>
                <div className='transform duration-100 sm:group-hover:text-xl object-center'>Studio Collaborations</div>
            </HashLink>


            <HashLink to={'/#up-and-coming'} scroll={element => scrollWithNavbarOffset(element, document.documentElement.clientWidth >= 640 ? 150 : 80)} className='border-burntOrange5 border-b-[4px] flex flex-col items-center justify-center text-sm sm:text-lg group' >
                <i className='flaticon-right-arrow text-xl rotate-[90deg] sm:rotate-[-90deg] transform sm:group-hover:rotate-90 sm:group-hover:text-burntOrange5 duration-200'></i>
                <div className='transform duration-100 sm:group-hover:text-[20px] object-center'>Up & Coming</div>
            </HashLink>


            <HashLink to={'/#recent-work'} scroll={element => scrollWithNavbarOffset(element, document.documentElement.clientWidth >= 640 ? 150 : 80)} className='border-gold border-b-[4px] flex flex-col items-center justify-center text-sm sm:text-lg group' >
                <i className='flaticon-right-arrow text-xl rotate-[90deg] sm:rotate-[-90deg] transform sm:group-hover:rotate-90 sm:group-hover:text-gold duration-200'></i>
                <div className='transform duration-100 sm:group-hover:text-xl object-center'>Recent Work</div>
            </HashLink>


            <HashLink to={'/#classic-credits'} scroll={element => scrollWithNavbarOffset(element, document.documentElement.clientWidth >= 640 ? 150 : 80)} className='border-green border-b-[4px] flex flex-col items-center justify-center text-sm sm:text-lg group' >
                <i className='flaticon-right-arrow text-xl rotate-[90deg] sm:rotate-[-90deg] transform sm:group-hover:rotate-90 sm:group-hover:text-green duration-200'></i>
                <div className='transform duration-100 sm:group-hover:text-xl object-center'>Classic Credits</div>
            </HashLink>

            
            <HashLink to={'/#roles-&-highlights'} scroll={element => scrollWithNavbarOffset(element, document.documentElement.clientWidth >= 640 ? 150 : 80)} className='border-terracotta border-b-[4px] flex flex-col items-center justify-center text-sm sm:text-lg group' >
                <i className='flaticon-right-arrow text-xl rotate-[90deg] sm:rotate-[-90deg] transform sm:group-hover:rotate-90 sm:group-hover:text-terracotta duration-200'></i>
                <div className='transform duration-100 sm:group-hover:text-xl object-center'>Roles & Highlights</div>
            </HashLink>

        </div>

    </div>
  )
}
