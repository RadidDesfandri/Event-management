"use client"

import React, { useState } from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { DatePickers2 } from './calendar';
import * as yup from "yup"

interface FormValue {
    img?: string;
    namaevent: string;
    kategori: string;
    lokasi: string;
    date: string;
    avatar?: string;
}

const dataSchema = yup.object().shape({
    namaevent: yup.string().required('Harap diisi'),
    kategori: yup.string().required("Harap diisi"),
    lokasi: yup.string().required('Harap diisi'),
    date: yup.string().required('Harap diisi'),
    // img: yup.string().required('Harap diisi'),
    // avatar: yup.string().required('Harap diisi'),
})

export const AddFiile = () => {
    const initialValue: FormValue = {
        img: '',
        namaevent: '',
        kategori: '',
        lokasi: '',
        date: '',
        avatar: '',
    }

    return (
        <div className='w-full py-8 bg-gray-200'>
            <div className='max-w-4xl mx-auto h-full bg-gray-100 border border-black lg:rounded-t-lg  lg:rounded-lg overflow-hidden'>

                <Formik
                    initialValues={initialValue}
                    validationSchema={dataSchema}
                    onSubmit={(values, action) => {
                        alert(JSON.stringify(values));
                        action.resetForm()
                    }}
                >
                    {({ isSubmitting, errors, dirty }) => (
                        <Form>
                            <div className="flex justify-center mb-3 h-full w-full">
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed lg:rounded-lg cursor-pointer hover:bg-gray-800 bg-gray-700 border-gray-600 hover:border-gray-500 ">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg className="w-8 h-8 mb-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-400">Unggah gambar/poster/banner</p>
                                        <p className="text-xs text-gray-400">Direkomendasikan 724x320px dan tidak lebih dari 2MB</p>
                                    </div>
                                    <Field
                                        id="dropzone-file"
                                        name='img'
                                        type="file"
                                        className="hidden"
                                    />
                                    <ErrorMessage
                                        name='img'
                                        component='div'
                                        className='text-xs text-red-700'
                                    />
                                </label>
                            </div>
                            <div className='px-8 cursor-pointer'>
                                <Field
                                    type='text'
                                    name='namaevent'
                                    placeholder='Nama Event*'
                                    className='w-full focus:outline-none text-2xl bg-transparent h-12 placeholder:text-2xl'
                                />
                                <ErrorMessage
                                    name='namaevent'
                                    component='div'
                                    className='text-xs text-red-700'
                                />

                                {/* Kategori event start */}
                                <Field as='select' id='kategori' name='kategori' className='text-base bg-transparent  w-full text-gray-500 focus:outline-none focus:ring-0 focus:border-gray-200 peer mb-4'>
                                    <option selected value="">Pilih kategori</option>
                                    <option value="Konser">Konser</option>
                                    <option value="Pertandingan">Pertandingan</option>
                                    <option value="Cosplay">Cosplay</option>
                                    <option value="Pameran">Pameran</option>
                                </Field>
                                <ErrorMessage
                                    name='kategori'
                                    component='div'
                                    className='text-xs text-red-700'
                                />
                                {/* Kategori event end */}

                                <div className='w-full h-[0.1px] bg-gray-300 mb-2'></div>

                                {/* Selenggara, tanggal, lokasi */}
                                <div className='flex flex-col md:flex-row md:items-center py-4 md:justify-between'>
                                    <div className=' md:h-[90px] w-[150px] cursor-default'>
                                        <h1 className='text-[14px] pb-2 font-semibold '>Diselenggarakan oleh</h1>
                                        <div className='flex items-center gap-3'>
                                            <label htmlFor="profile" className='flex text-gray-400 flex-col text-2xl items-center justify-center w-[60px] h-[60px] cursor-pointer rounded-full border border-gray-400'>
                                                <MdOutlineFileUpload />
                                                <Field
                                                    id='profile'
                                                    name='avatar'
                                                    type="file"
                                                    className='hidden' />
                                            </label>
                                            <h1>Username</h1>
                                        </div>
                                    </div>

                                    {/* Tanggal start */}
                                    <div className=' md:h-[90px] mt-5 md:mt-0 cursor-default'>
                                        <h1 className='text-[14px] md:pb-2 font-semibold'>Tanggal & waktu</h1>
                                        <div className='flex flex-col '>
                                            <div className='flex text-gray-400 hover:text-gray-700 md:mt-4 duration-100 items-center gap-2 cursor-pointer'>
                                                <FaCalendarAlt />
                                                <DatePickers2 name="date" placeholder='Pilih tanggal' />
                                            </div>
                                            <ErrorMessage
                                                name='date'
                                                component='div'
                                                className='text-xs text-red-700'
                                            />
                                        </div>
                                    </div>
                                    {/* Tanggal end */}

                                    <div className='md:h-[90px] w-[150px] mt-5 md:mt-0 cursor-default'>
                                        <h1 className='text-[14px] md:pb-2 font-semibold'>Lokasi</h1>

                                        {/* Pilih lokasi start */}
                                        <div>
                                            <div className='flex items-center text-gray-400 hover:text-gray-700 duration-100 md:mt-4 gap-2 cursor-pointer'>
                                                <IoLocationSharp />
                                                <Field type='text' placeholder='Lokasi' id='lokasi' name='lokasi' className='text-base bg-transparent w-full text-gray-500 focus:outline-none focus:ring-0 focus:border-gray-200' />
                                            </div>
                                            <ErrorMessage
                                                name='lokasi'
                                                component='div'
                                                className='text-xs text-red-700'
                                            />
                                        </div>
                                        {/* Pilih lokasi end */}

                                    </div>
                                </div>
                                <div className='left-0 bottom-0 px-12 z-10 text-white flex justify-center md:justify-between h-[60px] items-center fixed w-full bg-white border-t border-gray-400'>
                                    <div className='hidden  md:flex items-end gap-3'>
                                        <h1 className='text-2xl font-bold text-gray-700'>Yeay!</h1>
                                        <p className='text-[12px] font-light text-gray-700'>Tinggal selangkah lagi dan event kamu berhasil dibuat.</p>
                                    </div>
                                    <button disabled={!!errors.kategori || !!errors.lokasi || !!errors.date || !!errors.namaevent || isSubmitting || !dirty} type='submit' className=' bg-blue-500 disabled:bg-blue-500/40 disabled:text-gray-600 disabled:shadow-none hover:bg-blue-600 transition-all duration-150 py-2 px-3 rounded-md font-semibold shadow-lg shadow-blue-500/50 '>Buat event sekarang</button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}
