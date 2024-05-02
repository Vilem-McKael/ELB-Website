import React from 'react'
import { FeaturedMedia, CreditCategory } from '../../data/creditMedia'
import CategoryButton from './CategoryButton'
import MediaGrid from './MediaGrid'

export default function FeaturedCreditsList({selectedCategory, updateSelectedCategory}) {
  return (
    <div className='flex flex-col'>
        {/* Credit Category Selector */}
        <div className='flex flex-row w-full justify-center mb-8'>
            <CategoryButton title={CreditCategory.Artists} selectedCategory={selectedCategory} updateSelectedCategory={updateSelectedCategory} bgColor={'#CC9D20'}/>
            <CategoryButton title={CreditCategory.Film} selectedCategory={selectedCategory} updateSelectedCategory={updateSelectedCategory} bgColor={'#A34726'}/>
            <CategoryButton title={CreditCategory.TV} selectedCategory={selectedCategory} updateSelectedCategory={updateSelectedCategory} bgColor={'#526693'}/>
            <CategoryButton title={CreditCategory.Games} selectedCategory={selectedCategory} updateSelectedCategory={updateSelectedCategory} bgColor={'#566632'}/>
            <CategoryButton title={CreditCategory.Live} selectedCategory={selectedCategory} updateSelectedCategory={updateSelectedCategory} bgColor={'#2E254B'}/>
        </div>

        <MediaGrid selectedCategory={selectedCategory} data={FeaturedMedia[selectedCategory]}/>
    </div>
  )
}
