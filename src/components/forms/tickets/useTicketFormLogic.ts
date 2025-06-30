import React from 'react'
import { FormState } from '@/types/form'
import { TicketFormData, ticketFormSchema } from '@/lib/validation/ticketForm'
import axios, { AxiosError } from 'axios'
import { ZodError, ZodIssue } from 'zod'
import { Event } from '@/payload-types'
import { useParams, usePathname } from 'next/navigation'
import { sendGAEvent } from '@/components/features/Consent/lib/utils.tracking'

const defaultTicketData = { name: '', email: '', position: '', company: '' }

const useTicketFormLogic = (count: number, event?: Event | null) => {
  const pathname = usePathname()
  const params = useParams()
  const [formState, setFormState] = React.useState<FormState>('idle')
  const [validationErrors, setValidationErrors] = React.useState<ZodIssue[]>([])
  const [data, setData] = React.useState<TicketFormData>({
    ticketData: Array.from({ length: count }, () => defaultTicketData),
    privacy: false,
    newsletter: false,
  })

  const handleTicketDataChange = (
    label: keyof TicketFormData['ticketData'][0],
    newValue: string,
    index: number,
  ) => {
    setData((prev) => ({
      ...prev,
      ticketData: prev.ticketData.map((ticket, i) =>
        i === index ? { ...ticket, [label]: newValue } : ticket,
      ),
    }))
  }

  const handleChange = (label: keyof TicketFormData, newValue: string) => {
    setData((prev) => ({ ...prev, [label]: newValue }))
  }

  const handleSubmit = async () => {
    try {
      if (!event) throw new Error('Event not found')
      setFormState('loading')
      setValidationErrors([])
      ticketFormSchema.parse(data)
      const res = await axios.post('/api/event-registration', {
        body: data,
        eventId: event.id,
        priceSlug: params.context,
        route: pathname,
        slug: params.slug,
      })
      sendGAEvent({ action: 'redirect_stripe_payment' })
      window.location.href = res.data.paymentUrl
    } catch (err) {
      setFormState('error')
      if (err instanceof ZodError) return setValidationErrors(err.errors)
      if (err instanceof AxiosError && err.response && err.status === 423)
        return setValidationErrors(err.response.data.issues as ZodIssue[])
      else throw err
    }
  }

  return {
    ticketCount: count,
    state: formState,
    data,
    validationErrors,
    handleChange,
    handleTicketDataChange,
    handleSubmit,
  }
}
export default useTicketFormLogic
