import { Payload } from 'payload'

type Ticket = {
  name: string
  email: string
  company?: string | null
  jobPosition?: string | null
}

type Options = {
  eventId: string
  newsletter: boolean
  paymentId: string
}

export const createParticipants = async (
  payload: Payload,
  ticketData: Ticket[],
  options: Options,
) => {
  await Promise.all(
    ticketData.map(async (ticket) =>
      payload.create({
        collection: 'participants',
        data: {
          ...ticket,
          position: ticket.jobPosition,
          event: options.eventId,
          newsletter: options.newsletter,
          paymentId: options.paymentId,
          paymentStatus: 'pending',
        },
      }),
    ),
  )
}
export default createParticipants
