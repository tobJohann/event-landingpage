import { AccordionProps } from '@/payload-types'
import MuiAccordion from '@mui/material/Accordion'
import { AccordionDetails, AccordionSummary, Box } from '@mui/material'
import ButtonGroup from '@/components/ui/ButtonGroup'
import { ExpandMore } from '@mui/icons-material'
import Richtext from '@/components/features/Richtext'

const Accordion: React.FC<{ data: AccordionProps | undefined }> = ({ data }) => {
  if (!data || data.length === 0) return null

  return (
    <Box>
      {data.map((item) => (
        <MuiAccordion key={item.id}>
          <AccordionSummary expandIcon={<ExpandMore />}>{item.headline}</AccordionSummary>
          <AccordionDetails sx={{ p: 2, pt: 0 }}>
            <Richtext data={item.text} />
            <ButtonGroup data={item.buttonGroup} />
          </AccordionDetails>
        </MuiAccordion>
      ))}
    </Box>
  )
}
export default Accordion
