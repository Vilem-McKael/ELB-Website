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
    <div className='w-full flex flex-col justify-center items-center'>
        <div className='w-full flex flex-col bg-terracotta px-4 text-black'>
            <div className='px-8 py-12 text-4xl text-black font-bold'>
                Recent Projects:
            </div>
            <div className='w-full flex flex-row justify-evenly px-4 pb-4'>
                <FeaturedWorkCardHome image={dune2} title={'Dune 2'} roles={[r.Vocalist]}/>
                <FeaturedWorkCardHome image={avatar2} title={'Avatar: The Way of Water'} roles={[r.Vocalist]}/>
                <FeaturedWorkCardHome image={harryStyles} title={'Harry Styles'} roles={[r.Conductor]}/>
                <FeaturedWorkCardHome image={rosalia} title={'Rosalia'} roles={[r.Vocalist]}/>
                <FeaturedWorkCardHome image={michaelBuble} title={'Michael Bublé'} roles={[r.Vocalist]}/>
            </div>
            <div className='w-full flex flex-row justify-evenly px-4 pb-4'>
                <FeaturedWorkCardHome image={katyPerry} title={'Katy Perry'} roles={[r.Vocalist]}/>
                <FeaturedWorkCardHome image={thirtySeconds} title={'30 Seconds to Mars'} roles={[r.Vocalist]}/>
                <FeaturedWorkCardHome image={nope} title={'Nope'} roles={[r.Conductor]}/>
                <FeaturedWorkCardHome image={encanto} title={'Encanto'} roles={[r.Vocalist]}/>
                <FeaturedWorkCardHome image={endgame} title={'Avengers: Endgame'} roles={[r.Vocalist]}/>
            </div>
        </div>
        <div className='w-full flex flex-col bg-gold text-black'>
            <div className='px-8 py-12 text-4xl text-black font-bold'>
                Classics:
            </div>
            <div className='w-full flex flex-row justify-evenly px-4 pb-4'>
                <FeaturedWorkCardHome image={madonna} title={'Madonna'} roles={[r.Vocalist]}/>
                <FeaturedWorkCardHome image={quincyJones} title={'Quincy Jones'} roles={[r.Vocalist]}/>
                <FeaturedWorkCardHome image={michaelJackson} title={'Michael Jackson'} roles={[r.Vocalist]}/>
                <FeaturedWorkCardHome image={belindaCarlisle} title={'Belinda Carlisle'} roles={[r.Vocalist]}/>
                <FeaturedWorkCardHome image={arethaFranklin} title={'Aretha Franklin'} roles={[r.Vocalist]}/>
            </div>
            <div className='w-full flex flex-row justify-evenly px-4 pb-4'>
                <FeaturedWorkCardHome image={barbraStreisand} title={'Barbra Streisand'} roles={[r.Vocalist]}/>
                <FeaturedWorkCardHome image={lindaRonstadt} title={'Linda Ronstadt'} roles={[r.Vocalist]}/>
                <FeaturedWorkCardHome image={billWithers} title={'Bill Withers'} roles={[r.Vocalist]}/>
                <FeaturedWorkCardHome image={herbieHancock} title={'Herbie Hancock'} roles={[r.Vocalist]}/>
                <FeaturedWorkCardHome image={matthewWilder} title={'Matthew Wilder'} roles={[r.Vocalist]}/>
            </div>
        </div>
    </div>
  )
}
