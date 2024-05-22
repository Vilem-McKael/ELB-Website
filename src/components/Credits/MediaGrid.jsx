import React, { useState } from 'react'
import MediaContainer from './MediaContainer'

export default function MediaGrid({data}) {

    const [creditData, setCreditData] = useState(data)

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] place-items-center'>
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
