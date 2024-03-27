import React, { useState } from 'react'
import LookPage from './GallerySubPages/LookPage';
import ListenPage from './GallerySubPages/ListenPage';
import WatchPage from './GallerySubPages/WatchPage';

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
    <div>
      {subpage}
    </div>
  )
}
