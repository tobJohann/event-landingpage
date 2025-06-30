import { Speaker } from '@/payload-types'
import { Box, Paper, Typography } from '@mui/material'
import NextImage from 'next/image'
import Media from '@/components/features/Media'

const SpeakerViewItem: React.FC<{ data: Speaker }> = ({ data }) => {
  return (
    <Paper
      sx={{
        overflow: 'hidden',
        position: 'relative',
        aspectRatio: '5/6',
        display: 'flex',
        alignItems: 'flex-end',
      }}
    >
      <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <Media data={data.image} style={{ objectPosition: 'top center' }} />
      </Box>
      <Box
        sx={{
          p: 1.5,
          width: '100%',
          position: 'relative',
          zIndex: 2,
          background: 'linear-gradient(#1F1F1F00,#1F1F1F)',
          color: '#fff',
        }}
      >
        <Typography sx={{ fontWeight: 700, fontSize: '30px' }}>{data.name}</Typography>
        <Typography sx={{ fontWeight: 700 }}>{data.position}</Typography>
        <Typography>{data.company}</Typography>
      </Box>
    </Paper>
  )
}
export default SpeakerViewItem
