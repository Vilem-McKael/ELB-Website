import React from 'react'
import { FeaturedMedia, CreditCategory } from '../../data/creditMedia'
import CategoryButton from './CategoryButton'
import MediaGrid from './MediaGrid'
import { HashLink } from 'react-router-hash-link'

export default function FeaturedCreditsList({selectedCategory, updateSelectedCategory}) {
  return (
    <div className='flex flex-col items-center'>

        {/* CREDIT CATEGORY SELECTOR */}
        <div className='flex flex-col items-center sm:flex-row w-full justify-center mb-8 gap-4 px-2'>
            <CategoryButton title={CreditCategory.Artists} selectedCategory={selectedCategory} updateSelectedCategory={updateSelectedCategory} bgColor={'#CC9D20'}/>
            <CategoryButton title={CreditCategory.Film} selectedCategory={selectedCategory} updateSelectedCategory={updateSelectedCategory} bgColor={'#A34726'}/>
            <CategoryButton title={CreditCategory.TV} selectedCategory={selectedCategory} updateSelectedCategory={updateSelectedCategory} bgColor={'#526693'}/>
            <CategoryButton title={CreditCategory.Games} selectedCategory={selectedCategory} updateSelectedCategory={updateSelectedCategory} bgColor={'#566632'}/>
            <CategoryButton title={CreditCategory.Live} selectedCategory={selectedCategory} updateSelectedCategory={updateSelectedCategory} bgColor={'#2E254B'}/>
        </div>

        {/* MEDIA CARDS FOR SELECTED CATEGORY */}
        <MediaGrid selectedCategory={selectedCategory} data={FeaturedMedia[selectedCategory]}/>

        <HashLink smooth to="/credits/#credits-top" className='text-black bg-gray-100 sm:hover:text-white snm:hover:bg-black w-full h-[80px] flex items-center justify-center border-black border-t-[1px]'>
        Back to Top
        </HashLink>
    </div>
  )
}
