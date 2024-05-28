import React from 'react'
import Image from 'next/image'
import { formatRelativeTime } from '@/lib/utils'

const NewsCard = ({ data }: { data: any }) => {
    return (
        <div className='border-b py-1.5 md:py-3 px-2 border-gray-600 max-w-[100%] md:max-w-[80%] flex flex-col md:flex-row gap-3 justify-start items-start'>
            <Image
                src={data?.main_media[0]?.data?.urls?.uploaded?.original}
                alt={data?.entity_type}
                width={360}
                height={260}
                className="rounded-sm md:hidden"
            />
            <Image
                src={data?.main_media[0]?.data?.urls?.uploaded?.original}
                alt={data?.entity_type}
                width={200}
                height={150}
                className="rounded-sm hidden md:block"
            />

            <div className="w-full h-full flex flex-col justify-between">
                <p className="font-[500] pb-2 max-w-[100%] md:max-w-[60%]">
                    {data?.title}
                </p>

                <p className="font-[400] pb-2">
                    {data?.main_media[0]?.description}
                </p>

                
                <p className="my-1.5 md:my-3  text-black font-[500] text-end text-xs">
                    {formatRelativeTime(data?.published_at)}
                </p>
            </div>
        </div>
    )
}

export default NewsCard
