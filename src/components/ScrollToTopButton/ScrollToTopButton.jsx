import classNames from 'classnames'
import React, { useEffect, useState } from 'react'

export default function ScrollToTopButton() {

    const [isShowingScrollToTop, setIsShowingScrollToTop] = useState(false)

    const handleOnClick = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    const doNothing = () => {
        return
    }

    const updateIsShowingScrollToTop = () => {
        if (!isShowingScrollToTop && window.scrollY > 200) {
          setIsShowingScrollToTop(true)
        } else if (window.scrollY < 200) {
          setIsShowingScrollToTop(false)
        }
      }

      useEffect(() => {

            
        const scrollListener = () => updateIsShowingScrollToTop()
        window.addEventListener('scroll', scrollListener)
        
        return () => {
            window.removeEventListener('scroll', scrollListener)
        }

      }, [])

  return (
    <>
    
    {isShowingScrollToTop &&
        <div className='fixed bottom-4 right-4 z-20'>
        <div className={
            'bg-teal4 text-light7 flex items-center justify-center h-[45px] w-[45px] pl-[6px] pb-[2px] rounded-full transition-opacity ease-in-out transform duration-300 opacity-100 visible scale-100 cursor-pointer'}
        onClick={isShowingScrollToTop ? handleOnClick : doNothing}>
            <i className='flaticon-right-arrow rotate-[-90deg] text-xl' />
        </div>
        </div>
    }
        {/* <div className={classNames(
            'bg-teal4 text-light7 flex items-center justify-center h-[45px] w-[45px] pl-[6px] pb-[2px] rounded-full transition-opacity ease-in-out transform duration-300',
            {
                'opacity-100 visible scale-100 cursor-pointer': isShowingScrollToTop,
                'opacity-0 invisible scale-95 pointer-events-none' : !isShowingScrollToTop
            }
        )}
        onClick={isShowingScrollToTop ? handleOnClick : doNothing}>
            <i className='flaticon-right-arrow rotate-[-90deg] text-xl' />
        </div> */}
    
    </>
  )
}
