'use client'

import { HeaderProps } from '@/payload-types'
import { Box, Typography } from '@mui/material'
import { useGeneralData } from '@/providers/GeneralProvider/GeneralClientProvider'
import Media from '@/components/features/Media'

const GradientHeadline = ({ children }: { children?: string }) => {
  if (!children) return null
  return (
    <span
      style={{
        background: `linear-gradient(45deg,var(--mui-palette-primary-dark), var(--mui-palette-primary-main))`,
        backgroundClip: 'text',
        //@ts-ignore
        textFillColor: 'transparent',
      }}
    >
      {children}
    </span>
  )
}

export const handleGradient = (headline: string) => {
  const parts = headline.split(/(\*\*.*?\*\*)/g).filter((part) => part.length > 0)
  return parts.map((part, index) => {
    if (/^\*\*(.*?)\*\*$/.test(part)) {
      const match = part.match(/^\*\*(.*?)\*\*$/)
      return <GradientHeadline key={index}>{match?.[1]}</GradientHeadline>
    }
    if (parts.length > 1) {
      return (
        <span
          className={'ignore-gradient'}
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

type Props = {
  data: HeaderProps
  uppercase?: boolean
  noGradient?: boolean
}

const Header: React.FC<Props> = ({ data, uppercase = false, noGradient = false }) => {
  const { icon } = useGeneralData()

  return (
    <Box mb={3} sx={{ textTransform: uppercase ? 'uppercase' : 'none' }}>
      {data.overline && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', mb: 1 }}>
          {data.hasIcon && icon && typeof icon !== 'string' && (
            <Box
              sx={{
                position: 'relative',
                width: 'clamp(10px, 1vw + 0.5rem, 16px)',
                height: 'clamp(16px, 1vw + 0.5rem, 24px)',
              }}
            >
              <Media data={icon} style={{ objectFit: 'contain', objectPosition: 'center left' }} />
            </Box>
          )}
          <Typography sx={{ display: 'block', mb: -0.75 }} variant={'overline'}>
            {data.overline}
          </Typography>
        </Box>
      )}
      <Typography variant={'h2'}>{handleGradient(data.headline)}</Typography>
    </Box>
  )
}
export default Header
