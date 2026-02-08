'use client';

import { ReactNode } from 'react'

export default function FeskDrawer({ title, children }: { title: string, children: ReactNode }) {

    return (
        <>
            <div className="collapse mb-[1px]">
                <input id='collapse-checkbox' type="checkbox" />
                <div className="collapse-title">

                    <div className="jade-collapse-title">
                        <div className="pt-[2px] pb-[2px] pl-[4px] pr-[4px] m-[0px]">
                            {title}
                        </div>

                    </div>




                </div>
                <div className="collapse-content">
                    <div className="p-[0px] m-[0px]">

                        <div className="jade-collapse-title-2">
                            <div className="p-[0px] m-[0px]">

                                {children}
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    );

}