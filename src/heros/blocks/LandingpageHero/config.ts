import { Block } from 'payload'
import { buttonGroup } from '@/fields/buttonGroup'

export const LandingpageHero: Block = {
  slug: 'landingpage-hero',
  interfaceName: 'LandingpageHeroProps',
  fields: [
    { name: 'headline', type: 'text', required: true },
    { name: 'subline', type: 'text' },
    { name: 'text', type: 'richText' },
    buttonGroup(),

    {
      name: 'media',
      label: 'BackgroundMedia',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'event',
      type: 'relationship',
      relationTo: 'events',
      required: true,
    },
  ],
}
