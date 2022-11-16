import { Typography, TypographyProps } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Title = styled(Typography)<TypographyProps>({
  color: '#C9C9C9',
  fontSize: '0.75rem',
  lineHeight: '1.063rem',
  letterSpacing: '0.02px',
  marginTop: 2,
  maxWidth: '170px',
  fontFamily: 'GothamBook !important',
})
