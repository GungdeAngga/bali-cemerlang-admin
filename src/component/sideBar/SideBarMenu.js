import React from 'react'

export default function SideBarMenu() {
  return (
    <div className='flex text-white font-bold text-3xl'>
        <ul className='space-y-7'>
            <li className='flex'>
                <a href='/' className='flex'>
                    <img src='./assets/dashboard.svg' alt='dahsboard' className='pr-3 '/>
                    dashboard
                </a>
            </li>
            <li className='flex'>
                <a href='/Offer' className='flex'>
                    <img src='./assets/offer.svg' alt='offer' className='pr-3'/>
                    offer
                </a>
            </li>
            <li className='flex'>
                <a href='/' className='flex'>
                    <img src='./assets/news.svg' alt='news' className='pr-3'/>
                    News
                </a>
            </li>
            <li className='flex'>
                <a href='/' className='flex'>
                    <img src='./assets/gallery.svg' alt='gallery' className='pr-3'/>
                    Gallery
                </a>
            </li>
            <li className='flex'>
                <a href='/' className='flex'>
                    <img src='./assets/order.svg' alt='order' className='pr-3'/>
                    Order
                </a>
            </li>
            <li className='flex'>
                <a href='/' className='flex'>
                    <img src='./assets/tiket.svg' alt='tiket' className='pr-3'/>
                    pakage
                </a>
            </li>
        </ul>
    </div>
  )
}
