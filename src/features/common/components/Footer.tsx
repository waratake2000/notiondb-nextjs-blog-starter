import React from 'react'

const Footer = () => {
  const date = new Date().getFullYear()
  const nowYear = date.toString()
  
  return (
    <footer className="w-full bg-black text-white justify-items-center">
      <div className='w-8/12'>
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
      </div>
    </footer>
  )
}

export default Footer
