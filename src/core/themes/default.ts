import { createTheme, responsiveFontSizes, useTheme } from '@mui/material'

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#0F570D',
        contrastText: '#FFF',
      },
      secondary: {
        main: '#414099',
        contrastText: '#FFF',
      },
    },
    shape: {
      borderRadius: 0, // defaults to 4
    },
  }),
)

export { theme, useTheme }
