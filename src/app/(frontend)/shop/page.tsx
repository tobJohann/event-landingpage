import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import { fetchActiveEvent } from '@/lib/fetchActiveEvent'
import Link from 'next/link'
import EventDate from '@/components/ui/Event/EventDate'

const Shop = async () => {
  const event = await fetchActiveEvent()

  return (
    <Box p={4}>
      <Grid container spacing={4} justifyContent={'center'} alignItems={'stretch'}>
        <Grid size={12}>
          <Box mb={6}>
            <Typography variant={'h3'}>{event.name}</Typography>
            <EventDate event={event} />
            <Typography mt={2} sx={{ maxWidth: 600, lineWrap: 'balance' }}>
              {event.eventDescription}
            </Typography>
          </Box>
        </Grid>
        {event.prices.map((price) => (
          <Grid size={{ xs: 12, sm: 6, md: 6 }} key={price.id}>
            <Paper
              key={price.id}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                p: { xs: 2, lg: 4 },
                color: 'background.default',
                borderRadius: '8px',
                background: 'rgba(255,255,255,.4)',
                backdropFilter: 'blur(6px)',
              }}
            >
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: { xs: '1rem', lg: '2rem' },
                  }}
                >
                  <Typography sx={{ fontSize: '18px', fontWeight: 600 }} mb={2}>
                    {price.name}
                  </Typography>

                  <Box display={'flex'} gap={'.5rem'}>
                    <Typography variant={'h2'} component={'span'}>
                      {price.value}
                    </Typography>{' '}
                    EUR
                  </Box>
                </Box>
                <Typography sx={{ color: 'rgba(26,22,22,.6)', fontFamily: 'Gelasio' }}>
                  {price.description}
                </Typography>
              </Box>
              <Link href={`/shop/${price.slug}`}>
                <Button variant={'contained'} sx={{ width: '100%', mt: { xs: 2, lg: 4 } }}>
                  Ticket Kaufen
                </Button>
              </Link>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
export default Shop
