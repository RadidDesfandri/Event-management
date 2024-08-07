import React from 'react'

export default function Category() {
    return (
        <div className='w-full pt-5 flex gap-6 items-center flex-wrap'>
            <select id="category" className="block py-2.5 px-0 w-[130px] md:w-[200px] text-sm  text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                <option selected>Pilih kategori</option>
                <option value="US">Sport</option>
                <option value="CA">Konser</option>
                <option value="FR">Kultural</option>
                <option value="DE">Otomotif</option>
            </select>
            <select id="category" className="block py-2.5 px-0 w-[130px] md:w-[200px] text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                <option selected>Pilih lokasi</option>
                <option value="US">Bandung</option>
                <option value="CA">Jakarta</option>
                <option value="FR">Bsd</option>
            </select>
        </div>
    )
}