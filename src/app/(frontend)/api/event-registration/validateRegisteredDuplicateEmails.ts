import { Payload } from 'payload'
import { ZodError, ZodIssue } from 'zod'
import { handleExpiredPaymentSessions } from '@/lib/handleExpiredPaymentSessions'
import { Participant } from '@/payload-types'

export const validateRegisteredDuplicateEmails = async (
  payload: Payload,
  ticketData: { email: string }[],
  eventId: string,
) => {
  const usage = await payload.find({
    collection: 'participants',
    select: { email: true, paymentId: true, paymentStatus: true },
    where: {
      event: { equals: eventId },
      email: { in: ticketData.map((t) => t.email) },
    },
  })

  if (usage.docs.length === 0) return
  //TODO test ExpiredPayments
  const participants = await handleExpiredPaymentSessions(payload, usage.docs as Participant[])

  const existingEmails = new Set(participants.map((doc) => doc.email))
  const issues: ZodIssue[] = []

  ticketData.forEach((ticket, index) => {
    if (existingEmails.has(ticket.email)) {
      issues.push({
        code: 'custom',
        message: 'Diese E-Mail ist bereits registriert.',
        path: ['ticketData', index, 'email'],
      })
    }
  })

  throw new ZodError(issues)
}
