'use client'

import { Box, Container, Paper, Stack, useTheme } from '@mui/material'
import { EventHighlightBarBlockProps } from '@/payload-types'
import { motion } from 'motion/react'
import RenderColumn from '@/blocks/EventHighlightBarBlock/components/RenderColumn'
import useColumnAnimation from '@/blocks/EventHighlightBarBlock/components/useColumnAnimation'

const EventHighlightBarBlock: React.FC<EventHighlightBarBlockProps> = ({ columns }) => {
  const { wrapper } = useColumnAnimation()
  const theme = useTheme()

  if (!columns || columns.length === 0) return null

  // TODO refactor grid
  return (
    <Box
      sx={{
        backgroundColor: { xs: 'grey.100', md: 'transparent' },
      }}
    >
      <motion.div {...wrapper}>
        <Container>
          <Paper
            sx={{
              px: { xs: 6, md: 12 },
              py: 6,
              boxShadow: {
                xs: 'none',
                md: 'inherit',
              },
              background: {
                xs: 'none',
                md: `linear-gradient(45deg,${theme.palette.primary.dark},${theme.palette.primary.main})`,
              },
              flexWrap: { xs: 'wrap', lg: 'nowrap' },
              color: '#fff',
              display: 'flex',
              gap: '2rem',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {columns.map((col) => (
              <RenderColumn {...col} key={col.id} />
            ))}
          </Paper>
        </Container>
      </motion.div>
    </Box>
  )
}
export default EventHighlightBarBlock
