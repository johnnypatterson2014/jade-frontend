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
<div style="box-sizing:unset;display:flex;overflow:hidden"><div style="width:800px;box-sizing:unset;border-color:rgb(224,224,224);border-style:solid;border-width:0.8px;border-radius:0px;background:rgb(245,245,245);overflow:hidden"><div style="box-sizing:unset;font-family:Menlo,Consolas,&quot;DejaVu Sans Mono&quot;,monospace;height:auto;color:rgba(0,0,0,0.87);direction:ltr;overflow:hidden;background:transparent;line-height:1.3077;font-size:13px;border:0px;border-radius:0px"><div style="box-sizing:unset;background-image:none;background-position:0% 0%;background-size:auto;background-repeat:repeat;background-origin:padding-box;background-clip:border-box;color:rgb(33,33,33);margin:0.4em"><pre style="box-sizing:unset;line-height:16.25px;padding:0px 5px"><span style="box-sizing:unset"></span><span style="box-sizing:unset;color:rgb(0,128,0);font-weight:bold">def</span> <span style="box-sizing:unset">gradient_descent</span><span style="box-sizing:unset;color:rgb(0,85,170)">(</span><span style="box-sizing:unset">dfdx</span><span style="box-sizing:unset;color:rgb(0,85,170)">,</span> <span style="box-sizing:unset">x</span><span style="box-sizing:unset;color:rgb(0,85,170)">,</span> <span style="box-sizing:unset">learning_rate</span> <span style="box-sizing:unset;color:rgb(170,34,255);font-weight:bold">=</span> <span style="box-sizing:unset;color:rgb(0,136,0)">0.1</span><span style="box-sizing:unset;color:rgb(0,85,170)">,</span> <span style="box-sizing:unset">num_iterations</span> <span style="box-sizing:unset;color:rgb(170,34,255);font-weight:bold">=</span> <span style="box-sizing:unset;color:rgb(0,136,0)">100</span><span style="box-sizing:unset;color:rgb(0,85,170)">):</span>
    <span style="box-sizing:unset;color:rgb(0,128,0);font-weight:bold">for</span> <span style="box-sizing:unset">iteration</span> <span style="box-sizing:unset;color:rgb(170,34,255);font-weight:bold">in</span> <span style="box-sizing:unset">range</span><span style="box-sizing:unset;color:rgb(0,85,170)">(</span><span style="box-sizing:unset">num_iterations</span><span style="box-sizing:unset;color:rgb(0,85,170)">):</span>
        <span style="box-sizing:unset">x</span> <span style="box-sizing:unset;color:rgb(170,34,255);font-weight:bold">=</span> <span style="box-sizing:unset">x</span> <span style="box-sizing:unset;color:rgb(170,34,255);font-weight:bold">-</span> <span style="box-sizing:unset">learning_rate</span> <span style="box-sizing:unset;color:rgb(170,34,255);font-weight:bold">*</span> <span style="box-sizing:unset">dfdx</span><span style="box-sizing:unset;color:rgb(0,85,170)">(</span><span style="box-sizing:unset">x</span><span style="box-sizing:unset;color:rgb(0,85,170)">)</span>
    <span style="box-sizing:unset;color:rgb(0,128,0);font-weight:bold">return</span> <span style="box-sizing:unset">x</span>
</pre></div></div></div></div>
        `

        const html_2 = `
<div style="box-sizing:unset;display:flex;padding:0px;margin:0px;overflow:visible"><div style="width:800px;box-sizing:unset;display:flex;overflow:hidden"><div style="box-sizing:unset;border-color:rgb(224,224,224);border-style:solid;border-width:0.8px;border-radius:0px;background:rgb(245,245,245);overflow:hidden"><div style="box-sizing:unset;font-family:Menlo,Consolas,&quot;DejaVu Sans Mono&quot;,monospace;height:auto;color:rgba(0,0,0,0.87);direction:ltr;overflow:hidden;background:transparent;line-height:1.3077;font-size:13px;border:0px;border-radius:0px"><div style="box-sizing:unset;background-image:none;background-position:0% 0%;background-size:auto;background-repeat:repeat;background-origin:padding-box;background-clip:border-box;color:rgb(33,33,33);margin:0.4em"><pre style="box-sizing:unset;line-height:16.25px;padding:0px 5px"><span style="box-sizing:unset"></span><span style="box-sizing:unset">num_iterations</span> <span style="box-sizing:unset;color:rgb(170,34,255);font-weight:bold">=</span> <span style="box-sizing:unset;color:rgb(0,136,0)">25</span><span style="box-sizing:unset;color:rgb(0,85,170)">;</span> <span style="box-sizing:unset">learning_rate</span> <span style="box-sizing:unset;color:rgb(170,34,255);font-weight:bold">=</span> <span style="box-sizing:unset;color:rgb(0,136,0)">0.1</span><span style="box-sizing:unset;color:rgb(0,85,170)">;</span> <span style="box-sizing:unset">x_initial</span> <span style="box-sizing:unset;color:rgb(170,34,255);font-weight:bold">=</span> <span style="box-sizing:unset;color:rgb(0,136,0)">1.6</span>
<span style="box-sizing:unset">print</span><span style="box-sizing:unset;color:rgb(0,85,170)">(</span><span style="box-sizing:unset;color:rgb(186,33,33)">"Gradient descent result: x_min ="</span><span style="box-sizing:unset;color:rgb(0,85,170)">,</span> <span style="box-sizing:unset">gradient_descent</span><span style="box-sizing:unset;color:rgb(0,85,170)">(</span><span style="box-sizing:unset">dfdx_example_<wbr>1</span><span style="box-sizing:unset;color:rgb(0,85,170)">,</span> <span style="box-sizing:unset">x_initial</span><span style="box-sizing:unset;color:rgb(0,85,170)">,</span> <span style="box-sizing:unset">learning_rate</span><span style="box-sizing:unset;color:rgb(0,85,170)">,</span> <span style="box-sizing:unset">num_iterations</span><span style="box-sizing:unset;color:rgb(0,85,170)">))</span> 
</pre></div></div></div></div></div>
        `

        const html_3 = `
