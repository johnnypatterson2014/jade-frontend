'use client';

import { ReactNode } from 'react'
import Link from 'next/link';
import type { UrlObject } from 'url';
type Url = string | UrlObject;

export default function JadeLink({ url, children }: { url: Url, children: ReactNode }) {

  return (
    <>
      <Link className='jade-text-link' href={url} target='_blank'>
        {children}
      </Link>
    </>
  );

}