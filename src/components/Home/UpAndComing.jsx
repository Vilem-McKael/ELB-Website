import React from 'react'

import thelmaTheUnicorn from '/creditImages/thelmaTheUnicorn.jpeg'
import theAcolyte from '/creditImages/theAcolyte.webp'
import kingdom from '/creditImages/kingdom2.webp'

export default function UpAndComing() {
  return (
    <div className='flex flex-col w-full bg-teal4'>
        <div className='px-8 py-12 font-semibold text-4xl'>
            Up & Coming:
        </div>
        
        <div className='flex justify-evenly w-full px-8 pb-16'>
            <div className='flex flex-col text-wrap w-[240px] '>
                <img src={theAcolyte} className='w-[240px] h-[300px] object-cover'/>
                <div className='pt-4 text-xl font-semibold'>
                    The Acolyte
                </div>
                <div className='pt-1 font-medium'>
                    Vocalist & Vocal Contractor
                </div>
                <div className='pt-2 text-sm italic'>
                    Star Wars series that takes viewers into a galaxy of shadowy secrets and emerging dark-side powers in the final days of the High Republic era.
                </div>
            </div>
            <div className='flex flex-col w-[240px] '>
            <img src={kingdom} className='w-[240px] h-[300px] object-cover'/>
                <div className='pt-4 text-xl font-semibold'>
                    Kingdom of the Planet of the Apes
                </div>
                <div className='pt-1 font-medium'>
                    Vocal Contractor, Conductor, & Vocalist
                </div>
                <div className='pt-2 text-sm italic'>
                    Many years after the reign of Caesar, a young ape goes on a journey that will lead him to question everything he's been taught about the past and make choices that will define a future for apes and humans alike.
                </div>
            </div>
            <div className='flex flex-col w-[240px] '>
            <img src={thelmaTheUnicorn} className='w-[240px] h-[300px] object-cover'/>
                <div className='pt-4 text-xl font-semibold'>
                    Thelma the Unicorn
                </div>
                <div className='pt-1 font-medium'>
                    Vocal Contractor & Conductor
                </div>
                <div className='pt-2 text-sm italic'>
                    When a rare pink and glitter-filled moment of fate makes Thelma the Pony's wish of being a unicorn come true, she rises to instant international pop-superstar stardom, but at an unexpected cost.
                </div>
            </div>
        </div>
    </div>
  )
}
