import React from 'react'
import { Card, Col, Row } from 'antd'

import cleanthisspace from '../../assets/images/cleanthisspace.png'
import acwww from '../../assets/images/ACWWW.png'
import database from '../../assets/images/database.png'

const { Meta } = Card

const ProjectsPage = () => {
  const cardCover = (img) => (
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
        onClick={() => (link ? window.open(link, '_blank') : null)}
      >
        <Meta title={title} description={description} />
      </Card>
    )
  }

  return (
    <div className="projects-container">
      {/* <Row gutter={[25, 25]}>
        <Col lg={8} md={24}>
          {projectCard({
            coverImg: cleanthisspace,
            title: 'Clean This Space!',
            description: `A crowd-source platform for enabling environmental activism. I worked as the lead front-end developer for the team. I utilized React.js, SCSS, and various Google APIs.
              Our team was the third place winner of the Earth Hacks category of CruzHacks 2020.`,
            link: 'https://devpost.com/software/temp-2k3y9e',
          })}
        </Col>
        <Col lg={8} md={24}>
          {projectCard({
            coverImg: acwww,
            title: 'Animal Crossing in WebGL',
            description:
              'Recreating the Nintendo game "Animal Crossing" in WebGL. First place winner as part of a class contest in the computer graphics class (CMPS 160).',
            link: 'https://github.com/artpark/AnimalCrossingWebGL',
          })}
        </Col>
        <Col lg={8} md={24}>
          {projectCard({
            coverImg: database,
            title: 'Distributed Key-Value Storage System',
            description:
              'A fault tolerant causal and eventually consistent key-value storage system, similar to Redis. Created for the class "distributed systems" (CMPS 128). Constructed using Python, Flask, and Docker.',
          })}
        </Col>
      </Row> */}
      <h1>Coming soon!</h1>
    </div>
  )
}

export default ProjectsPage
