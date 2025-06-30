import { NewsletterBoxData } from '@/payload-types'
import { Box, Paper, Stack, Typography } from '@mui/material'
import RichText from '@/components/features/Richtext'
import NewsletterForm from '@/components/forms/newsletter/NewsletterForm'

const NewsletterBox: React.FC<{ data: NewsletterBoxData }> = ({ data }) => {
  const { headline, text, btnLabel } = data
  return (
    <Paper sx={{ px: 5, py: 6, textAlign: 'center', backgroundColor: '#EBEBEB' }}>
      <Stack direction={'column'} spacing={3} maxWidth={610} mx={'auto'}>
        <Typography variant={'h2'} textAlign={'center'}>
          {headline}
        </Typography>
        <RichText data={text} />
        <NewsletterForm />
      </Stack>
    </Paper>
  )
}
export default NewsletterBox
