import { CollectionAfterChangeHook } from 'payload'
import { sendParticipantConfirmation } from '@/mailer/sendParticipantConfirmation'
import { addUserToMailingList } from '@/mailer/addUserToMailingList'

export const handleEventRegistrationConfirmation: CollectionAfterChangeHook = async ({
  doc,
  previousDoc,
}) => {
  if (doc.paymentStatus !== 'payed' || previousDoc.paymentStatus === 'payed') {
    return null
  }
  await addUserToMailingList(doc, 'event_participants')
  await sendParticipantConfirmation(doc)
}
