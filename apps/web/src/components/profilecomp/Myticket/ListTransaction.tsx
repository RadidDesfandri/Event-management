import { getTransactionId } from '@/components/libs/action/transaction'
import React from 'react'
import Transaction from './Transaction';
import NotFound from '@/components/NotFound';

const ListTransaction = async () => {
    const { result } = await getTransactionId()
    // console.log(result.transaction);
    const data = result.transaction
    // console.log(data);


    return (
        <div className='px-5 py-5'>
            <div className='flex flex-wrap gap-4 items-center'>
                {data.map((order) => {
                    return (
                        <Transaction key={order.id} data={order} />
                    )
                })}
                {
                    data.length == 0 &&
                    <div className='w-full'>
                        <NotFound text='Belum ada ticket yang dibeli' width={300} height={300}/>
                    </div>
                }
            </div>

        </div>
    )
}

export default ListTransaction