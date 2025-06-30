import { Box, Button, Container, Grid, Typography } from '@mui/material'
import PageClient from '@/app/(frontend)/shop/success/page.client'
import RichText from '@/components/features/Richtext'
import EventDate from '@/components/ui/Event/EventDate'
import Link from 'next/link'
import { fetchPageData } from '@/lib/fetchPageData'
import successScreen from '@/assets/illustrations/success-screen.svg'
import NextImage from 'next/image'
import { Suspense } from 'react'

type Args = {
  params: Promise<{
    slug: string
  }>
}
const SuccessPage = async ({ params: paramsPromise }: Args) => {
  const params = await paramsPromise
  const { data: pageData } = await fetchPageData({ slug: params.slug })
  const event = pageData.event

  if (!event || typeof event === 'string') throw new Error('NO EVENT')

  return (
    <Suspense>
      <PageClient>
        <Container maxWidth={'lg'} sx={{ py: { xs: 2, md: 9 }, height: '100%' }}>
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              justifyContent: 'space-between',
            }}
          >
            <Grid
              container
              spacing={6}
              alignItems={'center'}
              direction={{ xs: 'row-reverse', md: 'row' }}
              sx={{ height: '100%' }}
            >
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant={'h3'}>{event.successPage.headline}</Typography>
                <RichText data={event.successPage.text} />
                <Box mt={6}>
                  <EventDate event={event} saveButton />
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <NextImage src={successScreen} alt={''} />
              </Grid>
            </Grid>
            <Box display={'flex'} justifyContent={'center'}>
              <Link href={'/ortho-reha-summit-2025'}>
                <Button variant={'text'}>Zur Startseite</Button>
              </Link>
            </Box>
          </Box>
        </Container>
      </PageClient>
    </Suspense>
  )
}
export default SuccessPage
