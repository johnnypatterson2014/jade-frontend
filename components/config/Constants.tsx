
export const OPENAI_MODEL = "gpt-4.1";
export const OPENAI_TEMPERATURE = '1';

export const mySqlConnectionParams = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'feskMysqlDB',
    database: 'feskDb'
}

export interface TraceTreeItem {
    trace_id: string
    name?: string
    agent_name?: string
    input?: string
    output?: string
    child_ids?: string[]
    parent_id?: string
    children?: TraceTreeItem[]
    traceBody?: any
}

export function createMarkup(content: any) {
    return { __html: content };
}

export const python_html_1 = `
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

export const python_html_2 = `
<div style="box-sizing:unset;padding:5px;margin:0px;border:none;outline:none;background:transparent;overflow:visible;color:rgb(0,0,0);font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;;font-size:14px"><div style="box-sizing:unset;display:flex;padding:0px;margin:0px;overflow:visible"><div style="box-sizing:unset;display:flex;overflow:hidden"><div style="width:800px;box-sizing:unset;border-color:rgb(126, 124, 124);border-style:solid;border-width:0.8px;border-radius:0px;background:#eeeeee;overflow:hidden"><div style="box-sizing:unset;font-family:Menlo,Consolas,&quot;DejaVu Sans Mono&quot;,monospace;height:auto;color:rgba(0,0,0,0.87);direction:ltr;overflow:hidden;background:transparent;line-height:1.3077;font-size:13px;border:0px;border-radius:0px"><div style="box-sizing:unset;background-image:none;background-position:0% 0%;background-size:auto;background-repeat:repeat;background-origin:padding-box;background-clip:border-box;color:rgb(33,33,33);margin:0.4em"><pre style="box-sizing:unset;line-height:16.25px;padding:0px 5px"><span style="box-sizing:unset"></span><span style="box-sizing:unset;color:rgb(0,128,0);font-weight:bold">import</span> <span style="box-sizing:unset">numpy</span> <span style="box-sizing:unset;color:rgb(0,128,0);font-weight:bold">as</span> <span style="box-sizing:unset">np</span>
<span style="box-sizing:unset;color:rgb(0,128,0);font-weight:bold">import</span> <span style="box-sizing:unset">matplotlib.pyplot</span> <span style="box-sizing:unset;color:rgb(0,128,0);font-weight:bold">as</span> <span style="box-sizing:unset">plt</span>
<span style="box-sizing:unset;color:rgb(64,128,128);font-style:italic"># Some functions defined specifically for this notebook.</span>
<span style="box-sizing:unset;color:rgb(0,128,0);font-weight:bold">from</span> <span style="box-sizing:unset">w2_tools</span> <span style="box-sizing:unset;color:rgb(0,128,0);font-weight:bold">import</span> <span style="box-sizing:unset">plot_f</span><span style="box-sizing:unset;color:rgb(0,85,170)">,</span> <span style="box-sizing:unset">gradient_descent_one_variable</span><span style="box-sizing:unset;color:rgb(0,85,170)">,</span> <span style="box-sizing:unset">f_example_2</span><span style="box-sizing:unset;color:rgb(0,85,170)">,</span> <span style="box-sizing:unset">dfdx_example_2</span>
<span style="box-sizing:unset;color:rgb(64,128,128);font-style:italic"># Magic command to make matplotlib plots interactive.</span>
<span style="box-sizing:unset;color:rgb(170,34,255);font-weight:bold">%</span><span style="box-sizing:unset;color:rgb(0,128,0);font-weight:bold">matplotlib</span> widget
</pre></div></div></div></div></div></div>
`

export const python_html_3 = `
<div style="box-sizing:unset;padding:5px;margin:0px;border:none;outline:none;background:transparent;overflow:visible;color:rgb(0,0,0);font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;;font-size:14px"><div style="box-sizing:unset;display:flex;padding:0px;margin:0px;overflow:visible"><div style="box-sizing:unset;display:flex;overflow:hidden"><div style="width:800px;box-sizing:unset;border-color:rgb(224,224,224);border-style:solid;border-width:0.8px;border-radius:0px;background:rgb(245,245,245);overflow:hidden"><div style="box-sizing:unset;font-family:Menlo,Consolas,&quot;DejaVu Sans Mono&quot;,monospace;height:auto;color:rgba(0,0,0,0.87);direction:ltr;overflow:hidden;background:transparent;line-height:1.3077;font-size:13px;border:0px;border-radius:0px"><div style="box-sizing:unset;background-image:none;background-position:0% 0%;background-size:auto;background-repeat:repeat;background-origin:padding-box;background-clip:border-box;color:rgb(33,33,33);margin:0.4em"><pre style="box-sizing:unset;line-height:16.25px;padding:0px 5px"><span style="box-sizing:unset"></span><span style="box-sizing:unset;color:rgb(0,128,0);font-weight:bold">def</span> <span style="box-sizing:unset">f_example_1</span><span style="box-sizing:unset;color:rgb(0,85,170)">(</span><span style="box-sizing:unset">x</span><span style="box-sizing:unset;color:rgb(0,85,170)">):</span>
    <span style="box-sizing:unset;color:rgb(0,128,0);font-weight:bold">return</span> <span style="box-sizing:unset">np</span><span style="box-sizing:unset;color:rgb(170,34,255);font-weight:bold">.</span><span style="box-sizing:unset">exp</span><span style="box-sizing:unset;color:rgb(0,85,170)">(</span><span style="box-sizing:unset">x</span><span style="box-sizing:unset;color:rgb(0,85,170)">)</span> <span style="box-sizing:unset;color:rgb(170,34,255);font-weight:bold">-</span> <span style="box-sizing:unset">np</span><span style="box-sizing:unset;color:rgb(170,34,255);font-weight:bold">.</span><span style="box-sizing:unset">log</span><span style="box-sizing:unset;color:rgb(0,85,170)">(</span><span style="box-sizing:unset">x</span><span style="box-sizing:unset;color:rgb(0,85,170)">)</span>

<span style="box-sizing:unset;color:rgb(0,128,0);font-weight:bold">def</span> <span style="box-sizing:unset">dfdx_example_1</span><span style="box-sizing:unset;color:rgb(0,85,170)">(</span><span style="box-sizing:unset">x</span><span style="box-sizing:unset;color:rgb(0,85,170)">):</span>
    <span style="box-sizing:unset;color:rgb(0,128,0);font-weight:bold">return</span> <span style="box-sizing:unset">np</span><span style="box-sizing:unset;color:rgb(170,34,255);font-weight:bold">.</span><span style="box-sizing:unset">exp</span><span style="box-sizing:unset;color:rgb(0,85,170)">(</span><span style="box-sizing:unset">x</span><span style="box-sizing:unset;color:rgb(0,85,170)">)</span> <span style="box-sizing:unset;color:rgb(170,34,255);font-weight:bold">-</span> <span style="box-sizing:unset;color:rgb(0,136,0)">1</span><span style="box-sizing:unset;color:rgb(170,34,255);font-weight:bold">/</span><span style="box-sizing:unset">x</span>
</pre></div></div></div></div></div></div>
`

export const python_html_4 = `
plot_f([0.001, 2.5], [-0.3, 13], f_example_1, 0.0)
`



