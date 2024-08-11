"use client"

import { ErrorMessage, Field, Form, Formik, FormikProps } from 'formik';
import * as yup from 'yup';
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useState } from 'react';

const validationShema = yup.object().shape({
    email: yup.string().required("mohon masukan email anda").email("email tidak valid"),
    password: yup.string().required("mohon masukan password anda").min(8, "minimal 8 karakter")
})

interface MyFormValue {
    email: string
    password: string
}

export default function FormikLoginEO() {
    const [show, setShow] = useState<boolean>(false)

    const initialValues: MyFormValue = {
        email: '',
        password: ''
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationShema}
            onSubmit={(values, action) => {
                console.log(values);
                
                alert(JSON.stringify(values))
                action.resetForm()
            }}
        >
            {(props) => {
                return (
                    <Form>
                        <div className='flex flex-col content-center gap-4'>
                            <div>
                                <Field className='h-12 w-80 bg-white font-medium border-2 border-gray-200 px-3' type="email" name="email" />
                                <ErrorMessage
                                    name='email'
                                    component='div'
                                    className='text-red-600 text-sm'
                                />
                            </div>
                            <div className='relative'>
                                <Field className='h-12 w-80 bg-white font-medium border-2 border-gray-200 px-3 ' type={show? 'text':'password'} name="password" />
                                <ErrorMessage
                                    name='password'
                                    component='div'
                                    className='text-red-600 text-sm'
                                />
                                <span className='absolute top-5 right-3' onClick={() => setShow(!show)}>{show ? <AiFillEye/> : <AiFillEyeInvisible/> }</span>
                            </div>
                            <button className='h-12 w-80 rounded-xl bg-blue-700 text-white font-medium' type='submit'>Masuk</button>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
}