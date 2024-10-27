import Tag from '@/features/common/components/Tag'
import React from 'react'
import { ArticleCardProps } from '../types/components'

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
            <p className='text-base font-bold transition duration-300'>{date}</p>
            <h4 className='text-2xl font-bold py-1 group-hover:underline'>{children}ああああああああああああああ
            </h4>
          </div>
        </div>
      </div>
      <div className='flex py-1 gap-5'>
          {tags.map((props) => (
            <Tag>{props.children}</Tag>
          ))}
        </div>
    </div>
  )
}

export default ArticleCard
