"use client"

import { Field, Form, Formik, FormikProps } from 'formik'
import * as yup from 'yup'

const todoSchema = yup.object().shape({
    todo: yup.string().required("mohon masukan email anda")
})

interface MyFormValue {
    todo: string
}

export default function AddRegisterEmail() {
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
                            <p className="pb-3 pl-9 text-gray-800 mr-80">Phone Number </p>
                            <Field className='h-12 w-80 bg-white font-medium border-2 border-gray-200 text-center' type="number" name="phoneNumberRegister" />
                            <p className="pb-3 pl-9 text-gray-800 mr-80">Nama Depan</p>
                            <p className="pb-3 pl-9 text-gray-600 mr-80">Sesuai di KTP/Passpor/SIM</p>
                            <Field className='h-12 w-80 bg-white font-medium border-2 border-gray-200 text-center' type="text" name="identitas" />
                            <p className="pb-3 pl-9 text-gray-800 mr-80">Nama Belakang</p>
                            <Field className='h-12 w-80 bg-white font-medium border-2 border-gray-200 text-center' type="text" name="identitas" />
                            <p className="pb-3 pl-9 text-gray-800 mr-80">Tanggal Lahir</p>
                            <Field className='h-12 w-80 bg-white font-medium border-2 border-gray-200 text-center' type="text" name="identitas" placeholder="yyyy-mm-dd"/>
                            <p className="pb-3 pl-9 text-gray-800 mr-80">Jenis Kelamin</p>
                            <Field type="select" name="gender">
                                <option>Laki laki</option>
                                <option>Perempuan</option>
                            </Field>

                            <button className='h-12 w-80 rounded-xl bg-blue-700 text-white font-medium' type='submit'>Masuk</button>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
}