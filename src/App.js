import React from 'react'
import { Layout } from 'antd'

import Header from './components/Header/Header'
import LandingPage from './components/LandingPage/LandingPage'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <Layout className="layout">
      <Header />
      <LandingPage />
      <Footer />
    </Layout>
  )
}

export default App
