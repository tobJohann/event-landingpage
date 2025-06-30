'use client'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import Link from 'next/link'
import Media from '@/components/features/Media'
import { useGeneralData } from '@/providers/GeneralProvider/GeneralClientProvider'

const Logo = () => {
  const theme = useTheme()
  const mdBreakpoint = useMediaQuery(theme.breakpoints.up('md'))
  const { logo, mobileLogo } = useGeneralData()

  if (!mdBreakpoint) {
    return (
      <Box sx={{ position: 'relative', height: 32, width: '100%' }}>
        <Link href={'/'}>
          <Media
            data={mobileLogo}
            style={{ objectFit: 'contain', objectPosition: 'left center' }}
          />
        </Link>
      </Box>
    )
  }

  return (
    <Box sx={{ position: 'relative', height: '32px', width: '24px' }}>
      <Link href={'/'}>
        <Media data={logo} style={{ objectFit: 'contain', objectPosition: 'left center' }} />
      </Link>
    </Box>
  )
}
export default Logo
