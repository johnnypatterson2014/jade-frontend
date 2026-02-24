'use client';

import Image from 'next/image';

export default function Home() {


        const html = `
        <div dir="ltr">

        <div style="color:rgb(204,204,204);font-family:monospace;font-size:13px;line-height:17px;">
                <table
                        style="max-width:100%;background-color:transparent;border-collapse:collapse;border-spacing:0px;margin:0px 0px 24px;width:770px">
                        <tbody style="box-sizing:border-box">
                                <tr style="box-sizing:border-box">
                                        <td
                                                style="box-sizing:border-box;padding:4px 16px;letter-spacing:0px;font-size:12px;line-height:14px;vertical-align:top;border-color:rgb(232,238,247);border-style:solid;border-width:0.8px">
                                                <p
                                                        style="box-sizing:border-box;margin:8px 0px 0px;letter-spacing:0px;font-size:12px;line-height:14px;min-height:16px">
                                                        <span style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"></span></span><span
                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                        style="box-sizing:border-box"><span
                                                                                aria-hidden="true" role="math"
                                                                                style="box-sizing:border-box"><span
                                                                                        style="box-sizing:border-box"><span
                                                                                                style="box-sizing:border-box;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:1.21em;line-height:1.2;font-family:KaTeX_Main,&quot;Times New Roman&quot;,serif"><span
                                                                                                        style="box-sizing:border-box;padding:0px;border:0px;height:1px;width:1px;overflow:hidden"></span><span
                                                                                                        aria-hidden="true"
                                                                                                        style="box-sizing:border-box"><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:0.87777em;vertical-align:-0.19444em"></span><span
                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic">A</span><span
                                                                                                                        style="box-sizing:border-box">,</span><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;margin-right:0.166667em"></span><span
                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic;margin-right:0.05017em">B</span><span
                                                                                                                        style="box-sizing:border-box">,</span><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;margin-right:0.166667em"></span><span
                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic;margin-right:0.07153em">C</span></span></span></span></span></span><span
                                                                                style="box-sizing:border-box;border:0px;width:1px;height:1px;padding:0px;overflow:hidden;white-space:nowrap">A,
                                                                                comma, B, comma,
                                                                                C</span></span></span><span
                                                                style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"></span></span>
                                                </p>
                                        </td>
                                        <td
                                                style="box-sizing:border-box;padding:4px 16px;letter-spacing:0px;font-size:12px;line-height:14px;vertical-align:top;border-color:rgb(232,238,247);border-style:solid;border-width:0.8px">
                                                <p
                                                        style="box-sizing:border-box;margin:8px 0px 0px;letter-spacing:0px;font-size:12px;line-height:14px;min-height:16px">
                                                        <span style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box">capital letters
                                                                        represent matrices </span></span>
                                                </p>
                                        </td>
                                </tr>
                                <tr style="box-sizing:border-box">
                                        <td
                                                style="box-sizing:border-box;padding:4px 16px;letter-spacing:0px;font-size:12px;line-height:14px;vertical-align:top;border-color:rgb(232,238,247);border-style:solid;border-width:0.8px">
                                                <p
                                                        style="box-sizing:border-box;margin:8px 0px 0px;letter-spacing:0px;font-size:12px;line-height:14px;min-height:16px">
                                                        <span style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"></span></span><span
                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                        style="box-sizing:border-box"><span
                                                                                aria-hidden="true" role="math"
                                                                                style="box-sizing:border-box"><span
                                                                                        style="box-sizing:border-box"><span
                                                                                                style="box-sizing:border-box;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:1.21em;line-height:1.2;font-family:KaTeX_Main,&quot;Times New Roman&quot;,serif"><span
                                                                                                        style="box-sizing:border-box;padding:0px;border:0px;height:1px;width:1px;overflow:hidden"></span><span
                                                                                                        aria-hidden="true"
                                                                                                        style="box-sizing:border-box"><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:0.625em;vertical-align:-0.19444em"></span><span
                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic">u</span><span
                                                                                                                        style="box-sizing:border-box">,</span><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;margin-right:0.166667em"></span><span
                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic;margin-right:0.03588em">v</span><span
                                                                                                                        style="box-sizing:border-box">,</span><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;margin-right:0.166667em"></span><span
                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic;margin-right:0.02691em">w</span></span></span></span></span></span><span
                                                                                style="box-sizing:border-box;border:0px;width:1px;height:1px;padding:0px;overflow:hidden;white-space:nowrap">u,
                                                                                comma, v, comma,
                                                                                w</span></span></span><span
                                                                style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"></span></span>
                                                </p>
                                        </td>
                                        <td
                                                style="box-sizing:border-box;padding:4px 16px;letter-spacing:0px;font-size:12px;line-height:14px;vertical-align:top;border-color:rgb(232,238,247);border-style:solid;border-width:0.8px">
                                                <p
                                                        style="box-sizing:border-box;margin:8px 0px 0px;letter-spacing:0px;font-size:12px;line-height:14px;min-height:16px">
                                                        <span style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box">lowercase letters
                                                                        represent vectors</span></span>
                                                </p>
                                        </td>
                                </tr>
                                <tr style="box-sizing:border-box">
                                        <td
                                                style="box-sizing:border-box;padding:4px 16px;letter-spacing:0px;font-size:12px;line-height:14px;vertical-align:top;border-color:rgb(232,238,247);border-style:solid;border-width:0.8px">
                                                <p
                                                        style="box-sizing:border-box;margin:8px 0px 0px;letter-spacing:0px;font-size:12px;line-height:14px;min-height:16px">
                                                        <span style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"></span></span><span
                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                        style="box-sizing:border-box"><span
                                                                                aria-hidden="true" role="math"
                                                                                style="box-sizing:border-box"><span
                                                                                        style="box-sizing:border-box"><span
                                                                                                style="box-sizing:border-box;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:1.21em;line-height:1.2;font-family:KaTeX_Main,&quot;Times New Roman&quot;,serif"><span
                                                                                                        style="box-sizing:border-box;padding:0px;border:0px;height:1px;width:1px;overflow:hidden"></span><span
                                                                                                        aria-hidden="true"
                                                                                                        style="box-sizing:border-box"><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:0.68333em;vertical-align:0em"></span><span
                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic">A</span></span></span></span></span></span><span
                                                                                style="box-sizing:border-box;border:0px;width:1px;height:1px;padding:0px;overflow:hidden;white-space:nowrap">A</span></span></span><span
                                                                style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"> of size
                                                                </span></span><span
                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                        style="box-sizing:border-box"><span
                                                                                aria-hidden="true" role="math"
                                                                                style="box-sizing:border-box"><span
                                                                                        style="box-sizing:border-box"><span
                                                                                                style="box-sizing:border-box;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:1.21em;line-height:1.2;font-family:KaTeX_Main,&quot;Times New Roman&quot;,serif"><span
                                                                                                        style="box-sizing:border-box;padding:0px;border:0px;height:1px;width:1px;overflow:hidden"></span><span
                                                                                                        aria-hidden="true"
                                                                                                        style="box-sizing:border-box"><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:0.66666em;vertical-align:-0.08333em"></span><span
                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic">m</span><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;margin-right:0.222222em"></span><span
                                                                                                                        style="box-sizing:border-box">×</span><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;margin-right:0.222222em"></span></span><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:0.43056em;vertical-align:0em"></span><span
                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic">n</span></span></span></span></span></span><span
                                                                                style="box-sizing:border-box;border:0px;width:1px;height:1px;padding:0px;overflow:hidden;white-space:nowrap">m,
                                                                                times, n</span></span></span><span
                                                                style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"> or
                                                                </span></span><span
                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                        style="box-sizing:border-box"><span
                                                                                aria-hidden="true" role="math"
                                                                                style="box-sizing:border-box"><span
                                                                                        style="box-sizing:border-box"><span
                                                                                                style="box-sizing:border-box;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:1.21em;line-height:1.2;font-family:KaTeX_Main,&quot;Times New Roman&quot;,serif"><span
                                                                                                        style="box-sizing:border-box;padding:0px;border:0px;height:1px;width:1px;overflow:hidden"></span><span
                                                                                                        aria-hidden="true"
                                                                                                        style="box-sizing:border-box"><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:1em;vertical-align:-0.25em"></span><span
                                                                                                                        style="box-sizing:border-box"><span
                                                                                                                                style="box-sizing:border-box">(</span><span
                                                                                                                                style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic">m</span><span
                                                                                                                                style="box-sizing:border-box;display:inline-block;margin-right:0.222222em"></span><span
                                                                                                                                style="box-sizing:border-box">×</span><span
                                                                                                                                style="box-sizing:border-box;display:inline-block;margin-right:0.222222em"></span><span
                                                                                                                                style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic">n</span><span
                                                                                                                                style="box-sizing:border-box">)</span></span></span></span></span></span></span><span
                                                                                style="box-sizing:border-box;border:0px;width:1px;height:1px;padding:0px;overflow:hidden;white-space:nowrap"> </span></span></span><span
                                                                style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"></span></span>
                                                </p>
                                        </td>
                                        <td
                                                style="box-sizing:border-box;padding:4px 16px;letter-spacing:0px;font-size:12px;line-height:14px;vertical-align:top;border-color:rgb(232,238,247);border-style:solid;border-width:0.8px">
                                                <p
                                                        style="box-sizing:border-box;margin:8px 0px 0px;letter-spacing:0px;font-size:12px;line-height:14px;min-height:16px">
                                                        <span style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box">matrix
                                                                </span></span><span
                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                        style="box-sizing:border-box"><span
                                                                                aria-hidden="true" role="math"
                                                                                style="box-sizing:border-box"><span
                                                                                        style="box-sizing:border-box"><span
                                                                                                style="box-sizing:border-box;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:1.21em;line-height:1.2;font-family:KaTeX_Main,&quot;Times New Roman&quot;,serif"><span
                                                                                                        style="box-sizing:border-box;padding:0px;border:0px;height:1px;width:1px;overflow:hidden"></span><span
                                                                                                        aria-hidden="true"
                                                                                                        style="box-sizing:border-box"><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:0.68333em;vertical-align:0em"></span><span
                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic">A</span></span></span></span></span></span><span
                                                                                style="box-sizing:border-box;border:0px;width:1px;height:1px;padding:0px;overflow:hidden;white-space:nowrap">A</span></span></span><span
                                                                style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"> has
                                                                </span></span><span
                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                        style="box-sizing:border-box"><span
                                                                                aria-hidden="true" role="math"
                                                                                style="box-sizing:border-box"><span
                                                                                        style="box-sizing:border-box"><span
                                                                                                style="box-sizing:border-box;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:1.21em;line-height:1.2;font-family:KaTeX_Main,&quot;Times New Roman&quot;,serif"><span
                                                                                                        style="box-sizing:border-box;padding:0px;border:0px;height:1px;width:1px;overflow:hidden"></span><span
                                                                                                        aria-hidden="true"
                                                                                                        style="box-sizing:border-box"><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:0.43056em;vertical-align:0em"></span><span
                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic">m</span></span></span></span></span></span><span
                                                                                style="box-sizing:border-box;border:0px;width:1px;height:1px;padding:0px;overflow:hidden;white-space:nowrap">m</span></span></span><span
                                                                style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"> rows and
                                                                </span></span><span
                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                        style="box-sizing:border-box"><span
                                                                                aria-hidden="true" role="math"
                                                                                style="box-sizing:border-box"><span
                                                                                        style="box-sizing:border-box"><span
                                                                                                style="box-sizing:border-box;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:1.21em;line-height:1.2;font-family:KaTeX_Main,&quot;Times New Roman&quot;,serif"><span
                                                                                                        style="box-sizing:border-box;padding:0px;border:0px;height:1px;width:1px;overflow:hidden"></span><span
                                                                                                        aria-hidden="true"
                                                                                                        style="box-sizing:border-box"><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:0.43056em;vertical-align:0em"></span><span
                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic">n</span></span></span></span></span></span><span
                                                                                style="box-sizing:border-box;border:0px;width:1px;height:1px;padding:0px;overflow:hidden;white-space:nowrap">n</span></span></span><span
                                                                style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box">
                                                                        columns</span></span>
                                                </p>
                                        </td>
                                </tr>
                                <tr style="box-sizing:border-box">
                                        <td
                                                style="box-sizing:border-box;padding:4px 16px;letter-spacing:0px;font-size:12px;line-height:14px;vertical-align:top;border-color:rgb(232,238,247);border-style:solid;border-width:0.8px">
                                                <p
                                                        style="box-sizing:border-box;margin:8px 0px 0px;letter-spacing:0px;font-size:12px;line-height:14px;min-height:16px">
                                                        <span style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"></span></span><span
                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                        style="box-sizing:border-box"><span
                                                                                aria-hidden="true" role="math"
                                                                                style="box-sizing:border-box"><span
                                                                                        style="box-sizing:border-box"><span
                                                                                                style="box-sizing:border-box;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:1.21em;line-height:1.2;font-family:KaTeX_Main,&quot;Times New Roman&quot;,serif"><span
                                                                                                        style="box-sizing:border-box;padding:0px;border:0px;height:1px;width:1px;overflow:hidden"></span><span
                                                                                                        aria-hidden="true"
                                                                                                        style="box-sizing:border-box"><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:0.841331em;vertical-align:0em"></span><span
                                                                                                                        style="box-sizing:border-box"><span
                                                                                                                                style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic">A</span><span
                                                                                                                                style="box-sizing:border-box"><span
                                                                                                                                        style="box-sizing:border-box;display:inline-table;table-layout:fixed"><span
                                                                                                                                                style="box-sizing:border-box;display:table-row"><span
                                                                                                                                                        style="box-sizing:border-box;display:table-cell;vertical-align:bottom;height:0.841331em"><span
                                                                                                                                                                style="box-sizing:border-box;display:block;height:0px;margin-right:0.05em"><span
                                                                                                                                                                        style="box-sizing:border-box;display:inline-block;overflow:hidden;width:0px;height:2.7em"></span><span
                                                                                                                                                                        style="box-sizing:border-box;display:inline-block;font-size:0.7em"><span
                                                                                                                                                                                style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic;margin-right:0.13889em">T</span></span></span></span></span></span></span></span></span></span></span></span></span><span
                                                                                style="box-sizing:border-box;border:0px;width:1px;height:1px;padding:0px;overflow:hidden;white-space:nowrap">A,
                                                                                start superscript, T, end
                                                                                superscript</span></span></span><span
                                                                style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"></span></span>
                                                </p>
                                        </td>
                                        <td
                                                style="box-sizing:border-box;padding:4px 16px;letter-spacing:0px;font-size:12px;line-height:14px;vertical-align:top;border-color:rgb(232,238,247);border-style:solid;border-width:0.8px">
                                                <p
                                                        style="box-sizing:border-box;margin:8px 0px 0px;letter-spacing:0px;font-size:12px;line-height:14px;min-height:16px">
                                                        <span style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box">the transpose of
                                                                        matrix </span></span><span
                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                        style="box-sizing:border-box"><span
                                                                                aria-hidden="true" role="math"
                                                                                style="box-sizing:border-box"><span
                                                                                        style="box-sizing:border-box"><span
                                                                                                style="box-sizing:border-box;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:1.21em;line-height:1.2;font-family:KaTeX_Main,&quot;Times New Roman&quot;,serif"><span
                                                                                                        style="box-sizing:border-box;padding:0px;border:0px;height:1px;width:1px;overflow:hidden"></span><span
                                                                                                        aria-hidden="true"
                                                                                                        style="box-sizing:border-box"><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:0.68333em;vertical-align:0em"></span><span
                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic">A</span></span></span></span></span></span><span
                                                                                style="box-sizing:border-box;border:0px;width:1px;height:1px;padding:0px;overflow:hidden;white-space:nowrap">A</span></span></span><span
                                                                style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"></span></span>
                                                </p>
                                        </td>
                                </tr>
                                <tr style="box-sizing:border-box">
                                        <td
                                                style="box-sizing:border-box;padding:4px 16px;letter-spacing:0px;font-size:12px;line-height:14px;vertical-align:top;border-color:rgb(232,238,247);border-style:solid;border-width:0.8px">
                                                <p
                                                        style="box-sizing:border-box;margin:8px 0px 0px;letter-spacing:0px;font-size:12px;line-height:14px;min-height:16px">
                                                        <span style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"></span></span><span
                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                        style="box-sizing:border-box"><span
                                                                                aria-hidden="true" role="math"
                                                                                style="box-sizing:border-box"><span
                                                                                        style="box-sizing:border-box"><span
                                                                                                style="box-sizing:border-box;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:1.21em;line-height:1.2;font-family:KaTeX_Main,&quot;Times New Roman&quot;,serif"><span
                                                                                                        style="box-sizing:border-box;padding:0px;border:0px;height:1px;width:1px;overflow:hidden"></span><span
                                                                                                        aria-hidden="true"
                                                                                                        style="box-sizing:border-box"><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:0.841331em;vertical-align:0em"></span><span
                                                                                                                        style="box-sizing:border-box"><span
                                                                                                                                style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic;margin-right:0.03588em">v</span><span
                                                                                                                                style="box-sizing:border-box"><span
                                                                                                                                        style="box-sizing:border-box;display:inline-table;table-layout:fixed"><span
                                                                                                                                                style="box-sizing:border-box;display:table-row"><span
                                                                                                                                                        style="box-sizing:border-box;display:table-cell;vertical-align:bottom;height:0.841331em"><span
                                                                                                                                                                style="box-sizing:border-box;display:block;height:0px;margin-right:0.05em"><span
                                                                                                                                                                        style="box-sizing:border-box;display:inline-block;overflow:hidden;width:0px;height:2.7em"></span><span
                                                                                                                                                                        style="box-sizing:border-box;display:inline-block;font-size:0.7em"><span
                                                                                                                                                                                style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic;margin-right:0.13889em">T</span></span></span></span></span></span></span></span></span></span></span></span></span><span
                                                                                style="box-sizing:border-box;border:0px;width:1px;height:1px;padding:0px;overflow:hidden;white-space:nowrap">v,
                                                                                start superscript, T, end
                                                                                superscript</span></span></span><span
                                                                style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"></span></span>
                                                </p>
                                        </td>
                                        <td
                                                style="box-sizing:border-box;padding:4px 16px;letter-spacing:0px;font-size:12px;line-height:14px;vertical-align:top;border-color:rgb(232,238,247);border-style:solid;border-width:0.8px">
                                                <p
                                                        style="box-sizing:border-box;margin:8px 0px 0px;letter-spacing:0px;font-size:12px;line-height:14px;min-height:16px">
                                                        <span style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box">the transpose of
                                                                        vector </span></span><span
                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                        style="box-sizing:border-box"><span
                                                                                aria-hidden="true" role="math"
                                                                                style="box-sizing:border-box"><span
                                                                                        style="box-sizing:border-box"><span
                                                                                                style="box-sizing:border-box;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:1.21em;line-height:1.2;font-family:KaTeX_Main,&quot;Times New Roman&quot;,serif"><span
                                                                                                        style="box-sizing:border-box;padding:0px;border:0px;height:1px;width:1px;overflow:hidden"></span><span
                                                                                                        aria-hidden="true"
                                                                                                        style="box-sizing:border-box"><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:0.43056em;vertical-align:0em"></span><span
                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic;margin-right:0.03588em">v</span></span></span></span></span></span><span
                                                                                style="box-sizing:border-box;border:0px;width:1px;height:1px;padding:0px;overflow:hidden;white-space:nowrap">v</span></span></span><span
                                                                style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"></span></span>
                                                </p>
                                        </td>
                                </tr>
                                <tr style="box-sizing:border-box">
                                        <td
                                                style="box-sizing:border-box;padding:4px 16px;letter-spacing:0px;font-size:12px;line-height:14px;vertical-align:top;border-color:rgb(232,238,247);border-style:solid;border-width:0.8px">
                                                <p
                                                        style="box-sizing:border-box;margin:8px 0px 0px;letter-spacing:0px;font-size:12px;line-height:14px;min-height:16px">
                                                        <span style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"></span></span><span
                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                        style="box-sizing:border-box"><span
                                                                                aria-hidden="true" role="math"
                                                                                style="box-sizing:border-box"><span
                                                                                        style="box-sizing:border-box"><span
                                                                                                style="box-sizing:border-box;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:1.21em;line-height:1.2;font-family:KaTeX_Main,&quot;Times New Roman&quot;,serif"><span
                                                                                                        style="box-sizing:border-box;padding:0px;border:0px;height:1px;width:1px;overflow:hidden"></span><span
                                                                                                        aria-hidden="true"
                                                                                                        style="box-sizing:border-box"><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:0.814108em;vertical-align:0em"></span><span
                                                                                                                        style="box-sizing:border-box"><span
                                                                                                                                style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic">A</span><span
                                                                                                                                style="box-sizing:border-box"><span
                                                                                                                                        style="box-sizing:border-box;display:inline-table;table-layout:fixed"><span
                                                                                                                                                style="box-sizing:border-box;display:table-row"><span
                                                                                                                                                        style="box-sizing:border-box;display:table-cell;vertical-align:bottom;height:0.814108em"><span
                                                                                                                                                                style="box-sizing:border-box;display:block;height:0px;margin-right:0.05em"><span
                                                                                                                                                                        style="box-sizing:border-box;display:inline-block;overflow:hidden;width:0px;height:2.7em"></span><span
                                                                                                                                                                        style="box-sizing:border-box;display:inline-block;font-size:0.7em"><span
                                                                                                                                                                                style="box-sizing:border-box"><span
                                                                                                                                                                                        style="box-sizing:border-box">−</span><span
                                                                                                                                                                                        style="box-sizing:border-box">1</span></span></span></span></span></span></span></span></span></span></span></span></span></span><span
                                                                                style="box-sizing:border-box;border:0px;width:1px;height:1px;padding:0px;overflow:hidden;white-space:nowrap">A,
                                                                                start superscript, minus, 1, end
                                                                                superscript</span></span></span><span
                                                                style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"></span></span>
                                                </p>
                                        </td>
                                        <td
                                                style="box-sizing:border-box;padding:4px 16px;letter-spacing:0px;font-size:12px;line-height:14px;vertical-align:top;border-color:rgb(232,238,247);border-style:solid;border-width:0.8px">
                                                <p
                                                        style="box-sizing:border-box;margin:8px 0px 0px;letter-spacing:0px;font-size:12px;line-height:14px;min-height:16px">
                                                        <span style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box">the inverse of
                                                                        matrix </span></span><span
                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                        style="box-sizing:border-box"><span
                                                                                aria-hidden="true" role="math"
                                                                                style="box-sizing:border-box"><span
                                                                                        style="box-sizing:border-box"><span
                                                                                                style="box-sizing:border-box;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:1.21em;line-height:1.2;font-family:KaTeX_Main,&quot;Times New Roman&quot;,serif"><span
                                                                                                        style="box-sizing:border-box;padding:0px;border:0px;height:1px;width:1px;overflow:hidden"></span><span
                                                                                                        aria-hidden="true"
                                                                                                        style="box-sizing:border-box"><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:0.68333em;vertical-align:0em"></span><span
                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic">A</span></span></span></span></span></span><span
                                                                                style="box-sizing:border-box;border:0px;width:1px;height:1px;padding:0px;overflow:hidden;white-space:nowrap">A</span></span></span><span
                                                                style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"></span></span>
                                                </p>
                                        </td>
                                </tr>
                                <tr style="box-sizing:border-box">
                                        <td
                                                style="box-sizing:border-box;padding:4px 16px;letter-spacing:0px;font-size:12px;line-height:14px;vertical-align:top;border-color:rgb(232,238,247);border-style:solid;border-width:0.8px">
                                                <p
                                                        style="box-sizing:border-box;margin:8px 0px 0px;letter-spacing:0px;font-size:12px;line-height:14px;min-height:16px">
                                                        <span style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"></span></span><span
                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                        style="box-sizing:border-box"><span
                                                                                aria-hidden="true" role="math"
                                                                                style="box-sizing:border-box"><span
                                                                                        style="box-sizing:border-box"><span
                                                                                                style="box-sizing:border-box;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:1.21em;line-height:1.2;font-family:KaTeX_Main,&quot;Times New Roman&quot;,serif"><span
                                                                                                        style="box-sizing:border-box;padding:0px;border:0px;height:1px;width:1px;overflow:hidden"></span><span
                                                                                                        aria-hidden="true"
                                                                                                        style="box-sizing:border-box"><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:1em;vertical-align:-0.25em"></span><span
                                                                                                                        style="box-sizing:border-box">det</span><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;margin-right:0.166667em"></span><span
                                                                                                                        style="box-sizing:border-box"><span
                                                                                                                                style="box-sizing:border-box">(</span><span
                                                                                                                                style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic">A</span><span
                                                                                                                                style="box-sizing:border-box">)</span></span></span></span></span></span></span><span
                                                                                style="box-sizing:border-box;border:0px;width:1px;height:1px;padding:0px;overflow:hidden;white-space:nowrap">\det,
                                                                                left parenthesis, A, right
                                                                                parenthesis</span></span></span><span
                                                                style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"></span></span>
                                                </p>
                                        </td>
                                        <td
                                                style="box-sizing:border-box;padding:4px 16px;letter-spacing:0px;font-size:12px;line-height:14px;vertical-align:top;border-color:rgb(232,238,247);border-style:solid;border-width:0.8px">
                                                <p
                                                        style="box-sizing:border-box;margin:8px 0px 0px;letter-spacing:0px;font-size:12px;line-height:14px;min-height:16px">
                                                        <span style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box">the determinant of
                                                                        matrix A</span></span>
                                                </p>
                                        </td>
                                </tr>
                                <tr style="box-sizing:border-box">
                                        <td
                                                style="box-sizing:border-box;padding:4px 16px;letter-spacing:0px;font-size:12px;line-height:14px;vertical-align:top;border-color:rgb(232,238,247);border-style:solid;border-width:0.8px">
                                                <p
                                                        style="box-sizing:border-box;margin:8px 0px 0px;letter-spacing:0px;font-size:12px;line-height:14px;min-height:16px">
                                                        <span style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"></span></span><span
                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                        style="box-sizing:border-box"><span
                                                                                aria-hidden="true" role="math"
                                                                                style="box-sizing:border-box"><span
                                                                                        style="box-sizing:border-box"><span
                                                                                                style="box-sizing:border-box;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:1.21em;line-height:1.2;font-family:KaTeX_Main,&quot;Times New Roman&quot;,serif"><span
                                                                                                        style="box-sizing:border-box;padding:0px;border:0px;height:1px;width:1px;overflow:hidden"></span><span
                                                                                                        aria-hidden="true"
                                                                                                        style="box-sizing:border-box"><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:0.68333em;vertical-align:0em"></span><span
                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic">A</span><span
                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic;margin-right:0.05017em">B</span></span></span></span></span></span><span
                                                                                style="box-sizing:border-box;border:0px;width:1px;height:1px;padding:0px;overflow:hidden;white-space:nowrap">A,
                                                                                B</span></span></span><span
                                                                style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"></span></span>
                                                </p>
                                        </td>
                                        <td
                                                style="box-sizing:border-box;padding:4px 16px;letter-spacing:0px;font-size:12px;line-height:14px;vertical-align:top;border-color:rgb(232,238,247);border-style:solid;border-width:0.8px">
                                                <p
                                                        style="box-sizing:border-box;margin:8px 0px 0px;letter-spacing:0px;font-size:12px;line-height:14px;min-height:16px">
                                                        <span style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box">matrix
                                                                        multiplication of matrices </span></span><span
                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                        style="box-sizing:border-box"><span
                                                                                aria-hidden="true" role="math"
                                                                                style="box-sizing:border-box"><span
                                                                                        style="box-sizing:border-box"><span
                                                                                                style="box-sizing:border-box;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:1.21em;line-height:1.2;font-family:KaTeX_Main,&quot;Times New Roman&quot;,serif"><span
                                                                                                        style="box-sizing:border-box;padding:0px;border:0px;height:1px;width:1px;overflow:hidden"></span><span
                                                                                                        aria-hidden="true"
                                                                                                        style="box-sizing:border-box"><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:0.68333em;vertical-align:0em"></span><span
                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic">A</span></span></span></span></span></span><span
                                                                                style="box-sizing:border-box;border:0px;width:1px;height:1px;padding:0px;overflow:hidden;white-space:nowrap">A</span></span></span><span
                                                                style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"> and
                                                                </span></span><span
                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                        style="box-sizing:border-box"><span
                                                                                aria-hidden="true" role="math"
                                                                                style="box-sizing:border-box"><span
                                                                                        style="box-sizing:border-box"><span
                                                                                                style="box-sizing:border-box;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:1.21em;line-height:1.2;font-family:KaTeX_Main,&quot;Times New Roman&quot;,serif"><span
                                                                                                        style="box-sizing:border-box;padding:0px;border:0px;height:1px;width:1px;overflow:hidden"></span><span
                                                                                                        aria-hidden="true"
                                                                                                        style="box-sizing:border-box"><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:0.68333em;vertical-align:0em"></span><span
                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic;margin-right:0.05017em">B</span></span></span></span></span></span><span
                                                                                style="box-sizing:border-box;border:0px;width:1px;height:1px;padding:0px;overflow:hidden;white-space:nowrap">B</span></span></span><span
                                                                style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"></span></span>
                                                </p>
                                        </td>
                                </tr>
                                <tr style="box-sizing:border-box">
                                        <td
                                                style="box-sizing:border-box;padding:4px 16px;letter-spacing:0px;font-size:12px;line-height:14px;vertical-align:top;border-color:rgb(232,238,247);border-style:solid;border-width:0.8px">
                                                <p
                                                        style="box-sizing:border-box;margin:8px 0px 0px;letter-spacing:0px;font-size:12px;line-height:14px;min-height:16px">
                                                        <span style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"></span></span><span
                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                        style="box-sizing:border-box"><span
                                                                                aria-hidden="true" role="math"
                                                                                style="box-sizing:border-box"><span
                                                                                        style="box-sizing:border-box"><span
                                                                                                style="box-sizing:border-box;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:1.21em;line-height:1.2;font-family:KaTeX_Main,&quot;Times New Roman&quot;,serif"><span
                                                                                                        style="box-sizing:border-box;padding:0px;border:0px;height:1px;width:1px;overflow:hidden"></span><span
                                                                                                        aria-hidden="true"
                                                                                                        style="box-sizing:border-box"><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:0.44445em;vertical-align:0em"></span><span
                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic">u</span><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;margin-right:0.222222em"></span><span
                                                                                                                        style="box-sizing:border-box">⋅</span><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;margin-right:0.222222em"></span></span><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:1em;vertical-align:-0.25em"></span><span
                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic;margin-right:0.03588em">v</span><span
                                                                                                                        style="box-sizing:border-box">;</span><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;margin-right:0.166667em"></span><span
                                                                                                                        style="box-sizing:border-box"><span
                                                                                                                                style="box-sizing:border-box">⟨</span><span
                                                                                                                                style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic">u</span><span
                                                                                                                                style="box-sizing:border-box">,</span><span
                                                                                                                                style="box-sizing:border-box;display:inline-block;margin-right:0.166667em"></span><span
                                                                                                                                style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic;margin-right:0.03588em">v</span><span
                                                                                                                                style="box-sizing:border-box">⟩</span></span></span></span></span></span></span><span
                                                                                style="box-sizing:border-box;border:0px;width:1px;height:1px;padding:0px;overflow:hidden;white-space:nowrap">u,
                                                                                dot, v, ;, &lt;, u, comma, v,
                                                                                &gt;</span></span></span><span
                                                                style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"></span></span>
                                                </p>
                                        </td>
                                        <td
                                                style="box-sizing:border-box;padding:4px 16px;letter-spacing:0px;font-size:12px;line-height:14px;vertical-align:top;border-color:rgb(232,238,247);border-style:solid;border-width:0.8px">
                                                <p
                                                        style="box-sizing:border-box;margin:8px 0px 0px;letter-spacing:0px;font-size:12px;line-height:14px;min-height:16px">
                                                        <span style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box">dot product of
                                                                        vectors </span></span><span
                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                        style="box-sizing:border-box"><span
                                                                                aria-hidden="true" role="math"
                                                                                style="box-sizing:border-box"><span
                                                                                        style="box-sizing:border-box"><span
                                                                                                style="box-sizing:border-box;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:1.21em;line-height:1.2;font-family:KaTeX_Main,&quot;Times New Roman&quot;,serif"><span
                                                                                                        style="box-sizing:border-box;padding:0px;border:0px;height:1px;width:1px;overflow:hidden"></span><span
                                                                                                        aria-hidden="true"
                                                                                                        style="box-sizing:border-box"><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:0.43056em;vertical-align:0em"></span><span
                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic">u</span></span></span></span></span></span><span
                                                                                style="box-sizing:border-box;border:0px;width:1px;height:1px;padding:0px;overflow:hidden;white-space:nowrap">u</span></span></span><span
                                                                style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"> and
                                                                </span></span><span
                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                        style="box-sizing:border-box"><span
                                                                                aria-hidden="true" role="math"
                                                                                style="box-sizing:border-box"><span
                                                                                        style="box-sizing:border-box"><span
                                                                                                style="box-sizing:border-box;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:1.21em;line-height:1.2;font-family:KaTeX_Main,&quot;Times New Roman&quot;,serif"><span
                                                                                                        style="box-sizing:border-box;padding:0px;border:0px;height:1px;width:1px;overflow:hidden"></span><span
                                                                                                        aria-hidden="true"
                                                                                                        style="box-sizing:border-box"><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:0.43056em;vertical-align:0em"></span><span
                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic;margin-right:0.03588em">v</span></span></span></span></span></span><span
                                                                                style="box-sizing:border-box;border:0px;width:1px;height:1px;padding:0px;overflow:hidden;white-space:nowrap">v</span></span></span><span
                                                                style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"></span></span>
                                                </p>
                                        </td>
                                </tr>
                                <tr style="box-sizing:border-box">
                                        <td
                                                style="box-sizing:border-box;padding:4px 16px;letter-spacing:0px;font-size:12px;line-height:14px;vertical-align:top;border-color:rgb(232,238,247);border-style:solid;border-width:0.8px">
                                                <p
                                                        style="box-sizing:border-box;margin:8px 0px 0px;letter-spacing:0px;font-size:12px;line-height:14px;min-height:16px">
                                                        <span style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"></span></span><span
                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                        style="box-sizing:border-box"><span
                                                                                aria-hidden="true" role="math"
                                                                                style="box-sizing:border-box"><span
                                                                                        style="box-sizing:border-box"><span
                                                                                                style="box-sizing:border-box;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:1.21em;line-height:1.2;font-family:KaTeX_Main,&quot;Times New Roman&quot;,serif"><span
                                                                                                        style="box-sizing:border-box;padding:0px;border:0px;height:1px;width:1px;overflow:hidden"></span><span
                                                                                                        aria-hidden="true"
                                                                                                        style="box-sizing:border-box"><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:0.68889em;vertical-align:0em"></span><span
                                                                                                                        style="box-sizing:border-box"><span
                                                                                                                                style="box-sizing:border-box;font-family:KaTeX_AMS">R</span></span></span></span></span></span></span><span
                                                                                style="box-sizing:border-box;border:0px;width:1px;height:1px;padding:0px;overflow:hidden;white-space:nowrap">R</span></span></span><span
                                                                style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"></span></span>
                                                </p>
                                        </td>
                                        <td
                                                style="box-sizing:border-box;padding:4px 16px;letter-spacing:0px;font-size:12px;line-height:14px;vertical-align:top;border-color:rgb(232,238,247);border-style:solid;border-width:0.8px">
                                                <p
                                                        style="box-sizing:border-box;margin:8px 0px 0px;letter-spacing:0px;font-size:12px;line-height:14px;min-height:16px">
                                                        <span style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box">the set of real
                                                                        numbers, e.g. </span></span><span
                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                        style="box-sizing:border-box"><span
                                                                                aria-hidden="true" role="math"
                                                                                style="box-sizing:border-box"><span
                                                                                        style="box-sizing:border-box"><span
                                                                                                style="box-sizing:border-box;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:1.21em;line-height:1.2;font-family:KaTeX_Main,&quot;Times New Roman&quot;,serif"><span
                                                                                                        style="box-sizing:border-box;padding:0px;border:0px;height:1px;width:1px;overflow:hidden"></span><span
                                                                                                        aria-hidden="true"
                                                                                                        style="box-sizing:border-box"><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:0.83888em;vertical-align:-0.19444em"></span><span
                                                                                                                        style="box-sizing:border-box">0</span><span
                                                                                                                        style="box-sizing:border-box">,</span><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;margin-right:0.166667em"></span><span
                                                                                                                        style="box-sizing:border-box">−</span><span
                                                                                                                        style="box-sizing:border-box">0</span><span
                                                                                                                        style="box-sizing:border-box">.</span><span
                                                                                                                        style="box-sizing:border-box">6</span><span
                                                                                                                        style="box-sizing:border-box">4</span><span
                                                                                                                        style="box-sizing:border-box">2</span><span
                                                                                                                        style="box-sizing:border-box">,</span><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;margin-right:0.166667em"></span><span
                                                                                                                        style="box-sizing:border-box">2</span><span
                                                                                                                        style="box-sizing:border-box">,</span><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;margin-right:0.166667em"></span><span
                                                                                                                        style="box-sizing:border-box">3</span><span
                                                                                                                        style="box-sizing:border-box">.</span><span
                                                                                                                        style="box-sizing:border-box">4</span><span
                                                                                                                        style="box-sizing:border-box">5</span><span
                                                                                                                        style="box-sizing:border-box">6</span></span></span></span></span></span><span
                                                                                style="box-sizing:border-box;border:0px;width:1px;height:1px;padding:0px;overflow:hidden;white-space:nowrap">0,
                                                                                comma, minus, 0, point, 642, comma, 2,
                                                                                comma, 3, point,
                                                                                456</span></span></span><span
                                                                style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"></span></span>
                                                </p>
                                        </td>
                                </tr>
                                <tr style="box-sizing:border-box">
                                        <td
                                                style="box-sizing:border-box;padding:4px 16px;letter-spacing:0px;font-size:12px;line-height:14px;vertical-align:top;border-color:rgb(232,238,247);border-style:solid;border-width:0.8px">
                                                <p
                                                        style="box-sizing:border-box;margin:8px 0px 0px;letter-spacing:0px;font-size:12px;line-height:14px;min-height:16px">
                                                        <span style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"></span></span><span
                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                        style="box-sizing:border-box"><span
                                                                                aria-hidden="true" role="math"
                                                                                style="box-sizing:border-box"><span
                                                                                        style="box-sizing:border-box"><span
                                                                                                style="box-sizing:border-box;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:1.21em;line-height:1.2;font-family:KaTeX_Main,&quot;Times New Roman&quot;,serif"><span
                                                                                                        style="box-sizing:border-box;padding:0px;border:0px;height:1px;width:1px;overflow:hidden"></span><span
                                                                                                        aria-hidden="true"
                                                                                                        style="box-sizing:border-box"><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:0.814108em;vertical-align:0em"></span><span
                                                                                                                        style="box-sizing:border-box"><span
                                                                                                                                style="box-sizing:border-box"><span
                                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_AMS">R</span></span><span
                                                                                                                                style="box-sizing:border-box"><span
                                                                                                                                        style="box-sizing:border-box;display:inline-table;table-layout:fixed"><span
                                                                                                                                                style="box-sizing:border-box;display:table-row"><span
                                                                                                                                                        style="box-sizing:border-box;display:table-cell;vertical-align:bottom;height:0.814108em"><span
                                                                                                                                                                style="box-sizing:border-box;display:block;height:0px;margin-right:0.05em"><span
                                                                                                                                                                        style="box-sizing:border-box;display:inline-block;overflow:hidden;width:0px;height:2.7em"></span><span
                                                                                                                                                                        style="box-sizing:border-box;display:inline-block;font-size:0.7em"><span
                                                                                                                                                                                style="box-sizing:border-box">2</span></span></span></span></span></span></span></span></span></span></span></span></span><span
                                                                                style="box-sizing:border-box;border:0px;width:1px;height:1px;padding:0px;overflow:hidden;white-space:nowrap">R,
                                                                                squared</span></span></span><span
                                                                style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"></span></span>
                                                </p>
                                        </td>
                                        <td
                                                style="box-sizing:border-box;padding:4px 16px;letter-spacing:0px;font-size:12px;line-height:14px;vertical-align:top;border-color:rgb(232,238,247);border-style:solid;border-width:0.8px">
                                                <p
                                                        style="box-sizing:border-box;margin:8px 0px 0px;letter-spacing:0px;font-size:12px;line-height:14px;min-height:16px">
                                                        <span style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box">the set of
                                                                        two-dimensional vectors, e.g.
                                                                </span></span><span
                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                        style="box-sizing:border-box"><span
                                                                                aria-hidden="true" role="math"
                                                                                style="box-sizing:border-box"><span
                                                                                        style="box-sizing:border-box"><span
                                                                                                style="box-sizing:border-box;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:1.21em;line-height:1.2;font-family:KaTeX_Main,&quot;Times New Roman&quot;,serif"><span
                                                                                                        style="box-sizing:border-box;padding:0px;border:0px;height:1px;width:1px;overflow:hidden"></span><span
                                                                                                        aria-hidden="true"
                                                                                                        style="box-sizing:border-box"><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:0.43056em;vertical-align:0em"></span><span
                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic;margin-right:0.03588em">v</span><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;margin-right:0.277778em"></span><span
                                                                                                                        style="box-sizing:border-box">=</span><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;margin-right:0.277778em"></span></span><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:1.43124em;vertical-align:-0.35001em"></span><span
                                                                                                                        style="box-sizing:border-box"><span
                                                                                                                                style="box-sizing:border-box"><span
                                                                                                                                        style="box-sizing:border-box"><span
                                                                                                                                                style="box-sizing:border-box;font-family:KaTeX_Size1">[</span></span><span
                                                                                                                                        style="box-sizing:border-box"><span
                                                                                                                                                style="box-sizing:border-box"><span
                                                                                                                                                        style="box-sizing:border-box"><span
                                                                                                                                                                style="box-sizing:border-box;display:inline-table;table-layout:fixed;text-align:center"><span
                                                                                                                                                                        style="box-sizing:border-box;display:table-row"><span
                                                                                                                                                                                style="box-sizing:border-box;display:table-cell;vertical-align:bottom;height:0.85em"><span
                                                                                                                                                                                        style="box-sizing:border-box;display:block;height:0px"><span
                                                                                                                                                                                                style="box-sizing:border-box;display:inline-block;overflow:hidden;width:0px;height:3em"></span><span
                                                                                                                                                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                                                                                                                                                        style="box-sizing:border-box">1</span></span></span></span><span
                                                                                                                                                                                style="box-sizing:border-box;display:table-cell;vertical-align:bottom;font-size:1px;width:2px;min-width:2px"></span></span><span
                                                                                                                                                                        style="box-sizing:border-box;display:table-row"><span
                                                                                                                                                                                style="box-sizing:border-box;display:table-cell;vertical-align:bottom;height:0.35em"><span
                                                                                                                                                                                        style="box-sizing:border-box;display:block;height:0px"></span></span></span></span></span><span
                                                                                                                                                        style="box-sizing:border-box;display:inline-block;width:0.5em"></span><span
                                                                                                                                                        style="box-sizing:border-box;display:inline-block;width:0.5em"></span><span
                                                                                                                                                        style="box-sizing:border-box"><span
                                                                                                                                                                style="box-sizing:border-box;display:inline-table;table-layout:fixed;text-align:center"><span
                                                                                                                                                                        style="box-sizing:border-box;display:table-row"><span
                                                                                                                                                                                style="box-sizing:border-box;display:table-cell;vertical-align:bottom;height:0.85em"><span
                                                                                                                                                                                        style="box-sizing:border-box;display:block;height:0px"><span
                                                                                                                                                                                                style="box-sizing:border-box;display:inline-block;overflow:hidden;width:0px;height:3em"></span><span
                                                                                                                                                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                                                                                                                                                        style="box-sizing:border-box">3</span></span></span></span><span
                                                                                                                                                                                style="box-sizing:border-box;display:table-cell;vertical-align:bottom;font-size:1px;width:2px;min-width:2px"></span></span><span
                                                                                                                                                                        style="box-sizing:border-box;display:table-row"><span
                                                                                                                                                                                style="box-sizing:border-box;display:table-cell;vertical-align:bottom;height:0.35em"><span
                                                                                                                                                                                        style="box-sizing:border-box;display:block;height:0px"></span></span></span></span></span></span></span><span
                                                                                                                                        style="box-sizing:border-box"><span
                                                                                                                                                style="box-sizing:border-box;font-family:KaTeX_Size1">]</span></span></span><span
                                                                                                                                style="box-sizing:border-box"><span
                                                                                                                                        style="box-sizing:border-box;display:inline-table;table-layout:fixed"><span
                                                                                                                                                style="box-sizing:border-box;display:table-row"><span
                                                                                                                                                        style="box-sizing:border-box;display:table-cell;vertical-align:bottom;height:1.08123em"><span
                                                                                                                                                                style="box-sizing:border-box;display:block;height:0px;margin-right:0.05em"><span
                                                                                                                                                                        style="box-sizing:border-box;display:inline-block;overflow:hidden;width:0px;height:2.7em"></span><span
                                                                                                                                                                        style="box-sizing:border-box;display:inline-block;font-size:0.7em"><span
                                                                                                                                                                                style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic;margin-right:0.13889em">T</span></span></span></span></span></span></span></span></span></span></span></span></span><span
                                                                                style="box-sizing:border-box;border:0px;width:1px;height:1px;padding:0px;overflow:hidden;white-space:nowrap">v=\begin{bmatrix}1
                                                                                &amp;
                                                                                3\end{bmatrix}^T</span></span></span><span
                                                                style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"></span></span>
                                                </p>
                                        </td>
                                </tr>
                                <tr style="box-sizing:border-box">
                                        <td
                                                style="box-sizing:border-box;padding:4px 16px;letter-spacing:0px;font-size:12px;line-height:14px;vertical-align:top;border-color:rgb(232,238,247);border-style:solid;border-width:0.8px">
                                                <p
                                                        style="box-sizing:border-box;margin:8px 0px 0px;letter-spacing:0px;font-size:12px;line-height:14px;min-height:16px">
                                                        <span style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"></span></span><span
                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                        style="box-sizing:border-box"><span
                                                                                aria-hidden="true" role="math"
                                                                                style="box-sizing:border-box"><span
                                                                                        style="box-sizing:border-box"><span
                                                                                                style="box-sizing:border-box;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:1.21em;line-height:1.2;font-family:KaTeX_Main,&quot;Times New Roman&quot;,serif"><span
                                                                                                        style="box-sizing:border-box;padding:0px;border:0px;height:1px;width:1px;overflow:hidden"></span><span
                                                                                                        aria-hidden="true"
                                                                                                        style="box-sizing:border-box"><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:0.68889em;vertical-align:0em"></span><span
                                                                                                                        style="box-sizing:border-box"><span
                                                                                                                                style="box-sizing:border-box"><span
                                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_AMS">R</span></span><span
                                                                                                                                style="box-sizing:border-box"><span
                                                                                                                                        style="box-sizing:border-box;display:inline-table;table-layout:fixed"><span
                                                                                                                                                style="box-sizing:border-box;display:table-row"><span
                                                                                                                                                        style="box-sizing:border-box;display:table-cell;vertical-align:bottom;height:0.664392em"><span
                                                                                                                                                                style="box-sizing:border-box;display:block;height:0px;margin-right:0.05em"><span
                                                                                                                                                                        style="box-sizing:border-box;display:inline-block;overflow:hidden;width:0px;height:2.7em"></span><span
                                                                                                                                                                        style="box-sizing:border-box;display:inline-block;font-size:0.7em"><span
                                                                                                                                                                                style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic">n</span></span></span></span></span></span></span></span></span></span></span></span></span><span
                                                                                style="box-sizing:border-box;border:0px;width:1px;height:1px;padding:0px;overflow:hidden;white-space:nowrap">R,
                                                                                start superscript, n, end
                                                                                superscript</span></span></span><span
                                                                style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"></span></span>
                                                </p>
                                        </td>
                                        <td
                                                style="box-sizing:border-box;padding:4px 16px;letter-spacing:0px;font-size:12px;line-height:14px;vertical-align:top;border-color:rgb(232,238,247);border-style:solid;border-width:0.8px">
                                                <p
                                                        style="box-sizing:border-box;margin:8px 0px 0px;letter-spacing:0px;font-size:12px;line-height:14px;min-height:16px">
                                                        <span style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box">the set of
                                                                </span></span><span
                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                        style="box-sizing:border-box"><span
                                                                                aria-hidden="true" role="math"
                                                                                style="box-sizing:border-box"><span
                                                                                        style="box-sizing:border-box"><span
                                                                                                style="box-sizing:border-box;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:1.21em;line-height:1.2;font-family:KaTeX_Main,&quot;Times New Roman&quot;,serif"><span
                                                                                                        style="box-sizing:border-box;padding:0px;border:0px;height:1px;width:1px;overflow:hidden"></span><span
                                                                                                        aria-hidden="true"
                                                                                                        style="box-sizing:border-box"><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:0.43056em;vertical-align:0em"></span><span
                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic">n</span></span></span></span></span></span><span
                                                                                style="box-sizing:border-box;border:0px;width:1px;height:1px;padding:0px;overflow:hidden;white-space:nowrap">n</span></span></span><span
                                                                style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box">-dimensional
                                                                        vectors</span></span>
                                                </p>
                                        </td>
                                </tr>
                                <tr style="box-sizing:border-box">
                                        <td
                                                style="box-sizing:border-box;padding:4px 16px;letter-spacing:0px;font-size:12px;line-height:14px;vertical-align:top;border-color:rgb(232,238,247);border-style:solid;border-width:0.8px">
                                                <p
                                                        style="box-sizing:border-box;margin:8px 0px 0px;letter-spacing:0px;font-size:12px;line-height:14px;min-height:16px">
                                                        <span style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"></span></span><span
                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                        style="box-sizing:border-box"><span
                                                                                aria-hidden="true" role="math"
                                                                                style="box-sizing:border-box"><span
                                                                                        style="box-sizing:border-box"><span
                                                                                                style="box-sizing:border-box;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:1.21em;line-height:1.2;font-family:KaTeX_Main,&quot;Times New Roman&quot;,serif"><span
                                                                                                        style="box-sizing:border-box;padding:0px;border:0px;height:1px;width:1px;overflow:hidden"></span><span
                                                                                                        aria-hidden="true"
                                                                                                        style="box-sizing:border-box"><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:0.5782em;vertical-align:-0.0391em"></span><span
                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic;margin-right:0.03588em">v</span><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;margin-right:0.277778em"></span><span
                                                                                                                        style="box-sizing:border-box">∈</span><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;margin-right:0.277778em"></span></span><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:0.814108em;vertical-align:0em"></span><span
                                                                                                                        style="box-sizing:border-box"><span
                                                                                                                                style="box-sizing:border-box"><span
                                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_AMS">R</span></span><span
                                                                                                                                style="box-sizing:border-box"><span
                                                                                                                                        style="box-sizing:border-box;display:inline-table;table-layout:fixed"><span
                                                                                                                                                style="box-sizing:border-box;display:table-row"><span
                                                                                                                                                        style="box-sizing:border-box;display:table-cell;vertical-align:bottom;height:0.814108em"><span
                                                                                                                                                                style="box-sizing:border-box;display:block;height:0px;margin-right:0.05em"><span
                                                                                                                                                                        style="box-sizing:border-box;display:inline-block;overflow:hidden;width:0px;height:2.7em"></span><span
                                                                                                                                                                        style="box-sizing:border-box;display:inline-block;font-size:0.7em"><span
                                                                                                                                                                                style="box-sizing:border-box">2</span></span></span></span></span></span></span></span></span></span></span></span></span><span
                                                                                style="box-sizing:border-box;border:0px;width:1px;height:1px;padding:0px;overflow:hidden;white-space:nowrap">v,
                                                                                \in, R,
                                                                                squared</span></span></span><span
                                                                style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"></span></span>
                                                </p>
                                        </td>
                                        <td
                                                style="box-sizing:border-box;padding:4px 16px;letter-spacing:0px;font-size:12px;line-height:14px;vertical-align:top;border-color:rgb(232,238,247);border-style:solid;border-width:0.8px">
                                                <p
                                                        style="box-sizing:border-box;margin:8px 0px 0px;letter-spacing:0px;font-size:12px;line-height:14px;min-height:16px">
                                                        <span style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box">vector
                                                                </span></span><span
                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                        style="box-sizing:border-box"><span
                                                                                aria-hidden="true" role="math"
                                                                                style="box-sizing:border-box"><span
                                                                                        style="box-sizing:border-box"><span
                                                                                                style="box-sizing:border-box;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:1.21em;line-height:1.2;font-family:KaTeX_Main,&quot;Times New Roman&quot;,serif"><span
                                                                                                        style="box-sizing:border-box;padding:0px;border:0px;height:1px;width:1px;overflow:hidden"></span><span
                                                                                                        aria-hidden="true"
                                                                                                        style="box-sizing:border-box"><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:0.43056em;vertical-align:0em"></span><span
                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic;margin-right:0.03588em">v</span></span></span></span></span></span><span
                                                                                style="box-sizing:border-box;border:0px;width:1px;height:1px;padding:0px;overflow:hidden;white-space:nowrap">v</span></span></span><span
                                                                style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"> is an element of
                                                                </span></span><span
                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                        style="box-sizing:border-box"><span
                                                                                aria-hidden="true" role="math"
                                                                                style="box-sizing:border-box"><span
                                                                                        style="box-sizing:border-box"><span
                                                                                                style="box-sizing:border-box;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:1.21em;line-height:1.2;font-family:KaTeX_Main,&quot;Times New Roman&quot;,serif"><span
                                                                                                        style="box-sizing:border-box;padding:0px;border:0px;height:1px;width:1px;overflow:hidden"></span><span
                                                                                                        aria-hidden="true"
                                                                                                        style="box-sizing:border-box"><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:0.814108em;vertical-align:0em"></span><span
                                                                                                                        style="box-sizing:border-box"><span
                                                                                                                                style="box-sizing:border-box"><span
                                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_AMS">R</span></span><span
                                                                                                                                style="box-sizing:border-box"><span
                                                                                                                                        style="box-sizing:border-box;display:inline-table;table-layout:fixed"><span
                                                                                                                                                style="box-sizing:border-box;display:table-row"><span
                                                                                                                                                        style="box-sizing:border-box;display:table-cell;vertical-align:bottom;height:0.814108em"><span
                                                                                                                                                                style="box-sizing:border-box;display:block;height:0px;margin-right:0.05em"><span
                                                                                                                                                                        style="box-sizing:border-box;display:inline-block;overflow:hidden;width:0px;height:2.7em"></span><span
                                                                                                                                                                        style="box-sizing:border-box;display:inline-block;font-size:0.7em"><span
                                                                                                                                                                                style="box-sizing:border-box">2</span></span></span></span></span></span></span></span></span></span></span></span></span><span
                                                                                style="box-sizing:border-box;border:0px;width:1px;height:1px;padding:0px;overflow:hidden;white-space:nowrap">R,
                                                                                squared</span></span></span><span
                                                                style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"></span></span>
                                                </p>
                                        </td>
                                </tr>
                                <tr style="box-sizing:border-box">
                                        <td
                                                style="box-sizing:border-box;padding:4px 16px;letter-spacing:0px;font-size:12px;line-height:14px;vertical-align:top;border-color:rgb(232,238,247);border-style:solid;border-width:0.8px">
                                                <p
                                                        style="box-sizing:border-box;margin:8px 0px 0px;letter-spacing:0px;font-size:12px;line-height:14px;min-height:16px">
                                                        <span style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"></span></span><span
                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                        style="box-sizing:border-box"><span
                                                                                aria-hidden="true" role="math"
                                                                                style="box-sizing:border-box"><span
                                                                                        style="box-sizing:border-box"><span
                                                                                                style="box-sizing:border-box;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:1.21em;line-height:1.2;font-family:KaTeX_Main,&quot;Times New Roman&quot;,serif"><span
                                                                                                        style="box-sizing:border-box;padding:0px;border:0px;height:1px;width:1px;overflow:hidden"></span><span
                                                                                                        aria-hidden="true"
                                                                                                        style="box-sizing:border-box"><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:1.0497em;vertical-align:-0.2997em"></span><span
                                                                                                                        style="box-sizing:border-box"><span
                                                                                                                                style="box-sizing:border-box"><span
                                                                                                                                        style="box-sizing:border-box">∣</span><span
                                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic;margin-right:0.03588em">v</span><span
                                                                                                                                        style="box-sizing:border-box">∣</span></span><span
                                                                                                                                style="box-sizing:border-box"><span
                                                                                                                                        style="box-sizing:border-box;display:inline-table;table-layout:fixed"><span
                                                                                                                                                style="box-sizing:border-box;display:table-row"><span
                                                                                                                                                        style="box-sizing:border-box;display:table-cell;vertical-align:bottom;height:0.151408em"><span
                                                                                                                                                                style="box-sizing:border-box;display:block;height:0px;margin-right:0.05em"><span
                                                                                                                                                                        style="box-sizing:border-box;display:inline-block;overflow:hidden;width:0px;height:2.7em"></span><span
                                                                                                                                                                        style="box-sizing:border-box;display:inline-block;font-size:0.7em"><span
                                                                                                                                                                                style="box-sizing:border-box">1</span></span></span></span><span
                                                                                                                                                        style="box-sizing:border-box;display:table-cell;vertical-align:bottom;font-size:1px;width:2px;min-width:2px"></span></span><span
                                                                                                                                                style="box-sizing:border-box;display:table-row"><span
                                                                                                                                                        style="box-sizing:border-box;display:table-cell;vertical-align:bottom;height:0.2997em"><span
                                                                                                                                                                style="box-sizing:border-box;display:block;height:0px"></span></span></span></span></span></span></span></span></span></span></span><span
                                                                                style="box-sizing:border-box;border:0px;width:1px;height:1px;padding:0px;overflow:hidden;white-space:nowrap">open
                                                                                vertical bar, v, close vertical bar,
                                                                                start subscript, 1, end
                                                                                subscript</span></span></span><span
                                                                style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"></span></span>
                                                </p>
                                        </td>
                                        <td
                                                style="box-sizing:border-box;padding:4px 16px;letter-spacing:0px;font-size:12px;line-height:14px;vertical-align:top;border-color:rgb(232,238,247);border-style:solid;border-width:0.8px">
                                                <p
                                                        style="box-sizing:border-box;margin:8px 0px 0px;letter-spacing:0px;font-size:12px;line-height:14px;min-height:16px">
                                                        <span style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box">L1-norm of a
                                                                        vector</span></span>
                                                </p>
                                        </td>
                                </tr>
                                <tr style="box-sizing:border-box">
                                        <td
                                                style="box-sizing:border-box;padding:4px 16px;letter-spacing:0px;font-size:12px;line-height:14px;vertical-align:top;border-color:rgb(232,238,247);border-style:solid;border-width:0.8px">
                                                <p
                                                        style="box-sizing:border-box;margin:8px 0px 0px;letter-spacing:0px;font-size:12px;line-height:14px;min-height:16px">
                                                        <span style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"></span></span><span
                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                        style="box-sizing:border-box"><span
                                                                                aria-hidden="true" role="math"
                                                                                style="box-sizing:border-box"><span
                                                                                        style="box-sizing:border-box"><span
                                                                                                style="box-sizing:border-box;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:1.21em;line-height:1.2;font-family:KaTeX_Main,&quot;Times New Roman&quot;,serif"><span
                                                                                                        style="box-sizing:border-box;padding:0px;border:0px;height:1px;width:1px;overflow:hidden"></span><span
                                                                                                        aria-hidden="true"
                                                                                                        style="box-sizing:border-box"><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:1.0497em;vertical-align:-0.2997em"></span><span
                                                                                                                        style="box-sizing:border-box"><span
                                                                                                                                style="box-sizing:border-box"><span
                                                                                                                                        style="box-sizing:border-box">∣</span><span
                                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic;margin-right:0.03588em">v</span><span
                                                                                                                                        style="box-sizing:border-box">∣</span></span><span
                                                                                                                                style="box-sizing:border-box"><span
                                                                                                                                        style="box-sizing:border-box;display:inline-table;table-layout:fixed"><span
                                                                                                                                                style="box-sizing:border-box;display:table-row"><span
                                                                                                                                                        style="box-sizing:border-box;display:table-cell;vertical-align:bottom;height:0.151408em"><span
                                                                                                                                                                style="box-sizing:border-box;display:block;height:0px;margin-right:0.05em"><span
                                                                                                                                                                        style="box-sizing:border-box;display:inline-block;overflow:hidden;width:0px;height:2.7em"></span><span
                                                                                                                                                                        style="box-sizing:border-box;display:inline-block;font-size:0.7em"><span
                                                                                                                                                                                style="box-sizing:border-box">2</span></span></span></span><span
                                                                                                                                                        style="box-sizing:border-box;display:table-cell;vertical-align:bottom;font-size:1px;width:2px;min-width:2px"></span></span><span
                                                                                                                                                style="box-sizing:border-box;display:table-row"><span
                                                                                                                                                        style="box-sizing:border-box;display:table-cell;vertical-align:bottom;height:0.2997em"><span
                                                                                                                                                                style="box-sizing:border-box;display:block;height:0px"></span></span></span></span></span></span></span></span></span></span></span><span
                                                                                style="box-sizing:border-box;border:0px;width:1px;height:1px;padding:0px;overflow:hidden;white-space:nowrap">open
                                                                                vertical bar, v, close vertical bar,
                                                                                start subscript, 2, end
                                                                                subscript</span></span></span><span
                                                                style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box">;
                                                                </span></span><span
                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                        style="box-sizing:border-box"><span
                                                                                aria-hidden="true" role="math"
                                                                                style="box-sizing:border-box"><span
                                                                                        style="box-sizing:border-box"><span
                                                                                                style="box-sizing:border-box;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:1.21em;line-height:1.2;font-family:KaTeX_Main,&quot;Times New Roman&quot;,serif"><span
                                                                                                        style="box-sizing:border-box;padding:0px;border:0px;height:1px;width:1px;overflow:hidden"></span><span
                                                                                                        aria-hidden="true"
                                                                                                        style="box-sizing:border-box"><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:1em;vertical-align:-0.25em"></span><span
                                                                                                                        style="box-sizing:border-box"><span
                                                                                                                                style="box-sizing:border-box">∣</span><span
                                                                                                                                style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic;margin-right:0.03588em">v</span><span
                                                                                                                                style="box-sizing:border-box">∣</span></span></span></span></span></span></span><span
                                                                                style="box-sizing:border-box;border:0px;width:1px;height:1px;padding:0px;overflow:hidden;white-space:nowrap">open
                                                                                vertical bar, v, close vertical
                                                                                bar</span></span></span><span
                                                                style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box">;
                                                                </span></span><span
                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                        style="box-sizing:border-box"><span
                                                                                aria-hidden="true" role="math"
                                                                                style="box-sizing:border-box"><span
                                                                                        style="box-sizing:border-box"><span
                                                                                                style="box-sizing:border-box;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:1.21em;line-height:1.2;font-family:KaTeX_Main,&quot;Times New Roman&quot;,serif"><span
                                                                                                        style="box-sizing:border-box;padding:0px;border:0px;height:1px;width:1px;overflow:hidden"></span><span
                                                                                                        aria-hidden="true"
                                                                                                        style="box-sizing:border-box"><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:1em;vertical-align:-0.25em"></span><span
                                                                                                                        style="box-sizing:border-box">∥</span><span
                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic;margin-right:0.03588em">v</span><span
                                                                                                                        style="box-sizing:border-box">∥</span></span></span></span></span></span><span
                                                                                style="box-sizing:border-box;border:0px;width:1px;height:1px;padding:0px;overflow:hidden;white-space:nowrap">\lVert,
                                                                                v, \rVert</span></span></span><span
                                                                style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"></span></span>
                                                </p>
                                        </td>
                                        <td
                                                style="box-sizing:border-box;padding:4px 16px;letter-spacing:0px;font-size:12px;line-height:14px;vertical-align:top;border-color:rgb(232,238,247);border-style:solid;border-width:0.8px">
                                                <p
                                                        style="box-sizing:border-box;margin:8px 0px 0px;letter-spacing:0px;font-size:12px;line-height:14px;min-height:16px">
                                                        <span style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box">L2-norm of a
                                                                        vector</span></span>
                                                </p>
                                        </td>
                                </tr>
                                <tr style="box-sizing:border-box">
                                        <td
                                                style="box-sizing:border-box;padding:4px 16px;letter-spacing:0px;font-size:12px;line-height:14px;vertical-align:top;border-color:rgb(232,238,247);border-style:solid;border-width:0.8px">
                                                <p
                                                        style="box-sizing:border-box;margin:8px 0px 0px;letter-spacing:0px;font-size:12px;line-height:14px;min-height:16px">
                                                        <span style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"></span></span><span
                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                        style="box-sizing:border-box"><span
                                                                                aria-hidden="true" role="math"
                                                                                style="box-sizing:border-box"><span
                                                                                        style="box-sizing:border-box"><span
                                                                                                style="box-sizing:border-box;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:1.21em;line-height:1.2;font-family:KaTeX_Main,&quot;Times New Roman&quot;,serif"><span
                                                                                                        style="box-sizing:border-box;padding:0px;border:0px;height:1px;width:1px;overflow:hidden"></span><span
                                                                                                        aria-hidden="true"
                                                                                                        style="box-sizing:border-box"><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:0.68333em;vertical-align:0em"></span><span
                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic;margin-right:0.13889em">T</span><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;margin-right:0.277778em"></span><span
                                                                                                                        style="box-sizing:border-box">:</span><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;margin-right:0.277778em"></span></span><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:0.814108em;vertical-align:0em"></span><span
                                                                                                                        style="box-sizing:border-box"><span
                                                                                                                                style="box-sizing:border-box"><span
                                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_AMS">R</span></span><span
                                                                                                                                style="box-sizing:border-box"><span
                                                                                                                                        style="box-sizing:border-box;display:inline-table;table-layout:fixed"><span
                                                                                                                                                style="box-sizing:border-box;display:table-row"><span
                                                                                                                                                        style="box-sizing:border-box;display:table-cell;vertical-align:bottom;height:0.814108em"><span
                                                                                                                                                                style="box-sizing:border-box;display:block;height:0px;margin-right:0.05em"><span
                                                                                                                                                                        style="box-sizing:border-box;display:inline-block;overflow:hidden;width:0px;height:2.7em"></span><span
                                                                                                                                                                        style="box-sizing:border-box;display:inline-block;font-size:0.7em"><span
                                                                                                                                                                                style="box-sizing:border-box">2</span></span></span></span></span></span></span></span><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;margin-right:0.277778em"></span><span
                                                                                                                        style="box-sizing:border-box">→</span><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;margin-right:0.277778em"></span></span><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:0.814108em;vertical-align:0em"></span><span
                                                                                                                        style="box-sizing:border-box"><span
                                                                                                                                style="box-sizing:border-box"><span
                                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_AMS">R</span></span><span
                                                                                                                                style="box-sizing:border-box"><span
                                                                                                                                        style="box-sizing:border-box;display:inline-table;table-layout:fixed"><span
                                                                                                                                                style="box-sizing:border-box;display:table-row"><span
                                                                                                                                                        style="box-sizing:border-box;display:table-cell;vertical-align:bottom;height:0.814108em"><span
                                                                                                                                                                style="box-sizing:border-box;display:block;height:0px;margin-right:0.05em"><span
                                                                                                                                                                        style="box-sizing:border-box;display:inline-block;overflow:hidden;width:0px;height:2.7em"></span><span
                                                                                                                                                                        style="box-sizing:border-box;display:inline-block;font-size:0.7em"><span
                                                                                                                                                                                style="box-sizing:border-box">3</span></span></span></span></span></span></span></span></span></span></span></span></span><span
                                                                                style="box-sizing:border-box;border:0px;width:1px;height:1px;padding:0px;overflow:hidden;white-space:nowrap">T,
                                                                                colon, R, squared, right arrow, R,
                                                                                cubed</span></span></span><span
                                                                style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box">;
                                                                </span></span><span
                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                        style="box-sizing:border-box"><span
                                                                                aria-hidden="true" role="math"
                                                                                style="box-sizing:border-box"><span
                                                                                        style="box-sizing:border-box"><span
                                                                                                style="box-sizing:border-box;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:1.21em;line-height:1.2;font-family:KaTeX_Main,&quot;Times New Roman&quot;,serif"><span
                                                                                                        style="box-sizing:border-box;padding:0px;border:0px;height:1px;width:1px;overflow:hidden"></span><span
                                                                                                        aria-hidden="true"
                                                                                                        style="box-sizing:border-box"><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:1em;vertical-align:-0.25em"></span><span
                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic;margin-right:0.13889em">T</span><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;margin-right:0.166667em"></span><span
                                                                                                                        style="box-sizing:border-box"><span
                                                                                                                                style="box-sizing:border-box">(</span><span
                                                                                                                                style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic;margin-right:0.03588em">v</span><span
                                                                                                                                style="box-sizing:border-box">)</span></span><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;margin-right:0.277778em"></span><span
                                                                                                                        style="box-sizing:border-box">=</span><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;margin-right:0.277778em"></span></span><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:0.43056em;vertical-align:0em"></span><span
                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic;margin-right:0.02691em">w</span></span></span></span></span></span><span
                                                                                style="box-sizing:border-box;border:0px;width:1px;height:1px;padding:0px;overflow:hidden;white-space:nowrap">T,
                                                                                left parenthesis, v, right parenthesis,
                                                                                equals, w</span></span></span><span
                                                                style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"></span></span>
                                                </p>
                                        </td>
                                        <td
                                                style="box-sizing:border-box;padding:4px 16px;letter-spacing:0px;font-size:12px;line-height:14px;vertical-align:top;border-color:rgb(232,238,247);border-style:solid;border-width:0.8px">
                                                <p
                                                        style="box-sizing:border-box;margin:8px 0px 0px;letter-spacing:0px;font-size:12px;line-height:14px;min-height:16px">
                                                        <span style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box">transformation
                                                                </span></span><span
                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                        style="box-sizing:border-box"><span
                                                                                aria-hidden="true" role="math"
                                                                                style="box-sizing:border-box"><span
                                                                                        style="box-sizing:border-box"><span
                                                                                                style="box-sizing:border-box;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:1.21em;line-height:1.2;font-family:KaTeX_Main,&quot;Times New Roman&quot;,serif"><span
                                                                                                        style="box-sizing:border-box;padding:0px;border:0px;height:1px;width:1px;overflow:hidden"></span><span
                                                                                                        aria-hidden="true"
                                                                                                        style="box-sizing:border-box"><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:0.68333em;vertical-align:0em"></span><span
                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic;margin-right:0.13889em">T</span></span></span></span></span></span><span
                                                                                style="box-sizing:border-box;border:0px;width:1px;height:1px;padding:0px;overflow:hidden;white-space:nowrap">T</span></span></span><span
                                                                style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"> of a vector
                                                                </span></span><span
                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                        style="box-sizing:border-box"><span
                                                                                aria-hidden="true" role="math"
                                                                                style="box-sizing:border-box"><span
                                                                                        style="box-sizing:border-box"><span
                                                                                                style="box-sizing:border-box;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:1.21em;line-height:1.2;font-family:KaTeX_Main,&quot;Times New Roman&quot;,serif"><span
                                                                                                        style="box-sizing:border-box;padding:0px;border:0px;height:1px;width:1px;overflow:hidden"></span><span
                                                                                                        aria-hidden="true"
                                                                                                        style="box-sizing:border-box"><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:0.5782em;vertical-align:-0.0391em"></span><span
                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic;margin-right:0.03588em">v</span><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;margin-right:0.277778em"></span><span
                                                                                                                        style="box-sizing:border-box">∈</span><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;margin-right:0.277778em"></span></span><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:0.814108em;vertical-align:0em"></span><span
                                                                                                                        style="box-sizing:border-box"><span
                                                                                                                                style="box-sizing:border-box"><span
                                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_AMS">R</span></span><span
                                                                                                                                style="box-sizing:border-box"><span
                                                                                                                                        style="box-sizing:border-box;display:inline-table;table-layout:fixed"><span
                                                                                                                                                style="box-sizing:border-box;display:table-row"><span
                                                                                                                                                        style="box-sizing:border-box;display:table-cell;vertical-align:bottom;height:0.814108em"><span
                                                                                                                                                                style="box-sizing:border-box;display:block;height:0px;margin-right:0.05em"><span
                                                                                                                                                                        style="box-sizing:border-box;display:inline-block;overflow:hidden;width:0px;height:2.7em"></span><span
                                                                                                                                                                        style="box-sizing:border-box;display:inline-block;font-size:0.7em"><span
                                                                                                                                                                                style="box-sizing:border-box">2</span></span></span></span></span></span></span></span></span></span></span></span></span><span
                                                                                style="box-sizing:border-box;border:0px;width:1px;height:1px;padding:0px;overflow:hidden;white-space:nowrap">v,
                                                                                \in, R,
                                                                                squared</span></span></span><span
                                                                style="box-sizing:border-box"><span
                                                                        style="box-sizing:border-box"> into the vector
                                                                </span></span><span
                                                                style="box-sizing:border-box;display:inline-block"><span
                                                                        style="box-sizing:border-box"><span
                                                                                aria-hidden="true" role="math"
                                                                                style="box-sizing:border-box"><span
                                                                                        style="box-sizing:border-box"><span
                                                                                                style="box-sizing:border-box;font-variant-numeric:normal;font-variant-east-asian:normal;font-variant-alternates:normal;font-size-adjust:none;font-kerning:auto;font-feature-settings:normal;font-stretch:normal;font-size:1.21em;line-height:1.2;font-family:KaTeX_Main,&quot;Times New Roman&quot;,serif"><span
                                                                                                        style="box-sizing:border-box;padding:0px;border:0px;height:1px;width:1px;overflow:hidden"></span><span
                                                                                                        aria-hidden="true"
                                                                                                        style="box-sizing:border-box"><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:0.5782em;vertical-align:-0.0391em"></span><span
                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_Math;font-style:italic;margin-right:0.02691em">w</span><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;margin-right:0.277778em"></span><span
                                                                                                                        style="box-sizing:border-box">∈</span><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;margin-right:0.277778em"></span></span><span
                                                                                                                style="box-sizing:border-box;white-space:nowrap;width:min-content;display:inline-block"><span
                                                                                                                        style="box-sizing:border-box;display:inline-block;height:0.814108em;vertical-align:0em"></span><span
                                                                                                                        style="box-sizing:border-box"><span
                                                                                                                                style="box-sizing:border-box"><span
                                                                                                                                        style="box-sizing:border-box;font-family:KaTeX_AMS">R</span></span><span
                                                                                                                                style="box-sizing:border-box"><span
                                                                                                                                        style="box-sizing:border-box;display:inline-table;table-layout:fixed"><span
                                                                                                                                                style="box-sizing:border-box;display:table-row"><span
                                                                                                                                                        style="box-sizing:border-box;display:table-cell;vertical-align:bottom;height:0.814108em"><span
                                                                                                                                                                style="box-sizing:border-box;display:block;height:0px;margin-right:0.05em"><span
                                                                                                                                                                        style="box-sizing:border-box;display:inline-block;overflow:hidden;width:0px;height:2.7em"></span><span
                                                                                                                                                                        style="box-sizing:border-box;display:inline-block;font-size:0.7em"><span
                                                                                                                                                                                style="box-sizing:border-box">3</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
                                                </p>
                                        </td>
                                </tr>
                        </tbody>
                </table>
        </div>
</div>
        `

        const html2 = `
        
        `

        function createMarkup(content: any) {
                return { __html: content };
        }

        return (
                <>
                        <div className='m-[10px]'>

                                <div className='jade-h1'>
                                        Notation
                                </div>

                                <div className="tabs tabs-lift">
                                        <input type="radio" name="my_tabs_1" className="tab" aria-label="notation" defaultChecked />
                                        <div className="tab-content bg-base-100 border-base-300 p-6">

                                                <div className='flex'>
                                                        <div className='flex-1 jade-border2 min-w-[400px] mr-[10px] text-xs'>
                                                                <div dangerouslySetInnerHTML={createMarkup(html)} />

                                                        </div>


                                                </div>

                                                <div className='flex'>
                                                        <div className='flex-1 jade-border2 min-w-[400px] mr-[10px] mt-[15px]'>
                                                                temp
                                                        </div>
                                                        <div className='flex-1 jade-code min-w-[750px]'>

                                                                <div dangerouslySetInnerHTML={createMarkup(html2)} />

                                                        </div>
                                                </div>

                                                <div className='flex'>
                                                        <div className='flex-1 jade-border2 min-w-[400px] mr-[10px] mt-[15px]'>



                                                        </div>
                                                        <div className='flex-1 jade-code min-w-[750px]'>

                                                                <div dangerouslySetInnerHTML={createMarkup(html2)} />

                                                        </div>
                                                </div>

                                        </div>




                                </div>

                        </div>

                </>
        );



}
