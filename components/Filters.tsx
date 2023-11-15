'use client'
import { formUrlQuery } from '@/sanity/utils'
import { useSearchParams, useRouter } from 'next/navigation'
import React, { useState } from 'react'

const links = ['all', 'Next 13', 'FrontEnd', 'BackEnd', 'FullStack']
const Filters = () => {
    const router = useRouter()
    const [Active, setActive] = useState('')

    const searchParams = useSearchParams()

    const handleFilter = (link: string) => {
        let newUrl = '';

        if (Active === link) {
            // setActive('')
            newUrl = formUrlQuery({
                params: searchParams.toString(),
                keyToRemove: ['category'],
                value: null
            })
        } else {
            setActive(link);

            newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: 'category',
                value: link.toLowerCase()
            })
        }
        router.push(newUrl, { scroll: false })
    }

    return <>
        <ul className='text-white-800 flex-center body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-2-2xl'>
            {links.map((link) => (
                <button
                    className={`${Active === link ? "gradient_blue-purple" : ""} whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
                    key={link}
                    onClick={() => handleFilter(link)}
                >
                    {link}
                </button>
            ))}
        </ul>
    </>
}

export default Filters