'use client';

import Image from 'next/image';
import TileRowCell0 from '@/components/client/TileRowCell0';
import TileRowCell2 from '@/components/client/TileRowCell2';
import TileRowCell4 from '@/components/client/TileRowCell4';
import TileRowCell5 from '@/components/client/TileRowCell5';
import Tabs from '@/components/client/Tabs';
import Tab2 from '@/components/client/Tab2';
import { createMarkup, python_html_1 } from '@/components/config/Constants';
import { MathJax } from "better-react-mathjax";
import Button from '@/components/client/Button'
import Modal from '@/components/client/Modal'
import React, { useState, useEffect } from 'react';

export default function Home() {
        const [htmlContent, setHtmlContent] = useState('');

        useEffect(() => {
                // Example: fetching an HTML file from the public folder
                async function fetchHtml() {
                        try {
                                const response = await fetch('/C2_W3_Lab_2_Classification_with_Perceptron.html'); // Ensure file is in the public directory /C2_W1_Assignment.html
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

        const viewModal = (modal_id: string, e?: any) => {
                e?.preventDefault()
                document.getElementById('modal-' + modal_id).showModal()
        }

        const html = `

      `

        return (
                <>
                        <MathJax>
                                <div className='m-[10px]'>

                                        <div className='jade-h1'>
                                                Calculus for machine learning and data science
                                        </div>

                                        <div className='jade-h2'>
                                                Week 3: xxxx
                                        </div>

                                        <Tabs>

                                                <Tab2 title="testing" isChecked={true}>

                                                        <div className='flex flex-row gap-[10px] mb-[20px]'>
                                                                <div>
                                                                        <Button>
                                                                                <a onClick={() => viewModal('test')}>example by hand</a>
                                                                        </Button>
                                                                </div>
                                                                <div>
                                                                        <Button>
                                                                                <a onClick={() => viewModal('test2')}>example in python</a>
                                                                        </Button>
                                                                </div>
                                                                <div>
                                                                        <Button>
                                                                                <a href="/C2_W3_Lab_3_Optimization_Using_Newtons_Method.html" target="_blank">Lab: Classification with Perceptron</a>
                                                                        </Button>
                                                                </div>
                                                        </div>


                                                        <h1 className='no-top-margin'>Properties of the Derivative</h1>
                                                        <p>To differentiate more complicated functions, we use four fundamental rules:
                                                                scalar multiplication rule, sum rule, product rule, and chain rule.</p>

                                                        <h2 id="1-scalar-multiplication-rule">1. Scalar Multiplication Rule</h2>
                                                        <p>If a function is multiplied by a constant:</p>
                                                        <p className="formula">{"\\[f(x) = c \\cdot g(x)\\]"}</p>
                                                        <p>then its derivative is:</p>
                                                        <p className="formula">{"\\[f'(x) = c \\cdot g'(x)\\]"}</p>
                                                        <strong>Why this works:</strong>
                                                        <p>Multiplying a function by a constant stretches it vertically. This multiplies every rise (vertical change)
                                                                by c while the run (horizontal change) remains the same. Since slope = rise/run, all slopes — and therefore
                                                                the derivative — are multiplied by c.</p>

                                                        <div className='m-[10px] justify-items-center'><img src='/screenshots/023.png' width='700px' /></div>

                                                        <h2 id="2-sum-rule">2. Sum Rule</h2>
                                                        <p>If a function is the sum of two functions:</p>
                                                        <p className="formula">{"\\[f(x) = g(x) + h(x)\\]"}</p>
                                                        <p>then</p>
                                                        <p className="formula">{"\\[f'(x) = g′(x) + h'(x)\\]"}</p>
                                                        <strong>Why this works:</strong>
                                                        <p>Just as distances or velocities add, rates of change also add. If two quantities change over time and are
                                                                added together, their total rate of change is the sum of their individual rates.</p>



                                                </Tab2>


                                        </Tabs>


                                </div>
                        </MathJax >

                        <Modal id="modal-test">
                                <span>
                                        <pre id='sources' className='text-xs'>
                                                testing
                                        </pre>
                                </span>
                        </Modal>

                        <Modal id="modal-test2">
                                <div className='jupyter-nb'>

                                        <div dangerouslySetInnerHTML={createMarkup()} />

                                </div>
                        </Modal>
                </>
        );



}
