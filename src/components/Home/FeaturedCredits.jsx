import React from 'react'
import FeaturedWorkCardHome from './FeaturedWorkCardHome'

// recents
import dune2 from '/creditImages/dune2.webp'
import michaelBuble from '/creditImages/michaelBuble.webp'
import harryStyles from '/creditImages/harryStyles.jpeg'
import avatar2 from '/creditImages/avatar2.webp'
import rosalia from '/creditImages/rosalia.jpeg'
import katyPerry from '/creditImages/katyPerry.jpeg'
import thirtySeconds from '/creditImages/30seconds.jpg'
import nope from '/creditImages/nope2.jpeg'
import encanto from '/creditImages/encanto.webp'
import endgame from '/creditImages/endgame.jpeg'

// classics

import madonna from '/creditImages/madonna.jpeg'
import quincyJones from '/creditImages/quincyJones.webp'
import michaelJackson from '/creditImages/michaelJackson.jpeg'
import belindaCarlisle from '/creditImages/belindaCarlisle.avif'
import arethaFranklin from '/creditImages/arethaFranklin.webp'
import barbraStreisand from '/creditImages/barbraStreisand.jpeg'
import lindaRonstadt from '/creditImages/lindaRonstadt.jpeg'
import billWithers from '/creditImages/billWithers.webp'
import herbieHancock from '/creditImages/herbieHancock2.jpeg'
import matthewWilder from '/creditImages/matthewWilder.webp'


import {r} from '../../data/creditMedia'


export default function FeaturedCredits() {
  return (
    <div className='w-full flex flex-col justify-start items-center'>
        <div id='recent-work' className='flex flex-col w-full items-center text-black bg-terracotta/10'>
            <div className='flex px-16 py-4 mb-12 w-full items-center justify-center border-y-[8px] border-terracotta'>
                <div className='wlg text-4xl pl-8 flex justify-start text-start text-black font-semibold'>
                    Recent Work *select album photos for artists:
                </div>
            </div>
            {/* <div className='w-full flex flex-row justify-evenly px-4 pb-4'></div> */}
            <div className='wlg grid grid-cols-2 sm:grid-cols-3 justify-center items-center px-4 pb-12 gap-y-8'>
                <FeaturedWorkCardHome image={dune2} title={'Dune 2'} roles={[r.Vocalist]}/>
                <FeaturedWorkCardHome image={avatar2} title={'Avatar: The Way of Water'} roles={[r.Vocalist]}/>
                <FeaturedWorkCardHome image={harryStyles} title={'Harry Styles'} roles={[r.Conductor]}/>
                <FeaturedWorkCardHome image={rosalia} title={'Rosalia'} roles={[r.Vocalist]}/>
                <FeaturedWorkCardHome image={michaelBuble} title={'Michael Bublé'} roles={[r.Vocalist]}/>
                <FeaturedWorkCardHome image={katyPerry} title={'Katy Perry'} roles={[r.Vocalist]}/>
                <FeaturedWorkCardHome image={thirtySeconds} title={'30 Seconds to Mars'} roles={[r.Vocalist]}/>
                <FeaturedWorkCardHome image={nope} title={'Nope'} roles={[r.Conductor]}/>
                <FeaturedWorkCardHome image={encanto} title={'Encanto'} roles={[r.Vocalist]}/>
                {/* <FeaturedWorkCardHome image={endgame} title={'Avengers: Endgame'} roles={[r.Vocalist]}/> */}
            </div>
        </div>
        <div id='classic-credits' className='w-full flex flex-col items-center bg-gold/10 text-black'>
            <div className='flex px-16 py-4 mb-12 w-full items-center justify-center border-y-[8px] border-gold'>
                <div className='wlg text-4xl pl-8 flex justify-start text-start text-black font-semibold'>
                    Classic Credits
                </div>
            </div>
            <div className='wlg grid grid-cols-2 sm:grid-cols-3 justify-evenly px-4 pb-12 gap-y-8'>
                <FeaturedWorkCardHome image={madonna} title={'Madonna'} roles={[r.Vocalist]}/>
                <FeaturedWorkCardHome image={quincyJones} title={'Quincy Jones'} roles={[r.Vocalist]}/>
                <FeaturedWorkCardHome image={michaelJackson} title={'Michael Jackson'} roles={[r.Vocalist]}/>
                <FeaturedWorkCardHome image={belindaCarlisle} title={'Belinda Carlisle'} roles={[r.Vocalist]}/>
                <FeaturedWorkCardHome image={arethaFranklin} title={'Aretha Franklin'} roles={[r.Vocalist]}/>
                <FeaturedWorkCardHome image={barbraStreisand} title={'Barbra Streisand'} roles={[r.Vocalist]}/>
                <FeaturedWorkCardHome image={lindaRonstadt} title={'Linda Ronstadt'} roles={[r.Vocalist]}/>
                <FeaturedWorkCardHome image={billWithers} title={'Bill Withers'} roles={[r.Vocalist]}/>
                <FeaturedWorkCardHome image={herbieHancock} title={'Herbie Hancock'} roles={[r.Vocalist]}/>
                {/* <FeaturedWorkCardHome image={matthewWilder} title={'Matthew Wilder'} roles={[r.Vocalist]}/> */}
            </div>
        </div>
    </div>
  )
}
