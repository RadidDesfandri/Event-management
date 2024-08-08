import React from 'react'

export const Deskripsi = () => {
    return (
        <div className='text-gray-400 pt-5 text-lg'>
            <textarea
                className="w-full h-80 bg-transparent px-4 text-black border border-black rounded-md focus:outline-none resize-none"
                placeholder="Masukkan detail event disini!" />
        </div>
    )
}
