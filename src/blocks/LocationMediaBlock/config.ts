import generateBlockConfig from '@/lib/generateBlockConfig'

export const LocationMediaBlock = generateBlockConfig('LocationMedia', [
  { name: 'event', type: 'relationship', relationTo: 'events', required: true },
  {
    type: 'richText',
    name: 'textTwo',
    label: 'Text',
    admin: {
      description: 'Text displayed after location address',
    },
  },
  { name: 'media', type: 'upload', relationTo: 'media' },
  {
    name: 'mediaPosition',
    type: 'radio',
    options: ['left', 'right'],
    defaultValue: 'right',
    required: true,
  },
])
