import { Page } from '@/payload-types'
import TextFaqBlock from '@/blocks/TextFaqBlock'
import BlockWrapper from '@/components/layout/BlockWrapper'
import LocationMediaBlock from '@/blocks/LocationMediaBlock'
import TextMediaColumnsBlock from '@/blocks/TextMediaColumnsBlock'
import SpeakerViewBlock from '@/blocks/SpeakerViewBlock'
import EventSumUpBlock from '@/blocks/EventSumUpBlock'
import EventHighlightBarBlock from '@/blocks/EventHighlightBarBlock'
import EventScheduleBlock from '@/blocks/EventScheduleBlock'
import ContentBlock from '@/blocks/ContentBlock'
import PricingCardsBlock from '@/blocks/PricingCardsBlock'

interface RenderBlocksProps {
  blocks: Page['layout']
}

const RenderBlocks: React.FC<RenderBlocksProps> = ({ blocks }) => {
  if (!blocks || blocks.length === 0) return null

  const layoutBlocks = {
    'content-block': ContentBlock,
    'text-faq-block': TextFaqBlock,
    'text-media-columns-block': TextMediaColumnsBlock,
    'location-media-block': LocationMediaBlock,
    'speaker-view-block': SpeakerViewBlock,
    'event-sum-up-block': EventSumUpBlock,
    'event-highlight-bar-block': EventHighlightBarBlock,
    'event-schedule-block': EventScheduleBlock,
    'pricing-cards-block': PricingCardsBlock,
  }

  blocks = blocks.filter((block) => !block.hideBlock)

  return (
    <main>
      {blocks.map((block, index) => {
        if (!(block.blockType in layoutBlocks)) return null
        const Block = layoutBlocks[block.blockType]

        return (
          <BlockWrapper
            id={block.anchor}
            blockType={block.blockType}
            key={block.id}
            isLast={blocks.length - 1 === index}
          >
            {/*@ts-ignore*/}
            <Block {...block} />
          </BlockWrapper>
        )
      })}
    </main>
  )
}

export default RenderBlocks
