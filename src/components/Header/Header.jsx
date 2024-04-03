import React from 'react'
import { Link } from 'react-router-dom'
import facebook from '../../assets/socialLogos/facebookLogo.png'
import instagram from '../../assets/socialLogos/instagramLogo.png'
import linkedIn from '../../assets/socialLogos/linkedInLogo.png'
import mail from '../../assets/socialLogos/mail.png'
import SocialButton from '../SideBar/SocialButton/SocialButton'

export default function Header() {
  return (
    <div className='flex flex-col items-center justify-center w-full'>
        <div className='text-4xl mt-8'>
            Edie Lehmann Boddicker
        </div>
        <div className='text-sm italic'>
            Vocal Contractor  |  Vocalist  |  Conductor
        </div>
        <div className='flex flex-row mt-4 justify-between'>
            <SocialButton to={"https://www.linkedin.com/in/edie-lehmann-boddicker-31625a14/"} logo={linkedIn}/>
            <SocialButton to={"https://www.facebook.com/e.lehbod"} logo={facebook}/>
            {/* <SocialButton name={"https://www.instagram.com/edielehbod/"} logo={instagram}/> */}
            <SocialButton name={"mailto:elbsing@aol.com?"} logo={mail}/>
        </div>
    </div>
  )
}
