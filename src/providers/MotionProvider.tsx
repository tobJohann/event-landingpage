'use client'

import { ReactNode } from 'react'
import { MotionConfig } from 'framer-motion'

interface MotionProviderProps {
  children: ReactNode
}

const MotionProvider: React.FC<MotionProviderProps> = ({ children }) => {
  const transition = {
    velocity: -200,
    stiffness: 1000,
  }

  return <MotionConfig transition={transition}>{children}</MotionConfig>
}
export default MotionProvider
