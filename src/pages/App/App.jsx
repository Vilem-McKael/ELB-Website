import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

// Components
import SideBar2 from '../../components/SideBar/SideBar2'
import Header from '../../components/Header/Header'
import HomePage from '../../pages/HomePage/HomePage'
import AboutPage from '../AboutPage/AboutPage'
import CreditsPage from '../../pages/CreditsPage/CreditsPage'
import GalleryPage from '../GalleryPage2/GalleryPage2'
import ContactPage from '../../pages/ContactPage/ContactPage'
import WatchPage from '../VideoPage/VideoPage'
import LookPage from '../GalleryPage/GalleryPage'
import ListenPage from '../AudioPage/AudioPage'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import BurgerBar from '../../components/NavBar/BurgerBar'
import SlideOutMenu from '../../components/SideBar/SlideOutMenu'

function App() {

  // const [isShowingHomePage, setIsShowingHomePage] = useState(true)
  const [currentPage, setCurrentPage] = useState("Home")
  const [isShowingBurgerMenu, setIsShowingBurgerMenu] = useState(false)
  const [isShowingSlideOutMenu, setIsShowingSlideOutMenu] = useState(false)

  const widthBoundary = 960

  function updateCurrentPage(newPage) {
    setCurrentPage(newPage)
  }

  function updateIsShowingSlideOutMenu(bool) {
    setIsShowingSlideOutMenu(bool)
  }

  function checkScreenSize(width) {
      if (width > widthBoundary && isShowingBurgerMenu) {
        setIsShowingBurgerMenu(false)
        setIsShowingSlideOutMenu(false)
      } else if (!isShowingBurgerMenu && width <= widthBoundary)  {
        setIsShowingBurgerMenu(true)
      }
  }

  function closeSlideOutMenu() {
    if (isShowingSlideOutMenu) {
      setIsShowingSlideOutMenu(false)
    }
  }

  useEffect(() => {

    const width = window.innerWidth
    if (width > widthBoundary && isShowingBurgerMenu) {
      setIsShowingBurgerMenu(false)
      setIsShowingSlideOutMenu(false)
    } else if (!isShowingBurgerMenu && width <= widthBoundary)  {
      setIsShowingBurgerMenu(true)
    }  

      const listener = () => checkScreenSize(window.innerWidth)
      window.addEventListener('resize', listener)

      return () => window.removeEventListener('resize', listener)
  })

  return (
    <div className='h-full w-full'>
      <main className='App font-zilla'>
      {/* bg-gradient-to-b from-white to-[#eeeeee] */}
        <div>

        </div>
        <div className='h-full w-full'>
          {isShowingBurgerMenu ?
          <div id="burgerBar">
            <BurgerBar currentPage={currentPage} updateCurrentPage={updateCurrentPage} isShowingSlideOutMenu={isShowingSlideOutMenu} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu}/>
          </div>
          :
          <div id="navbar">
            <NavBar currentPage={currentPage} updateCurrentPage={updateCurrentPage}/>
          </div>
          }
          {/* <div id="sidebar">
            <SideBar2 currentPage={currentPage} updateCurrentPage={updateCurrentPage}/>
            <div className='w-[160px] h-full'></div>
          </div> */}
          <div className='h-full w-full flex flex-row justify-center'>
            <div className='h-full w-[400px] sm:w-[600px] md:w-[800px] lg:w-[1000px] max-w-[1200px] pt-[150px]' onClick={closeSlideOutMenu}>
              <Routes>
                <Route path='/*' element={<HomePage />}/>
                <Route path='/about' element={<AboutPage />}/>
                <Route path='/credits' element={<CreditsPage />}/>
                <Route path='/audio' element={<ListenPage />} />
                <Route path='/videos' element={<WatchPage />} />
                <Route path='/gallery' element={<LookPage />} />
                <Route path='/contact' element={<ContactPage />} />
              </Routes>
            </div>
            <SlideOutMenu currentPage={currentPage} updateCurrentPage={updateCurrentPage} isVisible={isShowingSlideOutMenu} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu} />
          </div>
        </div>
      </main>
    </div>
  )
}


export default App
