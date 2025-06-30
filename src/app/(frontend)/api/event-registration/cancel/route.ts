import { getPayload } from 'payload'
import configPromise from '@payload-config'

export const POST = async (req: Request) => {
  const { sessionId: paymentId } = await req.json()
  const payload = await getPayload({ config: configPromise })

  await payload.delete({
    collection: 'participants',
    where: {
      paymentId: { equals: paymentId },
      paymentStatus: { not_equals: 'payed' },
    },
  })

  return new Response('Participant deleted', { status: 200 })
}
