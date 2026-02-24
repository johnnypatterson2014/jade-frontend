'use client';

import JadeLink from '@/components/client/JadeLink'
import { useState } from 'react'

export default function Home() {

    const html = `
notes
        `

    const html2 = `

        `

    const html3 = `

        `

    function createMarkup() {
        return { __html: html };
    }

    function createMarkup2() {
        return { __html: html2 };
    }

    function createMarkup3() {
        return { __html: html3 };
    }

    return (
        <>
            <div className='m-[10px]'>

                <div className='jade-h1'>
                    xxxxxxxxx
                </div>

                <div className="tabs tabs-lift">
                    <input type="radio" name="my_tabs_1" className="tab" aria-label="Notes" defaultChecked />
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        <div className='jade-code'>
                            <div dangerouslySetInnerHTML={createMarkup()} />
                        </div>
                    </div>

                    <input type="radio" name="my_tabs_1" className="tab" aria-label="Lab X" />
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        <div className='jade-code'>
                            <div dangerouslySetInnerHTML={createMarkup2()} />
                        </div>
                    </div>

                    <input type="radio" name="my_tabs_1" className="tab" aria-label="Assignment: xxx" />
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        <div className='jade-code'>
                            <div dangerouslySetInnerHTML={createMarkup3()} />
                        </div>
                    </div>
                </div>






            </div>

        </>
    );



}
