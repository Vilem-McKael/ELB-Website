import React from 'react'
import HomeHeader from '../../components/Home/HomeHeader/HomeHeader'
import HomeHeader2 from '../../components/Home/HomeHeader/HomeHeader2'
import HomeHeader3 from '../../components/Home/HomeHeader/HomeHeader3'
import JobTitleCard from '../../components/Home/JobTitleCard'

import JobTitleNavigation from '../../components/Home/JobTitleNavigation'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'

import facebook from '../../assets/socialLogos/facebookLogo.png'
import instagram from '../../assets/socialLogos/instagramLogo.png'
import linkedIn from '../../assets/socialLogos/linkedInLogo.png'
import imdb from '../../assets/socialLogos/imdbLogo.webp'
import SocialButton from '../../components/SideBar/SocialButton/SocialButton'
import { HashLink } from 'react-router-hash-link'
import HomeBio from '../../components/Home/HomeBio'
import FeaturedCredits from '../../components/Home/FeaturedCredits'
import UpAndComing from '../../components/Home/UpAndComing'
import StudioCollaborations from '../../components/Home/StudioCollaborations'
import RolesAndHighlights from '../../components/Home/RolesAndHighlights'

export default function HomePage2() {
    //  bg-[url('/pebbleBackground.jpeg')] bg-cover
  return (
    <div className="flex flex-col w-full items-center bg-light7">
        <HomeHeader3 />
        {/* <HomeBio /> */}
        <StudioCollaborations />
        <UpAndComing />
        <FeaturedCredits />
        {/* <JobTitleNavigation /> */}
        <RolesAndHighlights />
        
        <div className='w-full h-[300px] flex flex-col justify-center items-center'>
            <div className='pb-4'>Some more information about Edie!</div>
            <div className='pb-4'>Follow or reach out to Edie on the following platforms:</div>
            <div className='flex flex-row w-full px-12 justify-evenly'>
                <div>
                    
                    <SocialButton to={"https://www.linkedin.com/in/edie-lehmann-boddicker-31625a14/"} logo={linkedIn}/>
                    LinkedIn
                </div>
                <div>
                    
                    <SocialButton to={"https://www.instagram.com/edielehbod/"} logo={instagram}/>
                    Instagram
                </div>
                <div>
                   
                    
                    <SocialButton to={"https://www.facebook.com/e.lehbod"} logo={facebook}/>
                    Facebook
                </div>
                <div>
                    
                    <SocialButton to={"https://www.imdb.com/name/nm0090798/"} logo={imdb}/>
                    IMDB
                </div>
            </div>
            <div className='flex flex-col items-center mt-4'>
                Or send a message by clicking below:<br />
                <Link to={"/contact"} className='mt-2 p-2 bg-black text-white rounded-lg'>Contact Edie</Link>
            </div>
            
        </div>
        <HashLink smooth to="/#home-header" className='text-black bg-gray-100 hover:text-white hover:bg-black w-full h-[80px] flex items-center justify-center border-black border-t-[1px]'>
        Back to Top
        </HashLink>
        <Footer />
    </div>
  )
}
