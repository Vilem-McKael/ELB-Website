import React, { useState } from 'react'
import MediaContainer from './MediaContainer'

export default function MediaGrid({data}) {

    const [creditData, setCreditData] = useState(data)

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-8 gap-2'>
        {typeof data === "object" && data.length > 0 ? 
          data.map((dataItem, index) => (
            <MediaContainer key={index} title={dataItem.title} img={dataItem.img} roles={dataItem.roles} notes={dataItem.notes}/>
          ))
          :
          <>
          </>
        }
    </div>
  )
}
