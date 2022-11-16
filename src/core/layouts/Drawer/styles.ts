import { Box, BoxProps } from '@mui/material'
import { styled } from '@mui/material/styles'

export const BoxHeader = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  background: '#ffffff',
  borderBottom: 'solid 1px #e2e2e2',
  minHeight: '64px',
  paddingInline: theme.spacing(4),
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    paddingInline: theme.spacing(2),
  },
}))

export const BoxMain = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  paddingInline: theme.spacing(4),
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    paddingInline: theme.spacing(2),
  },
}))

export const BoxFooter = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  background: '#6E6E6E',
  paddingInline: theme.spacing(4),
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    paddingInline: theme.spacing(2),
  },
}))
