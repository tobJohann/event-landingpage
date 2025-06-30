import { Media as MediaCollection } from '@/payload-types'
import Image from './Image'

type Props = {
  data: MediaCollection | string | null | undefined
  style?: { [x: string]: any }
}

const Media: React.FC<Props> = ({ data, ...props }) => {
  if (!data || typeof data === 'string') return null

  // image vs video

  if (data.mimeType?.includes('video')) {
    // TODO handle video
    return null
  }
  return <Image data={data} {...props} />
}
export default Media
