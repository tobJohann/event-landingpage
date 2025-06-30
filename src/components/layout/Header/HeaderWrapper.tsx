import { ReactNode } from 'react'
import { Box, Button, Container } from '@mui/material'
import Link from 'next/link'

type Props = {
  children: ReactNode
}

const HeaderWrapper: React.FC<Props> = ({ children }) => {
  return (
    <Box
      component={'header'}
      sx={{
        position: 'fixed',
        py: 2,
        zIndex: 20000,
        top: 0,
        left: 0,
        width: '100%',
        backdropFilter: 'blur(6px)',
        background: 'rgba(26,22,22,  0.60)',
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {children}
          <Box>
            <Link href={'/shop'}>
              <Button>Ticket kaufen</Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
export default HeaderWrapper
