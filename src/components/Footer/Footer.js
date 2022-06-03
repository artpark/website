import React from 'react'
import { Button, Layout } from 'antd'

import links from '../../constants/links'

const Footer = () => {
  return (
    <Layout.Footer className="footer">
      <div className="footer-container">
        <p className="footer-font">CONTACT INFO</p>
        <div className="footer-buttons">
          <Button
            type="link"
            icon="linkedin"
            size="large"
            href={links.linkedIn}
            target="_blank"
          ></Button>
          <Button
            type="link"
            icon="github"
            size="large"
            href={links.github}
            target="_blank"
          ></Button>
          <Button
            type="link"
            icon="mail"
            size="large"
            onClick={() => (window.location.href = `mailto:${links.email}`)}
            target="_blank"
          ></Button>
        </div>
      </div>
    </Layout.Footer>
  )
}

export default Footer
