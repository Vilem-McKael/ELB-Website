import React, { useState } from 'react'
import LookPage from '../LookPage/LookPage';
import ListenPage from '../ListenPage/ListenPage';
import WatchPage from '../WatchPage/WatchPage';
import SubpageButton from '../../components/Gallery/SubpageButton';

export default function GalleryPage() {

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
