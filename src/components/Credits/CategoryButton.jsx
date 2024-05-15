import React, { useState } from 'react'

export default function CategoryButton({title, selectedCategory, updateSelectedCategory, bgColor}) {

    function handleOnClick(category) {
        updateSelectedCategory(category)
    }

  return (
    <button className={`w-full sm:w-[120px] h-[60px] text-black text-xl sm:rounded-xl flex items-center justify-center bg-light7 transform sm:hover:scale-105 sm:hover:font-medium duration-150 origin-top mx-4`} style={{border: 'solid' + bgColor, borderWidth: title === selectedCategory ? '10px' : '4px', fontWeight: title === selectedCategory ? 'normal' : 'lighter', boxSizing: 'border-box', maxWidth: '100%'}} onClick={() => handleOnClick(title)}>
        {title}
    </button>
  )
}
