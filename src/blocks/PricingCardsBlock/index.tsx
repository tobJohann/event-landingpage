import Link from 'next/link'
import { PricingCardsBlockProps } from '@/payload-types'
import { Box, Button, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import Header from '@/components/ui/Header'
import RichText from '@/components/features/Richtext'
import Media from '@/components/features/Media'
import { fetchActiveEvent } from '@/lib/fetchActiveEvent'

const PricingCards: React.FC<PricingCardsBlockProps> = async ({
  header,
  text,
  backgroundMedia,
}) => {
  const event = await fetchActiveEvent()
  if (!event.prices) return null

  return (
    <Box sx={{ position: 'relative', py: 32 }}>
      <Media data={backgroundMedia} />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          height: 200,
          background:
            'linear-gradient(0deg, rgba(26, 22, 22, 0.20) 0%, rgba(26, 22, 22, 0.20) 100%),' +
            'linear-gradient(0deg, rgba(26, 22, 22, 0.00) 18.25%, var(--background-main, #1A1616) 67.75%);',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          height: 200,
          background:
            'linear-gradient(0deg, rgba(26, 22, 22, 0.20) 0%, rgba(26, 22, 22, 0.20) 100%),' +
            'linear-gradient(180deg, rgba(26, 22, 22, 0.00) 18.25%, var(--background-main, #1A1616) 67.75%);',
        }}
      />

      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container>
          <Grid size={{ xs: 12, md: 6, lg: 5 }}>
            <Header data={header} />
            <RichText data={text} />
            <Stack direction={'column'} spacing={4} mt={4}>
              {event.prices.map((price) => (
                <Paper
                  key={price.id}
                  sx={{
                    p: { xs: 2, lg: 4 },
                    color: 'background.default',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,.4)',
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: { xs: '1rem', lg: '2rem' },
                    }}
                  >
                    <Box>
                      <Typography sx={{ fontSize: '18px', fontWeight: 600 }} mb={2}>
                        {price.name}
                      </Typography>
                      <Typography sx={{ color: 'rgba(26,22,22,.6)', fontFamily: 'Gelasio' }}>
                        {price.description}
                      </Typography>
                    </Box>
                    <Box display={'flex'} gap={'.5rem'}>
                      <Typography variant={'h2'} component={'span'}>
                        {price.value}
                      </Typography>{' '}
                      EUR
                    </Box>
                  </Box>
                  <Link href={`/shop/${price.slug}`}>
                    <Button variant={'contained'} sx={{ width: '100%', mt: { xs: 2, lg: 4 } }}>
                      Ticket Kaufen
                    </Button>
                  </Link>
                </Paper>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
export default PricingCards
