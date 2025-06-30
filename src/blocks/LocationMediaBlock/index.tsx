'use client'
import { LocationMediaBlockProps } from '@/payload-types'
import { Box, Container, Grid, useMediaQuery, useTheme } from '@mui/material'
import MediaColumn from '@/blocks/LocationMediaBlock/components/MediaColumn'
import ContentColumn from '@/blocks/LocationMediaBlock/components/ContentColumn'

// TODO animation layers visible bug
// TODO full width image mobile

const LocationMediaBlock: React.FC<LocationMediaBlockProps> = (props) => {
  const theme = useTheme()
  const mdBreakpoint = useMediaQuery(theme.breakpoints.up('md'))

  if (!props.event || typeof props.event === 'string') return null

  return (
    <Box sx={{ position: 'relative' }}>
      <Grid
        container
        direction={{
          xs: 'row',
          md: props.mediaPosition === 'right' ? 'row' : 'row-reverse',
        }}
      >
        <Grid size={{ xs: 12, lg: 6, xl: 4 }}>
          <Container sx={{ pr: { lg: 0 }, position: 'relative', zIndex: 4 }}>
            <ContentColumn {...props} />
          </Container>
        </Grid>

        <Grid size={{ xs: 12, lg: 6, xl: 8 }}>
          <MediaColumn data={props.media} />
        </Grid>
      </Grid>
    </Box>
  )
}
export default LocationMediaBlock
