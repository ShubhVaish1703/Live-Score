import Link from 'next/link'

const Section1 = ({ data }: { data: any }) => {

  return (
    <div>
      {
        data?.categories &&
        <div className='flex flex-wrap gap-2.5 pt-4'>
          <Link href="/news" className='px-3 py-1.5 rounded-2xl bg-black/80 hover:bg-black/70 text-white font-[500]'>
            All
          </Link>
          {
            data?.categories?.map((item: any, i: any) => (
              <Link href={`/news/${item?.title}-${item?.id}`} key={i} className='px-3 py-1.5 rounded-xl bg-black/80 hover:bg-black/70 text-white font-[500]'>
                {item?.initialTitle}
              </Link>
            ))
          }
        </div>
      }
    </div>
  )
}

export default Section1
