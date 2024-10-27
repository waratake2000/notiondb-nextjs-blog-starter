import React from 'react'
import { HeaderProps } from '../types/components'
import SideMargin from './SideMargin'


const Header = ({children, subText}: HeaderProps) => {
  return (
    <SideMargin>
      <div className='flex justify-between border-b p-1.5 border-black items-center' >
        <h1 className="text-7xl font-bold">
          {children}
        </h1>
        <p className='font-light w-4/12 h-full break-words'>
          {subText}
        </p>
      </div>
    </SideMargin>
  )
}

export default Header
