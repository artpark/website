import React from 'react'
import { Col, Row } from 'antd'

import portrait from '../../assets/images/self.jpg'

const LandingPage = () => {
  return (
    <div className="banner-container">
      <Row gutter={[75, 0]}>
        <Col sm={24} md={10}>
          <div className="image-container">
            <img src={portrait} alt="portrait" className="portrait-image" />
          </div>
        </Col>
        <Col sm={24} md={14}>
          <div className="banner-description-container">
            <div className="text-float-left">
              <h1>Hello!</h1>
              <h2>I'm Art Parkeenvincha</h2>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default LandingPage
