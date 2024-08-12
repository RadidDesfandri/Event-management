import Image from 'next/image'
import React from 'react'

export const DetailHarga = () => {
    return (
        <div className='w-full pt-8 px-16'>
            <div className='bg-white rounded-xl overflow-hidden'>
                <Image src={'/hero.jpg'} alt='Image' width={500} height={500} className='w-full h-[250px]'/>
                <main className='px-6 py-7'>
                    <span className='w-8 h-3 bg-gray-900'></span>
                    <p className='text-gray-800 font-semibold text-center'>Pertamina Grand Prix of Indonesia 2024</p>
                </main>
            </div>
        </div>
    )
}
