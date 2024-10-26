import React from 'react'

const ArticleCard = ({ imgUrl, alt, date, children, tags }: ArticleCardProps) => {
  return (
    <div className='w-80 aspect-[5/3]'>
      <img 
        src={imgUrl}
        alt={alt}
        className='relative w-full object-cover'
      />
      <div className='flex flex-col justify-between h-full'>
        <div>
          <p className='text-base font-bold text-gray-400 py-1'>{date}</p>
          <h4 className='text-2xl font-bold py-1'>{children}</h4>
        </div>
        <div className='flex py-1 gap-5'>
          {tags.map((props) => (
            <p className='text-base font-medium'>{props.label}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ArticleCard
