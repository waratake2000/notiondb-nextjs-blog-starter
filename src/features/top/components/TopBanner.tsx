import Tag from '@/features/common/components/Tag'
import React from 'react'
import { ArticleCardProps } from '../types/components'
import SideMargin from '@/features/common/components/SideMargin'

const TopBanner = ({ imgUrl, alt, date, children, tags }: ArticleCardProps) => {
  return (
    <div className="bg-black text-white">
      <SideMargin>
        <div className='w-full flex justify-between items-center'>
          <div className='w-7/12 pr-4'>
            <h2 className="text-7xl font-bold py-1">
              New Article
            </h2>
            <p className='text-xl font-bold text-gray-400 py-1'>{date}</p>
            <h3 className='text-3xl font-bold py-1'>{children}</h3>
            <div className='flex py-1 gap-5'>
              {tags.map((props) => (
                <Tag>{props.children}</Tag>
              ))}
            </div>
          </div>
          <div className='w-5/12'>
            <img 
              src={imgUrl}
              alt={alt}
              className='object-cover'
            />
          </div>
        </div>
      </SideMargin>
    </div>
  )
}

export default TopBanner
