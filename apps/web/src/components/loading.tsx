import React from 'react'

export default function LoadingComp() {
    return (
        <div className='w-full bg-black/90 '>
            <div className='mx-auto flex justify-center h-screen max-w-7xl'>
                <div className="flex justify-center items-center flex-row gap-2">
                    <div className="w-3 h-3 rounded-full bg-gray-50 animate-bounce"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-50 animate-bounce [animation-delay:-.3s]"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-50 animate-bounce [animation-delay:-.5s]"></div>
                </div>
            </div>
        </div>
    )
}