'use client'
import { Box } from '@mui/material'
import Layer from '@/blocks/LocationMediaBlock/components/Layer'
import { motion } from 'motion/react'
import useInView from '@/hooks/useInView'

const AnimatedLayers = ({ layers }: { layers: number[] }) => {
  const { ref, controller } = useInView({ once: true })

  return (
    <>
      <motion.div
        animate={controller}
        variants={{ show: { transition: { staggerChildren: 0.125 } } }}
        initial={'hidden'}
        ref={ref}
        style={{ overflow: 'hidden' }}
        transition={{
          show: {
            staggerChildren: 0.125,
          },
        }}
      >
        {layers.map((width, index) => (
          <Layer width={width} index={index} key={index} />
        ))}
      </motion.div>
      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
          zIndex: 2,
          position: 'absolute',
          background: '#fff',
          top: 0,
          left: '-10%',
          width: '15%',
          transformOrigin: 'bottom left',
          transform: 'skewX(-5deg)',
          height: '100%',
        }}
      />
    </>
  )
}
export default AnimatedLayers
