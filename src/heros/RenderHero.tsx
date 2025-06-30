import { Page } from '@/payload-types'
import { Box } from '@mui/material'
import LandingpageHero from '@/heros/blocks/LandingpageHero/Component'

const RenderHero: React.FC<{ data: Page['hero'] }> = (props) => {
  if (!props.data || props.data.length === 0) return null
  const data = props.data[0]

  const heroVariants = {
    'landingpage-hero': LandingpageHero,
  }

  if (!(data.blockType in heroVariants)) return null
  const Hero = heroVariants[data.blockType]

  return (
    <Box component={'header'}>
      <Hero {...data} />
    </Box>
  )
}
export default RenderHero
