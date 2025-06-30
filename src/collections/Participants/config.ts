import { CollectionConfig } from 'payload'
import { handleNewsletter } from '@/collections/Participants/hooks/handleNewsletter'
import { handleEventRegistrationConfirmation } from '@/collections/Participants/hooks/handleEventRegistrationConfirmation'

export const Participants: CollectionConfig = {
  slug: 'participants',
  admin: {
    useAsTitle: 'name',
  },

  access: {
    create: () => true,
  },

  hooks: {
    afterChange: [handleNewsletter, handleEventRegistrationConfirmation],
  },

  fields: [
    { name: 'name', type: 'text' },
    { name: 'email', type: 'text', required: true },
    { name: 'company', type: 'text' },
    { name: 'position', type: 'text' },
    { name: 'event', type: 'relationship', relationTo: 'events', required: true },
    { name: 'paymentId', type: 'text', required: true },
    {
      name: 'paymentStatus',
      type: 'select',
      defaultValue: 'pending',
      options: ['pending', 'payed'],
      required: true,
    },
    { name: 'newsletter', type: 'checkbox' },
  ],
}
