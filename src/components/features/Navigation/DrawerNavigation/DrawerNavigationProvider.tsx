'use client'

import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

interface Props {
  children: ReactNode
}

type DrawerNavigationContextType = {
  open: boolean
  toggleDrawer: () => void
  closeDrawer: () => void
}

const DrawerNavigationContext = createContext({} as DrawerNavigationContextType)
export const useDrawerNavigation = () => {
  const ctx = useContext(DrawerNavigationContext)
  if (!ctx) throw new Error('useDrawerNavigation must be used within a DrawerNavigationProvider')
  return ctx
}

const DrawerNavigationProvider: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false)
  const path = usePathname()
  const toggleDrawer = () => {
    setOpen(!open)
  }
  const closeDrawer = () => {
    setOpen(false)
  }

  useEffect(() => {
    setOpen(false)
  }, [path])

  return (
    <DrawerNavigationContext.Provider value={{ open, toggleDrawer, closeDrawer }}>
      {children}
    </DrawerNavigationContext.Provider>
  )
}
export default DrawerNavigationProvider
