'use client';

import Link from 'next/link';
import Drawer2 from '@/components/client/Drawer2';

export default function MainNav() {

    return (
        <>
            <div className='main-nav'>

                <Drawer2 name='jade'>
                    <ul className="">
                        <li><Link href={'/jade/notes'}>notes</Link></li>
                    </ul>
                </Drawer2>

                <Drawer2 name='phase 1'>
                    <ul className="">
                        <li><Link href={'/python4j'}>python for java devs</Link></li>
                        <li><Link href={'/ps4ds'}>practical statistics for data science</Link></li>
                    </ul>
                </Drawer2>



            </div>
        </>
    );

}