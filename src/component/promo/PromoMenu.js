import React from 'react'

export default function PromoMenu() {
  return (
    <div className='flex pt-3'>
        <p className='text-5xl font-bold text-VividRed font-poppins pr-5'>Promo</p>
        <a href="/TambahPromo" className='bg-VividRed rounded-md flex items-center justify-center w-28 text-white'><img src='./assets/tambah.svg' alt='tambah'/>Tambah</a>
    </div>
  )
}
