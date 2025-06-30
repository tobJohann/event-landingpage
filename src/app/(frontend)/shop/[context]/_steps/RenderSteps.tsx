'use client'

import InfoStep from '@/app/(frontend)/shop/[context]/_steps/InfoStep'
import PricingStep from '@/app/(frontend)/shop/[context]/_steps/PricingStep'
import TicketFormStep from '@/app/(frontend)/shop/[context]/_steps/TicketFormStep'
import { useShopContext } from '@/app/(frontend)/shop/[context]/ShopProvider'
import { Grid, Box, Typography } from '@mui/material'
import { usePageContext } from '@/app/(frontend)/shop/[context]/page.client'
import EventDate from '@/components/ui/Event/EventDate'

const RenderSteps = () => {
  const { steps } = useShopContext()
  const { event } = usePageContext()
  const stepComponents = [InfoStep, PricingStep, TicketFormStep]

  const LeftComp = stepComponents[steps.active]
  const RightComp = stepComponents[steps.active + 1]

  return (
    <Grid container sx={{ height: '100%' }}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Box sx={{ p: 3, height: '100%' }}>
          {event && (
            <Box mb={6}>
              <Typography variant={'h3'}>{event.name}</Typography>
              <EventDate event={event} />
            </Box>
          )}
          <LeftComp />
        </Box>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Box sx={{ p: 3, height: '100%' }}>
          <RightComp active />
        </Box>
      </Grid>
    </Grid>
  )
}
export default RenderSteps
