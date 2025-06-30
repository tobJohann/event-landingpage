'use client'
import { Box, Divider, Typography } from '@mui/material'
import { useShopContext } from '@/app/(frontend)/shop/[context]/ShopProvider'
import TicketForm from '@/components/forms/tickets/TicketForm'

const TicketFormStep = () => {
  const { tickets } = useShopContext()

  return (
    <Box>
      <Typography variant={'h3'}>Persönliche Daten</Typography>

      <Typography>
        Bitte geben Sie ihre persönlichen Daten an, um sich für den OrthoRehaSummit anzumelden. Die
        Informationen werden benötigt, um das Ticket zu personalisieren und um Ihnen alle relevanten
        Informationen zukommen zu lassen.
      </Typography>
      <Divider orientation={'horizontal'} sx={{ my: 3 }} />
      <TicketForm count={tickets.count} />
    </Box>
  )
}
export default TicketFormStep
