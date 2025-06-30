import React from 'react'
import { TicketFormContext } from './TicketFormContext'

export const useTicketFormContext = () => {
  const ctx = React.useContext(TicketFormContext)
  if (!ctx) throw new Error('useTicketFormContext must be used within a TicketFormProvider')
  return ctx
}
