"use client"

import { ErrorMessage, Field, Form, Formik, FormikProps } from 'formik';
import * as yup from 'yup';
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useState } from 'react';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationSchema = yup.object().shape({
    namaDepan: yup.string().required("mohon masukan nama depan anda"),
    namaBelakang: yup.string().required("mohon masukan nama belakang anda"),
    email: yup.string().required("mohon masukan email anda").email("email tidak valid"),
    nomorTelfon: yup.string().matches(phoneRegExp, 'nomor ponsel tidak sesuai').required('mohon masukan nomor ponsel anda'),
    password: yup.string().required("mohon masukan password anda").min(8, "minimal 8 karakter")
})

interface MyFormValue {
    namaDepan: string
    namaBelakang: string
    email: string
    nomorTelfon: string
    password: string
}

export default function FormikRegisterEO() {
    const [show, setShow] = useState<boolean>(false)

    const initialValues: MyFormValue = {
        namaDepan: '',
        namaBelakang: '',
        email: '',
        nomorTelfon: '',
        password: ''
    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, action) => {
                console.log(values);
                alert(JSON.stringify(values))
                action.resetForm()
            }}
        >
            {(props: FormikProps<MyFormValue>) => {
                return (
                    <Form>
                        <div className='flex flex-col gap-4'>
                            <div>
                                <Field className='h-12 w-80 bg-white font-medium border-2 border-gray-200 px-3 rounded-md' type="text" name="namaDepan"
                                    placeholder='nama depan'
                                />
                                <ErrorMessage
                                    name='namaDepan'
                                    component='div'
                                    className='text-red-600 text-sm'
                                />
                            </div>
                            <div>
                                <Field className='h-12 w-80 bg-white font-medium border-2 border-gray-200 px-3 rounded-md' type="text" name="namaBelakang"
                                    placeholder='nama belakang ' />
                                <ErrorMessage
                                    name='namaBelakang'
                                    component='div'
                                    className='text-red-600 text-sm'
                                />
                            </div>
                            <div>
                                <Field className='h-12 w-80 bg-white font-medium border-2 border-gray-200 px-3 rounded-md' type="email" name="email"
                                    placeholder='email  (tricket@sampel.com)'
                                />
                                <ErrorMessage
                                    name='email'
                                    component='div'
                                    className='text-red-600 text-sm'
                                />
                            </div>
                            <div>
                                <Field className='h-12 w-80 bg-white font-medium border-2 border-gray-200 px-3 rounded-md' type=" number " name="nomorTelfon"
                                    placeholder='nomor ponsel' />
                                <ErrorMessage
                                    name='nomorTelfon'
                                    component='div'
                                    className='text-red-600 text-sm'
                                />
                            </div>
                            <div className='relative'>
                                <Field className='h-12 rounded-md w-80 bg-white font-medium border-2 border-gray-200 px-3 ' type={show ? 'text' : 'password'} name="password"
                                    placeholder='password' />
                                <ErrorMessage
                                    name='password'
                                    component='div'
                                    className='text-red-600 text-sm'
                                />
                                <span className='absolute top-4 right-3' onClick={() => setShow(!show)}>{show ? <AiFillEye /> : <AiFillEyeInvisible />}</span>
                            </div>
                            <button className='h-12 w-80 rounded-xl bg-blue-700 text-white font-semibold' type='submit'>Daftar</button>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
}