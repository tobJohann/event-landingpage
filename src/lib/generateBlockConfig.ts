import { Block, Field } from 'payload'
import { toKebabBlock } from '@/lib/helpers'
import { header } from '@/fields/header'
import { buttonGroup } from '@/fields/buttonGroup'

type configOptions = {
  hideHeader?: boolean
  hideRichtext?: boolean
  hideButtonGroup?: boolean
}

const generateBlockConfig = (
  name: string,
  fields: Field[],
  configOptions: configOptions = {},
): Block => {
  let blockFields: Field[] = [
    {
      type: 'row',
      fields: [
        { name: 'hideBlock', type: 'checkbox' },
        {
          name: 'anchor',
          type: 'text',
          admin: {
            description: 'section id without "#"',
          },
        },
      ],
    },
  ]

  if (!configOptions.hideHeader) {
    blockFields.push(header())
  }
  if (!configOptions.hideRichtext) {
    blockFields.push({ name: 'text', type: 'richText' })
  }

  blockFields = [...blockFields, ...fields]

  if (!configOptions.hideButtonGroup) {
    blockFields.push(buttonGroup())
  }

  const block: Block = {
    slug: toKebabBlock(`${name}Block`),
    interfaceName: `${name}BlockProps`,
    fields: blockFields,
  }

  return block
}
export default generateBlockConfig
