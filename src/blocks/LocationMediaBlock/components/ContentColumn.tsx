import Header from '@/components/ui/Header'
import RichText from '@/components/features/Richtext'
import { Box } from '@mui/material'
import EventAddress from '@/components/ui/Event/EventAddress'
import ButtonGroup from '@/components/ui/ButtonGroup'
import { LocationMediaBlockProps } from '@/payload-types'

const ContentColumn: React.FC<LocationMediaBlockProps> = (props) => {
  const { header, event, text, textTwo, buttonGroup } = props
  if (!event || typeof event === 'string') return null

  return (
    <Box sx={{ p: { xs: 3, md: 6 }, mx: { md: -6 }, position: 'relative', background: '#fff' }}>
      <Header data={header} />
      {text && <RichText data={text} />}
      <Box mt={6} mb={1}>
        <EventAddress event={event} />
      </Box>
      {textTwo && <RichText data={textTwo} />}
      <ButtonGroup data={buttonGroup} />
    </Box>
  )
}
export default ContentColumn
