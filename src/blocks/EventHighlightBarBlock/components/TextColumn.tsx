import { HighlightTextColumnProps } from '@/payload-types'
import { Box } from '@mui/material'
import { Headline, Subline } from '@/blocks/EventHighlightBarBlock/components/Typo'

const TextColumn: React.FC<HighlightTextColumnProps> = ({ headline, subline }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Headline>{headline}</Headline>
      <Subline>{subline}</Subline>
    </Box>
  )
}
export default TextColumn
