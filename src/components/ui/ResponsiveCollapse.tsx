'use client'
import { ReactNode, useState } from 'react'
import { Box, Breakpoint, Button, Collapse, Divider, useMediaQuery, useTheme } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

type ResponsiveCollapseProps = {
  children: ReactNode
  breakpoint: Breakpoint
  expandText?: string
  collapseText?: string
}

const ResponsiveCollapse: React.FC<ResponsiveCollapseProps> = ({
  children,
  breakpoint: bp,
  expandText = 'Details anzeigen',
  collapseText = 'Details ausblenden',
}) => {
  const theme = useTheme()
  const breakpoint = useMediaQuery(theme.breakpoints.up(bp))
  const [open, setOpen] = useState(false)

  const toggleCollapse = () => {
    setOpen(!open)
  }

  if (!breakpoint)
    return (
      <>
        <Collapse in={open}>{children}</Collapse>
        <Button
          onClick={toggleCollapse}
          variant={'outlined'}
          size={'small'}
          endIcon={<ExpandMore sx={{ transform: `rotate(${open ? -180 : 0}deg)` }} />}
        >
          {open ? collapseText : expandText}
        </Button>
      </>
    )

  return <>{children}</>
}
export default ResponsiveCollapse
