'use client'

import { ReactNode, useEffect, useState } from 'react'
import { Box, ButtonBase, Typography } from '@mui/material'
import { Add, Remove } from '@mui/icons-material'
import { useShopContext } from '@/app/(frontend)/shop/[context]/ShopProvider'

const TicketCounter = () => {
  const { tickets } = useShopContext()

  const handleNext = () => {
    tickets.handleTicket(tickets.count + 1)
  }
  const handlePrev = () => {
    if (tickets.count === 1) return
    tickets.handleTicket(tickets.count - 1)
  }

  const Wrapper = ({ children, ...props }: { children: ReactNode; [x: string]: any }) => (
    <ButtonBase
      {...props}
      sx={{
        width: '48px',
        px: 2,
        height: '100%',
        flexGrow: 0,
        '&:hover': {
          backgroundColor: 'rgba(172,205,108,0.2)',
        },
        transition: 'background 250ms ease-in-out',
      }}
    >
      {children}
    </ButtonBase>
  )

  return (
    <Box
      sx={{
        transition: 'borderColor 250ms ease-in-out',
        border: '2px solid var(--mui-palette-text-primary)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '12px',
        height: '48px',
        width: '140px',
        '&:hover': {
          borderColor: 'var(--mui-palette-primary-dark)',
        },
      }}
    >
      <Wrapper onClick={handlePrev}>
        <Remove />
      </Wrapper>
      <Box>
        <Typography
          sx={{ lineHeight: 1, fontFamily: 'var(--font-brandon)', mb: '-0.3rem', fontWeight: 700 }}
        >
          {tickets.count}
        </Typography>
      </Box>
      <Wrapper onClick={handleNext}>
        <Add />
      </Wrapper>
    </Box>
  )
}
export default TicketCounter
