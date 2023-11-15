import React from 'react'

interface Props {
    title: string;
    query: string;
    category: string;
}

const Header = ({ title, query, category }: Props) => {
    if (query && category) {
        return (
            <h1 className='heading3 self-start text-white-800'>
                Search Results for "{query} in <span className='capitalize'>{category}</span>  "
            </h1>
        )
    }

    if (query) {
        return (
            <h1 className='heading3 self-start text-white-800'>
                Search Results for "{query}  "
            </h1>
        )
    }

    if (category) {
        return (
            <h1 className='heading3 self-start text-white-800'>
                Search Results in " <span className='capitalize'>{category}</span>  "
            </h1>
        )
    }



    return <>
        <h1 className='heading3 self-start text-white-800'>
            No Results
        </h1>
    </>
}

export default Header