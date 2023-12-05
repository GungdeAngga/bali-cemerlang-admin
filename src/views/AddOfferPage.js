import React from 'react'
import SideBar from '../component/sideBar/SideBar'
import SearchMenu from '../component/search/SearchMenu'
import Garis from '../component/garis/Garis'
import AddOffer from '../component/tambahData/AddOffer'

export default function AddOfferPage() {
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
        <div className='flex pt-3'>
          <div className='flex items-center justify-center pr-5'>
            <a href='/Offer'><img src='./assets/back1.svg' alt='back' className='w-8 '/></a>
          </div>
          <p className='text-5xl text-VividRed font-bold'>Tambah Offer</p>  
        </div>
        <Garis/>
        <div>
          <AddOffer/>
        </div>
      </div>
    </div>
  </div>
  )
}
