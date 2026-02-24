'use client';

import { ReactNode } from 'react'

export default function NavDrawer2({ name, children }: { name: string, children: ReactNode }) {

    return (
        <>
            <div className="collapse mb-[4px]">
                <input id='collapse-checkbox' className='aw-collapse-checkbox' type="checkbox" defaultChecked />
                <div className="collapse-title">
                    <div className=''>

                        <div className="flex flex-row aw-collapse-title items-center">
                            <div className="grow aw-drawer-title2">

                                {name}

                            </div>
                            <div className="flex-none aw-margin-right">
                                <div className='flex flex-row'>
                                    <div className='flex-1'>
                                        &nbsp;
                                    </div>
                                    <div className='flex-none'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="#aaaaaa" d="M12 6a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm8 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm-8 8a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm8 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm-8 8a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm8 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4z" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="collapse-content ml-[15px] mr-[5px]">

                    {children}

                </div>
            </div>

        </>
    );

}