import { useTicketFormContext } from '@/components/forms/tickets/useTicketFormContext'
import { Stack, Typography } from '@mui/material'
import Link from 'next/link'
import ConsentField from '@/components/ui/ConsentFields'
import { findValidationError } from '@/lib/findValidationError'

const TicketFormConsentFields = () => {
  const { data, handleChange, validationErrors } = useTicketFormContext()

  const privacyError = findValidationError(validationErrors, ['privacy'])

  return (
    <Stack direction={'column'} spacing={3} alignItems={'flex-start'}>
      <ConsentField
        label={
          <Typography>
            Hiermit bestätigen Sie unsere <Link href={'/datenschutz'}>Datenschutzerklärung</Link>{' '}
            und <Link href={'/agb'}>AGB</Link>.
          </Typography>
        }
        data={{
          error: Boolean(privacyError),
          errorText: privacyError?.message ?? '',
          onChange: (newValue) => handleChange('privacy', newValue),
          value: data['privacy'],
        }}
      />
      <ConsentField
        label={
          'Ich möchte den Newsletter erhalten und willige ein, dass meine E-Mail-Adresse zum Versand gespeichert und verarbeitet wird. Eine Abmeldung ist jederzeit möglich.'
        }
        data={{
          error: false,
          errorText: '',
          onChange: (newValue) => handleChange('newsletter', newValue),
          value: data['newsletter'],
        }}
      />
    </Stack>
  )
}
export default TicketFormConsentFields
