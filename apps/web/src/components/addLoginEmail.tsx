"use client"

import { Field, Form, Formik, FormikProps } from 'formik'
import * as yup from 'yup'

const todoSchema = yup.object().shape({
    todo: yup.string().required("mohon masukan email anda")
})

interface MyFormValue {
    todo: string
}

export default function AddLoginEmail() {
    const initialValues: MyFormValue = { todo: "" }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={todoSchema}
            onSubmit={(values) => {
                console.log(values)
            }}
        >
            {(props: FormikProps<MyFormValue>) => {
                return (
                    <Form>
                        <div className='flex flex-col gap-4'>
                            <Field className='h-12 w-80 bg-white font-medium border-2 border-gray-200 text-center' type="email" name="login" />
                            <Field className='h-12 w-80 bg-white font-medium border-2 border-gray-200 text-center' type="password" name="passwordlogin" />
                            <button className='h-12 w-80 rounded-xl bg-blue-700 text-white font-medium'type='submit'>Masuk</button>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
}