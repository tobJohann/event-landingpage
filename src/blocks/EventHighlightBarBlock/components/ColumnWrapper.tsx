'use client'
import { ReactNode } from 'react'
import { motion } from 'motion/react'
import useColumnAnimation from '@/blocks/EventHighlightBarBlock/components/useColumnAnimation'
import { Paper, useMediaQuery, useTheme } from '@mui/material'

interface ColumnWrapperProps {
  children: ReactNode
}

const ColumnWrapper: React.FC<ColumnWrapperProps> = ({ children }) => {
  const { col } = useColumnAnimation()
  const theme = useTheme()
  const mdBreakpoint = useMediaQuery(theme.breakpoints.up('md'))
  if (mdBreakpoint) return <motion.div {...col}>{children}</motion.div>

  return (
    <motion.div
      {...col}
      style={{
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 200,
        width: '100%',
      }}
    >
      <Paper
        sx={{
          p: 4,
          width: '100%',
          height: '100%',
          background: `linear-gradient(45deg,var(--mui-palette-primary-dark),var(--mui-palette-primary-main))`,
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {children}
      </Paper>
    </motion.div>
  )
}
export default ColumnWrapper
