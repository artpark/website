import React from 'react'
import { Card, Carousel, Col, Row, Layout } from 'antd'

import forest from '../../assets/images/dense-forest.jpg'
import satang from '../../assets/images/satang.jpg'
import meme from '../../assets/images/profile-picture.png'

const LandingPage = () => {
  return (
    <Layout.Content className="content">
      <div className="banner-container"></div>
      <div className="projects-container">
        <Row gutter={[25, 25]}>
          <Col span={12}>
            <Card className="projects-card" title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={12}>
            <Card className="projects-card" title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
        <Row gutter={[25, 25]}>
          <Col span={12}>
            <Card className="projects-card" title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={12}>
            <Card className="projects-card" title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
      </div>
    </Layout.Content>
  )
}

export default LandingPage
