"use client"

import React from 'react'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { ErrorMessage, Form, Formik, useField } from "formik";


export const DatePickers = ({ name = '', placeholder = '' }) => {
    const [field, meta, helpers] = useField(name);

    const { value } = meta;
    const { setValue } = helpers;

    return (
        <DatePicker
            {...field}
            selected={value}
            onChange={(date) => setValue(date)}
            placeholderText={placeholder}
            className='w-full border-b bg-transparent text-black focus:border-blue-700 border-gray-500 outline-none h-10 pb-3'
        />
    );
};

export const DatePickers2 = ({ name = '', placeholder = '' }) => {
    const [field, meta, helpers] = useField(name);

    const { value } = meta;
    const { setValue } = helpers;

    return (
        <DatePicker
            {...field}
            selected={value}
            onChange={(date) => setValue(date)}
            placeholderText={placeholder}
            className='w-full cursor-pointer bg-transparent text-black outline-none'
        />
    );
};
