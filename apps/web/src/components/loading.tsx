import React from 'react'

export default function LoadingComp() {
    return (
        <div className='w-full bg-gray-950 '>
            <div className='mx-auto flex flex-col text-center justify-center h-screen max-w-7xl'>
                <div className="flex justify-center items-center flex-row gap-1">
                    <div className="rounded-full text-gray-300 text-3xl font-bold animate-bounce">t</div>
                    <div className="rounded-full text-gray-300 text-3xl font-bold animate-bounce [animation-delay:-.3s]">r</div>
                    <div className="rounded-full text-gray-300 text-3xl font-bold animate-bounce [animation-delay:-.5s]">i</div>
                    <div className="rounded-full text-gray-300 text-3xl font-bold animate-bounce [animation-delay:-.6s]">c</div>
                    <div className="rounded-full text-blue-500 text-3xl font-bold animate-bounce [animation-delay:-.5s]">k</div>
                    <div className="rounded-full text-blue-500 text-3xl font-bold animate-bounce [animation-delay:-.6s]">e</div>
                    <div className="rounded-full text-blue-500 text-3xl font-bold animate-bounce [animation-delay:-.3s]">t</div>
                </div>
                <div className="flex justify-center items-center flex-row gap-1">
                    <div className="rounded-full text-blue-500 text-xs font-bold animate-bounce">t</div>
                    <div className="rounded-full text-blue-500 text-xs font-bold animate-bounce [animation-delay:-.3s]">u</div>
                    <div className="rounded-full text-blue-500 text-xs font-bold animate-bounce [animation-delay:-.5s]">n</div>
                    <div className="rounded-full text-blue-500 text-xs font-bold animate-bounce [animation-delay:-.6s]">g</div>
                    <div className="rounded-full text-gray-300 text-xs font-bold animate-bounce [animation-delay:-.5s]">g</div>
                    <div className="rounded-full text-gray-300 text-xs font-bold animate-bounce [animation-delay:-.6s]">u</div>
                    <div className="rounded-full text-gray-300 text-xs font-bold animate-bounce [animation-delay:-.3s]"></div>
                    <div className="rounded-full text-gray-300 text-xs font-bold animate-bounce [animation-delay:-.3s]">y</div>
                    <div className="rounded-full text-gray-300 text-xs font-bold animate-bounce [animation-delay:-.3s]">a</div>
                </div>
            </div>
        </div>
    )
}