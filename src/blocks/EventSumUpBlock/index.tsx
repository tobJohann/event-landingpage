import { EventSumUpBlockProps } from '@/payload-types'
import { Container, Box, Grid } from '@mui/material'
import Header from '@/components/ui/Header'
import RichText from '@/components/features/Richtext'
import ButtonGroup from '@/components/ui/ButtonGroup'
import CardsGrid from '@/blocks/EventSumUpBlock/components/CardsGrid'

const EventSumUpBlock: React.FC<EventSumUpBlockProps> = ({ cards, buttonGroup, header, text }) => {
  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 12, lg: 24 }}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Grid size={{ xs: 12, lg: 6, xl: 6 }}>
          <Box>
            <Header data={header} uppercase />
            {text && <RichText data={text} />}
            <ButtonGroup data={buttonGroup} />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, lg: 6, xl: 6 }}>
          <CardsGrid data={cards} />
        </Grid>
      </Grid>
    </Container>
  )
}
export default EventSumUpBlock
