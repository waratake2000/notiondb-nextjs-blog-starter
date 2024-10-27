import React from 'react'
import SideMargin from './SideMargin'

const Footer = () => {
  const date = new Date().getFullYear()
  const nowYear = date.toString()
  
  return (
    <footer className="bg-black text-white">
      <SideMargin>
        <div className='py-12'>
          <p className='py-1 text-lg font-semibold'>WARATAKE BLOG</p>
          <p className='text-xs font-extralight'>
            A Frontend focused Web Developer building the Frontend of Websites and <br />Web Applications that leads to the success of the overall product
          </p>
        </div>
        <div className='w-full border-b border-white' />
        <div className='py-6 w-full text-center'>
          <small className='text-xs font-extralight'>© {nowYear} Your Company Name. All rights reserved.</small>
        </div>
      </SideMargin>
    </footer>
  )
}

export default Footer
