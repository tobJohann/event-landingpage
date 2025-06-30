import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from '@/lib/theme'
import { ReactNode } from 'react'

const MuiThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}
export default MuiThemeProvider
