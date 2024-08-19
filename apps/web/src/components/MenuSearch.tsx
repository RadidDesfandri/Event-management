import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MenuSearch = () => {
    return (
        <Link href={'#'}>
            <section className='px-2'>
                <div className='bg-white rounded-sm px-2 py-2 flex items-center justify-between text-[10px] lg:text-sm font-semibold text-gray-950'>
                    <main className='flex items-center gap-5'>
                        <Image
                            src={'/sport1.jpg'}
                            alt='Avatar'
                            width={100}
                            height={100}
                            className='rounded-full bg-cover w-7 h-7'
                        />
                        <p className=''>Moto-GP 2024 in tadika mesra</p>
                    </main>
                    <h1>PT Tadika Mesra</h1>
                </div>
            </section>
        </Link>
    )
}

export default MenuSearch