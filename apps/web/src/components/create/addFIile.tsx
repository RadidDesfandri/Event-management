import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import { Kalendar } from './calendar';
import { Deskripsi } from './deskripsi';

export const AddFiile = () => {
    return (
        <div className='w-full mt-8'>
            <div className='max-w-3xl mx-auto h-full bg-gray-100 rounded-t-lg md:rounded-lg overflow-hidden'>
                <div className="flex justify-center h-full w-full">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-800 bg-gray-700 border-gray-600 hover:border-gray-500 ">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>
                            <p className="mb-2 text-sm text-gray-400">Unggah gambar/poster/banner</p>
                            <p className="text-xs text-gray-400">Direkomendasikan 724x320px dan tidak lebih dari 2MB</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                </div>
                <div className='p-4 cursor-pointer'>
                    <input type="text" placeholder='Nama Event*' className='w-full focus:outline-none text-2xl bg-transparent h-12 placeholder:text-2xl placeholder:font-semibold mb-3' />
                    <div className='flex text-gray-400 mb-8 hover:text-gray-700 duration-100 items-center gap-3'>
                        <FaCalendarAlt />
                        <p>Pilih tanggal</p>
                    </div>

                    <div className='w-full h-[0.1px] bg-gray-700 mb-2'></div>
                    <Deskripsi />
                    {/* <Kalendar /> */}

                </div>
            </div>
        </div>
    )
}
