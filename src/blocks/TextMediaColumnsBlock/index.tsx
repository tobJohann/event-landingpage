import { TextMediaColumnsBlockProps } from '@/payload-types'
import { Container, Grid, Paper, Box } from '@mui/material'
import Media from '@/components/features/Media'
import Header from '@/components/ui/Header'
import RichText from '@/components/features/Richtext'
import ButtonGroup from '@/components/ui/ButtonGroup'

const TextMediaColumnsBlock: React.FC<TextMediaColumnsBlockProps> = ({ columns }) => {
  return (
    <Container>
      <Grid container spacing={{ xs: 6, md: 3 }}>
        {columns.map((col) => (
          <Grid key={col.id} size={{ xs: 12, sm: 6 }}>
            <Paper sx={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/9', mb: 4 }}>
              <Media data={col.media} />
            </Paper>
            <Box mx={2}>
              <Header data={col.header} />
              <Box mt={-2}>
                <RichText data={col.text} />
              </Box>
              <ButtonGroup data={col.buttonGroup} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
export default TextMediaColumnsBlock
