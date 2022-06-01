import React, { FC, useMemo } from 'react'
import { Box, Grid, GridItem } from '@chakra-ui/react'
import { Header } from './header'
import { Footer } from './footer'

export const Layout: FC = ({ children }) => (
  <Grid
    height="100vh"
    gridTemplateRows="minmax(40px, auto) 1fr minmax(80px, auto)">
    <GridItem>
      <Header />
    </GridItem>
    <GridItem backgroundColor="brand.400">
      <Box p={2}>{children}</Box>
    </GridItem>
    <GridItem>
      <Footer />
    </GridItem>
  </Grid>
)
