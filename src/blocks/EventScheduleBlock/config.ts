import generateBlockConfig from '@/lib/generateBlockConfig'
import { newsletterBox } from '@/fields/newsletterBox'

export const EventScheduleBlock = generateBlockConfig(
  'EventSchedule',
  [newsletterBox(), { name: 'scheduleHeadline', type: 'text' }],
  // TODO handle download schedule, submit keynote
)
