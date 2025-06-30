import { Payload } from 'payload'
import { Participant } from '@/payload-types'
import * as payment from '@/payment'

export const handleExpiredPaymentSessions = async (payload: Payload, data: Participant[]) => {
  const deleteParticipant = async (id: string) => {
    await payload.delete({ collection: 'participants', id })
  }

  const docs = await Promise.all(
    data.map(async (doc) => {
      const session = await payment.getSession(doc.paymentId)
      if (session.status === 'expired') {
        await deleteParticipant(doc.id)
        return null
      }

      return doc
    }),
  )

  return docs.filter((d) => d !== null)
}
