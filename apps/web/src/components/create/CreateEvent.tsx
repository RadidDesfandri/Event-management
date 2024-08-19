"use client"

import React, { useRef, useState } from 'react'
import { ITicket } from '../types/event'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as yup from "yup"
import { MdAccessTimeFilled, MdCloudUpload } from 'react-icons/md'
import { Input } from '../Input'
import Image from 'next/image'
import { FaCalendarAlt } from 'react-icons/fa'
import { DatePickers2 } from './calendar'
import { IoLocationSharp } from 'react-icons/io5'
import { Ticketing } from './ticketing'
import { formatDateID, formatTimeID } from '../utils/FormatDate'
import ConvertToIDR from '../utils/ConvertToIDR'
import { ImagePreview } from './imagePriview'

interface FormValue {
    eventName: string;
    category: string;
    location: string;
    description: string;
    image: File | null;
    date: string;
    ticket?: ITicket[]
}

export const CreateEvent = () => {
    const [ticket, setTicket] = useState<ITicket[]>([])
    const mediaRef = useRef<HTMLInputElement | null>(null);
    const [selectedImage, setSelectedImage] = useState(false)

    const handleFileChange = (event: any, setFieldValue: any) => {
        const file = event.target.files[0];
        setSelectedImage(!false)
        if (file) {
            setFieldValue('image', file)
        }
    };

    const handleImage = () => {
        setSelectedImage(!selectedImage)
    }

    const initialValue: FormValue = {
        image: null,
        eventName: '',
        category: '',
        location: '',
        date: '',
        description: ''
    }

    const handleEvent = (value: FormValue) => {
        value.ticket = ticket
        console.log(value);
    }

    const dataSchema = yup.object().shape({
        eventName: yup.string().required('Harap diisi'),
        category: yup.string().required("Harap diisi"),
        location: yup.string().required('Harap diisi'),
        date: yup.string().required('Harap diisi'),
        image: yup.mixed().required('Harap diisi'),
        description: yup.string().required("Harap diisi")
    })
    console.log(ticket);

    return (
        <div className='w-full py-8 bg-gray-200'>
            <Formik
                initialValues={initialValue}
                validationSchema={dataSchema}
                onSubmit={(value, action) => {
                    // alert(JSON.stringify(value))
                    handleEvent(value)
                    // alert(JSON.stringify(value))
                    handleEvent(value)
                    action.resetForm()
                    action.setFieldValue('description', '')
                    setTicket([])
                    action.setFieldValue('description', '')
                    setTicket([])
                }}
            >
                {({ setFieldValue, isSubmitting, errors, dirty, values }) => {
                    return (
                        <Form>
                            <section className='max-w-4xl mx-auto h-full  bg-gray-100 border border-gray-300 lg:rounded-t-xl  lg:rounded-lg overflow-hidden'>

                                {/* Image start */}
                                <div className='flex justify-center mb-3 h-full w-full'>
                                    {selectedImage ?
                                        <div>
                                            <ImagePreview setSelectedImage={setSelectedImage} setFieldValue={setFieldValue} image={values.image} imageRef={mediaRef} />
                                        </div>
                                        :
                                        <label htmlFor="banner" className='flex flex-col items-center justify-center w-full h-64 border-2 border-dashed lg:rounded-lg cursor-pointer hover:bg-gray-800 bg-gray-700 border-gray-600 hover:border-gray-500'>
                                            <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                                                <MdCloudUpload className='text-gray-400 w-9 h-9' />
                                                <p className="mb-2 text-sm text-gray-400">Unggah gambar/poster/banner</p>
                                                <p className="text-xs text-gray-400">Direkomendasikan 724x320px dan tidak lebih dari 2MB</p>
                                            </div>
                                            <input
                                                id="banner"
                                                // name='image'
                                                type="file"
                                                className="hidden"
                                                onChange={(event: any) => handleFileChange(event, setFieldValue)}
                                            />
                                            <ErrorMessage
                                                name='image'
                                                component='div'
                                                className='text-xs text-red-700'
                                            />
                                        </label>
                                    }
                                </div>
                                {/* Image end */}

                                <div className='px-8 cursor-pointer'>
                                    {/* Event name start */}
                                    <Input name='eventName' type='text' className='w-full focus:outline-none text-2xl bg-transparent h-12 placeholder:text-2xl' placeholder='Nama Event*' />
                                    {/* Event name end */}

                                    {/* Category start */}
                                    <Input as='select' id='category' name='category' className='text-base bg-transparent  w-full text-gray-500 focus:outline-none focus:ring-0 focus:border-gray-200 peer mb-4'>
                                        <option selected value="">Pilih category</option>
                                        <option value="Konser">Konser</option>
                                        <option value="Pertandingan">Pertandingan</option>
                                        <option value="Cosplay">Cosplay</option>
                                        <option value="Pameran">Pameran</option>
                                    </Input>
                                    {/* Category end */}

                                    <div className='w-full h-[0.1px] bg-gray-300 mb-2'></div>

                                    <div className='flex flex-col md:flex-row md:items-center py-4 md:justify-between'>
                                        {/* Avatar start */}
                                        <div className='md:h-[90px] w-[150px] cursor-default'>
                                            <h1 className='text-[14px] pb-2 font-semibold '>Diselenggarakan oleh</h1>
                                            <div className='flex items-center gap-3'>
                                                <Image src={'/kultural1.jpg'} alt='Profile' width={100} height={100} className='w-16 h-16 rounded-full' />
                                                <h1>Username</h1>
                                            </div>
                                        </div>
                                        {/* Avatar end */}

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

                                        {/* Pilih location start */}
                                        <div className='md:h-[90px] w-[150px] mt-5 md:mt-0 cursor-default'>
                                            <h1 className='text-[14px] md:pb-2 font-semibold'>location</h1>
                                            <div>
                                                <div className='flex items-center text-gray-400 hover:text-gray-700 duration-100 md:mt-4 gap-2 cursor-pointer'>
                                                    <IoLocationSharp />
                                                    <Field type='text' placeholder='location' id='location' name='location' className='text-base bg-transparent w-full text-gray-500 focus:outline-none focus:ring-0 focus:border-gray-200' />
                                                </div>
                                                <ErrorMessage
                                                    name='location'
                                                    component='div'
                                                    className='text-xs text-red-700'
                                                />
                                            </div>
                                        </div>
                                        {/* Pilih location end */}
                                    </div>
                                </div>
                            </section>

                            <section className='max-w-4xl mt-3 mx-auto h-full  bg-gray-100 border border-gray-300 lg:rounded-t-xl lg:rounded-lg'>

                                {/* Deskripsi event start */}
                                <div className='w-full'>
                                    <div className='w-full relative'>
                                        <button type='button' className={`text-center font-bold h-10 border-b w-full border-gray-400 `}>DESKRIPSI EVENT</button>
                                        <span className={`w-full h-1 bg-blue-700 absolute left-0 bottom-0 rounded-t-lg`}></span>
                                    </div>
                                    <div className='px-2 pt-2'>
                                        <textarea
                                            className="w-full min-h-80 bg-transparent px-4 text-black border-2 rounded-md focus:outline-none resize-none"
                                            placeholder="Masukkan detail event disini!"
                                            onChange={(e) => setFieldValue('description', e.target.value)}
                                            value={values.description}
                                            name='description'
                                        />
                                        <ErrorMessage
                                            name='description'
                                            component='div'
                                            className='text-sm text-red-700'
                                        />
                                    </div>
                                </div>
                                {/* Deskripsi event end */}

                                {/* Section button start */}
                                <div className='left-0 bottom-0 px-12 z-10 text-white flex justify-center md:justify-between h-[60px] items-center fixed w-full bg-white border-t border-gray-400'>
                                    <div className='hidden  md:flex items-end gap-3'>
                                        <h1 className='text-2xl font-bold text-gray-700'>Yeay!</h1>
                                        <p className='text-[12px] font-light text-gray-700'>Tinggal selangkah lagi dan event kamu berhasil dibuat.</p>
                                    </div>
                                    <button onClick={handleImage} disabled={!!errors.category || !!errors.image || !!errors.description || !!errors.location || !!errors.date || !!errors.eventName || isSubmitting || ticket.length == 0 || !dirty} type='submit' className=' bg-blue-500 disabled:bg-blue-500/40 disabled:text-gray-600 disabled:shadow-none hover:bg-blue-600 transition-all duration-150 py-2 px-3 rounded-md font-semibold shadow-lg shadow-blue-500/50 '>Buat event sekarang</button>
                                </div>
                                {/* Section button end */}
                            </section>
                        </Form>
                    )
                }}
            </Formik>

            <section className='max-w-4xl mt-3 mx-auto h-full'>
                {ticket.map((ticket) => {
                    const free = ticket.price == "0" ? "Gratis" : ticket.price
                    const ketTicket = ticket.price == "0" ? "Gratis" : "Berbayar"
                    const dateYears = formatDateID(ticket.date)
                    const dateTime = formatTimeID(ticket.date)
                    return (
                        <div className='w-full bg-blue-100/60 border border-blue-800 py-4 px-8 h-[210px] rounded-lg relative mb-3'>
                            <div className='w-10 h-10 rounded-full bottom-12 left-[-10px] border-r border-t border-r-blue-700 border-t-blue-700 bg-gray-200 rotate-45 absolute '></div>
                            <div className='w-10 h-10 rounded-full bottom-12 right-[-10px] border-l border-t border-l-blue-700 border-t-blue-700 bg-gray-200 -rotate-45 absolute '></div>
                            <div className='w-full pb-5'>
                                <h1 className='text-lg text-gray-900'>{ticket.ticketName}</h1>
                                <h2 className='text-sm text-gray-600 py-2'>{ketTicket}</h2>
                                <div className='flex items-center text-sm gap-2 text-blue-700 pt-5'>
                                    <MdAccessTimeFilled className='text-lg' />
                                    <p>{`Berakhir Dalam ${dateYears}, ${dateTime}`}</p>
                                </div>
                            </div>
                            <div className='border-t-black font-semibold border-t border-dashed flex justify-between pt-5'>
                                <p>{ConvertToIDR(free)}</p>
                                <div className='flex gap-2 items-center'>
                                    <p className='text-blue-800'>Quota</p>
                                    <p className='text-blue-800'>{ticket.quota}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>

            {/* Ticketing start */}
            <Ticketing setTicket={setTicket} ticket={ticket} />
            {/* Ticketing end */}
            
        </div>
    )
}