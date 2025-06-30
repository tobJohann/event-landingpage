import { ReactNode } from 'react'
import { Box, Container, Paper, Typography } from '@mui/material'

type Props = {
  children: ReactNode
  headline?: string
}
const CenterPaperLayout: React.FC<Props> = ({ children, headline }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'stretch',
        py: 12,
      }}
    >
      <Container sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        {headline && (
          <Typography variant={'h1'} textAlign={'center'} mb={{ xs: 3, sm: 6, md: 12 }}>
            {headline}
          </Typography>
        )}
        <Box sx={{ height: '100%' }}>
          <Paper sx={{ overflow: 'hidden', height: '100%' }}>{children}</Paper>
        </Box>
      </Container>
    </Box>
  )
}
export default CenterPaperLayout
