import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IEvent } from './types/event';

const MenuSearch = ({ data }: { data: IEvent }) => {
    // console.log({ data });

    return (
        <Link href={`detailevent/${data.id}`}>
            <section className='px-2'>
                <div className='bg-white rounded-sm px-2 mt-2 py-2 flex items-center justify-between text-[10px] lg:text-sm font-semibold text-gray-950'>
                    <main className='flex items-center gap-5'>
                        <Image
                            src={data.image}
                            alt='Avatar'
                            width={100}
                            height={100}
                            className='rounded-full bg-cover w-7 h-7'
                        />
                        <div className='text-black'>
                            <p>{data.eventName}</p>
                            <p className='text-xs font-light italic'>{data.location}</p>
                        </div>
                        <div className='text-black'>
                            <p>{data.eventName}</p>
                            <p className='text-xs font-light italic'>{data.location}</p>
                        </div>
                    </main>
                    <h1 className='text-black'>{data.eo?.username}</h1>
                </div>
            </section>
        </Link>
    )
}

export default MenuSearch