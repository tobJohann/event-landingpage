import { ReactNode } from 'react'
import { Box } from '@mui/material'

interface BlockWrapperProps {
  children: ReactNode
  isLast?: boolean
  id?: string | null
  blockType:
    | 'content-block'
    | 'text-faq-block'
    | 'text-media-columns-block'
    | 'location-media-block'
    | 'speaker-view-block'
    | 'event-sum-up-block'
    | 'event-highlight-bar-block'
    | 'event-schedule-block'
    | 'pricing-cards-block'
}

export const blockWrapperPaddings = { xs: 6, md: 12 }

const BlockWrapper: React.FC<BlockWrapperProps> = ({ id, children, blockType, isLast = false }) => {
  const noPaddingBlocks = ['pricing-cards-block']
  const hasPadding = !noPaddingBlocks.includes(blockType)
  console.log('blockType', blockType)
  return (
    <Box
      id={id ?? ''}
      py={hasPadding ? blockWrapperPaddings : 0}
      component={'section'}
      sx={{ overflowX: 'hidden' }}
    >
      {children}
    </Box>
  )
}
export default BlockWrapper
