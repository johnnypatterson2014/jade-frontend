'use client';

import Link from 'next/link';
import NavDrawer from '@/components/NavDrawer';

export default function MainNav() {

    return (
        <>
            <div className='main-nav'>

                <NavDrawer title='phase 1'>
                    <ul className="menu w-full">
                        <li><Link href={'/python4j'}>python for java devs</Link></li>
                        <li><Link href={'/ps4ds'}>practical statistics for data science</Link></li>
                    </ul>
                </NavDrawer>



            </div>
        </>
    );

}