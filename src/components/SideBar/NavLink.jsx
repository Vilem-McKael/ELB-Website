import React from 'react'
import { Link } from 'react-router-dom'

export default function NavLink({title, to, iconName}) {
    // className='flex flex-row items-center'
  return (
    <div className='transform hover:scale-105 duration-100 mt-2'>
        <Link to={to}><i className={`flaticon-${iconName} w-[20px] h-[20px] pr-2`}/>{title}</Link>
    </div>
  )
}
