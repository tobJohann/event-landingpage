import * as payment from '@/payment'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export const POST = async (req: Request) => {
  const { sessionId } = await req.json()
  const isPayed = await payment.validate(sessionId)
  if (!isPayed) return new Response('Payment not valid', { status: 401 })

  const payload = await getPayload({ config: configPromise })
  const payloadRes = await payload.update({
    collection: 'participants',
    where: {
      paymentId: { equals: sessionId },
    },
    data: {
      paymentStatus: 'payed',
    },
  })

  return new Response(JSON.stringify({ data: payloadRes.docs }), { status: 200 })
}
