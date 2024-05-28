'use client'
import React from 'react'
import ShowLoadedData from './ShowLoadedData';
import { fetchNewsListBySport } from '@/lib/actions/NewsActions/NewsActions'

const Section1 = ({ id }: { id: any }) => {
    const [data, setData] = React.useState<any>([]);

    React.useEffect(() => {

        const getData = async (id: string) => {
            let res = await fetchNewsListBySport({
                category: id,
                pageNo: "1",
            });
            setData(res?.data);
        }

        getData(id);

    }, [id])

    return (

        <ShowLoadedData data={data} />
        // <div className=''>
        //     {
        //         data && data?.map((item: any) => (
        //             <NewsCard key={item.id} data={item} />
        //         ))
        //     }
        // </div>
    )
}

export default Section1
