import React from 'react'
import CardEvent from './cardEvent'
import { getEvent } from '../libs/action/event'

const ListEvents = async () => {
    const { result } = await getEvent()

    return (
        <section id='event' className='lg:w-[800px] h-full py-6'>
            <div className='md:justify-between md:flex md:flex-wrap gap-2'>
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