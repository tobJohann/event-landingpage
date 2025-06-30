import { LocationMediaBlockProps } from '@/payload-types'
import Media from '@/components/features/Media'
import AnimatedLayers from '@/blocks/LocationMediaBlock/components/AnimatedLayers'
import { Box } from '@mui/material'

type Props = {
  data: LocationMediaBlockProps['media']
}
const MediaColumn: React.FC<Props> = ({ data }) => {
  if (!data || typeof data === 'string') return null

  return (
    <Box
      sx={{
        height: '100%',
        overflowX: 'hidden',
        width: '100%',
        position: 'relative',
        aspectRatio: { xs: '16/9', md: 'auto' },
        right: 0,
        top: 0,
      }}
    >
      <Media data={data} />
      <AnimatedLayers layers={[15, 17]} />
    </Box>
  )
}
export default MediaColumn
