import React from 'react'
import { useState } from 'react'
import CategoryButton from '../../components/Credits/CategoryButton'
import MediaGrid from '../../components/Credits/MediaGrid'
import { CreditCategory, AllMedia } from '../../data/creditMedia'

export default function CreditsPage() {

    const [selectedCategory, setSelectedCategory] = useState(CreditCategory.Artists)

    function updateSelectedCategory(category) {
        setSelectedCategory(category)
    }

  return (
    <div className='flex flex-col w-full h-full'>

        <div className='mt-16 text-center'>
            Short blurb about Edie's impact on the music industry
        </div>

        {/* Credit Category Selector */}
        <div className='flex flex-row w-full justify-center mt-12'>
            <CategoryButton title={CreditCategory.Artists} selectedCategory={selectedCategory} updateSelectedCategory={updateSelectedCategory}/>
            <CategoryButton title={CreditCategory.Film} selectedCategory={selectedCategory} updateSelectedCategory={updateSelectedCategory}/>
            <CategoryButton title={CreditCategory.TV} selectedCategory={selectedCategory} updateSelectedCategory={updateSelectedCategory}/>
        </div>

        <div className='flex flex-col items-center mt-8'>
            <MediaGrid selectedCategory={selectedCategory} data={AllMedia[selectedCategory]}/>
        </div>
    </div>
  )
}
