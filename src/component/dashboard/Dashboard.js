import React from 'react'
import TotalOrder from './TotalOrder'
import PendingOrder from './PendingOrder'
import RejectOrder from './RejectOrder'
import SuccessOrder from './SuccessOrder'


export default function dashboard() {
  return (
    <div>
        <div className='flex pt-7 space-x-8'>
            <TotalOrder/>
            <PendingOrder/>
            <RejectOrder/>
            <SuccessOrder/>
        </div>
        <div>

        </div>
    </div>
  )
}
