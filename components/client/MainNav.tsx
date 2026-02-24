'use client';

import Link from 'next/link';
import NavDrawer from '@/components/client/NavDrawer';
import NavDrawer2 from '@/components/client/NavDrawer2';
import NavDrawerItem from '@/components/client/NavDrawerItem';

export default function MainNav() {

    return (
        <>
            <div className='main-nav'>

                <NavDrawer name='documentation'>

                    <NavDrawerItem href='/comingsoon' isFirst={true} >
                        jade architecture
                    </NavDrawerItem>

                    <NavDrawerItem href='/docs/uistyle' isFirst={false} >
                        jade visual style
                    </NavDrawerItem>

                    <NavDrawerItem href='/phase0/python' isFirst={false} >
                        python links
                    </NavDrawerItem>

                </NavDrawer>


                <NavDrawer name='notes'>

                    <NavDrawer2 name='python 4 java devs'>

                        <NavDrawerItem href='/notes/p4jd/fundamentals' isFirst={true} >
                            fundamentals
                        </NavDrawerItem>

                        <NavDrawerItem href='/notes/p4jd/intermediate' isFirst={false} >
                            classes & modules
                        </NavDrawerItem>

                        <NavDrawerItem href='/notes/p4jd/advanced' isFirst={false} >
                            numpy & pandas
                        </NavDrawerItem>


                    </NavDrawer2>


                    <NavDrawerItem href='/notes/ps4ds' isFirst={false} >
                        practical stats for DS
                    </NavDrawerItem>

                </NavDrawer>

                <NavDrawer name='Math for Machine Learning'>

                    <NavDrawer2 name='Linear algebra'>
                        <NavDrawerItem href='/mmldss/course1/notation' isFirst={true} >
                            notation
                        </NavDrawerItem>
                        <NavDrawerItem href='/mmldss/course1/week1' isFirst={false} >
                            systems of linear eq
                        </NavDrawerItem>

                        <NavDrawerItem href='/mmldss/course1/week2' isFirst={false} >
                            solving sys of linear eq
                        </NavDrawerItem>

                        <NavDrawerItem href='/mmldss/course1/week3' isFirst={false} >
                            vectors & linear trans
                        </NavDrawerItem>

                        <NavDrawerItem href='/mmldss/course1/week4' isFirst={false} >
                            det & eigenvectors
                        </NavDrawerItem>

                        <NavDrawerItem href='/mmldss/course1/summary' isFirst={false} >
                            summary
                        </NavDrawerItem>

                    </NavDrawer2>

                    <NavDrawer2 name='Calculus'>
                        <NavDrawerItem href='/mmldss/course2/week1' isFirst={true} >
                            week 1
                        </NavDrawerItem>
                        <NavDrawerItem href='/mmldss/course2/week2' isFirst={false} >
                            week 2
                        </NavDrawerItem>
                        <NavDrawerItem href='/mmldss/course2/labs' isFirst={false} >
                            labs
                        </NavDrawerItem>


                    </NavDrawer2>


                    <NavDrawerItem href='/comingsoon' isFirst={false} >
                        Probability & stats
                    </NavDrawerItem>

                </NavDrawer>


                <NavDrawer name='phase 1'>

                    <NavDrawerItem href='/comingsoon' isFirst={true} >
                        Artificial Intelligence: Principles and Techniques (XCS221)
                    </NavDrawerItem>

                </NavDrawer>


                <NavDrawer name='phase 2'>

                    <NavDrawerItem href='/comingsoon' isFirst={true} >
                        Deep Reinforcement Learning (XCS224R)
                    </NavDrawerItem>

                </NavDrawer>

            </div>
        </>
    );

}