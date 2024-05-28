'use client'
import Section1 from './Section1';
import { fetchNewsListBySport } from '@/lib/actions/NewsActions/NewsActions';
import React from 'react'
import { useInView } from "react-intersection-observer";
import Spinner from './Spinner';
import ShowLoadedData from './ShowLoadedData';

const LoadMore = ({id}: {id: string}) => {
    const [data, setData] = React.useState<any>([]);
    const [pagesLoaded, setPagesLoaded] = React.useState(0);

    const { ref, inView } = useInView();

    const delay = (ms: number) =>
        new Promise((resolve) => setTimeout(resolve, ms));

    React.useEffect(() => {

        const loadMoreNews = async () => {
            await delay(2000);
            const nextPage = pagesLoaded + 1;
            const res = await fetchNewsListBySport({
                category: id ,
                pageNo: nextPage.toString(),
            })
            const newNews = res?.data;
            setData((prev: any) => [...prev, ...newNews]);
            setPagesLoaded(nextPage);
        }

        if (inView) {
            loadMoreNews();
        }
    }, [inView, pagesLoaded, id])

    return (
        <>
            <ShowLoadedData data={data} />
            <div className="flex justify-center items-center py-3 col-span-1 md:col-span-2 lg:col-span-3 w-full min-h-[25vh]" ref={ref}>
                <Spinner />
            </div>
        </>
    )
}

export default LoadMore
