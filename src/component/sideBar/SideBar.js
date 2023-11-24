import React from 'react'
import SideBarMenu from './SideBarMenu'

export default function SideBar() {
  return (
    <div className='fixed top-0 left-0 p-8'>
      <div className='rounded-2xl h-[870px] w-[300px] bg-VividRed p-3'>
        <div className='pt-6'>
          <div className='px-16'>
            <img src='./assets/logo.svg' alt='logo' className='pb-10'/>
          </div>
          <div className='px-10'>
            <SideBarMenu/>
          </div>
          <div className='pt-60 px-16'>
            <div className='flex'>
              <img src='./assets/back.svg' alt='back' className='pr-3'/>
              <a href='/' className='text-3xl font-bold text-white'>
                 Keluar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
