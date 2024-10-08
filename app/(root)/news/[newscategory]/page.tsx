import React from 'react'
import { fetchNewsListBySport } from '@/lib/actions/NewsActions/NewsActions'
import LoadMore from '@/components/NewsPage/NewsCategoryPage/Section1/LoadMore';

async function getData(id: string) {
    let res = await fetchNewsListBySport({
        category: id,
        pageNo: "1",
    });
    return res.data;
}

export default async function page({ params }: { params: { newscategory: string } }) {

    const category = params.newscategory;
    const parts = category?.split('-');
    const id = parts[parts?.length - 1];

    return (
        <div>
            <div className='pt-5'>
            </div>

            <LoadMore id={id} />

            <div className='pb-8'>
            </div>
        </div>
    )
}
