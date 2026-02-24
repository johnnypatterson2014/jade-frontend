'use client';

import Image from 'next/image';
import TileRowCell0 from '@/components/client/TileRowCell0';
import TileRowCell2 from '@/components/client/TileRowCell2';
import TileRowCell3 from '@/components/client/TileRowCell3';
import { MathJax } from "better-react-mathjax";

export default function Home() {

        const html = `
        
        `

        const html3 = `
        <div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:13px;line-height:17px;">
                <div><span style="color:rgb(106,153,85)"># let A be a 2x2 matrix</span></div>
                <div><span style="color:rgb(79,193,255)">A</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(220,220,170)">array</span>([</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; [<span style="color:rgb(212,212,212)">-</span><span
                                style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">3</span>],
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; [<span style="color:rgb(181,206,168)">3</span>, <span
                                style="color:rgb(181,206,168)">2</span>]</div>
                <div>&nbsp; &nbsp; ], <span style="color:rgb(156,220,254)">dtype</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">dtype</span>(<span
                                style="color:rgb(78,201,176)">float</span>))</div><br>
                <div><span style="color:rgb(106,153,85)"># determinant of A is:</span></div>
                <div><span style="color:rgb(156,220,254)">determinant_A</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">np</span>.<span
                                style="color:rgb(78,201,176)">linalg</span>.<span
                                style="color:rgb(220,220,170)">det</span>(<span style="color:rgb(79,193,255)">A</span>)
                </div>
        </div>
</div>
        `

        function createMarkup(content: any) {
                return { __html: content };
        }

        return (
                <>
                        <MathJax>
                                <div className='m-[10px]'>

                                        <div className='jade-h1'>
                                                Calculus for machine learning and data science
                                        </div>

                                        <div className='jade-h2'>
                                                Week 1: Derivatives and Optimization
                                        </div>

                                        <div className="tabs tabs-lift">

                                                <input type="radio" name="my_tabs_1" className="tab" aria-label="common derivatives" defaultChecked />
                                                <div className="tab-content bg-base-100 border-base-300 p-6">

                                                        <div className='flex mt-[0px] gap-[15px]'>
                                                                <div className='flex-1 min-w-[600px] max-w-[1000px] mr-[20px]'>

                                                                        <div className="page-notes-wrapper">

                                                                                <div className="page-notes">

                                                                                        <div className='flex mt-[5px] gap-[15px]'>
                                                                                                <TileRowCell0>
                                                                                                        <h1>Motivation</h1>
                                                                                                        <p>
                                                                                                                Why are derivatives important for ML? They are used to find the max/min of functions.
                                                                                                                Specifically, to minimize the loss function when training a ML model.
                                                                                                                ie. optimize the best possible prediction for the existing data.
                                                                                                        </p>

                                                                                                        <h1>Derivatives</h1>

                                                                                                        <p>
                                                                                                                Instantaneous rate of change. eg. Velocity is the rate of change of distance wrt. time.
                                                                                                                aka. the slope of the tangent at a point on the graph of distance vs. time.

                                                                                                                Note: zero slope: tangent is a horizontal line. The max and min of a function will be
                                                                                                                at a place where the derivative (tangent) is zero.
                                                                                                        </p>

                                                                                                        <h1>Common Derivatives</h1>

                                                                                                        <h2>1. Constant and Linear Functions</h2>
                                                                                                        <ul>
                                                                                                                <li>A constant function (a horizontal line) has no change in y, so its derivative is <strong>0</strong>.</li>
                                                                                                                <li>A linear function has a constant slope ( a ). Therefore, its derivative is <strong>a</strong>.</li>
                                                                                                        </ul>

                                                                                                        <h2>2. Quadratic Function: {"\\[x^2\\]"}</h2>
                                                                                                        <ul>
                                                                                                                <li>By calculating slopes of secant lines that get closer and closer together, the slope approaches a limit.
                                                                                                                </li>
                                                                                                                <li>At ( x = 1 ), the slope approaches 2.</li>
                                                                                                                <li>In general, the derivative of {"\\[x^2\\]"} is <strong>2x</strong>.</li>
                                                                                                        </ul>

                                                                                                        <h2>3. Cubic Function: {"\\[x^3\\]"}</h2>
                                                                                                        <ul>
                                                                                                                <li>Repeating the same process shows that slopes approach a limit.</li>
                                                                                                                <li>For example, at ( x = 0.5 ), the slope approaches 0.75.</li>
                                                                                                                <li>In general, the derivative of {"\\[x^3\\]"} is <strong>{"\\[3x^2\\]"}</strong>.</li>
                                                                                                        </ul>

                                                                                                        <h2>4. Reciprocal Function: {"\\(\\frac{1}{x}\\)"}</h2>
                                                                                                        <ul>
                                                                                                                <li>Using the same limit process, slopes converge to a negative value.</li>
                                                                                                                <li>At ( x = 1 ), the derivative is -1.</li>
                                                                                                                <li>In general, the derivative of {"\\(x^{-1}\\)"} is <strong> {"\\(-x^{-2}\\)"} </strong> or <strong>{"\\(\\frac{-1}{x^2}\\)"} </strong></li>
                                                                                                        </ul>

                                                                                                        <h2>5. The Power Rule</h2>

                                                                                                        <p>For any power function:</p>
                                                                                                        <div className='formula'><p style={{ textAlign: "center" }}>{"\\[\\frac{d}{dx}(x^n) = n x^{n-1}\\]"}</p></div>
                                                                                                        <p>This rule works for:</p>
                                                                                                        <ul>
                                                                                                                <li>Positive powers e.g.,  <span className='math'>{"\\[x^{100} \\rightarrow 100x^{99} \\]"}</span> </li>
                                                                                                                <li>Negative powers e.g.,  <span className='math'>{"\\[x^{-100} \\rightarrow -100x^{-101} \\]"}</span> </li>
                                                                                                        </ul>

                                                                                                        <h2>6. Derivatives of Trig functions</h2>

                                                                                                        <p>The text introduces derivatives of the trigonometric functions, focusing on sine and cosine.</p>

                                                                                                        <ul>
                                                                                                                <li>The derivative of <strong>sin(x)</strong> is <strong>cos(x)</strong></li>
                                                                                                                <li>The derivative of <strong>cos(x)</strong> is <strong>−sin(x)</strong></li>
                                                                                                        </ul>
                                                                                                </TileRowCell0>

                                                                                                <TileRowCell2>
                                                                                                        calculate the derivative in python:
                                                                                                        <div dangerouslySetInnerHTML={createMarkup(html3)} />
                                                                                                </TileRowCell2>
                                                                                        </div>




                                                                                </div>
                                                                        </div>
                                                                </div>


                                                        </div>
                                                </div>



                                        </div>

                                </div>
                        </MathJax >
                </>
        );



}
