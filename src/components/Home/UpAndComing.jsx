import React from 'react'

import thelmaTheUnicorn from '/creditImages/thelmaTheUnicorn.jpeg'
import theAcolyte from '/creditImages/theAcolyte.webp'
import kingdom from '/creditImages/kingdom2.webp'

export default function UpAndComing() {
  return (
    <div id='up-and-coming' className='flex flex-col w-full items-center bg-green/5'>
        <div className='w-full border-y-[8px] flex justify-center border-green bg-green/15 mb-8'>
            <div className='py-4 font-semibold flex text-start items-center text-4xl text-black/75 wlg'>
                <div className='h-[20px] w-[20px] rounded-full border-green border-[2px] bg-green/50 mr-4'></div>
                <div>
                Up & Coming
                </div>
            </div>
        </div>
        
        <div className='flex flex-row text-wrap wlg h-[500px] pb-8'>
            
            <img src={theAcolyte} className='h-full w-[400px] object-cover object-top'/>
            <div className='flex flex-col w-full justify-center items-start pl-8 border-y-[1px] border-r-[1px] border-black'>
                <div className='text-4xl font-semibold'>
                    The Acolyte
                </div>
                <div className='pt-1 text-xl italic font-medium ml-4'>
                    Vocalist & Vocal Contractor
                </div>
                <div className='pt-2 text-md italic w-[500px] ml-8'>
                    <span className='font-bold'>IMDB: </span>Star Wars series that takes viewers into a galaxy of shadowy secrets and emerging dark-side powers in the final days of the High Republic era.
                </div>
                <div className='ml-8 text-sm pt-4'>
                    Episode I premiering June 4, 2024 only on Disney+ **insert icon
                </div>
            </div>
        </div>
        <div className='flex flex-row text-wrap wlg h-[500px] pb-8'>
            <img src={kingdom} className='h-full w-[400px] object-cover object-top'/>
            <div className='flex flex-col w-full justify-center items-start pl-8 border-y-[1px] border-r-[1px] border-black object-left-top'>
                <div className='text-4xl font-semibold'>
                    Kingdom of the Planet of the Apes
                </div>
                <div className='pt-1 text-xl italic font-medium ml-4'>
                    Vocal Contractor, Conductor, & Vocalist
                </div>
                <div className='pt-2 text-md italic w-[500px] ml-8'>
                    <span className='font-bold'>IMDB: </span>Many years after the reign of Caesar, a young ape goes on a journey that will lead him to question everything he's been taught about the past and make choices that will define a future for apes and humans alike.
                </div>
                <div className='ml-8 text-sm pt-4'>
                    Premiers May 10th, 2024 in theaters nationwide
                </div>
            </div>
        </div>
        <div className='flex flex-row text-wrap wlg h-[500px] pb-8'>
            <img src={thelmaTheUnicorn} className='h-full w-[400px] object-cover object-top'/>
            <div className='flex flex-col w-full justify-center items-start pl-8 border-y-[1px] border-r-[1px] border-black object-left-top'>
                <div className='text-4xl font-semibold'>
                    Thelma the Unicorn
                </div>
                <div className='pt-1 text-xl italic font-medium ml-4'>
                    Vocal Contractor & Vocalist
                </div>
                <div className='pt-2 text-md italic w-[500px] ml-8'>
                    <span className='font-bold'>IMDB: </span>When a rare pink and glitter-filled moment of fate makes Thelma the Pony's wish of being a unicorn come true, she rises to instant international pop-superstar stardom, but at an unexpected cost.
                </div>
                <div className='ml-8 text-sm pt-4'>
                    Releases on May 17, 2024 only on Netflix **insert icon
                </div>
            </div>
        </div>
        
        {/* <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center w-full px-8 pb-16'>
            <div className='flex flex-col text-wrap w-[240px] pb-16 sm:pb-0'>
                <img src={theAcolyte} className='w-full sm:w-[240px] h-[300px] object-cover'/>
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
            <div className='flex flex-col w-[240px] pb-16 sm:pb-0'>
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
            <div className='flex flex-col w-[240px] pb-16 sm:pb-0'>
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
        </div> */}
    </div>
  )
}
