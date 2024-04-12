import React from 'react'
import SelectedWorks from './SelectedWorks'
import {selectedWorks} from '../../data/homePageCredits.js'

export default function JobTitleCard({bgColor, alignment, title, tag, description, image, imageDescription, featuredWorks}) {
  return (
    <div id={tag} className={`flex flex-row h-[480px] w-full border-b-black border-b-[1px]`}>
        {alignment === 'left' ?
        <div className='flex flex-row h-full w-full'>
            <div className='flex flex-col h-full w-[50%] justify-between p-8'>
                <div>
                    <div className='text-2xl font-semibold text-black'>
                        {title}
                    </div>
                    <div className='text-sm pt-4'>
                        {description}
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <SelectedWorks works={selectedWorks[tag]} />
                    {/* {featuredWorks.map((work, index) => (
                        <div key={index}>
                            {work}
                        </div>
                    ))} */}
                </div>
            </div>
            <div className='flex flex-col justify-evenly items-center w-[50%]' style={{backgroundColor: bgColor}}>
                <img src={image} className='object-contain max-h-[360px] p-4'/>
                <div className='h-[40px] w-full text-sm text-center px-4'>
                    {imageDescription}
                </div>
            </div>
        </div>
        :
        <div className='flex flex-row h-full w-full'>
            <div className='flex flex-col justify-evenly items-center w-[50%]' style={{backgroundColor: bgColor}}>
                <img src={image} className='object-contain max-h-[360px] p-4'/>
                <div className='h-[40px] w-full text-sm text-center px-4'>
                    {imageDescription}
                </div>
            </div>
            <div className='flex flex-col h-full w-[50%] justify-between p-8'>
                <div>
                    <div className='text-2xl font-semibold text-black'>
                        {title}
                    </div>
                    <div className='text-sm pt-4'>
                        {description}
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <SelectedWorks works={selectedWorks[tag]} />
                    {/* {featuredWorks.map((work, index) => (
                        <div key={index}>
                            {work}
                        </div>
                    ))} */}
                </div>
            </div>
        </div>
        }
        
    </div>
  )
}
