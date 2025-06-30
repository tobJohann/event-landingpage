import { fetchActiveEvent } from '@/lib/fetchActiveEvent'
import { Box, Grid, Tabs, Typography } from '@mui/material'
import TabProvider from '@/components/features/ScheduleView/component/TabProvider'
import {
  TabPanel,
  TimelineConnector,
  TimelineDot,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineContent,
} from '@mui/lab'
import { format } from 'date-fns'

//TODO REFACTOR

const ScheduleView = async () => {
  const eventData = await fetchActiveEvent()
  const schedule = eventData.schedule
  if (!schedule || !schedule.days) return null
  return (
    <Box>
      <TabProvider days={schedule.days}>
        {schedule.days.map((day) => (
          <TabPanel value={day.id ?? ''} key={day.id} sx={{ p: 0 }}>
            <Box>
              <Box>
                {day.timeline.map((slot, index) => (
                  <Grid container key={slot.id}>
                    <TimelineOppositeContent
                      sx={{
                        flexGrow: 1,
                        flexShrink: 0,
                        pl: 0,
                        width: 200,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: 'var(--font-plus-jakarta)',
                          textAlign: 'left',
                          fontWeight: 500,
                          color: 'rgba(26,22,22,0.64)',
                        }}
                      >
                        {format(slot.start, 'HH.mm')} – {format(slot.end, 'HH.mm')}Uhr
                      </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot sx={{ backgroundColor: 'primary.main' }}>
                        <Box
                          sx={{
                            fontSize: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'background.default',
                            fontWeight: 700,
                            width: 18,
                            height: 18,
                          }}
                        >
                          {index + 1}
                        </Box>
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ flexGrow: 3, pb: 6 }}>
                      <Box width={'100%'} pl={4}>
                        <Typography variant={'h4'} mb={1.5}>
                          {slot.headline}
                        </Typography>
                        <Typography
                          variant={'body1'}
                          sx={{ fontFamily: 'Gelasio', color: 'rgba(26, 22, 22, 0.60)' }}
                        >
                          {slot.text}
                        </Typography>
                      </Box>
                    </TimelineContent>
                  </Grid>
                ))}
              </Box>
            </Box>
          </TabPanel>
        ))}
      </TabProvider>
    </Box>
  )
}
export default ScheduleView
