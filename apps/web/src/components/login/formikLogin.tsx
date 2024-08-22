"use client"

import { ErrorMessage, Field, Form, Formik, FormikHelpers, FormikProps } from 'formik';
import * as yup from 'yup';
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useState } from 'react';
import { loginUser } from '../libs/action/user';
// import { UserLogin } from '../register/formikRegister';
import { createCookie, navigate } from '../libs/action/server';
import { useRouter } from 'next/navigation';

const validationShema = yup.object().shape({
    email: yup.string().required("mohon masukan email anda").email("email tidak valid"),
    password: yup.string().required("mohon masukan password anda").min(8, "minimal 8 karakter")
})

interface MyFormValue {
    email: string
    password: string
}

export interface UserLogin {
    email: string
    password: string
}

export default function FormikLogin() {
    const [show, setShow] = useState<boolean>(false)

    const router = useRouter()

    const initialValues: UserLogin = {
        email: '',
        password: ''
    }

const onLogin = async (data: UserLogin, action: FormikHelpers<UserLogin>) => {
    try {
        const { result, ok } = await loginUser(data);
        if (!ok) throw result.msg;
        console.log(result);
        createCookie('token',result.token);
        // toast.info(result.msg);
        action.resetForm();
        router.push('/beranda')
        // navigate('/');
    } catch (error) {
        // toast.error(err as string);
        console.log(error);
    }
}

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationShema}
            onSubmit={(values, action) => {
                onLogin(values, action);
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
                                <Field className='h-12 w-80 bg-white font-medium border-2 border-gray-200 px-3 rounded-md' type="email" name="email" 
                                placeholder="email (tricket@sampel.com)"/>
                                <ErrorMessage
                                    name='email'
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