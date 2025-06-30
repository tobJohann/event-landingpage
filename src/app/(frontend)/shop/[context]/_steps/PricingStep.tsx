'use client'
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useShopContext } from '@/app/(frontend)/shop/[context]/ShopProvider'
import PricingTable from '@/components/ui/PricingTable'
import { usePageContext } from '@/app/(frontend)/shop/[context]/page.client'

const PricingStep = ({ active = false }: { active?: boolean }) => {
  const theme = useTheme()
  const mdBreakpoint = useMediaQuery(theme.breakpoints.up('md'))
  const { tickets, steps } = useShopContext()
  const { event, activePrice } = usePageContext()

  if (!activePrice) return null

  const generatePricingItems = () => {
    if (
      activePrice.hasDiscount &&
      activePrice.discount &&
      tickets.count > activePrice.discount?.minTickets
    )
      return [
        {
          name: `${event ? `${event.name} ` : ''}Ticket`,
          price: activePrice.value,
          amount: activePrice.discount.minTickets,
        },
        {
          name: `${event ? `${event.name} ` : ''}Ticket vergünstigt`,
          price: activePrice.discount.discountValue,
          amount: tickets.count - activePrice.discount.minTickets,
        },
      ]

    return [
      {
        name: `${event ? `${event.name} ` : ''}Ticket`,
        price: activePrice.value,
        amount: tickets.count,
      },
    ]
  }

  return (
    <Box>
      {active && <Typography variant={'h3'}>Bestellzusammenfassung</Typography>}
      {(active || mdBreakpoint) && <PricingTable items={generatePricingItems()} />}
      {active ? (
        <Box display={'flex'} justifyContent={'flex-end'}>
          <Button variant={'contained'} onClick={steps.handleNext}>
            Weiter
          </Button>
        </Box>
      ) : (
        <Button onClick={steps.handlePrev}>Zurück</Button>
      )}
    </Box>
  )
}
export default PricingStep
