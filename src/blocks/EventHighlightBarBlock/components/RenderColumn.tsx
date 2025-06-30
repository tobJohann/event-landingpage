import { EventHighlightBarBlockProps } from '@/payload-types'
import { Box } from '@mui/material'
import ColumnWrapper from '@/blocks/EventHighlightBarBlock/components/ColumnWrapper'
import TextColumn from '@/blocks/EventHighlightBarBlock/components/TextColumn'
import NumberColumn from '@/blocks/EventHighlightBarBlock/components/NumberColumn'

const RenderColumn: React.FC<EventHighlightBarBlockProps['columns'][0]> = (props) => {
  const handleBlock = () => {
    switch (props.variant) {
      case 'text':
        //@ts-ignore
        return <TextColumn {...props.textHighlight} />
      case 'number':
        //@ts-ignore
        return <NumberColumn {...props.numberHighlight} />
    }
  }
  return <ColumnWrapper key={props.id}>{handleBlock()}</ColumnWrapper>
}
export default RenderColumn
