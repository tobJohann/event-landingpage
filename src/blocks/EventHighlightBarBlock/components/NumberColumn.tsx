import { HighlightNumberColumnProps } from '@/payload-types'
import { Box, Typography } from '@mui/material'
import { Headline, Subline } from '@/blocks/EventHighlightBarBlock/components/Typo'
import useAnimateNumber from '@/blocks/EventHighlightBarBlock/components/useAnimateNumber'

// TODO add number-animation

const NumberColumn: React.FC<HighlightNumberColumnProps> = ({
  prefix,
  startNumber,
  endNumber,
  subline,
  sufix,
}) => {
  const { ref, value } = useAnimateNumber({ from: startNumber, to: endNumber })

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
      ref={ref}
    >
      <Headline>
        {prefix}
        {value}
        {sufix}
      </Headline>
      <Subline>{subline}</Subline>
    </Box>
  )
}
export default NumberColumn
