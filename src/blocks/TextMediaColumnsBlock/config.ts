import generateBlockConfig from '@/lib/generateBlockConfig'
import { header } from '@/fields/header'
import { buttonGroup } from '@/fields/buttonGroup'

export const TextMediaColumnsBlock = generateBlockConfig(
  'TextMediaColumns',
  [
    {
      name: 'columns',
      required: true,
      type: 'array',
      fields: [
        { name: 'media', type: 'upload', relationTo: 'media', required: true },
        header(),
        { name: 'text', type: 'richText', required: true },
        buttonGroup(),
      ],
    },
  ],
  {
    hideButtonGroup: true,
    hideHeader: true,
    hideRichtext: true,
  },
)
