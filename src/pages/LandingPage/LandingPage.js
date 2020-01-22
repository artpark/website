import React from 'react'
import { Col, Row, Layout } from 'antd'

const LandingPage = () => {
  return (
    <div className="banner-container">
      <Row>
        <Col span={10}>
          <div className="image-container"></div>
        </Col>
        <Col span={14}>
          <div className="banner-description-container">
            <div className="text-float-left">
              <h1>Hello!</h1>
              <h2>
                I'm <span> </span>
                <span>Art Parkeenvincha</span>
              </h2>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default LandingPage
