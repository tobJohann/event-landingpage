import { getPayload } from 'payload'
import configPromise from '@payload-config'

export const fetchFooterData = async () => {
  const payload = await getPayload({ config: configPromise })
  const generalData = await payload.findGlobal({
    slug: 'general',
    select: { footer: true, copyrightLabel: true, cookieConsentLabel: true },
  })
  return generalData
}
