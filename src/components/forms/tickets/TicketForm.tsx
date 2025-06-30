import TicketFormProvider from '@/components/forms/tickets/TicketFormProvider'
import TicketFormConsentFields from '@/components/forms/tickets/TicketFormConsentFields'
import TicketList from '@/components/forms/tickets/TicketList'
import { TextField } from '@mui/material'

const TicketForm = ({ count }: { count: number }) => {
  return (
    <TicketFormProvider count={count}>
      <TicketList />
      <TextField label={'Anmerkung'} type={'textarea'} multiline rows={3} />
      <TicketFormConsentFields />
    </TicketFormProvider>
  )
}
export default TicketForm
