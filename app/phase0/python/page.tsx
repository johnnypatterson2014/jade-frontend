'use client';

import JadeLink from '@/components/client/JadeLink'
import { useState } from 'react'

export default function Home() {


  return (
    <>
      <div className='m-[10px]'>

        <div className='jade-h1'>
          python reference
        </div>


        <p>
          Useful python links: <br />
          <JadeLink url='https://docs.python.org/3/'>Official python 3 documentation</JadeLink><br />
          <JadeLink url='https://www.w3schools.com/python/default.asp'>w3schools python tutorial</JadeLink><br />
          <JadeLink url='https://www.udemy.com/course/python-for-java-developers/'>python for java developers online course</JadeLink><br />
          <JadeLink url='https://projecteuler.net/archives'>example problems to solve using python</JadeLink><br />

        </p>



      </div>

    </>
  );
}
