import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBarLink({title, to, iconName, currentPage, updateCurrentPage, updateIsShowingSlideOutMenu}) {

    function handleOnClick() {
        updateIsShowingSlideOutMenu(false)
        updateCurrentPage(title)
    }
    // className='flex flex-row items-center'
    
  return (
    <div className='font-regular flex justify-center w-full h-[50px] hover:bg-indigo1 hover:text-light7 transform hover:scale-105 duration-200'>
        <Link to={to} onClick={handleOnClick} className='flex flex-row items-center'><i className={`flaticon-${iconName} h-[28px] pt-1 pr-2`}/><div className='transform origin-center'>{title}</div></Link>
    </div>
  )
}
