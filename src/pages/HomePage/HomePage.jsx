import React from 'react'
import Header from '../../components/Header/Header'
import NavBar from '../../components/SideBar/SideBar'

import '../App/App.css'

export default function HomePage() {
  return (
    <div className="w-full h-full bg-[url('/edieImages/edieplaceholder.jpeg')] bg-center bg-cover">
        <div className='flex flex-col items-center justify-center w-full h-full'>
            <div className='w-full text-8xl text-[ivory] text-center bg-black bg-opacity-75 font-medium px-8'>
                Edie Lehmann Boddicker
            </div>
            <div className='w-full text-2xl text-[ivory] text-center py-4 bg-black bg-opacity-100 mb-2 font-light px-8'>
                Vocal Contractor   /   Conductor   /   Vocalist
            </div>
        </div>
    </div>
  )
}
