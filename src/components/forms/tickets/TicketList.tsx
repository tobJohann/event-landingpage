'use client'
import { Alert, Divider, Stack, Typography } from '@mui/material'
import SingleTicketForm from '@/components/forms/tickets/SingleTicketForm'
import { useTicketFormContext } from '@/components/forms/tickets/useTicketFormContext'
import { findValidationError } from '@/lib/findValidationError'

const TicketList = () => {
  const { ticketCount, validationErrors } = useTicketFormContext()
  const error = findValidationError(validationErrors, ['ticketData'])

  return (
    <>
      <Stack
        direction={'column'}
        spacing={3}
        width={'100%'}
        divider={<Divider flexItem orientation={'horizontal'} />}
      >
        {Array.from({ length: ticketCount }).map((_, index) => (
          <SingleTicketForm index={index} key={index} />
        ))}
      </Stack>
      {error && (
        <Alert severity={'error'} sx={{ width: '100%' }}>
          <Typography>{error?.message}</Typography>
        </Alert>
      )}
    </>
  )
}
export default TicketList
