import React, { useState } from 'react'
import useSound from 'use-sound'

export default function AudioPlayer({title, artist, audio}) {

    const [isPlaying, setIsPlaying] = useState(false)

    const [play, {stop, duration, pause}] = useSound(audio, {interrupt: false, })

    const handlePlayPause = () => {
        if (isPlaying) {
            pause()
        } else {
            play()
        }
        setIsPlaying(!isPlaying)
    }

    const handleStop = () => {
        stop()
        setIsPlaying(false)
    }

  return (
    <div className='flex flex-col items-center w-[200px]'>
        <div className='text-sm font-medium text-center'>
            {title}
        </div>
        <div className='text-xs text-center pb-2'>
            {artist}
        </div>
        <div className='flex flex-row bg-gradient-to-b from-gray-200 to-white w-[200px] h-[50px] rounded-[25px] border-black border-[1px]'>
            <div className='h-full w-[40px] flex justify-center items-center bg-gray-300 rounded-l-full'>
                {isPlaying ? 
                    <i className='flaticon-pause-2 text-2xl text-center pt-1 pl-1 transform hover:scale-110 duration-50 text-yellow-600 cursor-pointer' onClick={handlePlayPause}></i>
                :
                    <i className='flaticon-play-button text-2xl text-center pt-1 pl-1 transform hover:scale-110 duration-50 text-green-700 cursor-pointer' onClick={handlePlayPause}></i>
                }
            </div>
            <div className='flex flex-col w-[120px] h-full justify-evenly'>
                <div className='flex flex-col'>
                    <div className='text-[10px] font-medium text-center leading-3 text-black'>
                        {title.length > 20 ? title.substring(0, 19) + "..." : title}
                    </div>
                    <div className='text-[9px] font-light text-center leading-3 text-black'>
                    {artist.length > 20 ? artist.substring(0, 19) + "..." : artist}
                    </div>
                </div>
                
                <div className='h-[5px] flex justify-center'>
                    <div className='w-[30px] h-full bg-black rounded-l-full'>
                        
                    </div>
                    <div className='w-[50px] h-full bg-gray-500 rounded-r-full'>

                    </div>
                </div>
            </div>
            <div className='h-full w-[40px] flex justify-center items-center bg-gray-300 rounded-r-full'>
                <i className='pt-1 pr-1 flaticon-stop-button-1 text-2xl text-center text-red-500 transform hover:scale-110 duration-50 cursor-pointer' onClick={handleStop}></i>
                {/* <div className='w-[30px] h-[30px] rounded-full cursor-pointer bg-black' style={{backgroundColor: isPlaying ? '#444444' : 'black'}}  onClick={handleStop}>
                    
                </div> */}
            </div>
        </div>
    </div>
  )
}
