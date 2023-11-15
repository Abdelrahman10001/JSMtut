import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
    return <>
        <nav className="flex-center fixed top-0 z-50 w-full bg-black-200 border-b-2 border-black-200 py-7 text-white ">
            <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 sm:px-16 xs:px-8  ">
                <Link href="/">
                    <Image
                        src="/jsm-logo.svg"
                        width={55}
                        height={40}
                        alt='logo'
                    />
                </Link>
                 <Image
                        src="/hamburger-menu.svg"
                        width={30}
                        height={30}
                        alt='hamburger menu'
                        className='md:hidden block  '
                    />

                    <ul className='flex-center gap-x-3 md:gap-x-10 max-md:hidden'>
                        <li className='body-text text-gradient_blue-purple !font-bold'>
                            <Link href="https://jsmastery.pro/next13"target='_blank'>
                                Next.js 13.4 Course
                            </Link>        
                        </li>
                        <li className='body-text !font-bold'>
                            <Link href="https://jsmastery.pro/masterclass"target='_blank'>
                                MasterClass
                            </Link>        
                        </li>
                    </ul>

            </div>
        </nav>
    </>
}

export default NavBar