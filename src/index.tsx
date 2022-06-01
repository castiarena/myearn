import React, { Suspense } from 'react'
import { render } from 'react-dom'
import { ChakraProvider, Spinner } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { theme } from './theme'

const Main = React.lazy(() => import('./screens/Main'))

render(
  <ChakraProvider theme={theme} resetCSS>
    <Suspense fallback={<Spinner />}>
      <Router>
        <Main />
      </Router>
    </Suspense>
  </ChakraProvider>,
  document.getElementById('root'),
)

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept(() => {
    console.clear()
  })
}
