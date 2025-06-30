import { GlobalConfig } from 'payload'
import { link } from '@/fields/link'

export const General: GlobalConfig = {
  slug: 'general',
  access: {
    read: () => true,
  },
  fields: [
    { name: 'homepage', type: 'relationship', relationTo: 'pages', required: true },
    { name: 'activeEvent', type: 'relationship', relationTo: 'events', required: true },
    { name: 'logo', type: 'upload', relationTo: 'media', required: true },
    { name: 'mobileLogo', type: 'upload', relationTo: 'media' },
    { name: 'icon', type: 'upload', relationTo: 'media' },
    {
      name: 'header',
      type: 'array',
      interfaceName: 'HeaderNavProps',
      required: true,
      fields: [
        {
          name: 'highlight',
          type: 'checkbox',
        },
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        link({ withAnchor: true }),
      ],
    },
    {
      name: 'footer',
      type: 'array',
      fields: [{ name: 'label', type: 'text', required: true }, link()],
    },
    {
      name: 'copyrightLabel',
      type: 'text',
      required: true,
      defaultValue: 'Waldklinik Eisenberg ©2025',
    },
    {
      name: 'cookieConsentLabel',
      defaultValue: 'Cookies',
      type: 'text',
      required: true,
    },
  ],
}
