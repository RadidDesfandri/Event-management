import React from 'react'
import CardRecomend from './cardRecomend'



export default function Recomend() {

  return (
    <div className='md:w-1/4 h-full hidden md:block sticky top-16 '>
      <h1 className='ml-7 mb-5 text-white font-semibold'>Rekomendasi</h1>
      <div className='flex flex-col items-end gap-3'>
        <CardRecomend />
      </div>
    </div>
  )
}