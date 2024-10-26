import React from 'react'


const HeaderTitle = ({children, subText}: HeaderTitleProps) => {
  return (
    <div className='flex justify-between border-b p-1.5 border-black items-center' >
      <h1 className="text-7xl font-bold">
        {children}
      </h1>
      <p className='font-light w-4/12 h-full break-words'>
        {subText}
      </p>
    </div>
  )
}

export default HeaderTitle
