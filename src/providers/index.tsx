import { ReactNode } from 'react'
import MuiThemeProvider from '@/providers/MuiThemeProvider'
import GeneralProvider from '@/providers/GeneralProvider'
import MotionProvider from '@/providers/MotionProvider'
import DrawerNavigationProvider from '@/components/features/Navigation/DrawerNavigation/DrawerNavigationProvider'
import ConsentProvider from '@/components/features/Consent/context/ConsentProvider'

const Providers: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <GeneralProvider>
      <MuiThemeProvider>
        <ConsentProvider>
          <MotionProvider>
            <DrawerNavigationProvider>{children}</DrawerNavigationProvider>
          </MotionProvider>
        </ConsentProvider>
      </MuiThemeProvider>
    </GeneralProvider>
  )
}
export default Providers
