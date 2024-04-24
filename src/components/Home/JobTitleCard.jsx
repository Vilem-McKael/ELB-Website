import React from 'react'
import SelectedWorks from './SelectedWorks'
import {selectedWorks} from '../../data/homePageCredits.js'

export default function JobTitleCard({bgColor, alignment, title, tag, description, image, imageDescription, featuredWorks}) {
  return (
    <div id={tag} className={`flex flex-row h-[500px] w-full border-b-black border-b-[1px]`}>
        {alignment === 'left' ?
        <div className='flex flex-row h-full w-full'>
            <div className='w-full flex justify-end'>
                <div className='flex flex-col h-full w-[550px] flex-shrink-0 justify-between p-8'>
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
            <div className='w-full h-full' style={{backgroundColor: bgColor}}>
                <div className='flex flex-col justify-evenly items-center w-full h-full'>
                    <img src={image} className='object-cover h-full w-full object-left'/>
                    {/* <div className='h-[40px] w-full text-sm text-center px-4'>
                        {imageDescription}
                    </div> */}
                </div>
            </div>
        </div>
        :
        <div className='flex flex-row h-full w-full'>
        <div className='w-full h-full' style={{backgroundColor: bgColor}}>
                <div className='flex flex-col justify-evenly items-center w-full h-full'>
                    <img src={image} className='object-cover h-full w-full object-right'/>
                    {/* <div className='h-[40px] w-full text-sm text-center px-4'>
                        {imageDescription}
                    </div> */}
                </div>
            </div>
            <div className='w-full flex justify-start'>
                <div className='flex flex-col h-full w-full justify-between items-start p-8'>
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
        </div>
        }
        
    </div>
  )
}
