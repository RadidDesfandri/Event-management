import React from 'react'
import CardEvent from './cardEvent'
import { getEvent } from '../libs/action/event'

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
            </div>
        </section>
    )
}

export default ListEvents