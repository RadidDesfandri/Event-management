import React from 'react'

export const Deskripsi = () => {
    return (
        <div className='text-gray-400 pt-5 text-lg'>
            <p className='font-semibold '>Deskripsi event</p>
            <textarea
                className="w-full h-96 bg-transparent px-4 text-black border border-black rounded-sm focus:outline-none resize-none"
                placeholder="Masukkan detail event disini!" />
                {/* <CardTicket/> */}
        </div>
    )
}
