import { Box } from '@mui/material'
import { LandingpageHeroProps } from '@/payload-types'
import Media from '@/components/features/Media'
import { motion } from 'motion/react'

// TODO mobile gradient direction

const BackgroundMedia: React.FC<{ media: LandingpageHeroProps['media'] }> = ({ media }) => {
  if (typeof media === 'string' || !media.url) return null

  const variants = {
    show: { opacity: 1, transition: { duration: 2 } },
    hidden: { opacity: 0 },
  }

  return (
    <Box
      sx={{
        position: { xs: 'absolute', md: 'absolute' },
        width: '100%',
        backgroundColor: '#1A1616',
        overflow: { md: 'hidden' },
        height: '100%',
        minHeight: { xs: '80vh', md: 'auto' },
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      <motion.div variants={variants} style={{ background: '#1A1616' }}>
        <Media
          data={media}
          style={{
            objectPosition: 'right top',
          }}
        />
      </motion.div>
    </Box>
  )
}
export default BackgroundMedia
