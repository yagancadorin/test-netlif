import React from 'react'
import { Grid } from '@mui/material'
import { Title } from './style'
import { Image } from 'components/atoms/Image'
import logoOpin from 'assets/svg/logo_opin.svg'

export const Header = () => {
  return (
    <Grid
      container
      spacing={4}
      sx={{
        maxWidth: 'xl',
        minHeight: '64px',
        alignItems: 'center',
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          minHeight: '64px',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Image
          src={logoOpin}
          sx={{
            height: 30,
            margin: { xs: 2, md: 0 },
            marginInlineEnd: { xs: 2, md: 5, lg: 5, xl: 5 },
          }}
        />
        <Title sx={{ paddingBottom: { xs: 2, md: 0 } }}>
          Dashboard Reports Transacionais
        </Title>
      </Grid>
    </Grid>
  )
}
