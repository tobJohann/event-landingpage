import generateBlockConfig from '@/lib/generateBlockConfig'

/*
 *   text
 *   counter
 * */

export const EventHighlightBarBlock = generateBlockConfig(
  'EventHighlightBar',
  [
    {
      name: 'columns',
      type: 'array',
      required: true,
      minRows: 2,
      fields: [
        {
          name: 'variant',
          type: 'radio',
          options: ['text', 'number'],
          defaultValue: 'text',
          required: true,
        },
        {
          name: 'textHighlight',
          type: 'group',
          interfaceName: 'HighlightTextColumnProps',
          label: false,
          admin: { hideGutter: true, condition: (_, sD) => sD?.variant === 'text' },
          fields: [
            { name: 'headline', type: 'text', required: true },
            { name: 'subline', type: 'text', required: true },
          ],
        },
        {
          name: 'numberHighlight',
          type: 'group',
          interfaceName: 'HighlightNumberColumnProps',
          label: false,
          admin: { hideGutter: true, condition: (_, sD) => sD?.variant === 'number' },
          fields: [
            {
              type: 'row',
              fields: [
                { name: 'prefix', type: 'text' },
                { name: 'startNumber', type: 'number', defaultValue: 0, required: true },
                { name: 'endNumber', type: 'number', required: true },
                { name: 'sufix', type: 'text' },
              ],
            },

            { name: 'subline', type: 'text', required: true },
          ],
        },
      ],
    },
  ],
  {
    hideButtonGroup: true,
    hideRichtext: true,
    hideHeader: true,
  },
)
