"use client"
import { ErrorMessage, Field, Form, Formik, FormikHelpers, FormikProps } from 'formik';
import * as yup from 'yup';
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useState } from 'react';
import { loginUser } from '../libs/action/user';
import { createCookie, navigate } from '../libs/action/server';
import { useRouter } from 'next/navigation';
import { UserLogin } from './formikLogin';
import { loginEO } from '../libs/action/EO';
import { IloginEO } from '../types/auth';

const validationShema = yup.object().shape({
    data: yup.string().required("mohon masukan email anda"),
    password: yup.string().required("mohon masukan password anda").min(8, "minimal 8 karakter")
})

export default function FormikLogineo() {
    const [show, setShow] = useState<boolean>(false)
    const router = useRouter()
    const initialValues: IloginEO = {
        data: '',
        password: ''
    }

const onLogin = async (data: IloginEO, action: FormikHelpers<IloginEO>) => {
    try {
        const { result, ok } = await loginEO(data);
        if (!ok) throw result.msg;
        createCookie('token',result.token);
        action.resetForm();
        navigate("/beranda")
    } catch (error) {
        console.log(error);
    }
}

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationShema}
            onSubmit={(values, action) => {
                onLogin(values, action);
                action.resetForm()
            }}
        >
            {(props) => {
                return (
                    <Form>
                        <div className='flex flex-col content-center gap-4'>
                            <div>
                                <Field className='h-12 w-80 bg-white font-medium border-2 border-gray-200 px-3 rounded-md' type="text" name="data" 
                                placeholder="data atau username"/>
                                <ErrorMessage
                                    name='data'
                                    component='div'
                                    className='text-red-600 text-sm'
                                />
                            </div>
                            <div className='relative'>
                                <Field className='h-12 w-80 bg-white font-medium border-2 border-gray-200 px-3 rounded-md' type={show? 'text':'password'} name="password"
                                placeholder="password" />
                                <ErrorMessage
                                    name='password'
                                    component='div'
                                    className='text-red-600 text-sm'
                                />
                                <span className='absolute top-5 right-3' onClick={() => setShow(!show)}>{show ? <AiFillEye/> : <AiFillEyeInvisible/> }</span>
                            </div>
                            <button className='h-12 w-80 rounded-xl bg-blue-700 text-white font-semibold' type='submit'>Masuk</button>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
}