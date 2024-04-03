import React from 'react'
import NavBarLink from './NavBarLink'
import edieLogo from '/logoWhite.png'
import { Link } from 'react-router-dom'

export default function NavBar({currentPage, updateCurrentPage}) {
  return (
    <div id="top" className='flex w-full h-[50px] justify-between items-center fixed bg-black text-white pl-8 pr-4'>
        <div className='flex flex-row items-center'>
            <Link to='/'>
                <img src={edieLogo} className='h-[50px]'/>
            </Link>
            {/* <div>
                Edie Lehmann Boddicker
            </div> */}
        </div>
        <div className='flex flex-row gap-6'>
            <div className=''>
                <NavBarLink title={"Home"} to={"/"} iconName={"home"} currentPage={currentPage} updateCurrentPage={updateCurrentPage}/>
            </div>
            <div className=''>
                <NavBarLink title={"About"} to={"/about"} iconName={"info-1"} currentPage={currentPage} updateCurrentPage={updateCurrentPage}/>
            </div>
            <div className=''>
                <NavBarLink title={"Credits"} to={"/credits"} iconName={"person-1"} currentPage={currentPage} updateCurrentPage={updateCurrentPage}/>
            </div>
            <div className=''>
                <NavBarLink title={"Listen"} to={"/listen"} iconName={"microphone-1"} currentPage={currentPage} updateCurrentPage={updateCurrentPage}/>
            </div>
            <div className=''>
                <NavBarLink title={"Watch"} to={"/watch"} iconName={"online-video"} currentPage={currentPage} updateCurrentPage={updateCurrentPage}/>
            </div>
            <div className=''>
                <NavBarLink title={"Look"} to={"/look"} iconName={"image-gallery-1"} currentPage={currentPage} updateCurrentPage={updateCurrentPage}/>
            </div>
            <div className=''>
                <NavBarLink title={"Contact"} to={"/contact"} iconName={"contact-mail"} currentPage={currentPage} updateCurrentPage={updateCurrentPage}/>
            </div>
        </div>
    </div>
  )
}
