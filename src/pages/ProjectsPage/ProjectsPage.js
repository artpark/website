import React from 'react'
import { Card, Col, Row } from 'antd'

const ProjectsPage = () => {
  return (
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
  )
}

export default ProjectsPage
