'use client'
import { HeaderNavProps } from '@/payload-types'
import { useMediaQuery, IconButton, useTheme, Stack } from '@mui/material'
import { Close, Menu } from '@mui/icons-material'
import NavItem from '@/components/features/Navigation/NavItem'
import DrawerNavigation from '@/components/features/Navigation/DrawerNavigation'
import { useDrawerNavigation } from '@/components/features/Navigation/DrawerNavigation/DrawerNavigationProvider'

type Props = {
  items: HeaderNavProps
}

const Navigation: React.FC<Props> = ({ items }) => {
  const theme = useTheme()
  const mdBreakpoint = useMediaQuery(theme.breakpoints.up('md'))
  const { toggleDrawer, open } = useDrawerNavigation()

  if (!mdBreakpoint) {
    return (
      <>
        <IconButton onClick={toggleDrawer}>{open ? <Close /> : <Menu />}</IconButton>
        <DrawerNavigation items={items} />
      </>
    )
  }

  return (
    <Stack
      component={'nav'}
      spacing={0}
      direction={'row'}
      justifyContent={'flex-end'}
      alignItems={'center'}
    >
      {items.map((item) => (
        <NavItem key={item.id} item={item} />
      ))}
    </Stack>
  )
}

export default Navigation
