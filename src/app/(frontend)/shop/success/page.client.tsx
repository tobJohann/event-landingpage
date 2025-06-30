'use client'

import { ReactNode } from 'react'
import useTicketActivation from '@/app/(frontend)/shop/success/useTicketActivation'
import { Box, CircularProgress } from '@mui/material'
import { AnimatePresence, motion } from 'motion/react'

type Props = {
  children: ReactNode
}
const PageClient: React.FC<Props> = ({ children }) => {
  const { state } = useTicketActivation()

  return (
    <AnimatePresence>
      {state === 'loading' && (
        <motion.div
          layout
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '3rem 0 ',
          }}
        >
          <CircularProgress />
        </motion.div>
      )}

      {state === 'success' && (
        <motion.div style={{ height: '100%' }} layout>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
export default PageClient
