import React from 'react'

export default function JobTitleCard({bgColor, alignment, title, tag, description, image, imageDescription, featuredWorks}) {
  return (
    <div id={tag} className={`flex flex-row h-[480px] w-full border-b-black border-b-[1px]`}>
        {alignment === 'left' ?
        <div className='flex flex-row h-full w-full py-8 px-8'>
            <div className='flex flex-col h-full w-full'>
                <div className='text-2xl font-semibold text-black'>
                    {title}
                </div>
                <div className='pt-8'>
                    {description}
                </div>
                <div className='flex flex-col'>
                    {featuredWorks.map((work, index) => (
                        <div key={index}>
                            {work}
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex flex-col justify-evenly'>
                <img src={image} className='object-fit'/>
                <div className='h-[40px] w-full'>
                    {imageDescription}
                </div>
            </div>
        </div>
        :
        <>
        <div className='flex flex-row h-full w-full'>
            <div className='flex flex-col justify-end h-full w-full'>
                <img src={image} className=''/>
            </div>
            <div className='flex flex-col h-full w-full px-8'>
                <div className='text-2xl font-semibold text-black pt-8 pl-8'>
                    {title}
                </div>
                <div className='pt-8'>
                    {description}
                </div>
                <div className='flex flex-col'>
                    {featuredWorks.map((work, index) => (
                        <div key={index}>
                            {work}
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
        }
        
    </div>
  )
}
