import { ContentBlockProps } from '@/payload-types'
import { Container } from '@mui/material'
import RichText from '@/components/features/Richtext'

const ContentBlock: React.FC<ContentBlockProps> = ({ text }) => {
  return (
    <Container
      sx={{
        maxWidth: { xs: 'auto', md: '1200px !important' },
        mx: 'auto',
        'h2,h3,h4': {
          mt: 2,
        },
      }}
    >
      <RichText data={text} />
    </Container>
  )
}
export default ContentBlock
