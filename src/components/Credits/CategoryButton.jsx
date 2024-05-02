import React, { useState } from 'react'

export default function CategoryButton({title, selectedCategory, updateSelectedCategory, bgColor}) {

    function handleOnClick(category) {
        updateSelectedCategory(category)
    }

  return (
    <button className={`w-[120px] h-[60px] text-black text-xl rounded-xl flex items-center justify-center bg-light7 transform hover:scale-105 hover:font-medium duration-150 origin-top mx-4`} style={{border: '8px solid ' + bgColor, borderWidth: title === selectedCategory ? '8px' : '4px', fontWeight: title === selectedCategory ? 'normal' : 'lighter'}} onClick={() => handleOnClick(title)}>
        {title}
    </button>
  )
}
