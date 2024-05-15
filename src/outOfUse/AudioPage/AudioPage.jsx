import React from 'react'
import AudioPlayer from '../../components/Audio/AudioPlayer'

export default function AudioPage() {
  return (
    <div className='flex flex-col w-full items-center pt-16 bg-light7'>
      <div className='text-4xl font-semibold pb-12'>
        Music and Audio
      </div>
      <div className='px-12 text-center'>
        Below are some of the thousands of pieces of music Edie has worked on over the course of her career;<br />music from Michael Jackson, Quincy Jones, Madonna, Belinda Carlisle and many more.
      </div>
      <div className='flex flex-col items-center justify-center w-full'>
        <div className='grid grid-cols-3 w-full px-12 pt-12 justify-evenly items-center'>
          <AudioPlayer title={"Heaven is a Place on Earth"} artist={"Belinda Carlisle"} audio={"/audio/heavenIsAPlaceOnEarth.mp3"}/>
          <AudioPlayer title={"Heaven is a Place on Earth"} artist={"Belinda Carlisle"} audio={"/audio/heavenIsAPlaceOnEarth.mp3"}/>
          <AudioPlayer title={"Heaven is a Place on Earth"} artist={"Belinda Carlisle"} audio={"/audio/heavenIsAPlaceOnEarth.mp3"}/>
        </div>
        <div className='grid grid-cols-3 w-full px-12 pt-12 justify-evenly items-center'>
          <AudioPlayer title={"Heaven is a Place on Earth"} artist={"Belinda Carlisle"} audio={"/audio/heavenIsAPlaceOnEarth.mp3"}/>
          <AudioPlayer title={"Heaven is a Place on Earth"} artist={"Belinda Carlisle"} audio={"/audio/heavenIsAPlaceOnEarth.mp3"}/>
          <AudioPlayer title={"Heaven is a Place on Earth"} artist={"Belinda Carlisle"} audio={"/audio/heavenIsAPlaceOnEarth.mp3"}/>
        </div>
        <div className='grid grid-cols-3 w-full px-12 pt-12 justify-evenly items-center'>
          <AudioPlayer title={"Heaven is a Place on Earth"} artist={"Belinda Carlisle"} audio={"/audio/heavenIsAPlaceOnEarth.mp3"}/>
          <AudioPlayer title={"Heaven is a Place on Earth"} artist={"Belinda Carlisle"} audio={"/audio/heavenIsAPlaceOnEarth.mp3"}/>
          <AudioPlayer title={"Heaven is a Place on Earth"} artist={"Belinda Carlisle"} audio={"/audio/heavenIsAPlaceOnEarth.mp3"}/>
        </div>
      </div>
    </div>
  )
}
