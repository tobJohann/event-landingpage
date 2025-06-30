'use client'
import { Box, ButtonBase, Typography } from '@mui/material'
import { KeyboardArrowDown } from '@mui/icons-material'
import { motion } from 'motion/react'

const ScrollDown = () => {
  const handleClick = () => {
    const el = document.querySelector('main')
    if (el) el.scrollIntoView()
  }
  return (
    <motion.div
      onClick={handleClick}
      whileHover={'hover'}
      style={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '80px',
      }}
    >
      <motion.div
        variants={{
          hover: { y: -5 },
        }}
      >
        <Typography sx={{ fontSize: '20px' }}>Scroll down</Typography>
      </motion.div>
      <motion.div
        variants={{
          hover: { y: 5 },
        }}
      >
        <KeyboardArrowDown />
      </motion.div>
    </motion.div>
  )
}
export default ScrollDown
