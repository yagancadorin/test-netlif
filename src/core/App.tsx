import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { DrawerLayout } from './layouts/Drawer'
import { theme } from 'core/themes/default'

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <DrawerLayout />
  </ThemeProvider>
)

export { App }
