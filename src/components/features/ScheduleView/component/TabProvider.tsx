'use client'

import { useState } from 'react'
import { EventSchedule } from '@/payload-types'
import { Box, Tab, Typography } from '@mui/material'
import { TabContext, TabList } from '@mui/lab'
import { format } from 'date-fns'

type Props = {
  children: React.ReactNode
  days: EventSchedule['days']
}

const TabProvider: React.FC<Props> = ({ children, days }) => {
  const [value, setValue] = useState<string>(days ? (days[0].id ?? '') : '')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  if (!days) return null

  return (
    <TabContext value={value}>
      <Box
        sx={{
          width: '100%',
          position: 'relative',

          'span.MuiTabs-indicator': {
            height: 4,

            zIndex: 3,
            backgroundColor: 'background.default',
            mt: 2,
            borderRadius: 2,
          },

          'button.MuiTab-root': {
            flexGrow: 1,
            mr: 8,
            alignItems: 'flex-start',
            pl: 0,
            'h3,p': {
              textAlign: 'left',
              color: 'background.default',
              opacity: 0.4,
            },
            '&.Mui-selected': {
              opacity: 1,
              'p.MuiTypography-body1': {
                opacity: '1 !important',
              },
              h3: {
                color: 'primary.main',
                opacity: '1 !important',
              },
            },
          },
        }}
      >
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          {days.map((day) => (
            <Tab
              key={day.id}
              value={day.id}
              label={
                <Box>
                  <Typography
                    mb={1}
                    sx={{ color: 'background.default', fontSize: '20px', fontWeight: 600 }}
                  >
                    {day.name}
                  </Typography>
                  <Typography component={'h3'}>
                    <Typography variant={'h2'} component={'span'} sx={{ mr: 1 }}>
                      {format(day.date, 'dd')}
                    </Typography>{' '}
                    {format(day.date, 'MMMM, EEEE')}
                  </Typography>
                </Box>
              }
            />
          ))}
        </TabList>
        <Box
          sx={{
            backgroundColor: 'rgba(51, 51, 51, 0.20)',
            bottom: 0,
            left: 0,
            position: 'absolute',
            height: 4,
            width: '100%',
          }}
        />
      </Box>
      <Box py={6}>{children}</Box>
    </TabContext>
  )
}
export default TabProvider
