import Tag from '@/features/common/components/Tag'
import { ArticleCardProps } from '@/features/common/types/components'
import React from 'react'

const ArticleCard = ({ imgUrl, alt, date, children, tags }: ArticleCardProps) => {
  return (
    <div className='h-full flex flex-col justify-between group'>
      <div className='h-full'>
        <img 
          src={imgUrl}
          alt={alt}
          className='w-full object-cover'
        />
        <div className='w-full'>
          <div className=''>
            <p className='text-base text-gray-400 font-bold p-1'>{date}</p>
            <h4 className='text-2xl font-bold py-1 group-hover:underline'>{children}ああああああああああああああ
            </h4>
          </div>
        </div>
      </div>
      <div className='flex py-1 gap-5'>
        {tags.map((props, index) => (
          <Tag key={index}>{props.children}</Tag>
        ))}
      </div>
    </div>
  )
}

export default ArticleCard
