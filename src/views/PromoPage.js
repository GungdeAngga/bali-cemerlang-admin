import React from 'react'
import SideBar from '../component/sideBar/SideBar'
import SearchMenu from '../component/search/SearchMenu'
import Garis from '../component/garis/Garis'
import PromoMenu from '../component/promo/PromoMenu'
import PromoTable from '../component/promo/PromoTable'

export default function PromoPage() {
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
          <PromoMenu/>
          <Garis/>
        </div>
        <div>
          <PromoTable/>
        </div>
      </div>
      <p className='absolute bottom-8 right-10 text-VividRed font-bold'>© 2023 Designed & Develop by CV Maiharta</p>
    </div>
  </div>
  )
}
