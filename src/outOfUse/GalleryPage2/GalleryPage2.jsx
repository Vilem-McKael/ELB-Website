import React, { useState } from 'react'
import LookPage from '../GalleryPage/GalleryPage';
import ListenPage from '../AudioPage/AudioPage';
import WatchPage from '../VideoPage/VideoPage';
import SubpageButton from '../Gallery/SubpageButton';

export default function GalleryPage2() {

  const [isShowingImage, setIsShowingImage] = useState(false)
  const [viewedIndex, setViewedIndex] = useState(0)
  const [selectedSubpage, setSelectedSubpage] = useState("Look")

  let subpage;
  switch (selectedSubpage) {
    case "Look":
      subpage = <LookPage />
    case "Listen":
      subpage = <ListenPage />
    case "Watch":
      subpage = <WatchPage />
  }

  return (
    <div className='w-full h-full flex flex-col'>
      
    <div className='flex flex-row w-full justify-center'>
      <SubpageButton title="Look"/>
    </div>
      {subpage}
    </div>
  )
}
