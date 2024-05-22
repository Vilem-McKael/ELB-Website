import React, { useCallback } from 'react'
import { audioData } from '../../../data/mediaData'

export default function AudioList({updateSelectedAudioIndex}) {

    const handleOnClick = useCallback((index) => {
        updateSelectedAudioIndex(index)
    })

  return (
    <table className='h-full w-full font-barlow justify-start sm:w-[800px] lg:w-[1100px] border-t mt-16 border-black'>
        <tbody>

        {/* AUDIO DATA MAP */}
        {audioData.map((audio, index) => {
            return <tr className='w-full h-full cursor-pointer text-sm sm:text-md border-b border-black hover:bg-black/10' key={index} onClick={() => handleOnClick(index)}>

                {/* TITLE */}
                <td className='p-2 sm:text-lg font-semibold w-[160px]'>
                    {audio.title}
                </td>

                {/* ARTIST */}
                <td className='p-2 sm:w-[160px]'>
                    {audio.artist}
                </td>

                {/* ALBUM */}
                <td className='p-2 sm:w-[160px]'>
                    {audio.album}
                </td>

                {/* DESCRIPTION */}
                <td className='p-2 text-xs sm:text-sm w-[160px] sm:w-[400px]'>
                    {audio.description}
                </td>
                
            </tr>
        })}
        </tbody>
    </table>
  )
}
