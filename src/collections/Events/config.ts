import { CollectionConfig } from 'payload'
import { General } from './tabs/General'
import { Pricing } from '@/collections/Events/tabs/Pricing'
import { Registration } from '@/collections/Events/tabs/Registration'
import { Contents } from '@/collections/Events/tabs/Contents'
import { Schedule } from '@/collections/Events/tabs/Schedule'

export const Events: CollectionConfig = {
  slug: 'events',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        General,
        Schedule,
        Registration,
        Pricing,
        Contents,
        {
          label: 'Participants',
          fields: [{ name: 'participants', type: 'join', collection: 'participants', on: 'event' }],
        },
        {
          label: 'Speakers',
          fields: [{ name: 'speakers', type: 'join', collection: 'speakers', on: 'event' }],
        },
      ],
    },
  ],
}
