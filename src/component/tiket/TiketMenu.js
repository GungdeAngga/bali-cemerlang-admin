import React from 'react'

export default function TiketMenu() {
  return (
    <div className='flex pt-3'>
        <p className='text-5xl font-bold text-VividRed font-poppins pr-5'>Ticket</p>
        <a href="/TambahTiket" className='bg-VividRed rounded-md flex items-center justify-center w-28 text-white'><img src='./assets/tambah.svg' alt='tambah'/>Tambah</a>
    </div>
  )
}
