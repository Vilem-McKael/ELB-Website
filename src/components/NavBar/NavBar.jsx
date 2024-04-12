import React from 'react'
import NavBarLink from './NavBarLink'
import edieLogo from '/logoWhite.png'
import { Link } from 'react-router-dom'
import SocialButton from '../SideBar/SocialButton/SocialButton'

import facebook from '../../assets/socialLogos/facebookLogo.png'
import instagram from '../../assets/socialLogos/instagramLogo.png'
import linkedIn from '../../assets/socialLogos/linkedInLogo.png'
import imdb from '../../assets/socialLogos/imdbLogo.webp'

export default function NavBar({currentPage, updateCurrentPage}) {
  return (
    <div id="top" className='flex w-full h-[150px] justify-between items-end fixed bg-light7 border-b-[1px] border-black text-black pl-8 pr-4 z-50'>

            <Link to='/' className='flex flex-row items-end pb-4'>
                <img src={'/deruta/deruta tile.webp'} className='w-[80px] h-[80px]'/>
                <div className='flex-col justify-center text-xl text-black text-leading bg-opacity-95 font-normal pl-4 w-full h-[80px]'>
                    <div className=''>
                        <span className='text-2xl font-medium text-gold4 leading-[0.9]'>E</span>die
                    </div>
                    <div className='pl-4'>
                        <span className='text-2xl font-medium text-teal4 leading-[0.9]'>L</span>ehmann
                    </div>
                    <div className='pl-8'>
                        <span className='text-2xl font-medium text-burntOrange4 leading-[0.9]'>B</span>oddicker
                    </div>
                </div>
            </Link>
            {/* <Link to='/'>
                <img src={edieLogo} className='h-[50px]'/>
            </Link> */}
            {/* <div>
                Edie Lehmann Boddicker
            </div> */}
        <div className='flex flex-col items-end'>
            <div className='flex flex-row gap-6 pb-3'>
                <SocialButton to={"https://www.linkedin.com/in/edie-lehmann-boddicker-31625a14/"} logo={linkedIn}/>
                <SocialButton to={"https://www.instagram.com/edielehbod/"} logo={instagram}/>
                <SocialButton to={"https://www.facebook.com/e.lehbod"} logo={facebook}/>
                <SocialButton to={"https://www.imdb.com/name/nm0090798/"} logo={imdb}/>
            </div>
            <div className='flex flex-row w-full'>
                <div className='border-x-[1px] border-black w-[96px]'>
                    <NavBarLink title={"Home"} to={"/"} iconName={"home"} currentPage={currentPage} updateCurrentPage={updateCurrentPage}/>
                </div>
                <div className='border-r-[1px] border-black w-[96px]'>
                    <NavBarLink title={"About"} to={"/about"} iconName={"info-1"} currentPage={currentPage} updateCurrentPage={updateCurrentPage}/>
                </div>
                <div className='border-r-[1px] border-black w-[96px]'>
                    <NavBarLink title={"Credits"} to={"/credits"} iconName={"person-1"} currentPage={currentPage} updateCurrentPage={updateCurrentPage}/>
                </div>
                <div className='border-r-[1px] border-black w-[96px]'>
                    <NavBarLink title={"Audio"} to={"/audio"} iconName={"microphone-1"} currentPage={currentPage} updateCurrentPage={updateCurrentPage}/>
                </div>
                <div className='border-r-[1px] border-black w-[96px]'>
                    <NavBarLink title={"Videos"} to={"/videos"} iconName={"online-video"} currentPage={currentPage} updateCurrentPage={updateCurrentPage}/>
                </div>
                <div className='border-r-[1px] border-black w-[96px]'>
                    <NavBarLink title={"Gallery"} to={"/gallery"} iconName={"image-gallery-1"} currentPage={currentPage} updateCurrentPage={updateCurrentPage}/>
                </div>
                <div className='border-r-[1px] border-black w-[96px]'>
                    <NavBarLink title={"Contact"} to={"/contact"} iconName={"contact-mail"} currentPage={currentPage} updateCurrentPage={updateCurrentPage}/>
                </div>
            </div>
        </div>
    </div>
  )
}
