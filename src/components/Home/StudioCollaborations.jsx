import React from 'react'
import CompanyCard from './CompanyCard'

export default function StudioCollaborations() {
  return (
    <div id='studio-collaborations' className='w-full flex flex-col items-center bg-darkBlue3/40'>

        {/* SECTION TITLE: STUDIO COLLABORATIONS */}
        <div className='flex px-4 sm:px-16 py-4 mb-12 w-full items-center justify-center border-y-[8px] border-darkBlue3 bg-light7/50'>
          
            <div className='wlg text-4xl pl-8 flex justify-start text-start text-black font-semibold'>
                Studio Collaborations
            </div>
        </div>

        {/* LIST OF STUDIOS COLLABORATED WITH */}
        <div className='grid grid-cols-2 sm:grid-cols-4 sm:py-16 w-full md:w-[800px] xl:w-[1100px] gap-y-8'>
            <CompanyCard img={'/studioLogos/netflix2.png'}>Netflix</CompanyCard>
            <CompanyCard img={'/studioLogos/hbo.png'}>HBO</CompanyCard>
            <CompanyCard img={'/studioLogos/activisionBlizzard.png'}>Activision/Blizzard</CompanyCard>
            <CompanyCard img={'/studioLogos/waltDisneyPictures3.png'}>Walt Disney Studios</CompanyCard>
            <CompanyCard img={'/studioLogos/epicGames.png'}>Epic Games</CompanyCard>
            <CompanyCard img={'/studioLogos/warnerBros.png'}>Warner Bros.</CompanyCard>
            <CompanyCard img={'/studioLogos/20thCenturyFox.png'}>20th Century Fox</CompanyCard>
            <CompanyCard img={'/studioLogos/sonyPictures.png'}>Sony Pictures</CompanyCard>
            <CompanyCard img={'/studioLogos/paramountPictures.png'}>Paramount Pictures</CompanyCard>
            <CompanyCard img={'/studioLogos/universalPictures.png'}>Universal Pictures</CompanyCard>
            <CompanyCard img={'/studioLogos/lionsgate.png'}>Lionsgate</CompanyCard>
            <CompanyCard img={'/studioLogos/mgmStudios.png'}>MGM Studios</CompanyCard>
            {/* <CompanyCard>New Line Cinema?</CompanyCard> */}
            <CompanyCard img={'/studioLogos/dreamworks3.png'}>DreamWorks Animation</CompanyCard>
            <CompanyCard img={'/studioLogos/pixar2.png'}>Pixar Studios</CompanyCard>
            <CompanyCard img={'/studioLogos/miramax.webp'}>Miramax Films</CompanyCard>
            <CompanyCard img={'/studioLogos/lucasfilm2.png'}>Lucasfilm</CompanyCard>
            <CompanyCard img={'/studioLogos/marvel.png'}>Marvel Studios</CompanyCard>
        </div>
    </div>
  )
}
