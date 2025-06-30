import generateBlockConfig from '@/lib/generateBlockConfig'

export const SpeakerViewBlock = generateBlockConfig(
  'SpeakerView',
  [{ name: 'event', type: 'relationship', required: true, relationTo: 'events' }],
  {
    hideButtonGroup: true,
  },
)
