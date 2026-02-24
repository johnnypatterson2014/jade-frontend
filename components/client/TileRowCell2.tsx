'use client';

import { ReactNode } from 'react'

export default function TileRowCell2({ children }: { children: ReactNode }) {

  return (
    <>
      <div className='flex-1 mt-[30px]'>
        <div className='jade-code min-w-[350px] max-w-[400px]'>
          {children}
        </div>

      </div>

    </>
  );

}