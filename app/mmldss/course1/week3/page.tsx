'use client';

import JadeLink from '@/components/client/JadeLink'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export default function Home() {
        const [htmlContent, setHtmlContent] = useState('');

        useEffect(() => {
                // Example: fetching an HTML file from the public folder
                async function fetchHtml() {
                        try {
                                const response = await fetch('/test3.html'); // Ensure file is in the public directory
                                const html2 = await response.text();
                                setHtmlContent(html2);
                        } catch (error) {
                                console.error('Error fetching HTML file:', error);
                        }
                }
                fetchHtml();
        }, []);

        function createMarkup() {
                return { __html: htmlContent };
        }

        return (
                <>
                        <div className='m-[10px]'>

                                <div className='jade-h1'>
                                        vectors and linear transformations
                                </div>

                                <div className="tabs tabs-lift">
                                        <input type="radio" name="my_tabs_1" className="tab" aria-label="Notes" defaultChecked />
                                        <div className="tab-content bg-base-100 border-base-300 p-6">

                                                <div className='grid grid-cols-1'>
                                                        <div className='mb-[20px]'>
                                                                <Image
                                                                        src="/notes/week3_1.jpg"
                                                                        width={600}
                                                                        height={786}
                                                                        alt=""
                                                                />
                                                        </div>
                                                        <div className='mb-[20px]'>
                                                                <Image
                                                                        src="/notes/week3_2.jpg"
                                                                        width={600}
                                                                        height={786}
                                                                        alt=""
                                                                />
                                                        </div>
                                                        <div className='mb-[20px]'>
                                                                <Image
                                                                        src="/notes/week3_3.jpg"
                                                                        width={600}
                                                                        height={786}
                                                                        alt=""
                                                                />
                                                        </div>
                                                        <div className='mb-[20px]'>
                                                                <Image
                                                                        src="/notes/week3_4.jpg"
                                                                        width={600}
                                                                        height={786}
                                                                        alt=""
                                                                />
                                                        </div>
                                                        <div className='mb-[20px]'>
                                                                <Image
                                                                        src="/notes/week3_5.jpg"
                                                                        width={600}
                                                                        height={786}
                                                                        alt=""
                                                                />
                                                        </div>
                                                        <div className='mb-[20px]'>
                                                                <Image
                                                                        src="/notes/week3_6.jpg"
                                                                        width={600}
                                                                        height={786}
                                                                        alt=""
                                                                />
                                                        </div>
                                                </div>





                                        </div>

                                        <input type="radio" name="my_tabs_1" className="tab" aria-label="Labs & Assignments" />
                                        <div className="tab-content bg-base-100 border-base-300 p-6">

                                                <a href="/C1W3_UGL_1_vector_operations.html" target="_blank">Lab: Vector Operations: Scalar Multiplication, Sum and Dot Product of Vectors</a>
                                                <br /><br />
                                                <a href="/C1W3_UGL_2_matrix_multiplication.html" target="_blank">Lab: Matrix Multiplication</a>
                                                <br /><br />
                                                <a href="/C1W3_UGL_3_linear_transformations.html" target="_blank">Lab: Linear Transformations</a>
                                                <br /><br />

                                                <a href="/C1W3_Assignment.html" target="_blank">Assignment: Linear Transformations and Neural Networks</a>
                                                <br /><br />

                                        </div>

                                        <input type="radio" name="my_tabs_1" className="tab" aria-label="Lab: Vector Operations" />
                                        <div className="tab-content bg-base-100 border-base-300 p-6">

                                                <div className='jade-code'>

                                                        <div dangerouslySetInnerHTML={createMarkup()} />

                                                </div>

                                        </div>

                                </div>

                        </div>

                </>
        );



}
