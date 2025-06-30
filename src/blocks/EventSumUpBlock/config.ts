import generateBlockConfig from '@/lib/generateBlockConfig'

export const EventSumUpBlock = generateBlockConfig('EventSumUp', [
  {
    name: 'cards',
    type: 'array',
    fields: [
      { name: 'headline', type: 'text', required: true },
      { name: 'text', type: 'richText', required: true },
    ],
  },
])
