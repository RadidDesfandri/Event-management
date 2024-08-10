"use client"

import React, { useState } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { DatePickers } from './calendar'
import Button from '../button'
import ModalTicketing from '../modal/ModalTicketing'
import { FaPlus } from 'react-icons/fa6'
import Image from 'next/image'
import * as yup from 'yup'

interface FormValue {
    namatiket: string;
    jmlhtiket: string;
    date?: string;
}

const dataSchema = yup.object().shape({
    namatiket: yup.string().required('Harap diisi').max(50, "Maksimal 50 karakter"),
    jmlhtiket: yup.string().required("Harap diisi"),
    date: yup.string().required("Harap diisi")
})

export const CardTicketGratis = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [isActive, setIsActive] = useState(false)

    const initialValue: FormValue = {
        namatiket: '',
        jmlhtiket: '',
        date: ''
    }

    const handleActive = () => {
        setIsActive(!isActive)
    }

    const openModal = () => {
        setIsOpenModal(true)
    };

    const closeModal = () => {
        setIsOpenModal(false)
    };

    return (
        <div className='bg-gray-100  py-8'>
            <div className='flex justify-center mx-auto max-w-xl'>

                {/* Tiket start */}
                <div onClick={openModal} className={`flex bg-white hover:bg-blue-400 shadow-sm border border-gray-200 rounded-lg`}>
                    <div className='w-[70px] h-[90px] relative border-dashed border-black border-r-2'>
                        <Image src={'https://assets.loket.com/images/icon/icon-barcode.svg'} alt='barcode' width={8} height={8} className=' absolute top-[20%] left-[40%]' />
                        <div className='absolute top-[-20px] border-b-2 border-gray-200 right-[-18px] bg-gray-100 rounded-full w-8 h-8'></div>
                        <div className='absolute bottom-[-20px] border-t-2 border-gray-200 right-[-18px] bg-gray-100 rounded-full w-8 h-8'></div>
                        <div className='absolute left-[-25px] border-r-2 border-gray-200 bg-gray-100 w-9 h-8 rounded-full top-[30%]'></div>
                    </div>
                    <div className='w-[235px] h-[90px] relative'>
                        <div className='w-full h-full flex flex-col px-8 justify-center'>
                            <h1 className='text-sm'>Buat Tiket</h1>
                            <h1 className='font-semibold'>Gratis</h1>
                        </div>
                        <div className='absolute flex items-center justify-center text-xl h-[35px] w-[35px] rounded-full border-2 border-gray-400 text-gray-400 top-[30%] right-4'>
                            <FaPlus />
                        </div>
                    </div>
                </div>
                {/* Tiket end */}


                <ModalTicketing isOpen={isOpenModal} onClose={closeModal}>
                    <div className='pt-4'>
                        <div className='flex'>
                            <div className='w-1/2 relative'>
                                <h1 className={`text-center ${isActive ? 'text-gray-400' : 'text-black'} py-3 border-b border-gray-300 font-semibold`}>DETAIL TIKET</h1>
                                <span className={` ${isActive ? 'h-0' : 'h-1'} bg-blue-400 absolute w-full rounded-t-lg  bottom-0`}></span>
                            </div>
                            <div className='w-1/2 relative'>
                                <h1 className={`text-center ${isActive ? 'text-black' : 'text-gray-400'} py-3 border-b border-gray-300 font-semibold`}>TANGGAL EVENT</h1>
                                <span className={` ${isActive ? 'h-1' : 'h-0'} bg-blue-400 absolute w-full rounded-t-lg  bottom-0`}></span>
                            </div>
                        </div>

                        {isActive ?
                            <Formik
                                initialValues={{ date: new Date() }}
                                validationSchema={dataSchema}
                                onSubmit={(values) => {
                                    alert(JSON.stringify(values));
                                }}
                            >
                                {(props) => (
                                    <Form>
                                        <div className='pt-7 flex flex-col gap-44'>
                                            <div>
                                                <label htmlFor="" className='font-semibold text-gray-700'>Tanggal mulai<span className='text-red-700'>*</span></label>
                                                <div className='flex flex-col pb-6'>
                                                    <DatePickers name="date" placeholder='12/12/2024' />
                                                    <ErrorMessage
                                                        name='date'
                                                        component='div'
                                                        className='text-xs text-red-700'
                                                    />

                                                </div>
                                                <h1 className='text-[10px] text-gray-700'>Tanggal maksimal penjualan bergantung pada tanggal berakhirnya event.</h1>
                                            </div>
                                            <div className='flex gap-2'>
                                                <div onClick={handleActive}>
                                                    <Button props='<' />
                                                </div>
                                                <button type='submit' className='w-full bg-blue-500 hover:bg-blue-600 transition-all duration-150 py-2 rounded-md font-semibold shadow-lg shadow-blue-500/50 '>Buat Tiket</button>
                                            </div>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                            :
                            <Formik
                                initialValues={initialValue}
                                validationSchema={dataSchema}
                                onSubmit={(values, action) => {
                                    alert(JSON.stringify(values));
                                    action.resetForm()

                                }}
                            >
                                {
                                    ({ isSubmitting, errors, dirty }) => {
                                        return (
                                            <Form>
                                                <div className='flex flex-col pt-7'>
                                                    {/* NAMA TIKET */}
                                                    <label htmlFor="" className='font-semibold text-gray-700'>Nama tiket <span className='text-red-700'>*</span></label>
                                                    <Field
                                                        type='text'
                                                        name='namatiket'
                                                        placeholder='Maksimal 50 karakter'
                                                        className='w-full border-b  focus:border-blue-700 border-gray-500 outline-none h-10 pb-3'
                                                    />
                                                    <ErrorMessage
                                                        name='namatiket'
                                                        component='div'
                                                        className='text-xs text-red-700'
                                                    />

                                                    {/* JUMLAH TIKET */}
                                                    <label htmlFor="" className='font-semibold text-gray-700 pt-5'>Jumlah tiket</label>
                                                    <Field
                                                        type='text'
                                                        name='jmlhtiket'
                                                        placeholder='0'
                                                        className='w-full border-b py-5 focus:border-blue-700 border-gray-500 outline-none h-10 pb-5'
                                                    />
                                                    <ErrorMessage
                                                        name='jmlhtiket'
                                                        component='div'
                                                        className='text-xs text-red-700'
                                                    />

                                                    <div className='pt-32'>
                                                        <button disabled={!!errors.jmlhtiket || !!errors.namatiket || !!isSubmitting || !dirty} onClick={handleActive} type='submit' className=' bg-blue-500 w-full disabled:bg-blue-500/40 disabled:text-gray-600 disabled:shadow-none hover:bg-blue-600 transition-all duration-150 py-2 rounded-md font-semibold shadow-lg shadow-blue-500/50'>Selanjutnya</button>
                                                    </div>
                                                </div>
                                            </Form>
                                        )
                                    }
                                }
                            </Formik>
                        }
                    </div>
                </ModalTicketing>

            </div>
        </div>
    )
}
