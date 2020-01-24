import React from 'react'
import { Card, Col, Row } from 'antd'

import cleanthisspace from '../../assets/images/cleanthisspace.png'
import acwww from '../../assets/images/ACWWW.png'
import database from '../../assets/images/database.png'

const { Meta } = Card

const ProjectsPage = () => {
  const cardCover = img => (
    <div
      className="card-cover"
      style={{ backgroundImage: `url(${img})` }}
    ></div>
  )

  const projectCard = ({ coverImg, title, description, link }) => {
    return (
      <Card
        className="projects-card"
        bordered={false}
        hoverable
        cover={cardCover(coverImg)}
      >
        <Meta title={title} description={description} />
      </Card>
    )
  }

  return (
    <div className="projects-container">
      <Row gutter={[25, 25]}>
        <Col lg={8} md={24}>
          {projectCard({
            coverImg: cleanthisspace,
            title: 'hi',
            description: 'hi',
            link: 'hi',
          })}
        </Col>
        <Col lg={8} md={24}>
          {projectCard({
            coverImg: acwww,
            title: 'hi',
            description: 'hi',
            link: 'hi',
          })}
        </Col>
        <Col lg={8} md={24}>
          {projectCard({
            coverImg: database,
            title: 'hi',
            description: 'hi',
            link: 'hi',
          })}
        </Col>
      </Row>
      {/* <h1>Coming soon!</h1> */}
    </div>
  )
}

export default ProjectsPage
