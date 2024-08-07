"use client"

import React from 'react'
import { today, getLocalTimeZone, isWeekend } from "@internationalized/date";
import { useLocale } from "@react-aria/i18n";
import { Calendar } from '@nextui-org/calendar';


export const Kalendar = () => {
    let [date, setDate] = React.useState(today(getLocalTimeZone()));
    let { locale } = useLocale();
    let isInvalid = isWeekend(date, locale);

    return (
        <div className='text-white rounded-md  bg-black'>
            <Calendar
                aria-label="Date (Invalid on weekends)"
                errorMessage={isInvalid ? "We are closed on weekends" : undefined}
                isInvalid={isInvalid}
                value={date}
                onChange={setDate}
            />
        </div>
    )
}
