import React from 'react'
import AboutPage from '../AboutPage/AboutPage';
import CreditsPage from '../CreditsPage/CreditsPage';
import GalleryPage from '../GalleryPage/GalleryPage';
import ContactPage from '../ContactPage/ContactPage';
import SideBar from '../../components/SideBar/SideBar';

export default function DefaultPage(currentPage, updateCurrentPage) {

    let page;
    switch (currentPage) {
        case 'About':
            page = <AboutPage />
        case 'Credits':
            page = <CreditsPage />
        case 'Gallery':
            page = <GalleryPage />
        case 'Contact':
            page = <ContactPage />
    }

  return (
    <div>
        <div id='sidebar'>
        <SideBar />
        </div>
        <div>{page}</div>
    </div>
  )
}
