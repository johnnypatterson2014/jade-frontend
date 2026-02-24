'use client';

import Button from '@/components/client/Button'
import { useState } from 'react'

export default function Home() {
  const [content, setContent] = useState('default text')

  const toggleAll = (value: boolean) => {
    alert("testing")
  }

  const handleSubmit = async (formData: FormData, e?: any) => {
    e?.preventDefault();
    alert("testing")
  }

  return (
    <>
      <div className='m-[10px]'>

        <div className='jade-h1'>
          Jade visual style
        </div>

        <div className='jade-h2'>
          fundamentals
        </div>

        <div className='jade-text'>
          As a Research Manager, you are responsible for aggregating all the researched information into a list.
          Generate a list of JSON objects containing the urls for 3 recent blog articles and the url and title for 3
          recent YouTube videos, for each technology in each business area.
        </div>

        <Button>
          <a onClick={() => toggleAll(true)}>expand all</a>
        </Button>

        <div className='jade-border-body'>
          <div className='jade-border-body-text'>
            As a Research Manager, you are responsible for aggregating all the researched information into a list.
            Generate a list of JSON objects containing the urls for 3 recent blog articles and the url and title for 3
            recent YouTube videos, for each technology in each business area.

            <div className='text-blue-300'>
              As a Research Manager, you are responsible for aggregating all the researched information into a list.
              Generate a list of JSON objects containing the urls for 3 recent blog articles and the url and title for 3
              recent YouTube videos, for each technology in each business area.
            </div>

          </div>
        </div>

        <div className='mt-[10px]'>
          <textarea className="w-full px-3 py-2 border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-gray-700 dark:focus:ring-gray-700 !p-3 text-zinc-300 bg-zinc-900 border border-zinc-600 text-sm focus:outline-none focus:ring-1 flex-1"
            id="requestContent" name="requestContent" placeholder="Enter your message here..." rows="4"></textarea>
        </div>

        <div className='mt-[10px]'>
          <input className="rounded-md px-3 py-1 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-zinc-900 border border-zinc-600 text-sm flex-1 text-zinc-300"
            id="image_url"
            onChange={(e: any) => setContent(e.target.value)}
            type="text" value={content} name="image_url" ></input>
        </div>

        <form id='analyze_image' action={handleSubmit}>

          <div className='mt-[10px]'>
            <div
              className="items-center btn btn-sm bg-zinc-800 hover:bg-zinc-100 border border-zinc-600 text-zinc-200 hover:text-zinc-900"
              type="button">
              Upload
            </div>
          </div>

          <div className='mt-[10px]'>
            <button type='submit' className="btn btn-sm bg-zinc-800 hover:bg-zinc-100 border border-zinc-600 text-zinc-200 hover:text-zinc-900">
              Submit
            </button>
          </div>

        </form>


        {/* <div className='m-[10px]'>
          <div style={{ color: '#ffffff', backgroundColor: '#ed0f0f', fontSize: '12px', fontFamily: 'Helvetica', fontStyle: 'bold', padding: '10px' }}>
            error message: <br />
          </div>
          <div style={{ color: '#ffffff', backgroundColor: '#000000', padding: '10px', borderStyle: 'solid', borderColor: '#ed0f0f', borderWidth: '2px' }}>
            This is an example error text.
            <br /><br />
          </div>
        </div> */}

      </div>

    </>
  );
}
