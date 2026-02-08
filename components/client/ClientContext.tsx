'use client';

import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { getTestResponse } from '@/components/server/fastApiProxy'

interface ContextProps {
  isLoadingAnswer: boolean
  apiResponse: string
  getApiResponse: () => Promise<void>
}

const ClientContextProps = createContext<Partial<ContextProps>>({})

export function ClientContext({ children }
  : { children: ReactNode }) {
  const [isLoadingAnswer, setIsLoadingAnswer] = useState(false)
  const [apiResponse, setApiResponse] = useState<string>('')

  const getApiResponse = async () => {
    setIsLoadingAnswer(true);
    try {
      const data = await getTestResponse()
      const jsonData = JSON.stringify(data)
      setApiResponse(jsonData)
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

