import React from 'react'
import CompanyCard from './CompanyCard'

export default function StudioCollaborations() {
  return (
    <div id='studio-collaborations' className='w-full flex flex-col items-center'>
        <div className='flex px-16 py-4 mb-12 w-full items-center justify-center border-y-[8px] border-darkBlue3  bg-darkBlue3/5'>
            <div className='wlg text-4xl pl-8 flex justify-start text-start text-black font-semibold'>
                Studio Collaborations
            </div>
        </div>
        <div className='grid grid-cols-6 px-16 py-16 w-[1100px] gap-y-8'>
            <CompanyCard className=''>Netflix</CompanyCard>
            <CompanyCard>Hulu</CompanyCard>
            <CompanyCard>HBO</CompanyCard>
            <CompanyCard>Activision/Blizzard</CompanyCard>
            <CompanyCard>Walt Disney Studios</CompanyCard>
            <CompanyCard>Epic Games</CompanyCard>
            <CompanyCard>Warner Bros.</CompanyCard>
            <CompanyCard>20th Century Fox</CompanyCard>
            <CompanyCard>Sony Pictures</CompanyCard>
            <CompanyCard>Paramount Pictures</CompanyCard>
            <CompanyCard>Universal Pictures</CompanyCard>
            <CompanyCard>LionsGate</CompanyCard>
            <CompanyCard>MGM Studios</CompanyCard>
            <CompanyCard>A24?</CompanyCard>
            <CompanyCard>New Line Cinema?</CompanyCard>
            <CompanyCard>DreamWorks Animation</CompanyCard>
            <CompanyCard>Pixar Studios</CompanyCard>
            <CompanyCard>Miramax Films</CompanyCard>
            <CompanyCard>Lucasfilm</CompanyCard>
            <CompanyCard>Marvel Studios</CompanyCard>
            <CompanyCard>Pixar Studios</CompanyCard>
            <CompanyCard>Miramax Films</CompanyCard>
            <CompanyCard>Lucasfilm</CompanyCard>
            <CompanyCard>Marvel Studios</CompanyCard>
        </div>
    </div>
  )
}
