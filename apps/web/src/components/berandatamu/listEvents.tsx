"use client"

import React, { useEffect, useState } from 'react'
import CardEvent from './cardEvent'
import { getEvent } from '../libs/action/event'
import NotFound from '../NotFound'
import Pagination from '../Pagination'
import { IEvent } from '../types/event'

const ListEvents = async () => {
    const [page, setPage] = useState(1)
    const { result } = await getEvent(page)

    const onPageChange = ({ selected }: { selected: number }) => {
        setPage(selected + 1)
    }
    const take = parseInt(result.totalPerPage)
    const total = parseInt(result.allPage)

    return (
        <section id='event' className='lg:w-[800px] h-full my-6'>
            <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>
                {result.event.map((item) => {
                    console.log(result);

                    return (
                        <CardEvent key={item.id} data={item} />
                    )
                })}
                {
                    result.event.length == 0 && (
                        <div className='lg:w-[800px]'>
                            <NotFound width={250} height={250} text='BELUM ADA EVENT YANG DIBUAT NI BANG?!' />
                        </div>
                    )
                }

            </div>
            <div className='my-10'>
                <Pagination
                    take={take}
                    total={total}
                    onPageChange={onPageChange} />
            </div>
        </section>
    )
}

export default ListEvents