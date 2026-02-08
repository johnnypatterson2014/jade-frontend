'use client';

import Link from 'next/link';
import NavDrawer from '@/components/client/NavDrawer';
import NavDrawerItem from '@/components/client/NavDrawerItem';

export default function MainNav() {

    return (
        <>
            <div className='main-nav'>

                <NavDrawer name='documentation'>

                    <NavDrawerItem href='/python4j' isFirst={true} >
                        python4j
                    </NavDrawerItem>

                    <NavDrawerItem href='/ps4ds' isFirst={false} >
                        ps4ds
                    </NavDrawerItem>

                </NavDrawer>

                <NavDrawer name='phase 1'>

                    <NavDrawerItem href='/python4j' isFirst={true} >
                        python for java devs
                    </NavDrawerItem>

                    <NavDrawerItem href='/ps4ds' isFirst={false} >
                        practical statistics for data science
                    </NavDrawerItem>

                </NavDrawer>

            </div>
        </>
    );

}