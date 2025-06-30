import { Event } from '@/payload-types'
import { Typography } from '@mui/material'
import { format } from 'date-fns'

type Props = {
  event: Event
}
const EventTime: React.FC<Props> = ({ event }) => {
  return (
    <Typography variant={'h4'} component={'h3'} sx={{ fontWeight: 500 }}>
      {format(event.eventDate, 'HH.mm')} – {format(event.eventEnd, 'HH.mm')} Uhr
    </Typography>
  )
}
export default EventTime
