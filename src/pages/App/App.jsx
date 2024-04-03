import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

// Components
import SideBar2 from '../../components/SideBar/SideBar2'
import Header from '../../components/Header/Header'
import HomePage from '../../pages/HomePage/HomePage'
import AboutPage from '../AboutPage/AboutPage'
import CreditsPage from '../../pages/CreditsPage/CreditsPage'
import GalleryPage from '../../pages/GalleryPage/GalleryPage'
import ContactPage from '../../pages/ContactPage/ContactPage'
import WatchPage from '../WatchPage/WatchPage'
import LookPage from '../LookPage/LookPage'
import ListenPage from '../ListenPage/ListenPage'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'

function App() {

  // const [isShowingHomePage, setIsShowingHomePage] = useState(true)
  const [currentPage, setCurrentPage] = useState("Home")

  function updateCurrentPage(newPage) {
    setCurrentPage(newPage)
  }

  return (
    <main className='App font-montserrat'>
    {/* bg-gradient-to-b from-white to-[#eeeeee] */}
      <div className='h-full w-full'>
        <div id="navbar">
          <NavBar currentPage={currentPage} updateCurrentPage={updateCurrentPage}/>
        </div>
        {/* <div id="sidebar">
          <SideBar2 currentPage={currentPage} updateCurrentPage={updateCurrentPage}/>
          <div className='w-[160px] h-full'></div>
        </div> */}
        <div className='h-full w-full flex justify-center'>
          <div className='h-full w-[400px] sm:w-[600px] md:w-[800px] lg:w-[1000px] max-w-[1200px] pt-[50px]'>
            <Routes>
              <Route path='/*' element={<HomePage />}/>
              <Route path='/about' element={<AboutPage />}/>
              <Route path='/credits' element={<CreditsPage />}/>
              <Route path='/listen' element={<ListenPage />} />
              <Route path='/watch' element={<WatchPage />} />
              <Route path='/look' element={<LookPage />} />
              <Route path='/contact' element={<ContactPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </main>
  )
}


export default App
