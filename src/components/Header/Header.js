import React, { useState } from 'react'
import { Button, Layout, Menu } from 'antd'
import { Breakpoint } from 'react-socks'

const Header = props => {
  const [hovered, setHovered] = useState(false)
  const toggleHover = () => setHovered(!hovered)

  return (
    <Layout.Header className="header">
      <p
        className="header-font name"
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        {hovered ? 'art par-kin-vIn-chAH' : 'ART PARKEENVINCHA'}
      </p>
      <Breakpoint medium up>
        <div className="navbar">
          <Menu mode="horizontal">
            <Menu.Item key="1">
              <p className="header-font">NAV 1</p>
            </Menu.Item>
            <Menu.Item key="2">
              <p className="header-font">NAV 2</p>
            </Menu.Item>
            <Menu.Item key="3">
              <p className="header-font">NAV 3</p>
            </Menu.Item>
          </Menu>
        </div>
      </Breakpoint>
      <Breakpoint small down>
        <div className="navbar-responsive">
          <Button
            type="link"
            icon={props.isSiderCollapse ? 'menu-fold' : 'menu-unfold'}
            onClick={() => props.setSiderCollapse(!props.isSiderCollapse)}
          ></Button>
        </div>
      </Breakpoint>
    </Layout.Header>
  )
}

export default Header
