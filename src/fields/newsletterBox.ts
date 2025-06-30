import { Field } from 'payload'

export const newsletterBox = (): Field => {
  return {
    name: 'newsletter',
    type: 'group',
    fields: [
      {
        name: 'showNewsletterBox',
        type: 'checkbox',
      },
      {
        name: 'data',
        type: 'group',
        label: false,
        interfaceName: 'NewsletterBoxData',
        admin: {
          hideGutter: true,
          condition: (_, sD) => sD?.showNewsletterBox,
        },
        fields: [
          {
            name: 'headline',
            type: 'text',
            defaultValue: 'Bleiben Sie informiert!',
            required: true,
          },
          { name: 'text', type: 'richText', required: true },
          { name: 'btnLabel', type: 'text', required: true, defaultValue: 'Jetzt anmelden' },
          { name: 'nameInput', type: 'checkbox', defaultValue: true },
        ],
      },
    ],
  }
}
