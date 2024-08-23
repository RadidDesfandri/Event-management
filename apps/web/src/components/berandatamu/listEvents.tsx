import React from 'react'
import CardEvent from './cardEvent'
import { getEvent } from '../libs/action/event'
import NotFound from '../NotFound'

const ListEvents = async () => {
    const { result } = await getEvent()

    return (
        <section id='event' className='lg:w-[800px] h-full my-6'>
            <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>
                {result.event.map((item) => {
                    return (
                        <CardEvent key={item.id} data={item} />
                    )
                })}
                {
                    result.event.length == 0 && (
                        <NotFound width={250} height={250} text='BELUM ADA EVENT YANG DIBUAT NI BANG?!'/>
                    )
                }
            </div>
        </section>
    )
}

export default ListEvents