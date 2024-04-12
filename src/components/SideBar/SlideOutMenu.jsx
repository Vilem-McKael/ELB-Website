import React from 'react'
import NavBarLink from '../NavBar/NavBarLink'

export default function SlideOutMenu({currentPage, updateCurrentPage, isVisible, updateIsShowingSlideOutMenu}) {

    function handleCloseMenu() {
        updateIsShowingSlideOutMenu(false)
    }

  return (
    <>
    {isVisible ?
    <div className='h-full w-[150px] bg-light7 flex flex-col px-4 text-black pt-[150px] fixed right-0 z-40 border-l-[1px] border-black'>
        <div className='mt-8 border-y-[1px] border-black w-full'>
        <NavBarLink title={"Home"} to={"/"} iconName={"home"} currentPage={currentPage} updateCurrentPage={updateCurrentPage} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu}/>
        </div>
        <div className='border-b-[1px] border-black w-full'>
            <NavBarLink title={"About"} to={"/about"} iconName={"info-1"} currentPage={currentPage} updateCurrentPage={updateCurrentPage} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu}/>
        </div>
        <div className='border-b-[1px] border-black w-full'>
            <NavBarLink title={"Credits"} to={"/credits"} iconName={"person-1"} currentPage={currentPage} updateCurrentPage={updateCurrentPage} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu}/>
        </div>
        <div className='border-b-[1px] border-black w-full'>
            <NavBarLink title={"Audio"} to={"/audio"} iconName={"microphone-1"} currentPage={currentPage} updateCurrentPage={updateCurrentPage} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu}/>
        </div>
        <div className='border-b-[1px] border-black w-full'>
            <NavBarLink title={"Videos"} to={"/videos"} iconName={"online-video"} currentPage={currentPage} updateCurrentPage={updateCurrentPage} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu}/>
        </div>
        <div className='border-b-[1px] border-black w-full'>
            <NavBarLink title={"Gallery"} to={"/gallery"} iconName={"image-gallery-1"} currentPage={currentPage} updateCurrentPage={updateCurrentPage} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu}/>
        </div>
        <div className='border-b-[1px] border-black w-full'>
            <NavBarLink title={"Contact"} to={"/contact"} iconName={"contact-mail"} currentPage={currentPage} updateCurrentPage={updateCurrentPage} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu}/>
        </div>
        <div className='text-center pt-8 cursor-pointer group' onClick={handleCloseMenu}>
            <i className='flaticon-next-1 text-black text-2xl transform group-hover:text-3xl duration-100'></i>
            <div className='text-black text-sm'>Close Menu</div>
        </div>
    </div>
    :
    <></>
    }
    </>
  )
}
