import React, {useEffect, useState} from 'react'
import useSound from 'use-sound'
import { Howl } from 'howler'
import { audioData } from '../../../data/mediaData'

export default function AudioViewer({selectedAudioIndex, updateSelectedAudioIndex}) {

    const [selectedAudio, setSelectedAudio] = useState(audioData[selectedAudioIndex])
    const [player, setPlayer] = useState(null)
    const [isPlaying, setIsPlaying] = useState(false)
    // const [songPosition, setSongPosition] = useState(0)
    const [timeDisplay, setTimeDisplay] = useState('0:00')

    // ****************** FIX THIS SO THAT SONG STOPS PLAYING AFTER EXITING
    // USE EFFECT TO CANCEL PLAYBACK ON LEAVING PAGE
    useEffect(() => {
        return () => {
            if (player) {
                handleStop()
                setPlayer(null)
            }
        }
    }, [])

    // SET SELECTED AUDIO TO AUDIO AT INDEX
    useEffect(() => {
        setSelectedAudio(audioData[selectedAudioIndex])
    }, [selectedAudioIndex])

    // PLAY FUNCTION (CREATES PLAYER & INTERVAL)
    const handlePlay = () => {
        if (player) {
            player.play();
        } else {
            const newPlayer = new Howl({
                src: [selectedAudio.audioFile],
                html5: true,
                volume: 0.5,
                onplay: () => {
                    console.log("Playing audio")
                    setIsPlaying(true)
                    const interval = setInterval(() => {
                        if (newPlayer.playing()) {
                            handleFormatTime(newPlayer)
                            // setSongPosition(newPlayer.seek())
                        }
                    }, 1000)
                    newPlayer._interval = interval
                },
                onpause: () => {
                    setIsPlaying(false)
                    clearInterval(newPlayer._interval)
                },
                onend: () => {
                    console.log("Audio finished")
                    clearInterval(newPlayer._interval)
                    // setSongPosition(0)
                    setTimeDisplay('0:00')
                    setIsPlaying(false)
                },
            })

            newPlayer.play();
            setPlayer(newPlayer)
        }
    }

    // PAUSE FUNCTION
    const handlePause = () => {
        if (player) {
            player.pause()
        }
        setIsPlaying(false)
    }

    // STOP FUNCTION
    const handleStop = () => {
        if (player) {
            player.stop()
            clearInterval(player._interval)
            // setSongPosition(0)
            setTimeDisplay('0:00')
            setIsPlaying(false)
        }
    }

    // SKIP FUNCTION (FAST FORWARD / REWIND)
    const handleSkip = (seconds) => {
        if (player) {
            const currentPosition = player.seek()
            player.stop()
            // setSongPosition(currentPosition + seconds)
            player.seek(currentPosition + seconds)
            player.play()
        }
    }

    // FORMAT SONG POSITION DISPLAY
    const handleFormatTime = (player) => {
        let currentPosition = player.seek()
        // setSongPosition(currentPosition)
        let minutes = Math.floor(currentPosition / 60)
        let seconds = Math.floor(currentPosition % 60)
        seconds = seconds < 10 ? '0' + `${seconds}` : seconds.toString()
        setTimeDisplay(`${minutes}:${seconds}`)
    }
    
    // NEXT AUDIO
    const handleShowNext = () => {
        if (player) {
            handleStop()
            setPlayer(null)
        }
        updateSelectedAudioIndex((selectedAudioIndex + 1) % audioData.length )
    }

    // PREVIOUS AUDIO
    const handleShowPrev = () => {
        if (player) {
            handleStop()
            setPlayer(null)
        }
        updateSelectedAudioIndex((selectedAudioIndex - 1) % audioData.length)
    }

  return (
    <div className='flex flex-col justify-start items-center w-auto sm:w-[360px] sm:h-[650px] bg-gray-200 mb-12 border border-black m-4 sm:m-0 sm:mt-12'>

        {/* AUDIO IMAGE */}
        <img src={audioData[selectedAudioIndex].image} className='p-4' />

        {/* DURATION DISPLAY AND CONTROLS */}
        <div className='flex justify-between w-full px-4 items-center'>

            {/* REWIND BUTTONS */}
            <div className='flex flex-row gap-2 sm:gap-3 pb-2 text-sm sm:text-md'>
                <button onClick={() => handleSkip(-60)}>
                    1m
                </button>
                <button onClick={() => handleSkip(-30)}>
                    30
                </button>
                <button onClick={() => handleSkip(-15)}>
                    15
                </button>
            </div>

            {/* REWIND ICON */}
            <div>
                <i className='flaticon-rewind text-xl sm:text-2xl pt-2'></i>
            </div>

            {/* TRACK DURATION DISPLAY */}
            <div className='flex justify-center w-[60px] sm:w-[76px] text-2xl sm:pb-1 bg-black text-light7 px-2 rounded-md'>
                {timeDisplay}
            </div>

            {/* FAST FORWARD ICON */}
            <div>
                <i className='flaticon-fast-forward-1 text-xl sm:text-2xl pt-2'></i>
            </div>

            {/* FAST FORWARD BUTTONS */}
            <div className='flex flex-row gap-2 sm:gap-3 pb-2 text-sm sm:text-md'>
                <button onClick={() => handleSkip(15)}>
                    15
                </button>
                <button onClick={() => handleSkip(30)}>
                    30
                </button>
                <button onClick={() => handleSkip(60)}>
                    1m
                </button>
            </div>

        </div>

        {/* START & STOP, NEXT & PREVIOUS BUTTONS */}
        <div className='flex justify-between w-full px-4 pt-3 items-center text-4xl sm:text-5xl'>
            
            {/* PREVIOUS AUDIO FILE BUTTON */}
            <button onClick={handleShowPrev} className='mb-1'>
                <i className='flaticon-left-arrow text-center text-3xl sm:text-4xl'></i>
            </button>

            {/* START, PAUSE, AND STOP BUTTONS */}
            <div>
                {player && isPlaying ? 
                    <>
                    {/* PAUSE BUTTON */}
                    <i className='flaticon-pause-2 text-center pt-1 pl-1 transform hover:scale-110 duration-50 text-yellow-600 cursor-pointer' onClick={handlePause}></i>
                    </>
                :
                    <>
                    {/* PLAY BUTTON */}
                    <i className='flaticon-play-button text-center pt-1 pl-1 transform hover:scale-110 duration-50 text-green-700 cursor-pointer' onClick={handlePlay}></i>
                    </>
                }
            </div>

            {/* STOP BUTTON */}
            <div>
                <i className='pt-1 pr-1 flaticon-stop-button-1 text-center text-red-500 transform hover:scale-110 duration-50 cursor-pointer' onClick={handleStop}></i>
            </div>

            {/* NEXT AUDIO FILE BUTTON */}
            <button onClick={handleShowNext} className='mb-1'>
                <i className='flaticon-right-arrow text-center text-3xl sm:text-4xl'></i>
            </button>

        </div>

        {/* AUDIO DESCRIPTION */}
        <div className='p-4'>

            {/* TITLE */}
            <div className='font-semibold text-lg'>{audioData[selectedAudioIndex].title}</div>

            {/* ARTIST & ALBUM */}
            <div className='text-lg'>{audioData[selectedAudioIndex].artist} - {audioData[selectedAudioIndex].album}</div>

            {/* DESCRIPTION */}
            <div className='pt-4'>{audioData[selectedAudioIndex].description}</div>

        </div>
    </div>
  )
}
