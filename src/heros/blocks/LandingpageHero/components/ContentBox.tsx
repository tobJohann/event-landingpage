import { Typography, Box, Divider, Paper, Stack } from '@mui/material'
import { LandingpageHeroProps } from '@/payload-types'
import { Place } from '@mui/icons-material'
import ContentBoxWrapper from '@/heros/blocks/LandingpageHero/components/ContentBoxWrapper'

import ButtonGroup from '@/components/ui/ButtonGroup'
import RichText from '@/components/features/Richtext'
import EventDate from '@/components/ui/Event/EventDate'

const ContentBox: React.FC<LandingpageHeroProps> = ({ event, buttonGroup, ...props }) => {
  return (
    <ContentBoxWrapper>
      {typeof event !== 'string' && (
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          alignItems={'flex-start'}
          mb={4}
          spacing={{ xs: 2, md: 3 }}
          divider={
            <Divider
              flexItem
              orientation={'vertical'}
              sx={{ borderColor: '#D6D6D6', display: { xs: 'none', md: 'block' } }}
            />
          }
          sx={{
            svg: { fill: 'var(--mui-palette-primary-dark)', fontSize: { xs: '1rem', md: '2rem' } },
          }}
        >
          <EventDate event={event} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Place />
            <Typography sx={{ fontWeight: 700, mb: -0.75 }}>{event.location}</Typography>
          </Box>
        </Stack>
      )}

      <Typography variant={'h1'}>{props.headline}</Typography>
      {props.subline && (
        <Typography
          mb={3}
          variant={'h3'}
          component={'p'}
          sx={{ color: '#DEDEDE', textFillColor: '#1F1F1F' }}
        >
          {props.subline}
        </Typography>
      )}
      {props.text && <RichText data={props.text} />}
      <ButtonGroup data={buttonGroup} btnProps={{ size: 'large' }} />
    </ContentBoxWrapper>
  )
}
export default ContentBox
