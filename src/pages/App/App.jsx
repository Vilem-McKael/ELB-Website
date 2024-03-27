import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

// Components
import SideBar from '../../components/SideBar/SideBar'
import Header from '../../components/Header/Header'
import HomePage from '../../pages/HomePage/HomePage'
import AboutPage from '../AboutPage/AboutPage'
import CreditsPage from '../../pages/CreditsPage/CreditsPage'
import GalleryPage from '../../pages/GalleryPage/GalleryPage'
import ContactPage from '../../pages/ContactPage/ContactPage'

function App() {

  // const [isShowingHomePage, setIsShowingHomePage] = useState(true)
  const [currentPage, setCurrentPage] = useState("home")

  return (
    <main className='App font-montserrat'>
      <div className='flex flex-row h-full w-full'>
        <div id="sidebar">
          <SideBar />
          <div className='w-[200px] h-full'></div>
        </div>
        <div className='h-full w-full'>
          <Routes>
            <Route path='/*' element={<HomePage />}/>
            <Route path='/about' element={<AboutPage />}/>
            <Route path='/credits' element={<CreditsPage />}/>
            <Route path='/gallery' element={<GalleryPage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
        </div>
      </div>
    </main>
  )
}


export default App
