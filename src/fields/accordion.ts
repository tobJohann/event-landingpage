import { Field } from 'payload'
import { buttonGroup } from '@/fields/buttonGroup'

export const accordion: Field = {
  name: 'accordion',
  type: 'array',
  interfaceName: 'AccordionProps',
  fields: [
    { name: 'headline', type: 'text', required: true },
    { name: 'text', type: 'richText', required: true },
    buttonGroup(),
  ],
}
