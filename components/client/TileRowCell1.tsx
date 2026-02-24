'use client';

import { ReactNode } from 'react'

export default function TileRowCell1({ title, children }: { title: String, children: ReactNode }) {

  return (
    <>
      <div className='flex mt-[5px] gap-[15px]'>
        <div className='flex-1 min-w-[600px] max-w-[600px] mr-[20px]'>
          <p className='jade-h2-2'>{title}</p>
          {children}
        </div>

      </div>

    </>
  );

}