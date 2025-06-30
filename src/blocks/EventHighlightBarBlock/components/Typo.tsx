import { ReactNode } from 'react'
import { Typography } from '@mui/material'

export const Headline = ({ children }: { children: ReactNode }) => (
  <Typography variant={'h2'} component={'p'} sx={{ color: '#fff', lineHeight: 1 }}>
    {children}
  </Typography>
)
export const Subline = ({ children }: { children: ReactNode }) => (
  <Typography
    variant={'h3'}
    sx={{
      fontWeight: 400,
      color: '#fff',
      textFillColor: '#fff',
      mb: 0,
      lineHeight: 1,
      textAlign: 'center',
    }}
  >
    {children}
  </Typography>
)
