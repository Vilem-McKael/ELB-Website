import React from 'react'
import HomeHeader from '../../components/Home/HomeHeader'
import JobTitleCard from '../../components/Home/JobTitleCard'
import conducting from '/edieImages/edieplaceholder.jpeg'
import JobTitleNavigation from '../../components/Home/JobTitleNavigation'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'

export default function HomePage() {
    //  bg-[url('/pebbleBackground.jpeg')] bg-cover
  return (
    <div className="flex flex-col w-full items-center">
        <HomeHeader />
        <JobTitleNavigation />
        <JobTitleCard bgColor={"red-100"} alignment={'left'} title={"Vocal Contractor"} tag={"vocal-contractor"} description={"she conducts"} image={conducting} imageDescription={"Edie, Hans Zimmer, and L.A. session singers celebrating a session completed."} featuredWorks={[]} />
        <JobTitleCard bgColor={"red-200"} alignment={'left'} title={"Singer"} tag={"singer"} description={"she sings"} image={conducting} imageDescription={"Edie, Hans Zimmer, and L.A. session singers celebrating a session completed."} featuredWorks={[]} />
        <JobTitleCard bgColor={"red-200"} alignment={'left'} title={"Conductor"} tag={"conductor"} description={"she conducts"} image={conducting} imageDescription={"Edie, Hans Zimmer, and L.A. session singers celebrating a session completed."} featuredWorks={[]} />
        <JobTitleCard bgColor={"red-200"} alignment={'left'} title={"Vocal Coach"} tag={"vocal-coach"} description={"she conducts"} image={conducting} imageDescription={"Edie, Hans Zimmer, and L.A. session singers celebrating a session completed."} featuredWorks={[]} />
        <JobTitleCard bgColor={"red-200"} alignment={'left'} title={"Musician"} tag={"musician"} description={"she plays music"} image={conducting} imageDescription={"Edie, Hans Zimmer, and L.A. session singers celebrating a session completed."} featuredWorks={[]} />
        <JobTitleCard bgColor={"red-200"} alignment={'left'} title={"One more"} tag={"something"} description={"she does something else"} image={conducting} imageDescription={"Edie, Hans Zimmer, and L.A. session singers celebrating a session completed."} featuredWorks={[]} />
        <div className='w-full h-[300px] flex flex-col justify-center items-center'>
            <div>Some more information about Edie!</div>
            <div>Follow or reach out to Edie on these platforms:</div>
            <div className='flex flex-row w-full px-12 justify-evenly'>
                <div>
                    LinkedIn
                </div>
                <div>
                    Instagram
                </div>
                <div>
                    Facebook
                </div>
                <div>
                    LinkedIn
                </div>
            </div>
            <div>
                Or send a message by clicking <Link to={"/contact"}>Here</Link>
            </div>
            
        </div>
        <Link to="/#top" className='text-black bg-white hover:text-white hover:bg-black w-full h-[100px] flex items-center justify-center'>
        Back to Top
        </Link>
        <Footer />
    </div>
  )
}
