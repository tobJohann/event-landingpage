import { EventSumUpBlockProps } from '@/payload-types'
import { Box, Grid, Typography, Stack } from '@mui/material'
import RichText from '@/components/features/Richtext'
import { splitArrayIntoChunks } from '@/lib/helpers'

const CardsGrid: React.FC<{ data: EventSumUpBlockProps['cards'] }> = ({ data }) => {
  if (!data || data.length === 0) return null

  const cards = splitArrayIntoChunks(data, 2)

  return (
    <Grid container spacing={3}>
      {cards.map((col, index) => (
        <Grid size={{ xs: 12, md: 6 }} key={index}>
          <Stack spacing={3} direction={'column'} mt={{ md: index === 1 ? 12 : 0 }}>
            {col.map((card, index) =>
              card ? (
                <Box
                  key={index}
                  sx={{
                    border: '2px solid var(--mui-palette-primary-main)',
                    p: 3,
                    borderRadius: '12px',
                  }}
                >
                  <Typography variant={'h3'} mb={1} color={'primary'}>
                    {card.headline}
                  </Typography>
                  <RichText data={card.text} />
                </Box>
              ) : null,
            )}
          </Stack>
        </Grid>
      ))}
    </Grid>
  )
}
export default CardsGrid
