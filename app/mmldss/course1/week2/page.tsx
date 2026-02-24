'use client';

import JadeLink from '@/components/client/JadeLink'
import { useState } from 'react'

export default function Home() {

        const html = `
<div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:13px;line-height:17px;">
                <div><span style="color:rgb(86,156,214);font-weight:bold"># Linear algebra - Week 2</span></div><br>
                <div><span style="color:rgb(86,156,214);font-weight:bold">## Solving systems of equations</span></div>
                <br>
                <div>Note: for linear systems of equations, row operations (add, subtract, multiply, divide) do not
                        affect singularity</div>
                <div>&nbsp;<span style="color:rgb(103,150,230)">-</span> if you multiply a row by a factor, this will
                        multiply the value of the determinant by the same factor</div>
                <div>&nbsp; &nbsp;(if it is zero, then it stays zero) thus why it does not affect the singularity</div>
                <br>
                <div><span style="color:rgb(86,156,214);font-weight:bold">## Row echelon form</span></div>
                <div>&nbsp;<span style="color:rgb(103,150,230)">-</span> do row operations on the matrix to get an
                        upper-diagonal matrix</div>
                <div>&nbsp;<span style="color:rgb(103,150,230)">-</span> step 1: divide each row by the first
                        coefficient</div>
                <div>&nbsp;<span style="color:rgb(103,150,230)">-</span> step 2: new row 2 = row 2 - row 1</div>
                <div>&nbsp;<span style="color:rgb(103,150,230)">-</span> step 3: divide row 2 by the second coefficient
                        (so that you only have 1's on the diagonal)</div>
                <div>&nbsp; &nbsp; </div>
                <div>note: the resulting matrix will be upper-triangular (only zeros below the diagonal)</div><br>
                <div>eg. [ 5 &nbsp;1 ] divide row 1 by 5 -&gt; [ 1 &nbsp; 0.2 ] &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;[ 1 &nbsp; &nbsp;0.2 ] &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;[ 1 &nbsp;0.2]</div>
                <div>&nbsp; &nbsp; [ 4 -3 ] divide row 2 by 4 -&gt; [ 1 &nbsp;-0.75] &nbsp;new row 2 = row 2 - row 1 [ 0
                        &nbsp;-0.95 ] &nbsp;divide to get a 1 [ 0 &nbsp; 1 ]</div><br>
                <div>note: if you do not have 1's on the diagonal, it is singular (infinite or zero solutions)</div>
                <div>note: the <span style="color:rgb(86,156,214);font-weight:bold">**rank**</span> of a matrix is the
                        number of pivots in the matrix</div>
                <div>&nbsp;<span style="color:rgb(103,150,230)">-</span> pivot is the first non-zero coefficient in the
                        row</div>
                <div>&nbsp;<span style="color:rgb(103,150,230)">-</span> if you have 1's on the diagonal, then the # of
                        pivots = the # of rows = the rank; system is non-singular</div>
                <div>&nbsp;<span style="color:rgb(103,150,230)">-</span> if you have a 0 on the diagonal, then the # of
                        pivots = the rank which is &lt; the # of rows; system is singular</div>
                <div>&nbsp;<span style="color:rgb(103,150,230)">-</span> re-arrange the rows such that a row with all
                        zeros is at the bottom of the matrix</div><br>
                <div>note: if a row has all zeros, then it has infinite solutions</div>
                <div>&nbsp; &nbsp; &nbsp; if a row has zeros for A but a non-zero value for B, then it has no solutions
                </div><br>
                <div>recall: system of linear equations -&gt; A[x y] = B &nbsp;where A is a matrix and B is the free
                        coefficients</div>
                <div>eg. augmented matrix = [<span style="color:rgb(206,145,120)">A|B</span>] -&gt; [ 2 -1 1 | &nbsp;1 ]
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; [ 2 &nbsp;2 4 | -2 ]</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; [ 4 &nbsp;1 0 | -1 ]</div><br>
                <div>eg. augmented matrix in row echelon form:</div>
                <div>[[ 1. 8. 6. | 9. ]</div><span class="im">
                        <div>&nbsp;[ 0. 1. 8. | 6. ]</div>
                        <div>&nbsp;[ 0. 0. 1. | 1. ]]</div><br>
                </span>
                <div><span style="color:rgb(86,156,214);font-weight:bold">## Row-reduced echelon form</span></div>
                <div>&nbsp;<span style="color:rgb(103,150,230)">-</span> given a matrix in row echelon form (upper
                        triangular matrix and all pivots are 1's), </div>
                <div>&nbsp; &nbsp;perform row operations such that you have zeros above each pivot</div>
                <div>&nbsp; &nbsp;(called 'back substitution') -&gt; see assignment for steps to do 'back substitution'
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(103,150,230)">-</span> new_row_above_pivot = row_above_pivot -
                        value_in_row_above_pivot * row_with_pivot</div><br>
                <div>eg. reduced row echelon form:</div>
                <div>[[ 1. 0. 0. | 19. ]</div>
                <div>&nbsp;[ 0. 1. 0. | -2. ]</div>
                <div>&nbsp;[ 0. 0. 1. | &nbsp;1. ]]</div><br>
                <div>note: the resulting A matrix will be the identity matrix. </div><br><br>
                <div><span style="color:rgb(86,156,214);font-weight:bold">## Gaussian elimination algorithm</span></div>
                <div>&nbsp;<span style="color:rgb(103,150,230)">-</span> an algorithm to solve a system of linear
                        equations</div>
                <div>&nbsp;<span style="color:rgb(103,150,230)">-</span> step 1: convert sys of equations to the <span
                                style="color:rgb(86,156,214);font-weight:bold">**augmented matrix form**</span></div>
                <div>&nbsp;<span style="color:rgb(103,150,230)">-</span> step 2: apply ops to get matrix in <span
                                style="color:rgb(86,156,214);font-weight:bold">**row echelon form**</span></div>
                <div>&nbsp;<span style="color:rgb(103,150,230)">-</span> step 3: perform <span
                                style="color:rgb(86,156,214);font-weight:bold">**back substitution**</span> (zero out
                        rows above the pivot) to get the <span style="color:rgb(86,156,214);font-weight:bold">**reduced
                                row echelon form**</span></div>
                <div>&nbsp;<span style="color:rgb(103,150,230)">-</span> step 4: solution is the resulting B column (the
                        resulting free coefficients)</div><br>
                <div>&nbsp; &nbsp;note: if you encounter a row with a zero on the diagonal, you can stop -&gt; it is
                        singular and does not have </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;a unique solution</div>
                <div class="yj6qo ajU">
                        <div id=":25i" class="ajR" role="button" tabindex="0" data-tooltip="Show trimmed content"
                                aria-label="Show trimmed content" aria-expanded="false"><img class="ajT"
                                        src="//ssl.gstatic.com/ui/v1/icons/mail/images/cleardot.gif"></div>
                </div>
                <div class="adL"><br></div>
        </div>
</div>
        `


        function createMarkup() {
                return { __html: html };
        }




        return (
                <>
                        <div className='m-[10px]'>

                                <div className='jade-h1'>
                                        solving systems of linear equations
                                </div>

                                <div className="tabs tabs-lift">
                                        <input type="radio" name="my_tabs_1" className="tab" aria-label="Notes" defaultChecked />
                                        <div className="tab-content bg-base-100 border-base-300 p-6">
                                                <div className='jade-code'>
                                                        <div dangerouslySetInnerHTML={createMarkup()} />
                                                </div>
                                        </div>

                                        <input type="radio" name="my_tabs_1" className="tab" aria-label="Labs & Assignments" />
                                        <div className="tab-content bg-base-100 border-base-300 p-6">
                                                <a href="/C1W2_UGL_solving_linear_systems_3_variables.html" target="_blank">Lab: Introduction to the Numpy.linalg sub-library</a><br /><br />
                                                <a href="/C1W2_Assignment.html" target="_blank">Assignment: gaussian elimination</a>
                                        </div>


                                </div>






                        </div>

                </>
        );



}
