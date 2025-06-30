import type { Field, GroupField } from 'payload'

export type LinkAppearances = 'default' | 'outline'

export const appearanceOptions: Record<LinkAppearances, { label: string; value: string }> = {
  default: {
    label: 'Default',
    value: 'default',
  },
  outline: {
    label: 'Outline',
    value: 'outline',
  },
}

type LinkType = (options?: {
  appearances?: LinkAppearances[] | false
  disableLabel?: boolean
  withAnchor?: boolean
}) => Field

export const link: LinkType = (optionOverrides = {}) => {
  const options = {
    withAnchor: false,
    ...optionOverrides,
  }

  const referenceOptions = [
    {
      label: 'Internal link',
      value: 'reference',
    },
    {
      label: 'Custom URL',
      value: 'custom',
    },
    { label: 'Call To Action', value: 'callToAction' },
  ]
  if (options.withAnchor) {
    referenceOptions.push({
      label: 'Anchor link',
      value: 'anchor',
    })
  }

  const linkResult: GroupField = {
    name: 'link',
    type: 'group',
    interfaceName: 'LinkProps',
    admin: {
      hideGutter: true,
    },
    fields: [
      {
        type: 'row',
        fields: [
          {
            name: 'type',
            type: 'radio',
            admin: {
              layout: 'horizontal',
              width: '50%',
            },
            defaultValue: 'reference',
            options: referenceOptions,
          },
          {
            name: 'newTab',
            type: 'checkbox',
            admin: {
              style: {
                alignSelf: 'flex-end',
              },
              width: '50%',
            },
            label: 'Open in new tab',
          },
        ],
      },
    ],
  }

  const linkTypes: Field[] = [
    {
      name: 'reference',
      type: 'relationship',
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'reference',
      },
      label: 'Document to link to',
      relationTo: ['pages'],
      required: true,
    },
    {
      name: 'url',
      type: 'text',
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'custom',
      },
      label: 'Custom URL',
      required: true,
    },
  ]
  if (options.withAnchor) {
    linkTypes.push({
      name: 'anchor',
      type: 'text',
      required: true,
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'anchor',
        description: 'Anchors always link to Homepage, "#" not required',
      },
      label: 'Anchor',
    })
  }
  linkResult.fields = [...linkResult.fields, ...linkTypes]

  return linkResult
}
