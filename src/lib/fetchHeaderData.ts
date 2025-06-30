import { getPayload } from 'payload'
import configPromise from '@payload-config'

export const fetchHeaderData = async () => {
  const payload = await getPayload({ config: configPromise })
  return await payload.findGlobal({
    slug: 'general',
  })
}
