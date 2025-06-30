import { Box, Button, Typography } from '@mui/material'
import { CalendarMonth } from '@mui/icons-material'
import { Event } from '@/payload-types'
import { format } from 'date-fns'
import { de } from 'date-fns/locale'
import EventCalendarButton from '@/components/ui/Event/EventCalendarButton'

type Props = {
  hideIcon?: boolean
  saveButton?: boolean
  event: Event
}

const EventDate: React.FC<Props> = ({ hideIcon, saveButton, event }) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        {!hideIcon && (
          <CalendarMonth sx={{ fill: 'var(--mui-palette-primary-dark)', fontSize: '2rem' }} />
        )}
        <Typography sx={{ fontWeight: 700, mb: -0.75 }}>
          {format(event.eventDate, 'dd. LLLL yyyy', { locale: de })}
        </Typography>
      </Box>
      {saveButton && (
        <Box mt={3}>
          <EventCalendarButton event={event} />
        </Box>
      )}
    </>
  )
}
export default EventDate
