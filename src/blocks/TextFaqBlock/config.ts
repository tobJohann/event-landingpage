import generateBlockConfig from '@/lib/generateBlockConfig'
import { accordion } from '@/fields/accordion'

export const TextFaqBlock = generateBlockConfig('TextFaq', [
  accordion,
  {
    type: 'radio',
    name: 'accordionPosition',
    options: ['left', 'right'],
    defaultValue: 'right',
    required: true,
  },
])
