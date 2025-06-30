'use client'
import { useDrawerNavigation } from '@/components/features/Navigation/DrawerNavigation/DrawerNavigationProvider'
import { Box, Drawer, Stack } from '@mui/material'
import { HeaderNavProps } from '@/payload-types'
import NavItem from '@/components/features/Navigation/NavItem'

type Props = {
  items: HeaderNavProps
}

const DrawerNavigation: React.FC<Props> = ({ items }) => {
  const { open, closeDrawer } = useDrawerNavigation()

  return (
    <Drawer
      open={open}
      onClose={closeDrawer}
      anchor={'top'}
      sx={{
        '.MuiPaper-root': { background: 'none', backdropFilter: 'blur(12px)' },
      }}
    >
      <Box pt={24} pb={12} sx={{ background: 'none' }}>
        <Stack direction={'column'} spacing={2}>
          {items.map((item) => (
            <NavItem item={item} key={item.id} />
          ))}
        </Stack>
      </Box>
    </Drawer>
  )
}
export default DrawerNavigation
