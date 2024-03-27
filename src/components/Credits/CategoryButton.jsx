import React, { useState } from 'react'

export default function CategoryButton({title, selectedCategory, updateSelectedCategory}) {

    function handleOnClick(category) {
        updateSelectedCategory(category)
    }

  return (
    <div className={`text-xl ${selectedCategory === title ? 'border-black border-b-[1px]' : ''} mx-4 cursor-pointer`} onClick={() => handleOnClick(title)}>
        {title}
    </div>
  )
}
