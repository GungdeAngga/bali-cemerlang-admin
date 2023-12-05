import React from 'react'

export default function SearchMenu() {
  return (
    <div className='flex'>
        <img src='./assets/search.svg' alt='search' className='pl-4 pr-7'/>
        <input type='text' placeholder='search' className='w-full outline-none placeholder-VividRed'/>
    </div>
  )
}
