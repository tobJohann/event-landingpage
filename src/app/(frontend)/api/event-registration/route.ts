import { ticketFormSchema } from '@/lib/validation/ticketForm'
import { ZodError } from 'zod'
import * as payment from '@/payment'
import { getPayload, ValidationError as PayloadValidationError } from 'payload'
import configPromise from '@payload-config'
import { validateRegisteredDuplicateEmails } from '@/app/(frontend)/api/event-registration/validateRegisteredDuplicateEmails'
import createParticipants from '@/app/(frontend)/api/event-registration/createParticipants'
import { fetchActiveEvent } from '@/lib/fetchActiveEvent'
import handlePriceItems from '@/app/(frontend)/api/event-registration/handlePriceItems'

export const POST = async (req: Request) => {
  try {
    const { priceSlug, eventId, body } = await req.json()
    const data = ticketFormSchema.parse(body)
    const payload = await getPayload({ config: configPromise })

    const [priceItems] = await Promise.all([
      handlePriceItems(data.ticketData.length, priceSlug),
      validateRegisteredDuplicateEmails(payload, data.ticketData, eventId),
    ])

    const stripeSession = await payment.checkout(priceItems, priceSlug)

    await createParticipants(payload, data.ticketData, {
      eventId,
      paymentId: stripeSession.id,
      newsletter: data.newsletter,
    })
    return new Response(JSON.stringify({ paymentUrl: stripeSession.url }), { status: 201 })
  } catch (e) {
    if (e instanceof ZodError)
      return new Response(JSON.stringify(e), { status: 423, statusText: 'ZodError' })

    if (e instanceof PayloadValidationError)
      return new Response(JSON.stringify(e), { status: 422, statusText: e.name })
    console.error(e)
    // @ts-ignore
    if (e.raw) console.error(e.raw)
    return new Response(JSON.stringify({ message: 'Server Error' }), { status: 500 })
  }
}
