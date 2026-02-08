'use client';

import Link from 'next/link';
import Drawer2 from '@/components/client/Drawer2';

export default function MainNav() {

    return (
        <>
            <div className='main-nav'>

                <Drawer2 name='documentation'>

                    <div className='grid grid-cols-1 jade-nav'>
                        <Link className='jade-nav-link' href={'/python4j'}>
                            <div className='ml-[5px]'>
                                python4j
                            </div>
                        </Link>
                    </div>

                    <div className='grid grid-cols-1 jade-nav jade-nav-border-top'>
                        <Link className='jade-nav-link' href={'/python4j'}>
                            <div className='ml-[5px]'>
                                python4j
                            </div>
                        </Link>
                    </div>

                </Drawer2>

                <Drawer2 name='phase 1'>

                    <div className='grid grid-cols-1 jade-nav'>
                        <div>
                            <Link className='jade-nav-link' href={'/python4j'}>
                                <div className='ml-[5px]'>
                                    python for java devs
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 jade-nav jade-nav-border-top'>
                        <div>
                            <Link className='jade-nav-link' href={'/ps4ds'}>
                                <div className='ml-[5px]'>
                                    practical statistics for data science
                                </div>
                            </Link>
                        </div>
                    </div>

                </Drawer2>



            </div>
        </>
    );

}