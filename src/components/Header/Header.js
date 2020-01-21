import React, { useState } from 'react'
import { Layout, Menu } from 'antd'

const Header = () => {
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
    </Layout.Header>
  )
}

export default Header
