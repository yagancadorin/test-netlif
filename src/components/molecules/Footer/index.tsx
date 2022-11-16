import React from 'react'
import { Grid } from '@mui/material'
import { Title } from './style'
import { Image } from 'components/atoms/Image'
import logoOpinWhite from 'assets/svg/logo_opin_white.svg'

export const Footer = () => {
  return (
    <Grid
      container
      spacing={4}
      sx={{
        maxWidth: 'xl',
        marginY: 8,
      }}
    >
      <Grid item xs={12} md={4} sx={{ paddingY: '0 !important' }}>
        <Image
          src={logoOpinWhite}
          sx={{
            height: 35,
            marginInlineEnd: { xs: 2, md: 5, lg: 5, xl: 5 },
          }}
        />
        <Title sx={{ paddingBottom: { xs: 2, md: 0 } }}>
          @ 2022 - Todos os Direitos Reservados Estrutura Inicial do Open
          Insurance
        </Title>
      </Grid>
    </Grid>
  )
}
