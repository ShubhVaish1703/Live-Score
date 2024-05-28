import { fetchNewsList } from '@/lib/actions/NewsActions/NewsActions'
import Section1 from '@/components/NewsPage/Section1/Section1'

async function getData() {
    let res = await fetchNewsList();
    return res;
}

export default async function NewsLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const data = await getData();


    return (
        <section>
            <Section1 data={data} />
            {children}
        </section>
    )
}