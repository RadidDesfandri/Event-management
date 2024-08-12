"use client"

import { IoIosSearch } from "react-icons/io";
import Logo from '../logo';
import Link from 'next/link';
import Button from '../button';
import { Navbar } from '@nextui-org/navbar';
import { Field, Form, Formik } from 'formik';

interface SearchForm {
    search: string
}


export default function NavTopTamu() {
    const initialValues: SearchForm = {
        search: ''
    }
    return (

        <Navbar shouldHideOnScroll className='z-20 hidden lg:block'>
            <section className='w-full sticky top-0 backdrop-blur-lg bg-transparent'>
                <div className='max-w-7xl h-16 mx-auto md:px-10 px-5 flex items-center justify-between'>
                    <div className='flex w-full md:w-[640px] lg:w-[898px] justify-between lg:justify-between items-center'>

                        <Link href={'/'}><Logo /></Link>

                        <div className='flex gap-2 items-center'>
                            <Formik
                                initialValues={initialValues}
                                onSubmit={(values, action) => {
                                    alert(JSON.stringify(values))
                                    action.resetForm()
                                }}
                            >
                                <Form>

                                    {/* Search laptop start */}
                                    <div className='backdrop-blur-md md:ml-6 px-3 lg:flex hidden bg-white/20 rounded-lg w-[180px] md:w-[350px] lg:w-[802px] items-center md:px-5'>
                                        <Field
                                            type="text"
                                            name='search'
                                            placeholder='Cari event seru di sini'
                                            className='md:h-10 h-9 placeholder-white placeholder:text-sm md:placeholder:text-base bg-transparent rounded-md w-full focus:outline-none text-white' />
                                        <button type='submit'><IoIosSearch className='text-white w-5 h-5 cursor-pointer' /></button>
                                    </div>
                                    {/* Search laptop end */}

                                </Form>
                            </Formik>

                        </div>
                    </div>

                    {/* Button login dan register start */}
                    <div className='gap-3 hidden md:flex text-gray-100'>
                        <Button props='Daftar' />
                        <Button props='Masuk' />
                    </div>
                    {/* Button login dan register end */}

                </div>
            </section>
        </Navbar>
    )
}