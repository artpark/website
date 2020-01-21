import React from 'react'
import { Button, Layout } from 'antd'

const Footer = () => {
  return (
    <Layout.Footer className="footer">
      <div className="footer-container">
        <p className="footer-font">CONTACT INFO</p>
        <div className="footer-buttons">
          <Button type="link" icon="linkedin" size="large"></Button>
          <Button type="link" icon="github" size="large"></Button>
          <Button type="link" icon="mail" size="large"></Button>
        </div>
      </div>
    </Layout.Footer>
  )
}

export default Footer
