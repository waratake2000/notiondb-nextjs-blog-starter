import React from 'react'
import { SideMarginProps } from '../types/components'

const SideMargin = ({children}: SideMarginProps) => {
  return (
    <div className="w-full justify-items-center">
      <div className='w-8/12'>
			  {children}
      </div>
    </div>
  )
}

export default SideMargin
