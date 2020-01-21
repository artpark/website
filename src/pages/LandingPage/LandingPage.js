import React from 'react'
import { Card, Carousel, Col, Row, Layout } from 'antd'

import forest from '../../assets/images/dense-forest.jpg'
import satang from '../../assets/images/satang.jpg'
import meme from '../../assets/images/profile-picture.png'

const LandingPage = () => {
  return (
    <Layout.Content className="landing-page-content">
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
                  I'm <span>Art Parkeenvincha</span>
                </h2>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Layout.Content>
  )
}

export default LandingPage
