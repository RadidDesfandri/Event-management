"use client"

import React, { useState } from 'react'
import ListTransaction from './ListTransaction'
import Review from './Review'

const StateReview = () => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }
    return (
        <div>
            <div className='flex gap-3 text-2xl' >
                <p onClick={handleOpen}>Review</p>
                <p onClick={handleOpen}>Ticket</p>
            </div>
            {
                open ?
                    <Review />
                    :
                    <ListTransaction />
            }
        </div>
    )
}

export default StateReview