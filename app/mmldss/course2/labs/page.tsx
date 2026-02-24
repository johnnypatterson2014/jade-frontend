'use client';

import Image from 'next/image';
import TileRowCell1 from '@/components/client/TileRowCell1';
import TileRowCell2 from '@/components/client/TileRowCell2';
import TileRowCell3 from '@/components/client/TileRowCell3';

export default function Home() {


        const html = `
        
        `

        function createMarkup(content: any) {
                return { __html: content };
        }

        return (
                <>
                        <div className='m-[10px]'>

                                <div className='jade-h1'>
                                        Calculus for machine learning and data science
                                </div>

                                <div className='jade-h2'>
                                        Labs and Assignments
                                </div>



                        </div>

                </>
        );



}
