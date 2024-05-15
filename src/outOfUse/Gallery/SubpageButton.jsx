import React from 'react'

export default function SubpageButton({title, selectedSubpage, updateSelectedSubpage}) {

  function handleOnClick() {
    updateSelectedSubpage(title)
  }

  return (
    <div className={`text-xl ${selectedCategory === title ? 'border-black border-b-[1px]' : ''} mx-4 cursor-pointer`} onClick={() => handleOnClick(title)}>
        {title}
    </div>
  )
}
