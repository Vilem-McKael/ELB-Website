import React, {useCallback, useState} from 'react'
import ImageList from '../../components/Media/Images/ImageList'
import VideoList from '../../components/Media/Videos/VideoList'
import AudioList from '../../components/Media/Audio/AudioList'
import ImageViewer from '../../components/Media/Images/ImageViewer'
import VideoViewer from '../../components/Media/Videos/VideoViewer'
import AudioViewer from '../../components/Media/Audio/AudioViewer'
import Footer from '../../components/Footer/Footer'
import MediaSelector from '../../components/Media/MediaSelector'

const defaultVideoParams = {
  title: "Edie Lehmann Boddicker - Pensado's Place",
  description: "The golden thread between LA LA Land, Star Wars, 30 Seconds to Mars, Harry Styles, Jimmy Fallon, X-Men, and more? Today's guest fills us in on the art of Session Singing and Vocal Contracting.",
  videoId: "NBTVF8ehlkw"
}

export default function MediaPage({screenSize}) {

  const [selectedMediaType, setSelectedMediaType] = useState('images')
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [selectedVideo, setSelectedVideo] = useState(defaultVideoParams)
  const [selectedAudioIndex, setSelectedAudioIndex] = useState(0)

  const [isShowingAllImages, setIsShowingAllImages] = useState(false)

  const handleUpdateSelectedMediaType = (newMediaType) => {
    setSelectedMediaType(newMediaType)
  }

  const updateSelectedImageIndex = useCallback((imgIndex) => {
    setSelectedImageIndex(imgIndex)
  })

  const updateSelectedVideo = useCallback((video) => {
    setSelectedVideo({...video})
  })

  const updateSelectedAudioIndex = useCallback((audioIndex) => {
    setSelectedAudioIndex(audioIndex)
  })

  const toggleIsShowingAllImages = () => {
    setIsShowingAllImages(!isShowingAllImages)
  }

  return (
    <div className='flex w-full flex-col items-center'>
      {/* <div className='mt-8 text-4xl font-semibold'>
        Media
      </div> */}
      <MediaSelector selectedMediaType={selectedMediaType} handleUpdateSelectedMediaType={handleUpdateSelectedMediaType} />
      <div className='w-full sm:w-[640px] md:w-[800px] lg:w-[1100px] flex flex-col items-center my-4 sm:my-16 font-barlow'>
          {selectedMediaType === 'images' ?
          <div className='flex flex-col items-center'>
            <ImageViewer imgIndex={selectedImageIndex} updateSelectedImageIndex={updateSelectedImageIndex}/>
            <button className='w-[200px] hover:bg-black hover:text-light7 py-2 my-8 border-black border rounded-md' onClick={toggleIsShowingAllImages}>{isShowingAllImages ? 'Hide All' : 'Show All'}</button>
            {isShowingAllImages ?
              <ImageList updateSelectedImageIndex={updateSelectedImageIndex}/>
              :
              <></>
            }
            
          </div>
          :
          selectedMediaType === 'videos' ?
          <div className='flex flex-col items-center w-full'>
            <VideoViewer selectedVideo={selectedVideo} screenSize={screenSize}/>
            {/* <MediaSelector handleUpdateSelectedMediaType={handleUpdateSelectedMediaType} /> */}
            <VideoList updateSelectedVideo={updateSelectedVideo} />

          </div>
          :
          <div className='flex flex-col items-center'>
            <AudioViewer selectedAudioIndex={selectedAudioIndex} updateSelectedAudioIndex={updateSelectedAudioIndex}/>
            {/* key={selectedAudioIndex}  */}
            {/* <MediaSelector handleUpdateSelectedMediaType={handleUpdateSelectedMediaType} /> */}
            <AudioList updateSelectedAudioIndex={updateSelectedAudioIndex} />

          </div>
          }
        
      </div>
      <div className='mt-16'></div>
      <Footer />
    </div>
  )
}
