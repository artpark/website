import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { BreakpointProvider } from 'react-socks'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import LandingPage from './pages/LandingPage/LandingPage'
import AboutPage from './pages/AboutPage/AboutPage'
import ResumePage from './pages/ResumePage/ResumePage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import SpotifyPage from './pages/SpotifyPage/SpotifyPage'

const navBarMenuItems = [
  <Menu.Item key="1">
    <Link to="/about">
      <p className="header-font">ABOUT</p>
    </Link>
  </Menu.Item>,
  <Menu.Item key="2">
    <Link to="/resume">
      <p className="header-font">RESUME</p>
    </Link>
  </Menu.Item>,
  <Menu.Item key="3">
    <Link to="/projects">
      <p className="header-font">PROJECTS</p>
    </Link>
  </Menu.Item>,
]

const App = () => {
  const [isSiderCollapse, setSiderCollapse] = useState(true)

  return (
    <Router>
      <BreakpointProvider>
        <Layout className="layout">
          <Layout className="content">
            <Header
              isSiderCollapse={isSiderCollapse}
              setSiderCollapse={setSiderCollapse}
              navBarMenuItems={navBarMenuItems}
            />
            <Switch>
              <Route exact path="/">
                <LandingPage />
              </Route>
              <Route path="/about">
                <AboutPage />
              </Route>
              <Route path="/resume">
                <ResumePage />
              </Route>
              <Route path="/projects">
                <ProjectsPage />
              </Route>
              <Route path="/spotify">
                <SpotifyPage />
              </Route>
            </Switch>
            <Footer />
          </Layout>
          <Layout.Sider
            className="navbar-responsive"
            trigger={null}
            collapsible
            collapsedWidth={0}
            collapsed={isSiderCollapse}
          >
            <Menu mode="inline">{navBarMenuItems}</Menu>
          </Layout.Sider>
        </Layout>
      </BreakpointProvider>
    </Router>
  )
}

export default App
