import { Field } from 'payload'
import { button } from '@/fields/button'

export const buttonGroup = (): Field => {
  const field: Field = {
    name: 'buttonGroup',
    interfaceName: 'ButtonGroupProps',
    type: 'array',
    fields: [button()],
  }

  return field
}
