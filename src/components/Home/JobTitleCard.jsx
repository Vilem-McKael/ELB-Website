import React from 'react'
import SelectedWorks from './SelectedWorks'
import {selectedWorks} from '../../data/homePageCredits.js'

export default function JobTitleCard({bgColor, alignment, title, tag, description, image, imageDescription, featuredWorks}) {
  return (
    <div id={tag} className={`flex flex-row md:h-[540px] w-full border-b-black border-b-[1px]`}>
        {alignment === 'left' ?

        <div className='flex flex-col-reverse md:flex-row h-full w-full'> 

            {/* LEFT SIDE ALIGNMENT */}

            {/* DESCRIPTION BODY */}
            <div className='w-full flex justify-end'>
                <div className='flex flex-col h-full w-full md:w-[400px] lg:w-[500px] xl:w-[600px] flex-shrink-0 justify-between items-center md:items-end p-8 mb-16 sm:mb-0'>

                    {/* ROLE TITLE AND DESCRIPTION */}
                    <div className='mb-4 sm:mb-0'>

                        <div className='text-2xl font-semibold text-black'>
                            {title}
                        </div>
                        <div className='text-sm pt-4'>
                            {description}
                        </div>
                    </div>

                    {/* SELECTED WORKS FOR THIS ROLE */}
                    <div className='flex flex-col items-center'>
                        <SelectedWorks works={selectedWorks[tag]} />
                    </div>
                </div>
            </div>

            {/* FEATURED IMAGE */}
            <div className='w-full h-full' style={{backgroundColor: bgColor}}>
                <div className='flex flex-col justify-evenly items-center w-full h-full'>
                    <img src={image} className='object-cover h-full w-full object-left'/>
                </div>
            </div>
        </div>
        :
        <div className='flex flex-col md:flex-row h-full w-full'>

            {/* RIGHT SIDE ALIGNMENT */}

            {/* FEATURED IMAGE */}
            <div className='w-full h-full' style={{backgroundColor: bgColor}}>
                <div className='flex flex-col justify-evenly items-center w-full h-full'>
                    <img src={image} className='object-cover h-full w-full object-right'/>
                </div>
            </div>

            {/* DESCRIPTION BODY */}
            <div className='w-full flex justify-start'>
                <div className='flex flex-col h-full w-full md:w-[400px] lg:w-[500px] xl:w-[600px] justify-between flex-shrink-0 items-center md:items-start p-8 mb-16 sm:mb-0'>

                    {/* ROLE TITLE AND DESCRIPTION */}
                    <div className='mb-4 sm:mb-0'>
                        <div className='text-2xl font-semibold text-black'>
                            {title}
                        </div>
                        <div className='text-sm pt-4'>
                            {description}
                        </div>
                    </div>

                    {/* SELECTED WORKS FOR THIS ROLE */}
                    <div className='flex flex-col items-center'>
                        <SelectedWorks works={selectedWorks[tag]} />
                    </div>
                </div>
            </div>
        </div>
        }
        
    </div>
  )
}
