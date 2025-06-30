import { Tab } from 'payload'

export const Contents: Tab = {
  label: 'Contents',
  fields: [
    {
      name: 'eventDescription',
      type: 'textarea',
      required: true,
    },

    {
      name: 'successPage',
      type: 'group',

      admin: { hideGutter: true },
      fields: [
        { name: 'headline', type: 'text', defaultValue: 'Vielen Dank', required: true },
        { name: 'text', type: 'richText', required: true },
      ],
    },
  ],
}
