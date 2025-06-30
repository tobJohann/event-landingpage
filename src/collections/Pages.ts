import { CollectionConfig } from 'payload'
import { hero } from '@/heros/config'
import { TextFaqBlock } from '@/blocks/TextFaqBlock/config'
import { LocationMediaBlock } from '@/blocks/LocationMediaBlock/config'
import { TextMediaColumnsBlock } from '@/blocks/TextMediaColumnsBlock/config'
import { SpeakerViewBlock } from '@/blocks/SpeakerViewBlock/config'
import { EventSumUpBlock } from '@/blocks/EventSumUpBlock/config'
import { EventHighlightBarBlock } from '@/blocks/EventHighlightBarBlock/config'
import { EventScheduleBlock } from '@/blocks/EventScheduleBlock/config'
import { ContentBlock } from '@/blocks/ContentBlock/config'
import { PricingCards } from '@/blocks/PricingCardsBlock/config'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    { type: 'text', name: 'name', required: true, admin: { position: 'sidebar' } },
    { type: 'text', name: 'slug', unique: true, admin: { position: 'sidebar' } },
    { type: 'checkbox', name: 'isLandingpage', admin: { position: 'sidebar' } },
    {
      type: 'relationship',
      name: 'event',
      relationTo: 'events',
      required: true,
      admin: {
        position: 'sidebar',
        condition: (_, sD) => sD?.isLandingpage,
      },
    },

    {
      type: 'tabs',
      tabs: [
        { label: 'Hero', fields: [hero] },
        {
          label: 'Layout',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [
                ContentBlock,
                TextFaqBlock,
                TextMediaColumnsBlock,
                LocationMediaBlock,
                SpeakerViewBlock,
                EventSumUpBlock,
                EventHighlightBarBlock,
                EventScheduleBlock,
                PricingCards,
              ],
            },
          ],
        },
      ],
    },
  ],
}
