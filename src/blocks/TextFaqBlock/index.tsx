import { TextFaqBlockProps } from '@/payload-types'
import { Container, Grid } from '@mui/material'
import Accordion from '@/components/ui/Accordion'
import Header from '@/components/ui/Header'
import RichText from '@/components/features/Richtext'

const TextFaqBlock: React.FC<TextFaqBlockProps> = ({
  header,
  text,
  accordionPosition,
  accordion,
}) => {
  return (
    <Container>
      <Grid
        container
        spacing={12}
        direction={{ xs: 'row', sm: accordionPosition === 'right' ? 'row' : 'row-reverse' }}
      >
        <Grid size={{ xs: 12, sm: 6 }}>
          <Header data={header} />
          {text && <RichText data={text} />}
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Accordion data={accordion} />
        </Grid>
      </Grid>
    </Container>
  )
}
export default TextFaqBlock
