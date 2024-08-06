import React from 'react'

export default function Button({props}: {props: string}) {
    return (
        <div>
            <button className=' bg-blue-500 hover:bg-blue-600 transition-all duration-150 py-1 px-3 rounded-md font-semibold shadow-lg shadow-blue-500/50'>{props}</button>
        </div>
    )
}
