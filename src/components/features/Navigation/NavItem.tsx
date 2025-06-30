import { HeaderNavProps } from '@/payload-types'
import MuiButton from '@mui/material/Button'
import LinkWrapper from '@/components/features/LinkWrapper'
import { styled } from '@mui/material'

const Button = styled(MuiButton)(({ theme }) => ({
  padding: '.5rem 1.5rem .5rem 1.5rem',
  '&:hover': {
    background: 'rgba(235,235,235,0.5)',
    textDecoration: 'none',
    color: 'inherit',
  },
}))

type Props = {
  item: HeaderNavProps[0]
}
const NavItem: React.FC<Props> = ({ item }) => {
  if (!item) return null

  if (item.highlight) {
    return (
      <LinkWrapper data={item.link}>
        <MuiButton
          variant={'contained'}
          color={'secondary'}
          size={'large'}
          sx={{ fontWeight: 700, ml: { md: 2 } }}
        >
          {item.label}
        </MuiButton>
      </LinkWrapper>
    )
  }
  return (
    <LinkWrapper data={item.link}>
      <Button
        sx={{ textDecoration: 'none', color: { xs: '#fff', md: 'inherit' }, fontWeight: 700 }}
      >
        {item.label}
      </Button>
    </LinkWrapper>
  )
}
export default NavItem
