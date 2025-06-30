import generateBlockConfig from '@/lib/generateBlockConfig'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { HeadingFeature } from '@payloadcms/richtext-lexical'

export const ContentBlock = generateBlockConfig(
  'Content',
  [
    {
      name: 'text',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          HeadingFeature({
            enabledHeadingSizes: ['h2', 'h3', 'h4'],
          }),
        ],
      }),
    },
  ],
  {
    hideRichtext: true,
    hideHeader: true,
  },
)
