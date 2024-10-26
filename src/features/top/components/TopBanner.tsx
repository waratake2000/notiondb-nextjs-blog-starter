import React from 'react'

const TopBanner = ({ imgUrl, alt, date, children, tags }: ArticleCardProps) => {
  return (
    <div className="w-full bg-black text-white justify-items-center">
      <div className='w-8/12'> {/* 画面幅の調整部分 */}
        <div className='w-full flex justify-between items-center'>
          <div className='w-7/12'>
            <h2 className="text-7xl font-bold py-1">
              New Article
            </h2>
            <p className='text-xl font-bold text-gray-400 py-1'>{date}</p>
            <h3 className='text-3xl font-bold py-1'>{children}</h3>
            <div className='flex py-1 gap-5'>
              {tags.map((props) => (
                <p className='text-base font-medium'>{props.label}</p>
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
      </div>
    </div>
  )
}

export default TopBanner
