'use client';

export default function Home() {

        const html = `
<div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:13px;line-height:17px;">
                <div><span style="color:rgb(86,156,214);font-weight:bold"># Linear algebra - Week 1</span></div><br>
                <div>System of linear equations:</div><br>
                <div>&nbsp; x + y &nbsp;= 10 &nbsp;-&gt; [[1 1] &nbsp; = [10 &nbsp; -&gt; A[x y] = B &nbsp; where A is a
                        matrix and B is the free coefficients</div>
                <div>&nbsp; x + 2y = 20 &nbsp; &nbsp; &nbsp;[1 2]] &nbsp; &nbsp; 20]</div><br>
                <div><span style="color:rgb(86,156,214);font-weight:bold">## Systems of linear equations:</span></div>
                <div>&nbsp;<span style="color:rgb(103,150,230)">-</span> 3 types:</div>
                <div>&nbsp; &nbsp;<span style="color:rgb(103,150,230)">-</span> <span
                                style="color:rgb(103,150,230)">1.</span> <span
                                style="color:rgb(86,156,214);font-weight:bold">**complete**</span> </div>
                <div>&nbsp; &nbsp; &nbsp; <span style="color:rgb(103,150,230)">-</span> non-singular </div>
                <div>&nbsp; &nbsp; &nbsp; <span style="color:rgb(103,150,230)">-</span> has exactly one unique solution
                </div>
                <div>&nbsp; &nbsp; &nbsp; <span style="color:rgb(103,150,230)">-</span> determinant is non-zero </div>
                <div>&nbsp; &nbsp; &nbsp; <span style="color:rgb(103,150,230)">-</span> graphical representation </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(103,150,230)">-</span> for 2 variables:
                        each row is a line on a graph; the lines intersect at one point (the coordinates is the solution
                        to the system)</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(103,150,230)">-</span> for 3 variables:
                        each row is a 3D plane; the planes intersect at one point</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </div>
                <div>&nbsp; &nbsp;<span style="color:rgb(103,150,230)">-</span> <span
                                style="color:rgb(103,150,230)">2.</span> <span
                                style="color:rgb(86,156,214);font-weight:bold">**redundant**</span> </div>
                <div>&nbsp; &nbsp; &nbsp; <span style="color:rgb(103,150,230)">-</span> singular</div>
                <div>&nbsp; &nbsp; &nbsp; <span style="color:rgb(103,150,230)">-</span> infinite solutions</div>
                <div>&nbsp; &nbsp; &nbsp; <span style="color:rgb(103,150,230)">-</span> solution is a linear equation;
                        every point on the line is a solution</div>
                <div>&nbsp; &nbsp; &nbsp; <span style="color:rgb(103,150,230)">-</span> determinant = 0</div>
                <div>&nbsp; &nbsp; &nbsp; <span style="color:rgb(103,150,230)">-</span> graphical representation: </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(103,150,230)">-</span> for 2 variables:
                        the lines on a graph are on top of each other</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(103,150,230)">-</span> for 3 variables:
                        the planes intersect along a line </div><br>
                <div>&nbsp; &nbsp;<span style="color:rgb(103,150,230)">-</span> <span
                                style="color:rgb(103,150,230)">3.</span> <span
                                style="color:rgb(86,156,214);font-weight:bold">**contradictory**</span></div>
                <div>&nbsp; &nbsp; &nbsp; <span style="color:rgb(103,150,230)">-</span> singular</div>
                <div>&nbsp; &nbsp; &nbsp; <span style="color:rgb(103,150,230)">-</span> no solution</div>
                <div>&nbsp; &nbsp; &nbsp; <span style="color:rgb(103,150,230)">-</span> linear equations do not
                        intersect</div>
                <div>&nbsp; &nbsp; &nbsp; <span style="color:rgb(103,150,230)">-</span> determinant = 0</div>
                <div>&nbsp; &nbsp; &nbsp; <span style="color:rgb(103,150,230)">-</span> graphical representation: </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(103,150,230)">-</span> for 2 variables:
                        the lines on a graph are parallel</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(103,150,230)">-</span> for 3 variables:
                        the planes can intersect, but we do not have all 3 planes intersect at a single point</div><br>
                <div><span style="color:rgb(86,156,214);font-weight:bold">## notion of singularity</span></div>
                <div>&nbsp;<span style="color:rgb(103,150,230)">-</span> if have A[x y] = B</div>
                <div>&nbsp;<span style="color:rgb(103,150,230)">-</span> if you set the constants B to zero, this moves
                        the linear equations to the origin (ie. move lines on graph to 0,0)</div>
                <div>&nbsp;<span style="color:rgb(103,150,230)">-</span> this <span
                                style="color:rgb(86,156,214);font-weight:bold">**does not**</span> change if the system
                        is singular or not (but will make it easier to determine if it is singular)</div><br>
                <div><span style="color:rgb(86,156,214);font-weight:bold">## linear dependence</span></div>
                <div>&nbsp;<span style="color:rgb(103,150,230)">-</span> if one row can be created by a combination of
                        other rows (add, subtract, mult, divide, average, etc) then</div>
                <div>&nbsp; &nbsp;the system is called <span style="color:rgb(86,156,214);font-weight:bold">**linearly
                                dependent**</span></div>
                <div>&nbsp;<span style="color:rgb(103,150,230)">-</span> a linear dependent system is singular (no
                        unique solution; either infinite or zero solutions)</div><br>
                <div><span style="color:rgb(86,156,214);font-weight:bold">## determinant</span></div>
                <div>&nbsp;<span style="color:rgb(103,150,230)">-</span> handy way to determine if a matrix is singular
                        or not</div>
                <div>&nbsp;<span style="color:rgb(103,150,230)">-</span> only works for square matricies</div>
                <div>&nbsp;<span style="color:rgb(103,150,230)">-</span> ignore B (free coefficients) since they do not
                        affect singularity</div>
                <div>&nbsp;<span style="color:rgb(103,150,230)">-</span> if the determinant is non-zero then it is
                        non-singular (one unique solution)</div>
                <div>&nbsp;<span style="color:rgb(103,150,230)">-</span> if the determinant is zero then it is singular
                        (infinite or zero solutions)</div>
                <div>&nbsp;<span style="color:rgb(103,150,230)">-</span> if have matrix: </div>
                <div>&nbsp; &nbsp; &nbsp;[ a b ] &nbsp;then the determinant is: ad - bc (diagonal to right - diagonal to
                        left)</div>
                <div>&nbsp; &nbsp; &nbsp;[ c d ]</div><br>
                <div>&nbsp;<span style="color:rgb(103,150,230)">-</span> for 3x3 matrix:</div>
                <div>&nbsp; &nbsp; &nbsp;[ a b c ] &nbsp;then determinant = (diagonals to right) - (diagonals to left)
                </div>
                <div>&nbsp; &nbsp; &nbsp;[ d e f ]</div>
                <div>&nbsp; &nbsp; &nbsp;[ g h i ] &nbsp; &nbsp; &nbsp; determinant = (aei + bfg + dhc) - (ceg + bdi +
                        fha)</div><br>
                <div>&nbsp; &nbsp; &nbsp;note: a zero in the matrix makes it easier to calculate (the factor of vars =
                        0)</div>
                <div>&nbsp; &nbsp; &nbsp;note: if the matrix is <span
                                style="color:rgb(86,156,214);font-weight:bold">**upper triangular**</span> (values below
                        the diagonal are zero) then</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;the determinant is simply the diagonal terms multiplied
                        together (ie. a<span style="font-style:italic">*e*</span>i)</div>
                <div class="yj6qo"></div>
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
                                        systems of linear equations
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
                                                <a href="/C1_W1_Lab_1_introduction_to_numpy_arrays.html" target="_blank">Lab: Introduction to Python Matrices and NumPy</a><br /><br />
                                                <a href="/C1_W1_Lab_2_linear_systems_as_matrices.html" target="_blank">Lab: Representing Systems of Equations as Matrices</a>
                                        </div>

                                </div>






                        </div>

                </>
        );



}
