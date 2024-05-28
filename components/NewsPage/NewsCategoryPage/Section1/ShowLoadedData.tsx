import React from 'react'
import NewsCard from './NewsCard'

const ShowLoadedData = ({ data }: { data: any }) => {
  return (
      <div className=''>
          {
              data && data?.map((item: any) => (
                  <NewsCard key={item.id} data={item} />
              ))
          }
      </div>
  )
}

export default ShowLoadedData
