import React from 'react'
import SideBar from '../component/sideBar/SideBar'
import Dashboard from '../component/dashboard/Dashboard'
import ReactEditor from '../component/dashboard/ReactEditor'
import SearchMenu from '../component/search/SearchMenu'

export default function LandingPage() {
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
              <img src='./assets/HEADER.svg' alt='header' className='w-[1500px] pt-3'/>
            </div>
          <div>
            <Dashboard/>
          </div>
          <div>
            <ReactEditor/>
          </div>
        </div>
      </div>
    </div>
  )
}
