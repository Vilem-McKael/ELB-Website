import React, { useState } from 'react'
import MediaContainer from './MediaContainer'
import MediaContainer2 from './MediaContainer2'
import MediaContainer3 from './MediaContainer3'
import MediaContainer4 from './MediaContainer4'
import MediaContainer5 from './MediaContainer5'

export default function MediaGrid({data}) {

    const [creditData, setCreditData] = useState(data)

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[3px] place-items-center'>
        {typeof data === "object" && data.length > 0 ? 
          data.map((dataItem, index) => (
            <MediaContainer key={index} title={dataItem.title} img={dataItem.img} roles={dataItem.roles} notes={dataItem.notes} index={index}/>
          ))
          :
          <>
          </>
        }
    </div>
  )
}
