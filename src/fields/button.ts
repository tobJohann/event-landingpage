import { Field } from 'payload'
import { link } from '@/fields/link'

export const button = (): Field => {
  const field: Field = {
    name: 'button',
    type: 'group',
    interfaceName: 'ButtonProps',
    admin: {
      hideGutter: true,
    },

    fields: [
      {
        name: 'label',
        type: 'text',
        required: true,
      },
      link(),
      {
        type: 'row',
        fields: [
          {
            name: 'variant',
            type: 'select',
            options: ['contained', 'outlined', 'tonal', 'text'],
            required: true,
            defaultValue: 'contained',
          },
          {
            name: 'color',
            type: 'select',
            options: ['primary', 'info'],
            required: true,
            defaultValue: 'primary',
          },
        ],
      },
    ],
  }
  return field
}
