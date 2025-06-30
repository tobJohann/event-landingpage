import MuiButton from '@mui/material/Button'
import { ButtonProps } from '@/payload-types'
import { ButtonProps as MuiButtonProps } from '@mui/material'
import LinkWrapper from '@/components/features/LinkWrapper'

interface Props {
  data: ButtonProps
  btnProps?: MuiButtonProps
}

const Button: React.FC<Props> = ({ data, btnProps }) => {
  const { label, link } = data

  return (
    <LinkWrapper data={link}>
      {/*TODO add tonal variant*/}
      {/*@ts-ignore*/}
      <MuiButton variant={data.variant} color={data.color} {...btnProps}>
        {label}
      </MuiButton>
    </LinkWrapper>
  )
}
export default Button
