'use client'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import TicketCounter from '@/components/features/TicketCounter'
import { usePageContext } from '@/app/(frontend)/shop/[context]/page.client'
import ResponsiveCollapse from '@/components/ui/ResponsiveCollapse'
import { notFound } from 'next/navigation'

const InfoStep = () => {
  const { hasEvent, event, activePrice } = usePageContext()
  const theme = useTheme()
  const smBreakpoint = useMediaQuery(theme.breakpoints.up('sm'))

  if (!hasEvent || !event) return null
  if (!activePrice) return notFound()

  const Price = () => (
    <Box>
      <Typography sx={{ mt: { sm: 3 } }} variant={'h2'}>
        {activePrice.value}€
      </Typography>
      <Typography variant={'body2'}>
        {activePrice.description}
        {activePrice.hasDiscount && activePrice.discount && (
          <>
            {' '}
            Ab dem {activePrice.discount?.minTickets + 1}. Ticket verringert sich der Preis je
            Ticket auf <b>{activePrice.discount?.discountValue} EUR</b>.
          </>
        )}
      </Typography>
    </Box>
  )

  return (
    <Box sx={{ display: { xs: 'block', md: 'flex' }, gap: '2rem' }}>
      <Box>
        <ResponsiveCollapse breakpoint={'sm'}>
          <Typography>{event.eventDescription}</Typography>
        </ResponsiveCollapse>
        {smBreakpoint && <Price />}
      </Box>
      <Box
        mt={{ xs: 6, sm: 0 }}
        display={smBreakpoint ? 'block' : 'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <TicketCounter />

        {!smBreakpoint && <Price />}
      </Box>
    </Box>
  )
}
export default InfoStep
