'use client'
import { Box, Button, Fab } from '@mui/material'
import LinkWrapper from '@/components/features/LinkWrapper'
import { LocalMall } from '@mui/icons-material'

const MobileFAB = () => {
  return (
    <LinkWrapper data={{ type: 'callToAction' }}>
      <Fab
        variant={'extended'}
        sx={{
          display: { md: 'none' },
          zIndex: 2000,
          position: 'fixed',
          bottom: '16px',
          right: '16px',
          backgroundColor: 'text.primary',
          color: '#fff',
        }}
      >
        <LocalMall sx={{ fill: '#fff' }} />
        <Box sx={{ mb: -0.75, ml: 1 }}>Ticket sichern</Box>
      </Fab>
    </LinkWrapper>
  )
}
export default MobileFAB
