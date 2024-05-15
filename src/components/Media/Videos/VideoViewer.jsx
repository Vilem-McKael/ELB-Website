import React from 'react'
import VideoCard from './VideoCard'

export default function VideoViewer({selectedVideo, screenSize}) {
  return (
    <div id="video-player" className='mb-12'>
        <VideoCard title={selectedVideo.title} description={selectedVideo.description} videoId={selectedVideo.videoId} screenSize={screenSize} />
    </div>
  )
}
