'use client';

import { ReactNode } from 'react'

export default function TileRowCell5({ children }: { children: ReactNode }) {

  return (
    <>
      <div className='flex mt-[5px] gap-[15px]'>
        <div className='flex-1 min-w-[600px] max-w-[600px] mr-[20px]'>
          {children}
        </div>

      </div>

    </>
  );

}