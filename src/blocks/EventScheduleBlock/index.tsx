import { EventScheduleBlockProps } from '@/payload-types'
import { Box, Container, Grid, Paper } from '@mui/material'
import ContentColumn from '@/blocks/EventScheduleBlock/components/ContentColumn'
import ScheduleView from '@/components/features/ScheduleView'

// TODO handle extend

const EventScheduleBlock: React.FC<EventScheduleBlockProps> = async (props) => {
  return (
    <Box>
      <Container>
        <Paper
          sx={{
            background: '#F1F1E1',
            borderRadius: '32px',
            color: 'background.default',
            py: 8,
            mx: -16,
            px: 16,
            maxWidth: '95vw',
          }}
        >
          <Grid container spacing={8}>
            <Grid size={{ xs: 12, lg: 4 }}>
              <ContentColumn {...props} />
            </Grid>
            <Grid size={{ xs: 12, lg: 8 }}>
              <ScheduleView />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  )
}
export default EventScheduleBlock
