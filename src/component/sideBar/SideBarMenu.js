import React from 'react'

export default function SideBarMenu() {
  return (
    <div className='flex text-white font-bold text-3xl'>
        <ul className='space-y-7'>
            <li className='flex'>
                <img src='./assets/dashboard.svg' alt='dahsboard' className='pr-3 '/>
                dashboard
            </li>
            <li className='flex'>
                <img src='./assets/offer.svg' alt='offer' className='pr-3'/>
                offer
            </li>
            <li className='flex'>
                <img src='./assets/news.svg' alt='news' className='pr-3'/>
                News
            </li>
            <li className='flex'>
                <img src='./assets/gallery.svg' alt='gallery' className='pr-3'/>
                Gallery
            </li>
            <li className='flex'>
                <img src='./assets/order.svg' alt='order' className='pr-3'/>
                Order
            </li>
            <li className='flex'>
                <img src='./assets/tiket.svg' alt='tiket' className='pr-3'/>
                Tiket
            </li>
        </ul>
    </div>
  )
}