<div style="box-sizing:unset;padding:5px;margin:0px;border:none;outline:none;background:transparent;overflow:visible;color:rgb(0,0,0);font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;;font-size:14px"><div style="box-sizing:unset;display:flex;padding:0px;margin:0px;overflow:visible"><div style="box-sizing:unset;display:flex;overflow:hidden"><div style="width:800px;box-sizing:unset;border-color:rgb(224,224,224);border-style:solid;border-width:0.8px;border-radius:0px;background:rgb(245,245,245);overflow:hidden"><div style="box-sizing:unset;font-family:Menlo,Consolas,&quot;DejaVu Sans Mono&quot;,monospace;height:auto;color:rgba(0,0,0,0.87);direction:ltr;overflow:hidden;background:transparent;line-height:1.3077;font-size:13px;border:0px;border-radius:0px"><div style="box-sizing:unset;background-image:none;background-position:0% 0%;background-size:auto;background-repeat:repeat;background-origin:padding-box;background-clip:border-box;color:rgb(33,33,33);margin:0.4em"><pre style="box-sizing:unset;line-height:16.25px;padding:0px 5px"><span class="im"><span style="box-sizing:unset"></span><span style="box-sizing:unset">num_iterations</span> <span style="box-sizing:unset;color:rgb(170,34,255);font-weight:bold">=</span> <span style="box-sizing:unset;color:rgb(0,136,0)">25</span><span style="box-sizing:unset;color:rgb(0,85,170)">;</span> <span style="box-sizing:unset">learning_rate</span> <span style="box-sizing:unset;color:rgb(170,34,255);font-weight:bold">=</span> <span style="box-sizing:unset;color:rgb(0,136,0)">0.1</span><span style="box-sizing:unset;color:rgb(0,85,170)">;</span> <span style="box-sizing:unset">x_initial</span> <span style="box-sizing:unset;color:rgb(170,34,255);font-weight:bold">=</span> <span style="box-sizing:unset;color:rgb(0,136,0)">1.6</span>
</span><span style="box-sizing:unset;color:rgb(64,128,128);font-style:italic"># num_iterations = 25; learning_rate = 0.3; x_initial = 1.6</span>
<span style="box-sizing:unset;color:rgb(64,128,128);font-style:italic"># num_iterations = 25; learning_rate = 0.5; x_initial = 1.6</span>
<span style="box-sizing:unset;color:rgb(64,128,128);font-style:italic"># num_iterations = 25; learning_rate = 0.04; x_initial = 1.6</span>
<span style="box-sizing:unset;color:rgb(64,128,128);font-style:italic"># num_iterations = 75; learning_rate = 0.04; x_initial = 1.6</span>
<span style="box-sizing:unset;color:rgb(64,128,128);font-style:italic"># num_iterations = 25; learning_rate = 0.1; x_initial = 0.05</span>
<span style="box-sizing:unset;color:rgb(64,128,128);font-style:italic"># num_iterations = 25; learning_rate = 0.1; x_initial = 0.03</span>
<span style="box-sizing:unset;color:rgb(64,128,128);font-style:italic"># num_iterations = 25; learning_rate = 0.1; x_initial = 0.02</span>
        
<span style="box-sizing:unset">gd_example_1</span> <span style="box-sizing:unset;color:rgb(170,34,255);font-weight:bold">=</span> <span style="box-sizing:unset">gradient_descent_one_variable</span><span style="box-sizing:unset;color:rgb(0,85,170)">(<wbr>[</span><span style="box-sizing:unset;color:rgb(0,136,0)">0.001</span><span style="box-sizing:unset;color:rgb(0,85,170)">,</span> <span style="box-sizing:unset;color:rgb(0,136,0)">2.5</span><span style="box-sizing:unset;color:rgb(0,85,170)">],</span> <span style="box-sizing:unset;color:rgb(0,85,170)">[</span><span style="box-sizing:unset;color:rgb(170,34,255);font-weight:bold">-</span><span style="box-sizing:unset;color:rgb(0,136,0)">0.3</span><span style="box-sizing:unset;color:rgb(0,85,170)">,</span> <span style="box-sizing:unset;color:rgb(0,136,0)">13</span><span style="box-sizing:unset;color:rgb(0,85,170)">],</span> <span style="box-sizing:unset">f_example_1</span><span style="box-sizing:unset;color:rgb(0,85,170)">,</span> <span style="box-sizing:unset">dfdx_example_1</span><span style="box-sizing:unset;color:rgb(0,85,170)">,</span> 
        <span style="box-sizing:unset">gradient_descent</span><span style="box-sizing:unset;color:rgb(0,85,170)">,</span> <span style="box-sizing:unset">num_iterations</span><span style="box-sizing:unset;color:rgb(0,85,170)">,</span> <span style="box-sizing:unset">learning_rate</span><span style="box-sizing:unset;color:rgb(0,85,170)">,</span> <span style="box-sizing:unset">x_initial</span><span style="box-sizing:unset;color:rgb(0,85,170)">,</span> <span style="box-sizing:unset;color:rgb(0,136,0)">0.0</span><span style="box-sizing:unset;color:rgb(0,85,170)">,</span> <span style="box-sizing:unset;color:rgb(0,85,170)">[</span><span style="box-sizing:unset;color:rgb(0,136,0)">0.35</span><span style="box-sizing:unset;color:rgb(0,85,170)">,</span> <span style="box-sizing:unset;color:rgb(0,136,0)">9.5</span><span style="box-sizing:unset;color:rgb(0,85,170)">])</span>
