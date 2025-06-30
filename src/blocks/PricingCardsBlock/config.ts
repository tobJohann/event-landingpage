import generateBlockConfig from '@/lib/generateBlockConfig'

export const PricingCards = generateBlockConfig('PricingCards', [
  { name: 'backgroundMedia', type: 'upload', relationTo: 'media', required: true },
])
