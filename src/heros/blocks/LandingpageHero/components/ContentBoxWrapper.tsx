'use client'
import { ReactNode } from 'react'
import { Box, Container, Grid, Paper, useMediaQuery, useTheme } from '@mui/material'
import { motion } from 'motion/react'
import ScrollDown from '@/heros/blocks/LandingpageHero/components/ScrollDown'

interface ContentBoxWrapperProps {
  children: ReactNode
}

const ContentBoxWrapper: React.FC<ContentBoxWrapperProps> = ({ children }) => {
  const theme = useTheme()
  const mdBreakpoint = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Box width={'100%'} position={'relative'} zIndex={2}>
      <Container>
        <Grid container>
          <Grid size={{ xs: 12, md: 9, lg: 8, xl: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 1, duration: 1 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Paper
                sx={{
                  mt: { xs: 24, md: 0 },
                  mb: { xs: 2, md: 0 },
                  mx: { md: -5 },
                  my: { lg: 16 },
                  px: { xs: 2, md: 5 },
                  py: { xs: 2, md: 4 },
                  boxShadow:
                    '0px 103px 105px 0px rgba(0, 0, 0, 0.07), 0px 37.597px 38.327px 0px rgba(0, 0, 0,' +
                    ' 0.04), 0px 18.252px 18.607px 0px rgba(0, 0, 0, 0.03), 0px 8.948px 9.121px 0px rgba(0, 0, 0, 0.02), 0px 3.538px 3.607px 0px rgba(0, 0, 0, 0.01);',
                }}
              >
                {children}
                {mdBreakpoint && <ScrollDown />}
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ContentBoxWrapper
