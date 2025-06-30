import { ReactNode } from 'react'
import CenterPaperLayout from '@/components/layout/CenterPaperLayout'

type Props = {
  children: ReactNode
}
const NewsLetterLayout: React.FC<Props> = ({ children }) => {
  return <CenterPaperLayout>{children}</CenterPaperLayout>
}
export default NewsLetterLayout
