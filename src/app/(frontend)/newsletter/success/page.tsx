import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material'
import Link from 'next/link'

const NewsletterConfirmPage = () => {
  return (
    <Container>
      <Box
        py={12}
        sx={{
          height: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
        }}
      >
        <Typography variant={'h1'} sx={{ mb: 6 }} textAlign={'center'}>
          Vielen Dank für die Anmeldung!
        </Typography>
        <Typography textAlign={'center'}>
          Sie haben sich erfolgreich für unseren Newsletter eingetragen. Ab sofort halten wir Sie
          über den OrthoRehaSummit sowie zukünftige Veranstaltungen und relevante Neuigkeiten auf
          dem Laufenden.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }} mt={12}>
          <Link href={'/'}>
            <Button>Zur Startseite</Button>
          </Link>
        </Box>
      </Box>
    </Container>
  )
}
export default NewsletterConfirmPage
