import { SpeakerViewBlockProps } from '@/payload-types'
import { Box, Container, Grid, IconButton, Typography } from '@mui/material'
import Header from '@/components/ui/Header'
import RichText from '@/components/features/Richtext'
import { fetchSpeakersByEvent } from '@/lib/fetchSpeakersByEvent'
import { ArrowBack, ArrowForward } from '@mui/icons-material'

//TODO add loading and fallback state
//TODO slider mobile

const SpeakerViewBlock: React.FC<SpeakerViewBlockProps> = async ({ event, header, text }) => {
  const speakers = await fetchSpeakersByEvent(event)

  return (
    <Container>
      <Grid container justifyContent={'space-between'} alignItems="center">
        <Grid size={3}>
          <Box
            sx={{
              aspectRatio: '4/5',
              background: '#fefefe',
            }}
          >
            <Typography variant="h3">Speaker</Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, lg: 5 }}>
          <Header data={header} />
          <RichText data={text} />
          <Box
            sx={{
              display: 'flex',
              gap: '2rem',
              mt: 4,
            }}
          >
            <Box
              sx={{
                p: 2,
                backgroundColor: 'primary.light',
                aspectRatio: '1/1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                svg: {
                  fill: 'var(--mui-palette-primary-main)',
                },
              }}
            >
              <IconButton>
                <ArrowBack />
              </IconButton>
            </Box>
            <Box
              sx={{
                p: 2,
                backgroundColor: 'primary.main',
                svg: {
                  fill: 'var(--mui-palette-background-default)',
                },
                aspectRatio: '1/1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <IconButton>
                <ArrowForward />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default SpeakerViewBlock
