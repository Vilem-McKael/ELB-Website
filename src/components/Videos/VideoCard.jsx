import React from 'react'
import YouTube from 'react-youtube'

export default function VideoCard({title, description, videoId}) {

    const onPlayerReady = (event) => {
        event.target.pauseVideo();
    }

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

  return (
    <div className='flex flex-col items-center w-[652px] text-center bg-black'>
        <div className='w-full p-4 bg-black text-white text-xl font-medium'>
            {title}
        </div>
        <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady}/>
        <div className='w-full p-2 bg-gray-700 text-white text-sm'>
            {description}
        </div>
    </div>
  )
}
