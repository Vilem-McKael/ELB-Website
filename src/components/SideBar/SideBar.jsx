import React from 'react'
import { Link } from 'react-router-dom'
import SocialButton from '../Header/SocialButton/SocialButton'
import facebook from '../../assets/socialLogos/facebookLogo.png'
import instagram from '../../assets/socialLogos/instagramLogo.png'
import linkedIn from '../../assets/socialLogos/linkedInLogo.png'
import mail from '../../assets/socialLogos/mail.png'
import NavLink from './NavLink'

export default function SideBar() {
  return (
    <div className='flex flex-col justify-start h-full w-[200px] text-black border-black border-r-[1px] bg-gray-200 fixed'>

      <div className='flex flex-col items-center mt-8'>
          <Link to="/"><img src="/logo.png" className='w-[100px] h-[100px]'/></Link>
          <div className='flex flex-row mt-4'>
          <SocialButton to={"https://www.linkedin.com/in/edie-lehmann-boddicker-31625a14/"} logo={linkedIn}/>
            <SocialButton to={"https://www.facebook.com/e.lehbod"} logo={facebook}/>
            <SocialButton name={"https://www.instagram.com/edielehbod/"} logo={instagram}/>
            {/* <SocialButton name={"mailto:elbsing@aol.com?"} logo={mail}/> */}
          </div>
        {/* <div className='text-2xl'>
          Edie LB
        </div> */}
        {/* <div className='text-xl'>
          Lehmann Boddicker
        </div> */}
        {/* <div className='text-xs italic'>
          Contractor / Conductor / Vocalist
        </div> */}
      </div>

      <div className='flex flex-col items-left pl-10 mt-16 text-xl gap-2 font-medium'>
        <NavLink title={"Home"} to={"/"} iconName={"home"}/>
        <NavLink title={"About"} to={"/about"} iconName={"info-1"}/>
        <NavLink title={"Credits"} to={"/credits"} iconName={"person-1"}/>
        <NavLink title={"Gallery"} to={"/gallery"} iconName={"image-gallery-1"}/>
        <NavLink title={"Contact"} to={"/contact"} iconName={"contact-mail"}/>
      </div>
    </div>
  )
}
