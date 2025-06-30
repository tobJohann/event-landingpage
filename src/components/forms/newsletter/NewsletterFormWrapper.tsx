import { ReactNode } from 'react'
import { Alert, AlertTitle, Box, CircularProgress, Collapse, Typography } from '@mui/material'

type Props = {
  state: 'error' | 'loading' | 'success' | 'idle'
  children: ReactNode
}

const NewsletterFormWrapper: React.FC<Props> = ({ state, children }) => {
  return (
    <>
      <Collapse in={state === 'success'} mountOnEnter unmountOnExit>
        <Alert severity={'success'}>
          <AlertTitle>Vielen Dank für Ihre Anmeldung!</AlertTitle>
          Bitte überprüfen Sie Ihr Postfach – wir haben Ihnen eine Bestätigungs-Mail gesendet.
          Klicken Sie auf den Link, um Ihre Anmeldung abzuschließen.
        </Alert>
      </Collapse>
      <Collapse in={state === 'loading'} mountOnEnter unmountOnExit>
        <Box py={3} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <CircularProgress />
        </Box>
      </Collapse>
      <Collapse in={state === 'error' || state === 'idle'}>
        <Collapse in={state === 'error'}>
          <Alert severity={'error'}>
            Leider konnte Ihre Anmeldung gerade nicht abgeschlossen werden. Bitte versuchen Sie
            später erneut – oder melden Sie sich bei uns unter{' '}
            <a href="mailto:event.ors@waldkliniken-eisenberg.de">
              event.ors@waldkliniken-eisenberg.de
            </a>
            .
          </Alert>
        </Collapse>
        {children}
      </Collapse>
    </>
  )
}
export default NewsletterFormWrapper
