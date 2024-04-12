import React from 'react'
import VideoCard from '../../components/Videos/VideoCard'
import Footer from '../../components/Footer/Footer'

export default function VideoPage() {
  return (
    <div className='flex flex-col w-full h-full items-center bg-light7'>
      <div className='text-4xl font-semibold pt-16'>
        Video and Interviews
      </div>
      <div className='flex flex-col items-center gap-12 py-12'>
        <VideoCard title={"Edie Lehmann Boddicker - Pensado's Place"} description={`The golden thread between LA LA Land, Star Wars, 30 Seconds to Mars, Harry Styles, Jimmy Fallon, X-Men, and more? Today's guest fills us in on the art of Session Singing and Vocal Contracting.`} videoId={"NBTVF8ehlkw"} />
        <VideoCard title={"The Remarkable Hollywood Journey of Edie Lehmann Boddicker | Passionate Living"} description={`Get ready for a captivating episode as Cat Miller sits down with the multi-talented Edie Lehman Boddicker on Passionate Living TV. From major Hollywood blockbusters to television stardom and singing alongside major stars, Edie has truly done it all.\n
  🌈 Join us as we explore the extraordinary musical career of a woman who has left an indelible mark on the entertainment industry. Edie's story is a testament to the power of dreams and the unexpected twists that life can bring. As she wisely says, "Be careful what you wish for, as it just might come true!"`} videoId={"98zVwebpScU"} />
        <VideoCard title={"Vocal Journey into Hollywood Music with Edie Lehmann Boddicker | Passionate Living"} description={`Edie Lehmann Boddicker returns to Passionate Living for part 2 of an in-depth look into her vocal life and star-filled journey into hollywood music!\n
  If you're a fan of big blockbusters like Dune or Encanto, you won't want to miss this behind-the-scenes action.`} videoId={"NSisNc8nZT4"} />
        <VideoCard title={"Edie Lehmann Boddicker Buffalo Music Hall of Fame Class of 2021"} description={`The Official video marking Edie's induction into the Buffalo Music Hall of Fame.`} videoId={"98zVwebpScU"} />
      </div>
      <Footer />
    </div>
  )
}
