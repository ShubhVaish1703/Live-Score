import React from 'react'
import NewsCard from './NewsCard'

const Section2 = ({ data }: { data: any }) => {

    return (
        <div className="flex flex-col gap-4 py-8">
            {
                data?.homepageArticles  && data?.homepageArticles[0]?.articles &&
                data?.homepageArticles[0]?.articles?.map((item: any) => (
                    <NewsCard key={item.id} data={item} />
                ))
            }
        </div>
    )
}

export default Section2
