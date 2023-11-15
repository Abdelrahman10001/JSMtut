'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Input } from "@/components/ui/input"
import { formUrlQuery } from '@/sanity/utils';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';


const SearchForm = () => {
    const [Search, setSearch] = useState('')
    const searchParams = useSearchParams()
    const router = useRouter()
    const pahtName = usePathname()
    
    

    useEffect(() => {
        let newUrl = ''
        
        const delayDebounceFn = setTimeout(() => {
            if (Search) {
                newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    key: 'query',
                    value: Search
                })
            }else{
                newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    keyToRemove: ['query'],

                })
            }

            router.push(newUrl, { scroll: false })
        }, 300)

        return () => clearTimeout(delayDebounceFn)

    }, [Search])

    return <>

        <form className='flex-center mx-auto mt-10 w-full sm:-mt-10 sm:px-5' >
            <label className='flex-center relative w-full max-w-3xl' >
                <Image
                    src="/magnifying-glass.svg"
                    className='absolute left-8'
                    width={32}
                    height={32}
                    alt='Search icon'
                />
                <Input
                    value={Search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='base-regular h-fit border-0 bg-black-400 py-6 pl-20 pr-8 text-white-800 !ring-0 !ring-offset-0 placeholder:text-white-800'
                    type='text'
                    placeholder='Search'
                />
            </label>
        </form>
    </>
}

export default SearchForm