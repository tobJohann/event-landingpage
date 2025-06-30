import { TicketFormData } from '@/lib/validation/ticketForm'
import { FormState, ValidationError } from '@/types/form'
import React from 'react'
import { ZodIssue } from 'zod'

export type TicketFormContext = {
  data: TicketFormData
  ticketCount: number
  state: FormState
  validationErrors: ZodIssue[]

  handleChange: (label: keyof TicketFormData, newValue: any) => void
  handleTicketDataChange: (
    label: keyof TicketFormData['ticketData'][0],
    newValue: string,
    index: number,
  ) => void
  handleSubmit: () => Promise<void>
}

export const TicketFormContext = React.createContext({} as TicketFormContext)
