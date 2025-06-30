'use client'
import { Alert, Box, Stack, TextField, TextFieldProps, Typography } from '@mui/material'
import { useTicketFormContext } from '@/components/forms/tickets/useTicketFormContext'
import { TicketFormData } from '@/lib/validation/ticketForm'
import { usePageContext } from '@/app/(frontend)/shop/[context]/page.client'
import { findValidationError } from '@/lib/findValidationError'

const SingleTicketForm = ({ index }: { index: number }) => {
  const { handleTicketDataChange, data, validationErrors } = useTicketFormContext()
  const { event } = usePageContext()
  const ticketData = data.ticketData[index] ?? {}

  const getProps = (label: keyof TicketFormData['ticketData'][0]) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      handleTicketDataChange(label, e.target.value, index)
    }

    const error = findValidationError(validationErrors, ['ticketData', index, label])

    const props: TextFieldProps = {
      error: !!error,
      helperText: !!error ? error.message : '',
      onChange: handleChange,
      value: ticketData[label],
    }

    switch (label) {
      case 'name':
        props.label = 'Name'
        props.required = true
        props.autoComplete = 'name'
        break
      case 'email':
        props.label = 'Email'
        props.required = true
        props.type = 'email'
        props.autoComplete = 'email'
        break
      case 'company':
        props.label = 'Unternehmen'
        props.autoComplete = 'organization'
        break
      case 'jobPosition':
        props.label = 'Job/Position'
        //TODO handle autofill
        props.autoComplete = 'organization-title'
        break
    }

    return props
  }

  return (
    <Stack direction={'column'} spacing={1.5} width={'100%'} alignItems={'flex-start'}>
      <Box>
        <Typography>
          <strong>{index + 1}.</strong> {event ? `${event.name} ` : ''}Ticket
        </Typography>
      </Box>
      <TextField {...getProps('name')} />
      <TextField {...getProps('email')} />
      <TextField {...getProps('jobPosition')} />
      <TextField {...getProps('company')} />
    </Stack>
  )
}
export default SingleTicketForm
