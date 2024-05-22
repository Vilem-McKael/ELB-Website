import { useEffect, useState, useCallback } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

// Components
import HomePage from '../HomePage/HomePage'
import AboutPage from '../AboutPage/AboutPage'
import CreditsPage from '../../pages/CreditsPage/CreditsPage'
import ContactPage from '../../pages/ContactPage/ContactPage'
import NavBar from '../../components/NavBar/NavBar'
import BurgerBar from '../../components/NavBar/BurgerBar'
import SlideOutMenu from '../../components/SlideOutMenu/SlideOutMenu'
import MobileBurgerMenu from '../../components/NavBar/MobileBurgerMenu'
import MediaPage from '../MediaPage/MediaPage'
import LandscapeMobileMenu from '../../components/NavBar/LandscapeMobileMenu'

function App() {

  const [currentPage, setCurrentPage] = useState("Home")
  const [isShowingSlideOutMenu, setIsShowingSlideOutMenu] = useState(false)
  const [screenSize, setScreenSize] = useState(null)

  

  const burgerWidthBoundary = 800
  const mobileWidthBoundary = 640
  const mobileLandscapeHeightBoundary = 500

  const updateCurrentPage = useCallback((newPage) => {
    setCurrentPage(newPage)
  }, [])

  const updateIsShowingSlideOutMenu = useCallback((bool) => {
    setIsShowingSlideOutMenu(bool)
  }, [])



  const checkScreenSize = useCallback(() => {
      const width = document.documentElement.clientWidth
      const height = document.documentElement.clientHeight
      console.log("Window sizes: ", window.innerWidth, window.innerHeight)
      console.log("CSS sizes: ", document.documentElement.clientWidth, document.documentElement.clientHeight)
      console.log("Device pixel ratio: ", window.devicePixelRatio)
      console.log("Effective css width: ", width / window.devicePixelRatio)
      if (height < mobileLandscapeHeightBoundary && screenSize != 'mobileLandscape') {
        setScreenSize('mobileLandscape')
      } else if (height >= mobileLandscapeHeightBoundary) {
        if (width > burgerWidthBoundary && screenSize != 'large') {
          setScreenSize('large')
          if (isShowingSlideOutMenu) {
            
            setIsShowingSlideOutMenu(false)
          }
        } else if (width <= burgerWidthBoundary && width > mobileWidthBoundary && height > mobileLandscapeHeightBoundary && screenSize != 'medium')  {
          setScreenSize('medium')
        } else if (width <= mobileWidthBoundary && screenSize != 'mobile') {
          setScreenSize('mobile')
        }
      }
    }, [burgerWidthBoundary, mobileWidthBoundary, mobileLandscapeHeightBoundary])

  const NavBarComponent = () => {
    console.log(screenSize)
    switch(screenSize) {
      case 'large':
        closeSlideOutMenu()
        return <NavBar currentPage={currentPage} updateCurrentPage={updateCurrentPage} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu}/>
      case 'medium':
        return <BurgerBar currentPage={currentPage} updateCurrentPage={updateCurrentPage} isShowingSlideOutMenu={isShowingSlideOutMenu} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu}/>
      case 'mobileLandscape':
        return <LandscapeMobileMenu currentPage={currentPage} updateCurrentPage={updateCurrentPage} isShowingSlideOutMenu={isShowingSlideOutMenu} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu}/>
      case 'mobile':
        return <MobileBurgerMenu currentPage={currentPage} updateCurrentPage={updateCurrentPage} isShowingSlideOutMenu={isShowingSlideOutMenu} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu}/>
      default:
        return null
    }
   
  }

  const [navBar, setNavBar] = useState(<NavBar currentPage={currentPage} updateCurrentPage={updateCurrentPage} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu}/>)


  function closeSlideOutMenu() {
    if (isShowingSlideOutMenu) {
      setIsShowingSlideOutMenu(false)
    }
  }

  useEffect(() => {

    const listener = () => checkScreenSize()
    window.addEventListener('resize', listener)

    checkScreenSize()

    return () => window.removeEventListener('resize', listener)
  }, [checkScreenSize])

  return (
    <div className='h-full w-full bar'>
      <main className='App font-zilla'>
      {/* bg-gradient-to-b from-white to-[#eeeeee] */}
        <div>
        {<NavBarComponent />}
        </div>
        <div className='h-full w-full'>
          <div className='h-full w-full flex flex-row justify-center'>
          {/*  sm:w-[600px] md:w-[1000px] max-w-[1200px] */}
            <div className='h-full w-full pt-[80px] mobileLandscape:pt-0 sm:pt-[150px]' onClick={closeSlideOutMenu}>
              <Routes>
                <Route path='/*' element={<HomePage />}/>
                <Route path='/about' element={<AboutPage />}/>
                <Route path='/credits' element={<CreditsPage />}/>
                <Route path='/media' element={<MediaPage screenSize={screenSize}/>}/> 
                <Route path='/contact' element={<ContactPage />} />
              </Routes>
            </div>
            <SlideOutMenu screenSize={screenSize} currentPage={currentPage} updateCurrentPage={updateCurrentPage} isVisible={isShowingSlideOutMenu} updateIsShowingSlideOutMenu={updateIsShowingSlideOutMenu} />
          </div>
        </div>
      </main>
    </div>
  )
}


export default App
