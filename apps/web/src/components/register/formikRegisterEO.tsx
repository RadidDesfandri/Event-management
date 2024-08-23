"use client"

import { ErrorMessage, Field, Form, Formik, FormikProps } from 'formik';
import * as yup from 'yup';
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useState } from 'react';
import { registerEo } from '../libs/action/EO';
import { IEo } from '../types/auth';

const validationSchema = yup.object().shape({
    username: yup.string().required("silahkan masukan nama akun anda"),
    firstName: yup.string().required("mohon masukan nama depan anda"),
    lastName: yup.string().required("mohon masukan nama belakang anda"),
    email: yup.string().required("mohon masukan email anda").email("email tidak valid"),
    phone: yup.string().required('mohon masukan nomor ponsel anda'),
    password: yup.string().required("mohon masukan password anda").min(8, "minimal 8 karakter")
})

export default function FormikRegisterEO() {
    const [show, setShow] = useState<boolean>(false)

    const initialValues: IEo = {
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: ''
    }

    const onRegisterEO = async (data: IEo) => {
        try {
            const res = await registerEo(data)
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, action) => {
                onRegisterEO(values);
                action.resetForm()
            }}
        >
            {(props: FormikProps<IEo>) => {
                return (
                    <Form>
                        <div className='flex flex-col gap-4'>
                            <div>
                                <Field className='h-12 w-80 bg-white font-medium border-2 border-gray-200 px-3 rounded-md' type="text" name="username"
                                    placeholder='nama akun'
                                />
                                <ErrorMessage
                                    name='username'
                                    component='div'
                                    className='text-red-600 text-sm'
                                />
                            </div>
                            <div>
                                <Field className='h-12 w-80 bg-white font-medium border-2 border-gray-200 px-3 rounded-md' type="text" name="firstName"
                                    placeholder='nama depan'
                                />
                                <ErrorMessage
                                    name='firstName'
                                    component='div'
                                    className='text-red-600 text-sm'
                                />
                            </div>
                            <div>
                                <Field className='h-12 w-80 bg-white font-medium border-2 border-gray-200 px-3 rounded-md' type="text" name="lastName"
                                    placeholder='nama belakang ' />
                                <ErrorMessage
                                    name='lastName'
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
                                <Field className='h-12 w-80 bg-white font-medium border-2 border-gray-200 px-3 rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' type="text" name="phone"
                                    placeholder='nomor ponsel' />
                                <ErrorMessage
                                    name='phone'
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