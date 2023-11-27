import React from 'react'

export default function PendingOrder() {
  return (
    <div className='flex items-center justify-center w-[350px] h-20 rounded-xl bg-red-800 text-white'>
        <div className='font-bold pr-4 text-6xl'>
            <span>36</span>
        </div>
        <div className='text-xl'>
            Pending Order
        </div>
    </div>
  )
}
