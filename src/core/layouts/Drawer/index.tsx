import React from 'react'
import { BoxHeader, BoxMain, BoxFooter } from './styles'
import { Header } from 'components/molecules/Header'
import { Dashboard } from 'pages/Dashboard'
import { Footer } from 'components/molecules/Footer'

export const DrawerLayout = () => {
  return (
    <>
      <BoxHeader component="header">
        <Header />
      </BoxHeader>

      <BoxMain component="main">
        <Dashboard />
      </BoxMain>

      <BoxFooter component="footer">
        <Footer />
      </BoxFooter>
    </>
  )
}
