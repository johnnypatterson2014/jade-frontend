'use client';

import Image from 'next/image';
import TileRowCell0 from '@/components/client/TileRowCell0';
import TileRowCell2 from '@/components/client/TileRowCell2';
import Tabs from '@/components/client/Tabs';
import Tab from '@/components/client/Tab';
import { createMarkup, python_html_1, python_html_2, python_html_3, python_html_4 } from '@/components/config/Constants';
import { MathJax } from "better-react-mathjax";

export default function Home() {

        const html_1 = `

        `


        return (
                <>
                        <MathJax>
                                <div className='m-[10px]'>

                                        <div className='jade-h1'>
                                                Calculus for machine learning and data science
                                        </div>

                                        <div className='jade-h2'>
                                                Week 2 - Part 2: Optimization using Gradient Descent in multiple variables
                                        </div>

                                        <Tabs>
                                                <Tab title="Gradient Descent for 2 vars" isChecked={true}>
                                                        <TileRowCell0>
                                                                <h1 className='no-top-margin'>Gradient Descent in Two Variables</h1>


                                                                <h3 id="-1-from-one-variable-to-two-variables-"><strong>1. From One Variable to Two Variables</strong></h3>
                                                                <p>Gradient descent in two variables works the same way as in one variable, but instead of using a single derivative, we use the <strong>gradient</strong> (a vector of partial derivatives).</p>
                                                                <p>Previously, optimization was done analytically by:</p>
                                                                <ul>
                                                                        <li>Calculating partial derivatives</li>
                                                                        <li>Setting them equal to zero</li>
                                                                        <li>Solving for the minimum</li>
                                                                </ul>
                                                                <p>Now, instead of solving analytically, we use an <strong>iterative algorithm</strong>.</p>

                                                                <h3 id="-2-intuition-sauna-example-"><strong>2. Intuition (Sauna Example)</strong></h3>
                                                                <p>Imagine trying to find the coldest spot in a sauna:</p>
                                                                <ul>
                                                                        <li>You start at an initial position {"\\[(x_0, y_0)\\]"}.</li>
                                                                        <li>Instead of taking random steps, you use a smarter direction.</li>
                                                                        <li>That direction is given by the <strong>negative gradient</strong>.</li>
                                                                </ul>
                                                                <p>Key idea:</p>
                                                                <ul>
                                                                        <li><strong>Gradient</strong> to direction of steepest increase (hottest direction).</li>
                                                                        <li><strong>Negative gradient</strong> to direction of steepest decrease (coldest direction).</li>
                                                                </ul>
                                                                <p>If you take a small step in the negative gradient direction, you move as efficiently as possible toward the minimum.</p>

                                                                <h3 id="-3-the-update-rule-"><strong>3. The Update Rule</strong></h3>
                                                                <p>At each step:</p>
                                                                <p>{"\\[(x_1, y_1) = (x_0, y_0) - \\alpha \\nabla f(x_0, y_0)\\]"}</p>
                                                                <p>Where:</p>
                                                                <ul>
                                                                        <li>{"\\[\\alpha\\]"} = learning rate</li>
                                                                        <li>{"\\[\\nabla f\\]"} = gradient vector (partial derivative with respect to x and y)</li>
                                                                </ul>
                                                                <p>This is exactly like the one-variable case, except:</p>
                                                                <ul>
                                                                        <li>Derivative to Gradient (vector)</li>
                                                                </ul>

                                                                <h3 id="-4-how-the-algorithm-works-"><strong>4. How the Algorithm Works</strong></h3>
                                                                <ol>
                                                                        <li><p><strong>Choose:</strong></p>
                                                                                <ul>
                                                                                        <li>Learning rate {"\\[\\alpha\\]"}</li>
                                                                                        <li>Starting point {"\\[(x_0, y_0)\\]"}</li>
                                                                                </ul>
                                                                        </li>
                                                                        <li><p><strong>Update rule (repeat):</strong></p>
                                                                        </li>
                                                                </ol>
                                                                <p>{"\\[(x_k, y<em>k) = (x</em>{k-1}, y<em>{k-1}) - \\alpha \\nabla f(x</em>{k-1}, y_{k-1})\\]"}</p>
                                                                <ol>
                                                                        <li><p><strong>Stop when:</strong></p>
                                                                                <ul>
                                                                                        <li>Changes become very small</li>
                                                                                        <li>Gradient approaches zero</li>
                                                                                </ul>
                                                                        </li>
                                                                </ol>
                                                                <p>After many iterations, you get very close to the minimum.</p>

                                                                <h3 id="-5-practical-example-"><strong>5. Practical Example</strong></h3>
                                                                <p>For a given temperature function:</p>
                                                                <ul>
                                                                        <li>Compute the partial derivatives</li>
                                                                        <li>Form the gradient vector</li>
                                                                        <li>Plug in your current {"\\[x\\]"} and {"\\[y\\]"}</li>
                                                                        <li>Multiply by learning rate</li>
                                                                        <li>Update the position</li>
                                                                        <li>Repeat</li>
                                                                </ul>
                                                                <p>Each step moves you closer to the minimum.</p>

                                                                <h3 id="-6-important-limitation-local-minima-"><strong>6. Important Limitation: Local Minima</strong></h3>
                                                                <p>Just like in one variable:</p>
                                                                <ul>
                                                                        <li>The algorithm may get stuck in a <strong>local minimum</strong></li>
                                                                        <li>It may not reach the <strong>global minimum</strong></li>
                                                                        <li>There is no guarantee you found the absolute best solution</li>
                                                                </ul>
                                                                <p>How to improve chances:</p>
                                                                <ul>
                                                                        <li>Start from multiple different initial points</li>
                                                                        <li>Compare the results</li>
                                                                        <li>Choose the best solution found</li>
                                                                </ul>

                                                                <h3 id="-core-insight-"><strong>Core Insight</strong></h3>
                                                                <p>Gradient descent in two variables is simply:</p>
                                                                <blockquote>
                                                                        <p>Move in the direction of the negative gradient, take small steps, and repeat until the function stops decreasing.</p>
                                                                </blockquote>
                                                                <p>It extends naturally to higher dimensions as well.</p>
                                                        </TileRowCell0>

                                                </Tab>

                                                <Tab title="Labs" isChecked={false}>
                                                        <TileRowCell0>
                                                                <div className='jade-code'>
                                                                        <a href="/C2_W2_Lab_2_Optimization_Using_Gradient_Descent_in_Two_Variables.html" target="_blank">Lab: Gradient Descent with 2 variables</a>
                                                                        <br /><br />
                                                                        <a href="/C2_W2_Assignment.html" target="_blank">Assignment: Optimization Using Gradient Descent: Linear Regression</a>

                                                                </div>
                                                        </TileRowCell0>

                                                </Tab>


                                        </Tabs >


                                </div >
                        </MathJax >
                </>
        );



}
