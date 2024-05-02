import React, { useEffect, useState } from 'react'



export default function CreditContainer({credit}) {

  return (
    <tr className='w-full h-[44px] border-b-[1px] border-x-[1px] border-black/80 text-wrap'>
        <td className='w-[200px] p-2 border-r-[1px] border-r-black'>
            {credit.type ? credit.type : ""}
        </td>
        <td className='w-[400px] p-2 border-r-[1px] border-r-black'>
            {credit.title ? credit.title : ""}
        </td>
        <td className='w-[200px] p-2 border-r-[1px] border-r-black'>
            {credit.artist ? credit.artist : ""}
        </td>
        <td className='w-[100px] p-2 border-r-[1px] border-r-black'>
            {credit.year ? credit.year : ""}
        </td>
        <td className='w-[200px] p-2 border-r-[1px] border-r-black'>
            {credit.role.length > 0 && credit.role[0] !== "nan" ? credit.role.join(', ') : ""}
        </td>
    </tr>
  )
}
