import React from 'react'

import vocalContracting from '/edieImages/edie14.jpeg'
import musician from '/edieImages/edie3.jpeg'
import vocalCoaching from '/edieImages/edie13.jpeg'
import singing from '/edieImages/edie1.jpeg'
import conducting from '/edieImages/edie8.jpeg'
import something from '/edieImages/edie4.jpeg'

import JobTitleCard from './JobTitleCard'

export default function RolesAndHighlights() {
  return (
    <div id='roles-&-highlights'>
        <div className='flex px-16 py-4 mb-12 w-full items-center justify-center border-y-[8px] border-terracotta'>
            <div className='wlg text-4xl pl-8 flex justify-start text-start text-black font-semibold'>
                Roles & Highlights
            </div>
        </div>
        <JobTitleCard bgColor={"#5C8E5C"} alignment={'left'} title={"Vocal Contractor"} tag={"vocal-contractor"} description={"This will be a short blurb about how amazing and profoundly influential of a vocal contractor Edie Lehmann Boddicker is"} image={vocalContracting} imageDescription={"A short and descriptive section describing the above picture, its context and relation to the relevant job title"} featuredWorks={[]} />
        <JobTitleCard bgColor={"#BB602F"} alignment={'right'} title={"Vocalist"} tag={"vocalist"} description={"This will be a short blurb about how amazing and profoundly influential of a vocalist Edie Lehmann Boddicker is"} image={singing} imageDescription={"A short and descriptive section describing the above picture, its context and relation to the relevant job title"} featuredWorks={[]} />
        
        <JobTitleCard bgColor={"#45848A"} alignment={'left'} title={"Conductor"} tag={"conductor"} description={"This will be a short blurb about how amazing and profoundly influential of a conductor Edie Lehmann Boddicker is"} image={conducting} imageDescription={"A short and descriptive section describing the above picture, its context and relation to the relevant job title"} featuredWorks={[]} />
        <JobTitleCard bgColor={"#D2AD2B"} alignment={'right'} title={"Vocal Coach"} tag={"vocal-coach"} description={"This will be a short blurb about how amazing and profoundly influential of a vocal coach Edie Lehmann Boddicker is"} image={vocalCoaching} imageDescription={"A short and descriptive section describing the above picture, its context and relation to the relevant job title"} featuredWorks={[]} />
        <JobTitleCard bgColor={"#6EB7B4"} alignment={'left'} title={"Musician"} tag={"musician"} description={"This will be a short blurb about how amazing and profoundly influential of a musician Edie Lehmann Boddicker is"} image={musician} imageDescription={"A short and descriptive section describing the above picture, its context and relation to the relevant job title"} featuredWorks={[]} />
        <JobTitleCard bgColor={"#A1432A"} alignment={'right'} title={"One more"} tag={"something"} description={"she does something else"} image={something} imageDescription={"A short and descriptive section describing the above picture, its context and relation to the relevant job title"} featuredWorks={[]} />
    </div>
  )
}
