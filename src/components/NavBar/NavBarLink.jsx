import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBarLink({title, to, iconName, tabColor, tabClass, currentPage, updateCurrentPage, updateIsShowingSlideOutMenu}) {

    function handleOnClick() {
        updateIsShowingSlideOutMenu(false)
        updateCurrentPage(title)
    }
    // className='flex flex-row items-center'
    
  return (
    <div className={`font-regular flex flex-col justify-between items-center w-full h-[50px] ${tabClass}`}>
        <Link to={to} onClick={handleOnClick} className='flex flex-row items-center mt-2'><i className={`flaticon-${iconName} h-[28px] pt-1 pr-2`}/><div className='transform origin-center'>{title}</div></Link>
        <div className='w-full h-[4px] rounded-t-full' style={{backgroundColor: tabColor}}></div>
    </div>
  )
}
