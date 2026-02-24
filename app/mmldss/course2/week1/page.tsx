'use client';

import Image from 'next/image';
import TileRowCell1 from '@/components/client/TileRowCell1';
import TileRowCell2 from '@/components/client/TileRowCell2';
import TileRowCell3 from '@/components/client/TileRowCell3';
import { MathJax } from "better-react-mathjax";

export default function Home() {

        const html = `
        
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

                                                                        <div className="derivatives-summary">

                                                                                <div className="calc-summary">

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


                                                                                </div>
                                                                        </div>
                                                                </div>


                                                        </div>
                                                </div>

                                                <input type="radio" name="my_tabs_1" className="tab" aria-label="euler & logarithms" defaultChecked />
                                                <div className="tab-content bg-base-100 border-base-300 p-6">

                                                        <div className='flex mt-[0px] gap-[15px]'>
                                                                <div className='flex-1 min-w-[600px] max-w-[1000px] mr-[20px]'>

                                                                        <div className="derivatives-summary">

                                                                                <div className="calc-summary">


                                                                                        <h1>Euler’s Number and the Exponential Function</h1>
                                                                                        <p>The exponential function is built around <strong>Euler’s number (e)</strong>, a special irrational number
                                                                                                approximately equal to:</p>
                                                                                        <p>{"\\[e \\approx 2.71828182...\\]"}</p>
                                                                                        <p>One important way to define ( e ) is through the limit:</p>
                                                                                        <p>{"\\[\\left(1 + \\frac{1}{n}\\right)^n\\]"}</p>
                                                                                        <p>As ( n ) becomes very large, this expression approaches ( e ).</p>

                                                                                        <h2>The Key Property of the Exponential Function</h2>
                                                                                        <p>For the function:</p>
                                                                                        <p>{"\\[e^x\\]"}</p>
                                                                                        <p>A remarkable property holds:</p>
                                                                                        <p>{"\\[\\frac{d}{dx} e^x = e^x\\]"}</p>
                                                                                        <p>The function is <strong>its own derivative</strong>.</p>


                                                                                        <h1>Logarithms and Inverse Functions</h1>
                                                                                        <p>The natural logarithm is defined as the inverse of: {"\\[e^x\\]"}</p>

                                                                                        <ul>
                                                                                                <li>If {"\\[e^y = x\\]"} then {"\\[y = \\ln(x)\\]"}.</li>
                                                                                                <li>So {"\\[\\ln(x)\\]"} is the number you must raise ( e ) to in order to get ( x ).</li>
                                                                                        </ul>
                                                                                        <p>Because {"\\[e^x\\]"} and {"\\[\\ln(x)\\]"} are inverses:</p>
                                                                                        <ul>
                                                                                                <li>Reflecting the graph of {"\\[e^x\\]"} over the line ( y = x ) gives the graph of {"\\[\\ln(x)\\]"}.</li>
                                                                                        </ul>
                                                                                        <p>Using the inverse function derivative rule:</p>
                                                                                        <p>{"\\[\\frac{d}{dx} \\ln(x) = \\frac{1}{x}\\]"}</p>
                                                                                        <p>So:</p>
                                                                                        <ul>
                                                                                                <li>{"\\[\\frac{d}{dx} e^x = e^x\\]"} <br /><br /></li>
                                                                                                <li>{"\\[\\frac{d}{dx} \\ln(x) = \\frac{1}{x}\\]"}</li>
                                                                                        </ul>

                                                                                        <h1>Non-Differentiable Functions</h1>
                                                                                        <p>A function is <strong>differentiable</strong> at a point if it has a unique, well-defined tangent line at
                                                                                                that point.</p>
                                                                                        <p>There are three main ways a function can fail to be differentiable:</p>
                                                                                        <h3>1. Corners or Cusps</h3>
                                                                                        <p>Example: {"\\[|x|\\]"} at {"\\[x = 0\\]"}</p>

                                                                                        <h3 id="2-jump-discontinuities">2. Jump Discontinuities</h3>
                                                                                        <p>Example: A piecewise function with a sudden jump.</p>

                                                                                        <h3 id="3-vertical-tangents">3. Vertical Tangents</h3>
                                                                                        <p>Example: {"\\[x^{1/3}\\]"} at {"\\[x = 0\\]"}</p>



                                                                                </div>
                                                                        </div>
                                                                </div>


                                                        </div>
                                                </div>

                                                <input type="radio" name="my_tabs_1" className="tab" aria-label="derivative rules" defaultChecked />
                                                <div className="tab-content bg-base-100 border-base-300 p-6">

                                                        <div className='flex mt-[0px] gap-[15px]'>
                                                                <div className='flex-1 min-w-[600px] max-w-[1000px] mr-[20px]'>

                                                                        <div className="derivatives-summary">

                                                                                <div className="calc-summary">

                                                                                        <h1>Properties of the Derivative</h1>


                                                                                        <p>To differentiate more complicated functions, we use four fundamental rules:
                                                                                                scalar multiplication rule, sum rule, product rule, and chain rule.</p>

                                                                                        <h2 id="1-scalar-multiplication-rule">1. Scalar Multiplication Rule</h2>
                                                                                        <p>If a function is multiplied by a constant:</p>
                                                                                        <p>{"\\[f(x) = c \\cdot g(x)\\]"}</p>
                                                                                        <p>then its derivative is:</p>
                                                                                        <p>{"\\[f′(x) = c \\cdot g′(x)\\]"}</p>
                                                                                        <strong>Why this works:</strong>
                                                                                        <p>Multiplying a function by a constant stretches it vertically. This multiplies every rise (vertical change)
                                                                                                by c while the run (horizontal change) remains the same. Since slope = rise/run, all slopes — and therefore
                                                                                                the derivative — are multiplied by c.</p>

                                                                                        <h2 id="2-sum-rule">2. Sum Rule</h2>
                                                                                        <p>If a function is the sum of two functions:</p>
                                                                                        <p>{"\\[f(x) = g(x) + h(x)\\]"}</p>
                                                                                        <p>then</p>
                                                                                        <p>{"\\[f′(x) = g′(x) + h′(x)\\]"}</p>
                                                                                        <strong>Why this works:</strong>
                                                                                        <p>Just as distances or velocities add, rates of change also add. If two quantities change over time and are
                                                                                                added together, their total rate of change is the sum of their individual rates.</p>

                                                                                        <h2 id="3-product-rule">3. Product Rule</h2>
                                                                                        <p>If a function is the product of two functions:</p>
                                                                                        <p>{"\\[f(x) = g(x) \\cdot h(x)\\]"}</p>
                                                                                        <p>then</p>
                                                                                        <p>{"\\[f′(x) = g′(x)h(x) + g(x)h′(x)\\]"}</p>
                                                                                        <strong>Why this works:</strong>
                                                                                        <p>When both factors change, the total change comes from:</p>
                                                                                        <ul>
                                                                                                <li>The first changing while the second stays fixed</li>
                                                                                                <li>The second changing while the first stays fixed</li>
                                                                                        </ul>

                                                                                        <h2 id="4-chain-rule">4. Chain Rule</h2>
                                                                                        <p>If a function is a composition:</p>
                                                                                        <p>{"\\[y = g(h(t))\\]"}</p>
                                                                                        <p>then</p>
                                                                                        <p>{"\\[\\frac{dy}{dt} = \\frac{dg}{dh} \\cdot \\frac{dh}{dt}\\]"}</p>
                                                                                        <p>In standard notation:</p>
                                                                                        <p>{"\\[f(x) = g(h(x))\\]"}</p>
                                                                                        <p>then</p>
                                                                                        <p>{"\\[f′(x) = g′(h(x)) \\cdot h′(x)\\]"}</p>




                                                                                </div>
                                                                        </div>
                                                                </div>


                                                        </div>
                                                </div>

                                                <input type="radio" name="my_tabs_1" className="tab" aria-label="sample code" />
                                                <div className="tab-content bg-base-100 border-base-300 p-6">

                                                        <div className='flex'>
                                                                <div className='flex-1 min-w-[500px] jade-code'>
                                                                        testing
                                                                </div>
                                                                <div className='flex-1 min-w-[500px] ml-[20px] mt-[15px]'>
                                                                        more testing
                                                                </div>
                                                        </div>



                                                </div>

                                                <input type="radio" name="my_tabs_1" className="tab" aria-label="Labs & Assignments" />
                                                <div className="tab-content bg-base-100 border-base-300 p-6">

                                                        <div className='jade-code'>
                                                                <a href="/C2_W1_Lab_1_differentiation_in_python.html" target="_blank">Lab: Differentiation in Python</a>
                                                                <br /><br />

                                                                <a href="/C2_W1_Assignment.html" target="_blank">Assignment: Optimizing Functions of One Variable</a>
                                                                <br /><br />
                                                        </div>

                                                </div>


                                        </div>

                                </div>
                        </MathJax >
                </>
        );



}
