import Header from '@/components/ui/Header'
import RichText from '@/components/features/Richtext'
import ButtonGroup from '@/components/ui/ButtonGroup'
import { EventScheduleBlockProps } from '@/payload-types'

const ContentColumn: React.FC<EventScheduleBlockProps> = ({ header, text, buttonGroup }) => {
  return (
    <>
      <Header data={header} />
      <RichText data={text} />
      <ButtonGroup data={buttonGroup} />
    </>
  )
}
export default ContentColumn
