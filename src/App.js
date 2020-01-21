import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import { BreakpointProvider } from 'react-socks'

import Header from './components/Header/Header'
import LandingPage from './components/LandingPage/LandingPage'
import Footer from './components/Footer/Footer'

const App = () => {
  const [isSiderCollapse, setSiderCollapse] = useState(true)

  return (
    <BreakpointProvider>
      <Layout className="layout">
        <Layout>
          <Header
            isSiderCollapse={isSiderCollapse}
            setSiderCollapse={setSiderCollapse}
          />
          <LandingPage />
          <Footer />
        </Layout>
        <Layout.Sider
          trigger={null}
          collapsible
          collapsedWidth={0}
          collapsed={isSiderCollapse}
        >
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1">
              <span className="nav-text">nav 1</span>
            </Menu.Item>
          </Menu>
        </Layout.Sider>
      </Layout>
    </BreakpointProvider>
  )
}

export default App
