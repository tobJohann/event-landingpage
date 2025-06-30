'use client'

import { createContext, ReactNode, useContext } from 'react'
import { General } from '@/payload-types'

type Props = {
  children: ReactNode
  data: General
}

const GeneralContext = createContext({} as General)

export const useGeneralData = () => {
  const ctx = useContext(GeneralContext)
  if (!ctx) throw new Error('useGeneralData must be used within a GeneralProvider')
  return ctx
}

const GeneralClientProvider: React.FC<Props> = ({ children, data }) => (
  <GeneralContext.Provider value={data}>{children}</GeneralContext.Provider>
)

export default GeneralClientProvider
