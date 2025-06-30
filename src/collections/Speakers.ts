import { CollectionConfig, Field } from 'payload'

// TODO handle access global

export const Speakers: CollectionConfig = {
  slug: 'speakers',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },

  fields: [
    {
      name: 'event',
      type: 'relationship',
      relationTo: 'events',
      required: true,
      admin: { position: 'sidebar' },
    },
    { type: 'upload', relationTo: 'media', required: true, name: 'image' },
    { type: 'text', name: 'name', required: true },
    { type: 'text', name: 'company' },
    { type: 'text', name: 'position' },
    {
      name: 'badges',
      type: 'array',
      admin: {
        description: 'mailto | tel are added automaticaly',
      },
      maxRows: 3,
      fields: [
        {
          name: 'linkTo',
          type: 'radio',
          options: ['linkedIn', 'email', 'website', 'tel'],
          defaultValue: 'email',
        },
        { name: 'link', type: 'text', required: true },
      ],
    },
  ],
}
