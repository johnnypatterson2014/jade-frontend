'use client';

import Image from 'next/image';

export default function Home() {


        return (
                <>
                        <div className='m-[10px]'>

                                <div className='jade-h1'>
                                        determinants and eigenvectors
                                </div>

                                <div className="tabs tabs-lift">
                                        <input type="radio" name="my_tabs_1" className="tab" aria-label="Notes" defaultChecked />
                                        <div className="tab-content bg-base-100 border-base-300 p-6">
                                                <div className='grid grid-cols-1'>
                                                        <div className='mb-[20px]'><Image src="/notes/week4_1.jpg" width={800} height={1000} alt="" /></div>
                                                        <div className='mb-[20px]'><Image src="/notes/week4_2.jpg" width={800} height={1000} alt="" /></div>
                                                        <div className='mb-[20px]'><Image src="/notes/week4_3.jpg" width={800} height={1000} alt="" /></div>
                                                        <div className='mb-[20px]'><Image src="/notes/week4_4.jpg" width={800} height={1000} alt="" /></div>
                                                        <div className='mb-[20px]'><Image src="/notes/week4_5.jpg" width={800} height={1000} alt="" /></div>
                                                        <div className='mb-[20px]'><Image src="/notes/week4_6.jpg" width={800} height={1000} alt="" /></div>
                                                        <div className='mb-[20px]'><Image src="/notes/week4_7.jpg" width={800} height={1000} alt="" /></div>
                                                        <div className='mb-[20px]'><Image src="/notes/week4_8.jpg" width={800} height={1000} alt="" /></div>
                                                        <div className='mb-[20px]'><Image src="/notes/week4_9.jpg" width={800} height={1000} alt="" /></div>
                                                        <div className='mb-[20px]'><Image src="/notes/week4_10.jpg" width={800} height={1000} alt="" /></div>
                                                        <div className='mb-[20px]'><Image src="/notes/week4_11.jpg" width={800} height={1000} alt="" /></div>
                                                        <div className='mb-[20px]'><Image src="/notes/week4_12.jpg" width={800} height={1000} alt="" /></div>
                                                        <div className='mb-[20px]'><Image src="/notes/week4_13.jpg" width={800} height={1000} alt="" /></div>
                                                        <div className='mb-[20px]'><Image src="/notes/week4_14.jpg" width={800} height={1000} alt="" /></div>
                                                        <div className='mb-[20px]'><Image src="/notes/week4_15.jpg" width={800} height={1000} alt="" /></div>

                                                        {/* <div className='mb-[20px]'><Image src="/notes/week4_16.png" width={600} height={737} alt="" /></div> */}
                                                        <div className='mb-[20px]'><img src='/notes/week4_16.png' width='800px' /></div>

                                                        <div className='mb-[20px]'><Image src="/notes/week4_17.jpg" width={800} height={1000} alt="" /></div>
                                                        <div className='mb-[20px]'><Image src="/notes/week4_18.jpg" width={800} height={1000} alt="" /></div>

                                                </div>

                                        </div>

                                        <input type="radio" name="my_tabs_1" className="tab" aria-label="Labs & Assignments" />
                                        <div className="tab-content bg-base-100 border-base-300 p-6">

                                                <a href="/C1_W4_Lab_1_Interpreting_eigenvalues_and_eigenvectors.html" target="_blank">Lab: Interpreting eigenvalues and eigenvectors</a>
                                                <br /><br />

                                                <a href="/C1W4_Assignment.html" target="_blank">Assignment: Webpage navigation model and PCA</a>
                                                <br /><br />

                                        </div>


                                </div>

                        </div>

                </>
        );



}
