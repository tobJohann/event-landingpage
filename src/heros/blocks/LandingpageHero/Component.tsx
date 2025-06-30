'use client'
import { LandingpageHeroProps } from '@/payload-types'
import { Box, Container, Typography, TypographyVariant } from '@mui/material'
import BackgroundMedia from './components/BackgroundMedia'
import RichText from '@/components/features/Richtext'
import ButtonGroup from '@/components/ui/ButtonGroup'
import { motion } from 'motion/react'
import useInView from '@/hooks/useInView'

export const handleTwoColorText = (headline: string, variant: TypographyVariant) => {
  const parts = headline.split(/(\*\*.*?\*\*)/g).filter((part) => part.length > 0)
  return parts.map((part, index) => {
    if (/^\*\*(.*?)\*\*$/.test(part)) {
      const match = part.match(/^\*\*(.*?)\*\*$/)
      return (
        <Typography variant={variant} component={'span'} color={'primary'} key={index}>
          {match?.[1]}
        </Typography>
      )
    }
    if (parts.length > 1) {
      return (
        <span
          style={{
            color: 'var(--mui-palette-text-primary)',
            //@ts-ignore
            textFillColor: 'var(--mui-palette-text-primary)',
            background: 'none',
          }}
          key={index}
        >
          {part}
        </span>
      )
    }
    return <span key={index}>{part}</span>
  })
}

const LandingpageHero: React.FC<LandingpageHeroProps> = (props) => {
  const { ref, controller } = useInView()

  const variants = {
    show: {
      y: 0,
      opacity: 1,
      transition: {
        velocity: -200,
        stiffness: 1000,
        duration: 0.5,
      },
    },
    hidden: { opacity: 0, y: 10 },
  }

  return (
    <motion.div
      ref={ref}
      initial={'hidden'}
      animate={controller}
      transition={{
        staggerChildren: 0.125,
        delayChildren: 2,
        staggerDirection: -1,
      }}
      style={{
        height: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-end',
      }}
    >
      <BackgroundMedia media={props.media} />
      <Box
        sx={{
          width: '100%',
          py: 16,
          background:
            'linear-gradient(rgba(26, 22, 22, 0.00), var(--background-main, #1A1616) 68.23%)',
        }}
      >
        <Container>
          <Box maxWidth={800}>
            <motion.div variants={variants}>
              <Typography variant={'overline'}>01 – 02 NOV 2025</Typography>
            </motion.div>
            <Typography variant={'h1'} mb={2}>
              {handleTwoColorText(props.headline, 'h1')}
              <Box
                sx={{
                  aspectRatio: '1/1',
                  width: '64px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  lineHeight: 0.8,
                  fontWeight: 800,
                  ml: 2,
                  position: 'relative',
                  top: '-32px',
                  background: 'rgba(255,255,255,.25)',
                  backdropFilter: 'blur(2px)',
                  fontSize: '24px',
                }}
              >
                20
                <br />
                25
              </Box>
            </Typography>
            {props.text && (
              <motion.div variants={variants}>
                <Box sx={{ maxWidth: 550 }}>
                  <RichText data={props.text} />
                </Box>
              </motion.div>
            )}
            <motion.div variants={variants}>
              <ButtonGroup data={props.buttonGroup} btnProps={{ size: 'large' }} />
            </motion.div>
          </Box>
        </Container>
      </Box>
    </motion.div>
  )
}
export default LandingpageHero
