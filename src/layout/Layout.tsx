import React, { FC, useMemo } from 'react'
import { Box, Grid, GridItem } from '@chakra-ui/react'
import { Header } from './header'
import { Footer } from './footer'

enum LayoutSizes {
  HEADER = 40,
  FOOTER = 120,
}

export const Layout: FC = ({ children }) => {
  const gridTemplateRows = useMemo(
    () =>
      `minmax(${LayoutSizes.HEADER}px, auto) 1fr minmax(${LayoutSizes.FOOTER}px, auto)`,
    [],
  )

  return (
    <Grid height="100vh" gridTemplateRows={gridTemplateRows}>
      <GridItem>
        <Header />
      </GridItem>
      <GridItem backgroundColor="brand.900">
        <Box p={2}>{children}</Box>
      </GridItem>
      <GridItem>
        <Footer />
      </GridItem>
    </Grid>
  )
}
