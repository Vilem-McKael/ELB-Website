import { useEffect, useState, useCallback } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

// Components
import SideBar2 from '../../components/SideBar/SideBar2'
import Header from '../../components/Header/Header'
import HomePage from '../../pages/HomePage/HomePage'
import HomePage2 from '../../pages/HomePage/HomePage2'
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
import MobileBurgerMenu from '../../components/NavBar/MobileBurgerMenu'

function App() {

  const [currentPage, setCurrentPage] = useState("Home")
  const [isShowingSlideOutMenu, setIsShowingSlideOutMenu] = useState(false)
  const [screenSize, setScreenSize] = useState('large')

  const burgerWidthBoundary = 960
  const mobileWidthBoundary = 450

  const updateCurrentPage = useCallback((newPage) => {
    setCurrentPage(newPage)
  }, [])

  const updateIsShowingSlideOutMenu = useCallback((bool) => {
    setIsShowingSlideOutMenu(bool)
  }, [])



  const checkScreenSize = useCallback(() => {
      const width = document.documentElement.clientWidth
      console.log("Window width: ", window.innerWidth)
      console.log("CSS Width: ", document.documentElement.clientWidth)
      console.log("Device pixel ratio: ", window.devicePixelRatio)
      console.log("Effective css width: ", width / window.devicePixelRatio)
      if (width > burgerWidthBoundary) {
        setScreenSize('large')
        if (isShowingSlideOutMenu) {
          setIsShowingSlideOutMenu(false)
        }
      } else if (width <= burgerWidthBoundary && width > mobileWidthBoundary)  {
        setScreenSize('medium')

      } else if (width <= mobileWidthBoundary) {
        setScreenSize('mobile')
      }
  }, [burgerWidthBoundary, mobileWidthBoundary])

  function getNavBar() {
    console.log(screenSize)
    switch(screenSize) {
      case 'large':
        closeSlideOutMenu()
        return <NavBar currentPage={currentPage} updateCurrentPage={updateCurrentPage} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu}/>
      case 'medium':
        return <BurgerBar currentPage={currentPage} updateCurrentPage={updateCurrentPage} isShowingSlideOutMenu={isShowingSlideOutMenu} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu}/>
      case 'mobile':
        return <MobileBurgerMenu currentPage={currentPage} updateCurrentPage={updateCurrentPage} isShowingSlideOutMenu={isShowingSlideOutMenu} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu}/>
      default:
        return null
    }
   
  }


  function closeSlideOutMenu() {
    if (isShowingSlideOutMenu) {
      setIsShowingSlideOutMenu(false)
    }
  }

  useEffect(() => {

    checkScreenSize()

    const listener = () => checkScreenSize()
    window.addEventListener('resize', listener)

    return () => window.removeEventListener('resize', listener)
  }, [checkScreenSize])

  return (
    <div className='h-full w-full'>
      <main className='App font-zilla'>
      {/* bg-gradient-to-b from-white to-[#eeeeee] */}
        <div>
        {getNavBar()}
        </div>
        <div className='h-full w-full'>
          <div className='h-full w-full flex flex-row justify-center'>
          {/*  sm:w-[600px] md:w-[1000px] max-w-[1200px] */}
            <div className={`h-full w-full sm:pt-[150px]`} onClick={closeSlideOutMenu}>
              <Routes>
                <Route path='/*' element={<HomePage2 />}/>
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
