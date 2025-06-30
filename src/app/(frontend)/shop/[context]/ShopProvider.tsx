'use client'

import { Event } from '@/payload-types'
import { createContext, ReactNode, useContext, useState } from 'react'
import { notFound } from 'next/navigation'

type ShopContext = {
  tickets: {
    count: number
    handleTicket: (count: number) => void
    ctx: Event['prices'][0]
  }
  steps: {
    active: number
    handlePrev: () => void
    handleNext: () => void
  }
}
const ShopContext = createContext({} as ShopContext)

interface ShopProviderProps {
  children: ReactNode
  event: Event
  context: string
}

export const useShopContext = () => {
  const ctx = useContext(ShopContext)
  if (!ctx) throw new Error('ShopProvider must be used within a ShopProvider')
  return ctx
}

const ShopProvider: React.FC<ShopProviderProps> = ({ children, event, context }) => {
  const [ticketCount, setTicketCount] = useState(1)
  const [activeStep, setActiveStep] = useState(0)

  const priceCtx = event.prices.find((price) => price.slug === context)
  if (!priceCtx) return notFound()

  const handleTicket = (count: number) => {
    setTicketCount(count)
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }
  const handlePrev = () => {
    if (activeStep > 0) setActiveStep(activeStep - 1)
  }

  return (
    <ShopContext.Provider
      value={{
        tickets: { count: ticketCount, handleTicket, ctx: priceCtx },
        steps: { active: activeStep, handleNext, handlePrev },
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}
export default ShopProvider
