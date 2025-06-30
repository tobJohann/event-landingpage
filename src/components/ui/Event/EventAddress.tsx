import { Event } from '@/payload-types'
import { Typography, Box } from '@mui/material'
import { Place } from '@mui/icons-material'

type Props = {
  event: Event
}

const EventAddress: React.FC<Props> = ({ event }) => {
  return (
    <Box display={'flex'} gap={'8px'}>
      <Place
        sx={{
          fontSize: '2rem',
          fill: 'var(--mui-palette-primary-dark)',
        }}
      />
      <Box>
        <Typography sx={{ fontWeight: 700, fontSize: '24px' }}>{event.location}</Typography>
        {event.address &&
          event.address.split(';').map((line, index) => (
            <Typography sx={{ fontSize: '24px' }} key={index}>
              {line.trim()}
            </Typography>
          ))}
      </Box>
    </Box>
  )
}
export default EventAddress
