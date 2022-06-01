import React, { VFC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '../../layout'

const Home = React.lazy(() => import('../Home'))

export const Main: VFC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  )
}
