import { Field } from 'payload'

export const header = (): Field => {
  const field: Field = {
    name: 'header',
    interfaceName: 'HeaderProps',
    type: 'group',
    label: false,
    admin: {
      hideGutter: true,
    },
    fields: [
      {
        type: 'row',
        fields: [
          { name: 'overline', type: 'text' },
          { name: 'hasIcon', type: 'checkbox', defaultValue: true },
        ],
      },
      { name: 'headline', type: 'text', required: true },
    ],
  }
  return field
}
