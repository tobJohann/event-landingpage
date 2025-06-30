import { Field } from 'payload'
import { LandingpageHero } from '@/heros/blocks/LandingpageHero/config'

export const hero: Field = {
  name: 'hero',
  type: 'blocks',
  blocks: [LandingpageHero],
}
