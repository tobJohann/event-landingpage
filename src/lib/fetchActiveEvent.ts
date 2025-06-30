import { getPayload } from 'payload'
import configPromise from '@payload-config'

export const fetchActiveEvent = async () => {
  const payload = await getPayload({ config: configPromise })
  const generalData = await payload.findGlobal({
    slug: 'general',
    select: { activeEvent: true },
  })
  const event = generalData.activeEvent
  if (typeof event !== 'string') return event
  return await payload.findByID({ collection: 'events', id: event })
}
