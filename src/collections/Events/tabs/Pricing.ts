import { Tab } from 'payload'

// TODO handel group discount

export const Pricing: Tab = {
  label: 'Pricing',
  fields: [
    {
      name: 'prices',
      admin: {
        description: 'has to be synced with stripe!',
      },
      minRows: 1,
      required: true,
      type: 'array',
      fields: [
        {
          type: 'row',
          admin: { style: { alignItems: 'center' } },
          fields: [
            { name: 'value', type: 'number', required: true },
            { name: 'stripeId', type: 'text', required: true },
            { name: 'emphasized', type: 'checkbox' },
            { name: 'hasDiscount', type: 'checkbox' },
          ],
        },
        {
          type: 'group',
          name: 'discount',
          admin: {
            condition: (_, sD) => sD?.hasDiscount,
          },
          fields: [
            {
              type: 'row',
              fields: [
                { name: 'minTickets', type: 'number', required: true },
                { name: 'discountValue', type: 'number', required: true },
                { name: 'stripeId', type: 'text', required: true },
              ],
            },
          ],
        },
        {
          type: 'row',
          fields: [
            { name: 'name', type: 'text', required: true },
            { name: 'slug', type: 'text', required: true, unique: true },
          ],
        },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
  ],
}
