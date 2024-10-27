import React from 'react'
import { TagProps } from '../types/components'

const Tag = ({children}: TagProps) => {
  return (
    <div className='w-fit px-3 py-0.5 text-sm font-extralight text-black bg-slate-100 rounded-lg'>
      #{children}
    </div>
  )
}

export default Tag
