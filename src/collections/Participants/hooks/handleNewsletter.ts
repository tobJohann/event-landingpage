import { CollectionAfterChangeHook } from 'payload'
import { Participant } from '@/payload-types'
import { handleNewsletterRegistration } from '@/mailer/handleNewsletterRegistration'

export const handleNewsletter: CollectionAfterChangeHook<Participant> = async ({
  doc,
  previousDoc,
}) => {
  if (!doc.newsletter || doc.newsletter === previousDoc.newsletter) return null

  await handleNewsletterRegistration({
    ext_id: doc.id,
    email: doc.email,
    attributes: {
      JOB_TITLE: doc.position,
      COMPANY: doc.company,
      FULL_NAME: doc.name,
    },
  })
}
