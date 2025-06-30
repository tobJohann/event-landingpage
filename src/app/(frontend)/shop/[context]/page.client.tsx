'use client'

import { createContext, useContext, ReactNode } from 'react'
import { Event } from '@/payload-types'
import { useSearchParams } from 'next/navigation'
import axios from 'axios'

type PageContext =
  | {
      hasEvent: true
      event: Event
      activePrice: Event['prices'][0]
    }
  | {
      hasEvent: false
      event: undefined
      activePrice: undefined
    }
const PageContext = createContext({} as PageContext)
export const usePageContext = () => {
  const ctx = useContext(PageContext)
  if (!ctx) throw new Error('usePageContext must be used within a PageProvider')
  return ctx
}

type Props = {
  children: ReactNode
  eventData?: Event | string | null | undefined
  ctx: string
}
const PageClient: React.FC<Props> = ({ children, eventData, ctx }) => {
  const data =
    !eventData || typeof eventData === 'string'
      ? { hasEvent: false }
      : {
          hasEvent: true,
          event: eventData,
          activePrice: eventData.prices.find((price) => price.slug === ctx),
        }

  const sp = useSearchParams()
  const sessionId = sp.get('sessionId')

  if (sessionId) {
    axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/event-registration/cancel`, { sessionId })
  }

  //@ts-ignore
  return <PageContext.Provider value={data}>{children}</PageContext.Provider>
}
export default PageClient
