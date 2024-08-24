import PosterDate from '@/components/detailEventSlug/PosterDate'
import { getEventById } from '@/components/libs/action/event'
import NavTop from '@/components/navTop'
import { IEvent } from '@/components/types/event'
import React from 'react'

export async function generateStaticParams() {
  const res = await fetch("http://localhost:8000/api/events")
  const data = await res.json()

  return data.event.map((event: IEvent) => {
    id: event.id
  })
}

const DetailEvent = async ({ params }: { params: IEvent }) => {
  const event = await getEventById(params.id!)
  // console.log({event});
  return (
    <div className='bg-blue-950'>
      <NavTop />
      <PosterDate data={event} />
    </div>
  )
}

export default DetailEvent