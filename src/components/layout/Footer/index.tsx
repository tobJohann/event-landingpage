import { Box, Container, Typography } from '@mui/material'
import { fetchFooterData } from '@/lib/fetchGeneralData'
import LinkWrapper from '@/components/features/LinkWrapper'
import ConsentToggle from './ConsentToggle'

const Footer = async () => {
  const { footer: footerData, copyrightLabel, cookieConsentLabel } = await fetchFooterData()
  return (
    <Box component={'footer'} sx={{ py: '40px', color: '#fff' }}>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'center' },
          }}
        >
          <Box
            sx={{
              mb: { xs: 8, md: 0 },
              display: 'flex',
              flexWrap: 'wrap',
              gap: { xs: '16px', md: '40px' },
              '.MuiTypography-root': {
                cursor: 'pointer',
                transition: 'color 250ms ease-in-out',
                textDecoration: 'underline',
                textDecorationColor: 'var(--mui-palette-primary-main)',
                ':hover': {
                  color: 'primary.main',
                },
              },
            }}
          >
            {footerData?.map((item) => (
              <LinkWrapper data={item.link} key={item.id}>
                <Typography>{item.label}</Typography>
              </LinkWrapper>
            ))}
            <ConsentToggle>
              <Typography>{cookieConsentLabel}</Typography>
            </ConsentToggle>
          </Box>
          <Box>
            <Typography variant={'body2'}>{copyrightLabel}</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
