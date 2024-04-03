import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBarLink({title, to, iconName, currentPage, updateCurrentPage}) {

    function handleOnClick() {
        updateCurrentPage(title)
    }
    // className='flex flex-row items-center'
    
  return (
    <div className='font-regular flex justify-center w-[100px] h-[50px] hover:bg-white hover:text-black'>
        <Link to={to} onClick={handleOnClick} className='flex flex-row items-center'><i className={`flaticon-${iconName} h-[28px] pt-1 pr-2`}/><div className='transform origin-center hover:scale-[1.05] duration-100'>{title}</div></Link>
    </div>
  )
}
