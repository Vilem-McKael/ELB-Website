import React from 'react'

export default function MobileBurgerMenu({currentPage, updateCurrentPage, isShowingSlideOutMenu, updateIsShowingSlideOutMenu}) {

    function handleOnCLick() {
        updateIsShowingSlideOutMenu(!isShowingSlideOutMenu)
    }

  return (
    <div id="top" className='flex w-full justify-start items-center fixed bg-transparent text-black z-50 bg-light7 border-b-[1px]-black'>
        <div className='ml-6 mt-6 pb-4 px-4 pt-5 h-[30px] w-[30px] flex flex-row text-x items-center justify-center text-center bg-teal4 rounded-xl cursor-pointer' onClick={handleOnCLick}>
            <i className='flaticon-menu text-light7'></i>
        </div>
    </div>
  )
}
