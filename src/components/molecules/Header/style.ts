import { Typography, TypographyProps } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '1.375rem',
  lineHeight: '1.625rem',
  letterSpacing: 0,
  marginTop: 2,
  color: theme.palette.primary.main,
  textAlign: 'center',
}))
