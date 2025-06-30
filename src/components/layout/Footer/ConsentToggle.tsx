'use client'
import { Box } from '@mui/material'
import useConsentDialog from '@/components/features/Consent/hooks/useConsentDialog'

type Props = {
  children: React.ReactNode
}
const ConsentToggle: React.FC<Props> = ({ children }) => {
  const dialog = useConsentDialog()

  return <Box onClick={dialog.open}>{children}</Box>
}
export default ConsentToggle
