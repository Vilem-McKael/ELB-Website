import React from 'react'

export default function MobileBurgerMenu({currentPage, updateCurrentPage, isShowingSlideOutMenu, updateIsShowingSlideOutMenu}) {

    function handleOnCLick() {
        updateIsShowingSlideOutMenu(!isShowingSlideOutMenu)
    }

  return (
    <div id="top" className='flex w-full h-[50px] justify-end items-center fixed bg-transparent text-black pl-8 pr-4 z-50'>
        <div className='flex flex-row text-sm text-light7 cursor-pointer' onClick={handleOnCLick}>
            <i className='flaticon-menu w-[24px] h-[24px] text-black pr-4 pt-[2px]'></i>
        </div>
    </div>
  )
}
