import type { ThemeOverride } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const theme: ThemeOverride = extendTheme({
  colors: {
    brand: {
      100: '#f7fafc',
      // ...
      900: '#A83DFE',
    },
    state: {
      100: '#EF874A',
      900: '#2E81EB',
    },
  },
})

export { theme }
