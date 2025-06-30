import { ButtonGroupProps } from '@/payload-types'
import { ButtonProps, Stack, StackProps } from '@mui/material'
import Button from '@/components/ui/Button'

interface Props {
  data: ButtonGroupProps | undefined
  stackProps?: StackProps
  btnProps?: ButtonProps
}

const ButtonGroup: React.FC<Props> = ({ data, stackProps, btnProps }) => {
  if (!data || data.length === 0) return null

  return (
    <Stack mt={4} {...stackProps}>
      {data.map((item) => (
        <Button data={item.button} key={item.id} btnProps={btnProps} />
      ))}
    </Stack>
  )
}
export default ButtonGroup
