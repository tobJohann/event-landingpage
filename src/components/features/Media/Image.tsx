import { Media } from '@/payload-types'
import { Box } from '@mui/material'
import NextImage from 'next/image'

const Image: React.FC<{ data: Media; style?: { [x: string]: any } }> = ({ data, style }) => {
  if (!data.url) return null

  return (
    <NextImage src={data.url} alt={data.alt ?? ''} fill style={{ objectFit: 'cover', ...style }} />
  )
}
export default Image
