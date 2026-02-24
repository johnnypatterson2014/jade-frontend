'use client';

import { ReactNode } from 'react'

export default function TileRowCell3({ children }: { children: ReactNode }) {

  return (
    <>
      <div className='flex-1 mt-[35px]'>
        <div className='min-w-[350px] max-w-[400px]'>
          {children}
        </div>

      </div>

    </>
  );

}