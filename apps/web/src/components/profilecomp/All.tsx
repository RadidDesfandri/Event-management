import React from 'react'
import Top from './Top'
import Mid from './Mid'
import Content from './Content'

const All = () => {
    return (
        <div className='w-full'>
            <Top />
            <main className='px-2 lg:px-10 py-4'>
                <Mid />
                <main className='lg:px-20 py-7 md:px-10 px-5'>
                    <Content/>
                </main>
            </main>
        </div>
    )
}

export default All