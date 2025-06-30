'use client'

import React, { ReactNode } from 'react'
import { Box, Button, CircularProgress, Collapse, Stack, Typography } from '@mui/material'
import { TicketFormContext } from './TicketFormContext'
import useTicketFormLogic from '@/components/forms/tickets/useTicketFormLogic'
import { usePageContext } from '@/app/(frontend)/shop/[context]/page.client'

// TODO refactor validation errors to use Zod Paths
// TODO handle loading state

const TicketFormProvider = ({ children, count }: { children: ReactNode; count: number }) => {
  const { event } = usePageContext()
  const form = useTicketFormLogic(count, event)

  return (
    <TicketFormContext.Provider value={form}>
      <Collapse in={form.state === 'loading'}>
        <Box
          py={4}
          display={'flex'}
          justifyContent={'center'}
          height={'100%'}
          alignItems={'center'}
          width={'100%'}
        >
          <CircularProgress />
        </Box>
      </Collapse>
      <Collapse in={form.state !== 'loading'}>
        <Stack direction={'column'} alignItems={'flex-start'} spacing={3} sx={{ width: '100%' }}>
          {children}
          <Box
            display={'flex'}
            alignItems={'flex-end'}
            mt={3}
            flexDirection={'column'}
            width={'100%'}
          >
            {event && (
              <Typography variant={'body2'} textAlign={'right'} sx={{ textWrap: 'balance', mb: 1 }}>
                Sie werden im nächsten Schritt zur sicheren Bezahlung bei Stripe weitergeleitet.
              </Typography>
            )}
            <Button variant={'contained'} onClick={form.handleSubmit}>
              Jetzt bezahlen
            </Button>
          </Box>
        </Stack>
      </Collapse>
    </TicketFormContext.Provider>
  )
}
export default TicketFormProvider
