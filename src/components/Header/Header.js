import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Layout, Menu } from 'antd'
import { Breakpoint } from 'react-socks'

//TODO: Sider will not collapse if window is resized

const Header = props => {
  const [hovered, setHovered] = useState(false)
  const [flavorText, setFlavorText] = useState(0)
  const flavorTextArr = [
    '/art par-kin-vIn-chAH/',
    'THANUT PARKEENVINCHA',
    'ARTY PARKEENVINCHA',
    'SANTA CRUZ BANANA SLUG',
    'LOWELL CARDINAL',
    'FROM THE BAY AREA',
    'FROM CANADA',
    'FROM THAILAND',
    'ASPIRING DEVELOPER',
  ]

  const toggleHover = () => {
    setHovered(!hovered)
    setFlavorText(
      flavorTextArr[Math.floor(Math.random() * flavorTextArr.length)]
    )
  }

  return (
    <Layout.Header className="header">
      <Link to="/">
        <p
          className="header-font name"
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        >
          {hovered ? flavorText : 'ART PARKEENVINCHA'}
        </p>
      </Link>
      <Breakpoint medium up>
        <div className="navbar">
          <Menu mode="horizontal">{props.navBarMenuItems}</Menu>
        </div>
      </Breakpoint>
      <Breakpoint small down>
        <Button
          id="sider-toggle-button"
          type="link"
          icon={props.isSiderCollapse ? 'menu-fold' : 'menu-unfold'}
          onClick={() => props.setSiderCollapse(!props.isSiderCollapse)}
        ></Button>
      </Breakpoint>
    </Layout.Header>
  )
}

export default Header
