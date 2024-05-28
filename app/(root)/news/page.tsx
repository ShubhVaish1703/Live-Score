import { fetchNewsList } from '@/lib/actions/NewsActions/NewsActions'
import type { Metadata } from "next";
import Section2 from '@/components/NewsPage/Section2/Section2'

async function getData() {
    let res = await fetchNewsList();
    return res;
}

export default async function Home() {

    const data = await getData();

    return (
        <main className="overflow-x-hidden">
            <Section2 data={data} />
        </main>
    );
}
