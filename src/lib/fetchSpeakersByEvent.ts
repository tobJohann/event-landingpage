import { SpeakerViewBlockProps } from '@/payload-types'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export const fetchSpeakersByEvent = async (event: SpeakerViewBlockProps['event']) => {
  const payload = await getPayload({ config: configPromise })
  const eventId = typeof event === 'string' ? event : event.id
  const res = await payload.find({
    collection: 'speakers',
    depth: 1,
    where: {
      event: { equals: eventId },
    },
  })
  return res.docs
}
