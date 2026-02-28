'use client';

import { ReactNode } from 'react'

export default function Tab2({ title, isChecked, children }: { title: string, isChecked: boolean, children: ReactNode }) {

  return (
    <>
      <input type="radio" name="my_tabs_1" className="tab" aria-label={title} defaultChecked={isChecked} />
      <div className="tab-content bg-base-100 border-base-300 p-6">

        <div className="page-notes-wrapper">
          <div className="page-notes">

            <div className="grid min-w-[800px] grid-cols-1 justify-items-center">
              <div className="w-[800px] m-[10px] p-[10px]">


                {children}

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );

}