</pre></div></div></div></div></div><div style="box-sizing:unset;display:flex;padding:0px;margin:5px 0px 0px;overflow:visible"><div style="box-sizing:unset;overflow-y:auto"><div style="box-sizing:unset;display:flex"><div id="m_3712045414686854031gmail-096164e7-86d9-40ad-aeac-785bdf358e18" style="box-sizing:unset;height:auto;overflow:auto"></div></div></div></div></div>
        `

        return (
                <>
                        <MathJax>
                                <div className='m-[10px]'>

                                        <div className='jade-h1'>
                                                Calculus for machine learning and data science
                                        </div>

                                        <div className='jade-h2'>
                                                Week 2 - Part 1: Gradients and Gradient Descent
                                        </div>

                                        <Tabs>
                                                <Tab title="Tangent Planes" isChecked={true}>
                                                        <TileRowCell0>
                                                                <h1 className='no-top-margin'>Intro to Tangent Planes</h1>

                                                                <p>In Week 2, the focus shifts from functions of one variable to functions of two or more variables. Concepts from single-variable calculus—such as tangent lines and derivatives—are generalized to higher dimensions.</p>
                                                                <p>In one variable, the derivative represents the slope of a tangent line. For example, with <span className="math">{"\\[f(x) = x^2\\]"}</span>, the derivative gives the slope of the tangent line at any point on the parabola.</p>
                                                                <p>With two variables, such as <span className="math">{"\\[f(x, y) = x^2 + y^2\\]"}</span>, the function must be graphed in three dimensions:</p>
                                                                <ul>
                                                                        <li><span className="math">{"\\[x\\]"}</span> and <span className="math">{"\\[y\\]"}</span> form the horizontal plane</li>
                                                                        <li><span className="math">{"\\[z = f(x, y)\\]"}</span> represents height</li>
                                                                </ul>
                                                                <p>Instead of a tangent line, we now get a <strong>tangent plane</strong>.</p>
                                                                <p>To construct the tangent plane:</p>
                                                                <ul>
                                                                        <li>Fix one variable (e.g., <span className="math">{"\\[y = 4\\]"}</span>) to create a slice of the surface.</li>
                                                                        <li>This produces a curve (a parabola), whose derivative with respect to the remaining variable gives a tangent line.</li>
                                                                        <li>Repeat by fixing the other variable (e.g., <span className="math">{"\\[x = 2\\]"}</span>) and find the second tangent line.</li>
                                                                        <li>The two intersecting tangent lines uniquely determine a plane — the tangent plane.</li>
                                                                </ul>
                                                                <p>This idea extends to optimization in higher dimensions. Optimizing multivariable functions can be complex, especially computationally, so methods like <strong>gradient descent</strong> will be introduced to efficiently optimize such functions, including applications in machine learning.</p>

                                                        </TileRowCell0>

                                                </Tab>

                                                <Tab title="Partial Derivatives" isChecked={false}>
                                                        <TileRowCell0>

                                                                <h1 className='no-top-margin'>Partial Derivatives</h1>
                                                                <p>Partial derivatives describe how a function of multiple variables changes when we vary <strong>only one variable at a time</strong>, keeping the others constant.</p>
                                                                <p>To visualize this, imagine a function of two variables</p>

                                                                <div className='formula'>{"\\[f(x, y)\\]"}</div>
                                                                <p>plotted as a surface in 3D space. If we:</p>
                                                                <ul>
                                                                        <li><strong>Fix y</strong> at a specific value (for example, y = 4),
                                                                                the surface is sliced by a vertical plane.</li>
                                                                        <li>This slice creates a curve (like a parabola).</li>
                                                                        <li>The slope of the tangent line to that curve at a point is the <strong>partial derivative with respect to x</strong>.</li>
                                                                </ul>
                                                                <p>Similarly:</p>
                                                                <ul>
                                                                        <li>If we <strong>fix x</strong> instead,</li>
                                                                        <li>We get another curve,</li>
                                                                        <li>And the slope of its tangent line is the <strong>partial derivative with respect to y</strong>.</li>
                                                                </ul>

                                                                <h2>How to Compute a Partial Derivative</h2>
                                                                <p>Given the function:</p>

                                                                <div className='formula'>{"\\[f(x, y) = x^2 + y^2\\]"}</div>
                                                                <h3 id="1-partial-derivative-with-respect-to-x">1. Partial derivative with respect to x</h3>
                                                                <ul>
                                                                        <li>Treat y as a constant.</li>
                                                                        <li>Differentiate using normal derivative rules.</li>
                                                                </ul>

                                                                <div className='formula'>{"\\[\\frac{\\partial f}{\\partial x} = 2x\\]"}</div>
                                                                <ul>
                                                                        <li>The derivative of x² is 2x.</li>
                                                                        <li>The derivative of y² is 0 because it is treated as a constant.</li>
                                                                </ul>

                                                                <h3 id="2-partial-derivative-with-respect-to-y">2. Partial derivative with respect to y</h3>
                                                                <ul>
                                                                        <li>Treat x as a constant.</li>
                                                                        <li>Differentiate with respect to y.</li>
                                                                </ul>

                                                                <div className='formula'>{"\\[\\frac{\\partial f}{\\partial y} = 2y\\]"}</div>
                                                                <ul>
                                                                        <li>The derivative of y² is 2y.</li>
                                                                        <li>The derivative of x² is 0 because it is treated as a constant.</li>
                                                                </ul>

                                                                <h3 id="-key-idea-"><strong>Key Idea</strong></h3>
                                                                <ul>
                                                                        <li>A function with two variables has two partial derivatives.</li>
                                                                        <li>A function with n variables has n partial derivatives — one for each variable.</li>
                                                                        <li><p>Notation for partial derivatives:</p>
                                                                                <ul>
                                                                                        <li><span className="math">{"\\[f_x\\]"}</span>  or  <span className="math">{"\\[\\frac{\\partial f}{\\partial x}\\]"}</span><br /><br /></li>
                                                                                        <li><span className="math">{"\\[f_y\\]"}</span>  or <span className="math">{"\\[\\frac{\\partial f}{\\partial y}\\]"}</span></li>
                                                                                </ul>
                                                                        </li>
                                                                        <li><p>To compute a partial derivative:</p>
                                                                                <ol>
                                                                                        <li>Treat all other variables as constants.</li>
                                                                                        <li>Differentiate normally with respect to the chosen variable.</li>
                                                                                </ol>
                                                                        </li>
                                                                </ul>

                                                                <h1>Example</h1>
                                                                <p>The example uses the function
                                                                        <span className="math">{"\\[f(x, y) = 3x^2 y^3\\]"}</span>
                                                                        to demonstrate how to compute partial derivatives.</p>
                                                                <h4 id="-partial-derivative-with-respect-to-x-">Partial Derivative with Respect to x</h4>
                                                                <ol>
                                                                        <li><strong>Treat other variables as constants</strong> — Here, y is treated as a constant.</li>
                                                                        <li><p><strong>Differentiate normally with respect to x</strong>:</p>
                                                                                <ul>
                                                                                        <li>The constant 3 remains.</li>
                                                                                        <li>The derivative of x² is 2x.</li>
                                                                                        <li>The y³ term remains unchanged since it’s treated as a constant.</li>
                                                                                </ul>
                                                                        </li>
                                                                </ol>
                                                                <p>Putting it together:
                                                                        <span className="math">{"\\[\\frac{\\partial f}{\\partial x} = 3 \\cdot 2x \\cdot y^3 = 6xy^3\\]"}</span></p>

                                                                <h4 id="-partial-derivative-with-respect-to-y-">Partial Derivative with Respect to y</h4>
                                                                <ol>
                                                                        <li><strong>Treat other variables as constants</strong> — This time, x is treated as a constant.</li>
                                                                        <li><p><strong>Differentiate with respect to y</strong>:</p>
                                                                                <ul>
                                                                                        <li>The constant 3 remains.</li>
                                                                                        <li>The x² term remains unchanged.</li>
                                                                                        <li>The derivative of y³ is 3y².</li>
                                                                                </ul>
                                                                        </li>
                                                                </ol>
                                                                <p>Putting it together:
                                                                        <span className="math">{"\\[\\frac{\\partial f}{\\partial y} = 3x^2 \\cdot 3y^2 = 9x^2 y^2\\]"}</span></p>


                                                        </TileRowCell0>

                                                </Tab>

                                                <Tab title="Gradients" isChecked={false}>
                                                        <TileRowCell0>
                                                                <h1 className='no-top-margin'>Gradients</h1>

                                                                <p>The gradient is a convenient way to combine all partial derivatives of a multivariable function into a single vector.</p>
                                                                <p>For a function of two variables, you can compute:</p>
                                                                <ul>
                                                                        <li>The partial derivative with respect to x</li>
                                                                        <li>The partial derivative with respect to y</li>
                                                                </ul>
                                                                <p>For example, if
                                                                        <span className="math">{"\\[f(x, y) = x^2 + y^2\\]"}</span></p>
                                                                <p>then:</p>
                                                                <ul>
                                                                        <li><span className="math">{"\\[\\frac{\\partial f}{\\partial x} = 2x\\]"}</span><br /><br /></li>
                                                                        <li><span className="math">{"\\[\\frac{\\partial f}{\\partial y} = 2y\\]"}</span></li>
                                                                </ul>
                                                                <p>The <strong>gradient</strong> is the vector formed by these partial derivatives:</p>

                                                                <div className='formula'>{"\\[\\nabla f = (2x, 2y)\\]"}</div>
                                                                <p>The symbol used for the gradient is nabla, written as:</p>

                                                                <div className='formula'>{"\\[\\nabla f\\]"}</div>
                                                                <p>In general:</p>
                                                                <ul>
                                                                        <li>If a function has 2 variables, the gradient has 2 components.</li>
                                                                        <li>If a function has 17 variables, the gradient has 17 components, one for each partial derivative.</li>
                                                                </ul>
                                                                <p>Geometrically, the gradient describes the slopes that determine the tangent plane to the surface.</p>
                                                                <h2>Example</h2>
                                                                <p>To find the gradient at the point:</p>
                                                                <p className='formula'>{"\\[(2, 3)\\]"}</p>
                                                                <p>We use:</p>
                                                                <p className='formula'>{"\\[\\nabla f = (2x, 2y)\\]"}</p>
                                                                <p>Substitute:</p>
                                                                <p className='formula'>{"\\[x = 2, \\quad y = 3\\]"}</p>
                                                                <p>This gives:</p>
                                                                <p className='formula'>{"\\[\\nabla f(2,3) = (4, 6)\\]"}</p>
                                                                <p>So, the gradient of</p>
                                                                <p className='formula'>{"\\[f(x, y) = x^2 + y^2\\]"}</p>
                                                                <p>at the point</p>
                                                                <p className='formula'>{"\\[(2, 3)\\]"}</p>
                                                                <p>is:</p>
                                                                <p className='formula'>{"\\[(4, 6)\\]"}</p>


                                                                <h1 id="-gradients-and-maxima-minima-summary-">Gradients and Maxima/Minima</h1>
                                                                <p>The gradient in multivariable calculus plays the same role as the derivative in single-variable calculus when finding minimum and maximum points.</p>
                                                                <p>For a <strong>function of one variable</strong>, such as:</p>
                                                                <p className='formula'>{"\\[f(x) = x^2\\]"}</p>
                                                                <p>The minimum occurs where the derivative is zero.
                                                                        Since:</p>
                                                                <p className='formula'>{"\\[f'(x) = 2x\\]"}</p>
                                                                <p>Setting:</p>
                                                                <p className='formula'>{"\\[2x = 0\\]"}</p>
                                                                <p>gives:</p>
                                                                <p className='formula'>{"\\[x = 0\\]"}</p>
                                                                <p>which is the minimum point.</p>

                                                                <p>For a <strong>function of two variables</strong>, such as:</p>
                                                                <p className='formula'>{"\\[f(x,y) = x^2 + y^2\\]"}</p>
                                                                <p>The idea is similar, but instead of one derivative, we use <strong>partial derivatives</strong>.</p>
                                                                <p>A minimum (or maximum) occurs where:</p>
                                                                <ul>
                                                                        <li>All partial derivatives equal zero.</li>
                                                                        <li>The tangent plane is parallel to the floor.</li>
                                                                </ul>
                                                                <p>For this function:</p>
                                                                <p className='formula'>{"\\[\\frac{\\partial f}{\\partial x} = 2x\\]"}</p>
                                                                <p className='formula'>{"\\[\\frac{\\partial f}{\\partial y} = 2y\\]"}</p>
                                                                <p>Setting both equal to zero:</p>
                                                                <p className='formula'>{"\\[2x = 0\\]"}</p>
                                                                <p className='formula'>{"\\[2y = 0\\]"}</p>
                                                                <p>This gives the solution:</p>
                                                                <p className='formula'>{"\\[(x, y) = (0,0)\\]"}</p>

                                                                <h3 id="-general-principle-"><strong>General Principle</strong></h3>
                                                                <p>For functions of two or more variables:</p>
                                                                <ul>
                                                                        <li>A local minimum or maximum occurs where <strong>all partial derivatives are zero</strong>.</li>
                                                                        <li>In other words, every directional slope must vanish.</li>
                                                                        <li>This is equivalent to setting the gradient equal to zero and solving the resulting system of equations.</li>
                                                                </ul>



                                                        </TileRowCell0>

                                                </Tab>

                                                <Tab title="Optimization with gradients" isChecked={false}>
                                                        <TileRowCell0>
                                                                <h1 className='no-top-margin'>Optimization with Gradients</h1>

                                                                <p>This example extends the sauna optimization problem from one dimension to <strong>two dimensions</strong>. Instead of moving only left or right, you can now move in any direction inside a 5×5 room. The temperature depends on position [(x, y)], and:</p>
                                                                <ul>
                                                                        <li><strong>Red areas</strong> = hotter (higher function values)</li>
                                                                        <li><strong>Blue areas</strong> = colder (lower function values)</li>
                                                                        <li>Goal = find the <strong>coldest point (minimum)</strong></li>
                                                                </ul>

                                                                <h3 id="-intuition-how-to-find-the-coldest-point">Intuition: How to Find the Coldest Point</h3>
                                                                <p>One strategy is to:</p>
                                                                <ol>
                                                                        <li>Take small steps in different directions.</li>
                                                                        <li>Move in the direction that makes the temperature decrease.</li>
                                                                        <li>Repeat until no direction makes it colder.</li>
                                                                </ol>
                                                                <p>You’ve reached the coldest point when:</p>
                                                                <ul>
                                                                        <li>Moving in <strong>any direction</strong> makes it hotter.</li>
                                                                        <li>The <strong>tangent plane is flat</strong> (parallel to the floor).</li>
                                                                        <li>Both partial derivatives are zero:</li>
                                                                </ul>
                                                                <p className='formula'>{"\\[\\frac{\\partial T}{\\partial x} = 0\\]"}</p>
                                                                <p className='formula'>{"\\[\\frac{\\partial T}{\\partial y} = 0\\]"}</p>
                                                                <p>This means the <strong>gradient is zero</strong>.</p>

                                                                <h3 id="-the-temperature-function">The Temperature Function</h3>
                                                                <p>The temperature is given by:</p>
                                                                <p className='formula'>{"\\[T(x,y) = 85 - \\frac{1}{90} x^2 (x-6) y^2 (y-6)\\]"}</p>
                                                                <p>To find the minimum:</p>
                                                                <ol>
                                                                        <li>Compute the partial derivatives.</li>
                                                                        <li>Set both equal to zero.</li>
                                                                        <li>Solve for candidate points.</li>
                                                                        <li>Evaluate each candidate to determine which is truly the minimum.</li>
                                                                </ol>

                                                                <h3 id="-solving-the-system">Solving the System</h3>
                                                                <p>From factoring the derivatives, candidate points occur when:</p>
                                                                <ul>
                                                                        <li>[ x = 0 ]</li>
                                                                        <li>[ x = 4 ]</li>
                                                                        <li>[ x = 6 ]</li>
                                                                        <li>[ y = 0 ]</li>
                                                                        <li>[ y = 4 ]</li>
                                                                        <li>[ y = 6 ]</li>
                                                                </ul>
                                                                <p>Some points lie outside the sauna (x=6 or y=6), so we ignore them.</p>
                                                                <p>After checking all valid points:</p>
                                                                <ul>
                                                                        <li>Points with [x=0] or [y=0] give temperature <strong>85</strong> (maximum). These points lie at the edges of the sauna.</li>
                                                                        <li>The only <strong>minimum</strong> occurs at:</li>
                                                                </ul>
                                                                <p className='formula'>{"\\[(x, y) = (4,4)\\]"}</p>
                                                                <p>At this point, the temperature is:</p>
                                                                <p className='formula'>{"\\[T(4,4) = 73.6\\]"}</p>

                                                                <h3 id="-key-takeaway">Key Takeaway</h3>
                                                                <p>Optimization in multiple dimensions works just like in one dimension:</p>
                                                                <ol>
                                                                        <li>Compute derivatives (now partial derivatives).</li>
                                                                        <li>Set them equal to zero.</li>
                                                                        <li>Solve for critical points.</li>
                                                                        <li>Test each candidate to find the true minimum or maximum.</li>
                                                                </ol>
                                                                <p>The gradient generalizes the idea of "derivative equals zero" from 1D to higher dimensions.</p>




                                                        </TileRowCell0>

                                                </Tab>

                                                <Tab title="Linear regression" isChecked={false}>
                                                        <TileRowCell0>
                                                                <h1 className='no-top-margin'>Optimization using gradients: Linear regression</h1>

                                                                <p>This lesson revisits the power line example, now extended to two dimensions, and introduces linear regression, one of the most important models in machine learning.</p>
                                                                <h4 id="-problem-setup-">Problem Setup</h4>
                                                                <ul>
                                                                        <li>Three power lines are located at different points on the xy-plane.</li>
                                                                        <li>We want to place a fiber line (a straight line) that connects to each power line using vertical wires (parallel to the y-axis).</li>
                                                                        <li>The cost of each connection is the square of the wire’s length.</li>
                                                                        <li>The goal is to choose the best line to minimize the total squared cost.</li>
                                                                </ul>
                                                                <h4 id="-mathematical-formulation-">Mathematical Formulation</h4>
                                                                <p>The fiber line has equation:</p>
                                                                <p className='formula'>{"\\[y = mx + b\\]"}</p>
                                                                <ul>
                                                                        <li>m = slope</li>
                                                                        <li>b = y-intercept</li>
                                                                </ul>
                                                                <p>The total cost becomes a function of two variables, E(m, b), equal to the sum of squared vertical distances from each data point to the line.</p>
                                                                <p>After expanding and simplifying, the cost function is:</p>
                                                                <p className='formula'>{"\\[E(m,b) = 14m^2 + 3b^2 + 12mb - 42m - 20b + 38\\]"}</p>
                                                                <h4 id="-minimizing-the-cost-">Minimizing the Cost</h4>
                                                                <p>To minimize E(m,b):</p>
                                                                <ol>
                                                                        <li>Compute the partial derivatives:</li>
                                                                </ol>
                                                                <p className='formula'>{"\\[\\frac{\\partial E}{\\partial m} = 28m + 12b - 42\\]"}</p>
                                                                <p className='formula'>{"\\[\\frac{\\partial E}{\\partial b} = 6b + 12m - 20\\]"}</p>
                                                                <ol>
                                                                        <li value="2">Set both derivatives equal to zero.</li>
                                                                        <li>Solve the system of equations.</li>
                                                                </ol>
                                                                <h4 id="-solution-">Solution</h4>
                                                                <p>Solving gives:</p>
                                                                <p className='formula'>{"\\[m = \\frac{1}{2}, \\quad b = \\frac{7}{3}\\]"}</p>
                                                                <p>This produces the optimal line:</p>
                                                                <p className='formula'>{"\\[y = \\frac{1}{2}x + \\frac{7}{3}\\]"}</p>
                                                                <p>The minimum cost is:</p>
                                                                <p className='formula'>{"\\[E\\left(\\frac{1}{2}, \\frac{7}{3}\\right) = 4.167\\]"}</p>
                                                                <h4 id="-key-insight-"><strong>Key Insight</strong></h4>
                                                                <p>This process—finding the line that minimizes squared distances to data points—is called linear regression.</p>
                                                                <p>While solving systems of equations works for small problems, it becomes computationally expensive for large ones. A more efficient method, called gradient descent, is introduced next to handle optimization in higher dimensions.</p>


                                                        </TileRowCell0>

                                                </Tab>

                                                <Tab title="Gradient Descent with 1 var" isChecked={false}>
                                                        <TileRowCell0>
                                                                <h1 className='no-top-margin'>Optimization using Gradient Descent in one variable</h1>

                                                                <p>In the previous approach, we approximated a function's minimum in a basic way. A smarter method uses the <strong>derivative (slope)</strong> to guide each step toward the minimum.</p>
                                                                <ul>
                                                                        <li>If the slope is <strong>negative</strong>, the point is to the left of the minimum, so we move <strong>right</strong>.</li>
                                                                        <li>If the slope is <strong>positive</strong>, the point is to the right of the minimum, so we move <strong>left</strong>.</li>
                                                                </ul>
                                                                <p>This leads to the update rule:</p>
                                                                <p className='formula'>{"\\[x_1 = x_0 - f'(x_0)\\]"}</p>
                                                                <p>We subtract the slope because:</p>
                                                                <ul>
                                                                        <li>Subtracting a <strong>negative</strong> slope moves us right.</li>
                                                                        <li>Subtracting a <strong>positive</strong> slope moves us left.</li>
                                                                </ul>
                                                                <p>However, if the slope is very large (on a steep part of the curve), this step can be too big and overshoot the minimum. To control step size, we multiply the slope by a small constant called the
                                                                        <strong> learning rate</strong>, <span className="math">{"\\[ \\alpha \\]"}</span> :</p>
                                                                <p className='formula'>{"\\[x_k = x_{k-1} - \\alpha f'(x_{k-1})\\]"}</p>
                                                                <p>This method is called <strong>gradient descent</strong>.</p>
                                                                <h3 id="why-it-works-well">Why It Works Well</h3>
                                                                <ul>
                                                                        <li>In steep regions (large derivative), steps are relatively larger.</li>
                                                                        <li>Near the minimum (small derivative), steps become smaller.</li>
                                                                        <li>It naturally adjusts movement based on how far you are from the minimum.</li>
                                                                </ul>
                                                                <p>This is similar to golf:</p>
                                                                <ul>
                                                                        <li>Far from the hole → hit hard.</li>
                                                                        <li>Close to the hole → use precision.</li>
                                                                </ul>
                                                                <h3 id="the-algorithm">The Algorithm</h3>
                                                                <ol>
                                                                        <li>Choose a function <span className="math">{"\\[ f(x) \\]"}</span></li>
                                                                        <li>Pick a starting point <span className="math">{"\\[ x_0 \\]"}</span></li>
                                                                        <li>Choose a learning rate  <span className="math">{"\\[ \\alpha \\]"}</span> </li>
                                                                        <li>Update repeatedly using: </li>
                                                                </ol>
                                                                <p className='formula'>{"\\[x_k = x_{k-1} - \\alpha f'(x_{k-1})\\]"}</p>
                                                                <ol>
                                                                        <li value="5">Stop when changes become very small.</li>
                                                                </ol>
                                                                <h3 id="key-advantage">Key Advantage</h3>
                                                                <p>You <strong>never need to explicitly solve</strong></p>
                                                                <p className='formula'>{"\\[f'(x) = 0\\]"}</p>
                                                                <p>You only compute the derivative and iteratively update the point.</p>
                                                                <p>Gradient descent is fast, can be repeated thousands of times efficiently, and is extremely powerful in machine learning for finding function minima.</p>

                                                                <h2>Special considerations</h2>
                                                                <p>Learning rate is a crucial hyperparameter in machine learning. If the learning rate is too large, gradient descent may overshoot the minimum and never converge. If it is too small, the algorithm may take an extremely long time to reach the minimum—or may appear to never reach it at all. Finding the “just right” learning rate is difficult and remains an active area of research. While there are adaptive methods that adjust the learning rate during training, there is no guaranteed best choice.</p>
                                                                <p>Another challenge with gradient descent is the problem of local minima. If the algorithm starts at a certain point, it may converge to a local minimum instead of the global minimum. There is no guaranteed way to avoid this issue, but a common practical solution is to run gradient descent multiple times with different random starting points. This increases the chances of finding the global minimum or at least a better solution.</p>


                                                        </TileRowCell0>

                                                </Tab>

                                                <Tab title="Lab 1" isChecked={false}>
                                                        <TileRowCell0>
                                                                <h1 id="optimization-using-gradient-descent-in-one-variable">Optimization Using Gradient Descent in One Variable</h1>
                                                                <p>To understand how to optimize functions using gradient descent, start from simple examples - functions of one variable. In this lab, you will implement the gradient descent method for functions with single and multiple minima, experiment with the parameters and visualize the results. This will allow you to understand the advantages and disadvantages of the gradient descent method.</p>
                                                                <h1 id="table-of-contents">Table of Contents</h1>
                                                                <ul>
                                                                        <li><a href="#1"> 1 - Function with One Global Minimum</a></li>
                                                                        <li><a href="#2"> 2 - Function with Multiple Minima</a></li>
                                                                </ul>
                                                                <h2 id="packages">Packages</h2>
                                                                <p>Run the following cell to load the packages you&#39;ll need.</p>

                                                                <div className='m-[0px]'>
                                                                        <div dangerouslySetInnerHTML={createMarkup(python_html_2)} />
                                                                </div>


                                                                <p><a name='1'></a></p>
                                                                <h1>1 - Function with One Global Minimum</h1>
                                                                <p>Function <span className="math">{"\\[f\\left(x\\right)=e^x - \\log(x)\\]"}</span> (defined for <span className="math">{"\\[x > 0\\]"}</span>) is a function of one variable which has only one <strong>minimum point</strong> (called <strong>global minimum</strong>). However, sometimes that minimum point cannot be found analytically - solving the equation <span className="math">{"\\[\\frac{df}{dx}=0\\]"}</span>. It can be done using a gradient descent method.</p>
                                                                <p>To implement gradient descent, you need to start from some initial point <span className="math">{"\\[x_0\\]"}</span>. Aiming to find a point, where the derivative equals zero, you want to move &quot;down the hill&quot;. Calculate the derivative <span className="math">{"\\[\\frac{df}{dx}(x_0)\\]"}</span> (called a <strong>gradient</strong>) and step to the next point using the expression:</p>
                                                                <div className="formula">{"\\[x_1 = x_0 - \\alpha \\frac{df}{dx}(x_0),\\tag{1}\\]"}</div>
                                                                <p>where <span className="math">{"\\[\\alpha > 0\\]"}</span> is a parameter called a <strong>learning rate</strong>. Repeat the process iteratively. The number of iterations <span className="math">{"\\[n\\]"}</span> is usually also a parameter.</p>
                                                                <p>Subtracting <span className="math">{"\\[\\frac{df}{dx}(x_0)\\]"}</span> you move &quot;down the hill&quot; against the increase of the function - toward the minimum point. So, <span className="math">{"\\[\\frac{df}{dx}(x_0)\\]"}</span> generally defines the direction of movement. Parameter <span className="math">{"\\[\\alpha\\]"}</span> serves as a scaling factor.</p>
                                                                <p>Now it&#39;s time to implement the gradient descent method and experiment with the parameters!</p>
                                                                <p>First, define function <span className="math">{"\\[f\\left(x\\right)=e^x - \\log(x)\\]"}</span> and its derivative <span className="math">{"\\[\\frac{df}{dx}\\left(x\\right)=e^x - \\frac{1}{x}\\]"}</span>:</p>


                                                                <div className='m-[0px]'>
                                                                        <div dangerouslySetInnerHTML={createMarkup(python_html_3)} />
                                                                </div>

                                                                <p>Function <span className="math">{"\\[f\\left(x\\right)\\]"}</span> has one global minimum. Let&#39;s plot the function:</p>

                                                                <span className='code-inline'>plot_f([0.001, 2.5], [-0.3, 13], f_example_1, 0.0)</span>


                                                                <p>Gradient descent can be implemented in the following function: </p>

                                                                <div className='m-[0px]'>
                                                                        <div dangerouslySetInnerHTML={createMarkup(html_1)} />
                                                                </div>


                                                                <p>Note that there are three parameters in this implementation: <span className='code-inline'>num_iterations</span>, <span className='code-inline'>learning_rate</span>, initial point <span className='code-inline'>x_initial</span>. Model parameters
                                                                        for such methods as gradient descent are usually found experimentially. For now, just assume that you know the parameters that will work in this model - you will see the discussion of that later. To optimize the function, set up the parameters and call the defined function <span className='code-inline'>gradient_descent</span>:</p>


                                                                <div dangerouslySetInnerHTML={createMarkup(html_2)} />


                                                                <span className='code-inline'>Gradient descent <span className="hljs-literal">result</span>: x_min = <span className="hljs-number">0.5671434156768685</span></span>

                                                                <p>The code in following cell will help you to visualize and understand the gradient descent method deeper. After the end of the animation, you can click on the plot to choose a new initial point and investigate how the gradient descent method will be performed.</p>
                                                                <p>You can see that it works successfully here, bringing it to the global minimum point!</p>
                                                                <p>What if some of the parameters will be changed? Will the method always work? Uncomment the lines in the cell below and rerun the code to investigate what happens if other parameter values are chosen. Try to investigate and analyse the results. You can read some comments below.</p>
                                                                <p><em>Notes related to this animation</em>: </p>
                                                                <ul>
                                                                        <li>Gradient descent is performed with some pauses between the iterations for visualization purposes. The actual implementation is much faster.</li>
                                                                        <li>The animation stops when minimum point is reached with certain accuracy (it might be a smaller number of steps than <span className='code-inline'>num_iterations</span>) - to avoid long runs of the code and for teaching purposes.</li>
                                                                        <li>Please wait for the end of the animation before making any code changes or rerunning the cell. In case of any issues, you can try to restart the Kernel and rerun the notebook.</li>
                                                                </ul>

                                                                <div className='m-[0px]'>
                                                                        <div dangerouslySetInnerHTML={createMarkup(html_3)} />
                                                                </div>




                                                                <p>Comments related to the choice of the parameters in the animation above:</p>
                                                                <ul>
                                                                        <li><p>Choosing <code>num_iterations = 25</code>, <code>learning_rate = 0.1</code>, <code>x_initial = 1.6</code> you get to the minimum point successfully. Even a little bit earlier - on the iteration 21, so for this choice of the learning rate and initial point, the number of iterations could have been taken less than <code>25</code> to save some computation time.</p>
                                                                        </li>
                                                                        <li><p>Increasing the <span className='code-inline'>learning_rate</span> to <code>0.3</code> you can see that the method converges even faster - you need less number of iterations. But note that the steps are larger and this may cause some problems.</p>
                                                                        </li>
                                                                        <li><p>Increasing the <span className='code-inline'>learning_rate</span> further to <code>0.5</code> the method doesn&#39;t converge anymore! You steped too far away from the minimum point. So, be careful - increasing <span className='code-inline'>learning_rate</span> the method may converge significantly faster... or not converge at all.</p>
                                                                        </li>
                                                                        <li><p>To be &quot;safe&quot;, you may think, why not to decrease <span className='code-inline'>learning_rate</span>?! Take it <code>0.04</code>, keeping the rest of the parameters the same. The model will not run enough number of iterations to converge!</p>
                                                                        </li>
                                                                        <li><p>Increasing <span className='code-inline'>num_iterations</span>, say to <code>75</code>, the model will converge but slowly. This would be more &quot;expensive&quot; computationally.</p>
                                                                        </li>
                                                                        <li><p>What if you get back to the original parameters <code>num_iterations = 25</code>, <code>learning_rate = 0.1</code>, but choose some other <code>x_initial</code>, e.g. <code>0.05</code>? The function is steeper at that point, thus the gradient is larger in absolute value, and the first step is larger. But it will work - you will get to the minimum point.</p>
                                                                        </li>
                                                                        <li><p>If you take <code>x_initial = 0.03</code> the function is even steeper, making the first step significantly larger. You are risking &quot;missing&quot; the minimum point.</p>
                                                                        </li>
                                                                        <li><p>Taking <code>x_initial = 0.02</code> the method doesn&#39;t converge anymore...</p>
                                                                        </li>
                                                                </ul>
                                                                <p>This is a very simple example, but hopefully, it gives you an idea of how important is the choice of the initial parameters.</p>
                                                                <p><a name='2'></a></p>
                                                                <h1>2 - Function with Multiple Minima</h1>
                                                                <p>Now you can take a slightly more complicated example - a function in one variable, but with multiple minima. Such an example was shown in the videos, and you can plot the function with the following code:</p>
                                                                <pre><code className="lang-python">plot_f([<span className="hljs-number">0.001</span>, <span className="hljs-number">2</span>], [<span className="hljs-number">-6.3</span>, <span className="hljs-number">5</span>], f_example_2, <span className="hljs-number">-6</span>)
                                                                </code></pre>
                                                                <pre><code>(<span className="hljs-name">&lt;Figure</span> size <span className="hljs-number">800</span>x400 with <span className="hljs-number">1</span> Axes&gt;, &lt;AxesSubplot: xlabel=<span className="hljs-symbol">'<span className="math">{"\\[x\\]"}</span></span>', ylabel=<span className="hljs-symbol">'<span className="math">{"\\[f\\]"}</span></span><span className="hljs-symbol">'&gt;</span>)
                                                                </code></pre><div >
                                                                        <div className="jupyter-widgets widget-label" >
                                                                                Figure
                                                                        </div>

                                                                </div>



                                                                <p>Function <code>f_example_2</code> and its derivative <code>dfdx_example_2</code> are pre-defined and uploaded into this notebook. At this stage, while you are mastering the optimization method, do not worry about the corresponding expressions, just concentrate on the gradient descent and the related parameters for now.</p>
                                                                <p>Use the following code to run gradient descent with the same <span className='code-inline'>learning_rate</span> and <span className='code-inline'>num_iterations</span>, but with a different starting point:</p>
                                                                <pre><code className="lang-python"><span className="hljs-function"><span className="hljs-title">print</span><span className="hljs-params">(<span className="hljs-string">"Gradient descent results"</span>)</span></span>
                                                                        <span className="hljs-function"><span className="hljs-title">print</span><span className="hljs-params">(<span className="hljs-string">"Global minimum: x_min ="</span>, gradient_descent(dfdx_example_2, x=<span className="hljs-number">1.3</span>, learning_rate=<span className="hljs-number">0.005</span>, num_iterations=<span className="hljs-number">35</span>)</span></span>)
                                                                        <span className="hljs-function"><span className="hljs-title">print</span><span className="hljs-params">(<span className="hljs-string">"Local minimum: x_min ="</span>, gradient_descent(dfdx_example_2, x=<span className="hljs-number">0.25</span>, learning_rate=<span className="hljs-number">0.005</span>, num_iterations=<span className="hljs-number">35</span>)</span></span>)
                                                                </code></pre>
                                                                <pre><code>Gradient descent results
                                                                        <span className="hljs-keyword">Global</span> minimum: x_min = <span className="hljs-number">1.7751686214270586</span>
                                                                        <span className="hljs-keyword">Local</span> minimum: x_min = <span className="hljs-number">0.7585728671820583</span>
                                                                </code></pre><p>The results are different. Both times the point did fall into one of the minima, but in the first run it was a global minimum, while in the second run it got &quot;stuck&quot; in a local one. To see the visualization of what is happening, run the code below. You can uncomment the lines to try different sets of parameters or click on the plot to choose the initial point (after the end of the animation).</p>
                                                                <pre><code className="lang-python">num_iterations = <span className="hljs-number">35</span>; learning_rate = <span className="hljs-number">0.005</span>; x_initial = <span className="hljs-number">1.3</span>
                                                                        # num_iterations = <span className="hljs-number">35</span>; learning_rate = <span className="hljs-number">0.005</span>; x_initial = <span className="hljs-number">0.25</span>
                                                                        # num_iterations = <span className="hljs-number">35</span>; learning_rate = <span className="hljs-number">0.01</span>; x_initial = <span className="hljs-number">1.3</span>

                                                                        gd_example_2 = gradient_descent_one_variable([<span className="hljs-number">0.001</span>, <span className="hljs-number">2</span>], [<span className="hljs-number">-6.3</span>, <span className="hljs-number">5</span>], f_example_2, dfdx_example_2,
                                                                        gradient_descent, num_iterations, learning_rate, x_initial, <span className="hljs-number">-6</span>, [<span className="hljs-number">0.1</span>, <span className="hljs-number">-0.5</span>])
                                                                </code></pre>
                                                                <div >
                                                                        <div className="jupyter-widgets widget-label" >
                                                                                Figure
                                                                        </div>

                                                                </div>



                                                                <p>You can see that gradient descent method is robust - it allows you to optimize a function with a small number of calculations, but it has some drawbacks. The efficiency of the method depends a lot on the choice of the initial parameters, and it is a challenge in machine learning applications to choose the &quot;right&quot; set of parameters to train the model!</p>
                                                                <pre><code className="lang-python">
                                                                </code></pre>





                                                        </TileRowCell0 >



                                                </Tab >

                                                <Tab title="Labs" isChecked={false}>
                                                        <TileRowCell0>
                                                                <div className='jade-code'>
                                                                        <a href="/C2_W2_Lab_1_Optimization_Using_Gradient_Descent_in_One_Variable.html" target="_blank">Lab: Gradient Descent</a>
                                                                        <br /><br />

                                                                </div>
                                                        </TileRowCell0>

                                                </Tab>

                                        </Tabs >


                                </div >
                        </MathJax >
                </>
        );



}
