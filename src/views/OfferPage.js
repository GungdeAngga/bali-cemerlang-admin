import React from 'react'
import SideBar from '../component/sideBar/SideBar'
import SearchMenu from '../component/search/SearchMenu'
import OfferMenu from '../component/offer/OfferMenu'
import OfferTable from '../component/offer/OfferTable'
import Garis from '../component/garis/Garis'

export default function OfferPage() {
  return (
    <div className='flex flex-row'>
    <div className='basis-1/5'>
      <SideBar/>
    </div>
    <div className='basis-3/4'>
      <div className='flex flex-col pt-8'>
          <div className='flex border border-VividRed rounded-xl p-2 w-[1500px]'>
            <SearchMenu/>
          </div>
        <div>
          <OfferMenu/>
          <Garis/>
        </div>
        <div>
          <OfferTable/>
        </div>
      </div>
    </div>
  </div>
  )
}
