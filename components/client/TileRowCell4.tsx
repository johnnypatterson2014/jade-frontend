'use client';

import { ReactNode } from 'react'

export default function TileRowCell4({ children }: { children: ReactNode }) {

  return (
    <>
      <div className='flex mt-[5px] gap-[15px]'>
        <div className='flex-1 min-w-[200px] max-w-[200px] mr-[20px]'>
          {children}
        </div>

      </div>

    </>
  );

}