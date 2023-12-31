import Filters from '@/components/Filters'
import Header from '@/components/Header'
import ResourceCard from '@/components/ResourceCard'
import SearchForm from '@/components/SearchForm'
import { getResources } from '@/sanity/actions'
import React from 'react'

export const revalidate = 10

interface Props {
  searchParams: { [key: string]: string | undefined }
}

const Page = async ({ searchParams }: Props) => {


  const resources = await getResources({
    query: searchParams?.query || '',
    category: searchParams?.category || '',
    page: '1'
  })


  return <>
    <main className='flex-center paddings mx-auto w-full max-w-screen-2xl flex-col'>
      <section className='nav-padding w-full'>
        <div className='flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover text-center '>
          <h1 className='sm:heading1 heading2 mb-6 text-center text-white'>JavaScript Mastery Resources</h1>
        </div>
        <SearchForm />
      </section>
      <Filters />
      {(searchParams?.query || searchParams?.category) && 
      (<section className='flex-center mt-6 w-full flex-col sm:mt-20'>
        <Header
          title="Resources"
          query={searchParams?.query || ''}
          category={searchParams?.category || ''}
        />
        <div className=' mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start '>
          {resources?.length > 0 ? (
            resources.map((resources: any) => (
              <ResourceCard
                key={resources._id}
                title={resources.title}
                id={resources.id}
                image={resources.image}
                downloadNumber={resources.views}
                downloadLink={resources.downloadLink}

              />
            ))
          ) : (
            <p className='body-regular text-white-400'>
              No resources Found
            </p>
          )}
        </div>
      </section>)}
      
    </main>
  </>
}

export default Page