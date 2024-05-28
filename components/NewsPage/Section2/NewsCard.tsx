import React from 'react'
import Image from 'next/image'
import { formatRelativeTime } from '@/lib/utils'

const NewsCard = ({ data }: { data: any }) => {
    return (
        <div className='border-b py-1.5 md:py-3 px-2 border-gray-600 max-w-[100%] md:max-w-[80%] flex flex-col md:flex-row gap-3 justify-start items-start'>
            <Image
                src={data?.mainMedia[0]?.original?.url}
                alt={data?.mainMedia[0]?.original?.alt}
                width={360}
                height={260}
                className="rounded-sm md:hidden"
            />
            <Image
                src={data?.mainMedia[0]?.original?.url}
                alt={data?.mainMedia[0]?.original?.alt}
                width={200}
                height={150}
                className="rounded-sm hidden md:block"
            />

            <div className="w-full h-full flex flex-col justify-between">
                <p className="font-[500] pb-2 max-w-[100%] md:max-w-[60%]">
                    {data?.title}
                </p>

                <div className='flex flex-wrap gap-1.5 md:gap-2.5 my-2'>
                    {
                        data?.related && data?.related?.tags && data?.related?.tags?.map((item: any, i: any) => (
                            <p key={i} className="font-[400] w-fit  py-1 tracking-wider px-2 rounded-2xl bg-black/80 hover:bg-black text-white text-[10px]">
                                {item?.title}
                            </p>
                        ))
                    }
                </div>
                
                <p className="my-1.5 md:my-3  text-black font-[500] text-end text-xs">
                    {formatRelativeTime(data?.publishedAt)}
                </p>
            </div>
        </div>
    )
}

export default NewsCard
