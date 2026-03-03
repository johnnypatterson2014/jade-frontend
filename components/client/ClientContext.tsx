'use client';

import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

interface ContextProps {
  isLoadingAnswer: boolean
  apiResponse: string
  getApiResponse: () => Promise<void>
  getApiGraphResponse: () => Promise<void>
}

const ClientContextProps = createContext<Partial<ContextProps>>({})

const getTestResponse = async () => {
  try {
    // example GET
    const response = await fetch('/api/test', {
      method: 'GET'
    })

    const responseData = await response.json();
    // console.log('reponse in sendChatRequest: ' + JSON.stringify(responseData));

    return responseData;
  } catch (error) {
    console.log('error in getTestResponse.');
    console.log(error)
  }
}

const getGraphResponse = async () => {
  try {
    // example GET
    const response = await fetch('/api/graph', {
      method: 'GET'
    })
    const imageBuffer = await response.arrayBuffer();
    const base64 = Buffer.from(imageBuffer).toString('base64');

    return base64;
    //return `data:image/png;base64,${base64}`;

    // const blob = new Blob([imageBuffer], { type: 'image/png' });
    // const url = URL.createObjectURL(blob);
    // return URL.revokeObjectURL(url);

    // const responseData = await response;
    // console.log('reponse in sendChatRequest: ' + JSON.stringify(responseData));
    // return Buffer.from(imageBuffer);
  } catch (error) {
    console.log('error in getTestResponse.');
    console.log(error)
  }
}

export function ClientContext({ children }
  : { children: ReactNode }) {
  const [isLoadingAnswer, setIsLoadingAnswer] = useState(false)
  const [apiResponse, setApiResponse] = useState<string>('')


  const getApiResponse = async () => {
    setIsLoadingAnswer(true);
    try {
      const data = await getGraphResponse()
      // const jsonData = JSON.stringify(data)
      //src = `data:image/*;base64,${base64}`;
      const pngString = "data:image/*;base64," + data
      setApiResponse(pngString)
    } finally {
      setIsLoadingAnswer(false)
    }
  }

  return (
    <ClientContextProps.Provider value={{
      isLoadingAnswer,
      apiResponse,
      getApiResponse
    }}>
      {children}
    </ClientContextProps.Provider>
  )
}

export const getClientContext = () => {
  return useContext(ClientContextProps) as ContextProps
}

