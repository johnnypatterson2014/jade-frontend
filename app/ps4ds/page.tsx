'use client';

import Testing from '@/components/client/Testing';
import { ClientContext } from '@/components/client/ClientContext'

export default function Home() {


  return (
    <>
      <ClientContext>


        <div>
          <p>practical statistics for data science</p>

          <Testing />

        </div>


      </ClientContext>
    </>
  );
}
