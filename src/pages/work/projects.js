import React, { useState } from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import NavBar from '../../components/NavBar';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';

const siteTitle = `Projects`;
const siteDescription = `A few projects that I've collaborated on . . .`;

const ProjectsPage = () => {
  const [curtainDown, setCurtainDown] = useState(false);

  const toggleCurtainDown = () => {
    setCurtainDown((prev) => !prev)
  }

  return (
      <Container fluid className="no-padding">
      <Row>
        <NavBar active="Work" onCollapse={toggleCurtainDown}/>
        {!curtainDown &&
          <Col xs={12} sm={8} >
            <Banner siteTitle={siteTitle} siteDescription={siteDescription} />
            <Row>
              <Col xs={12} sm={6} lg={4} className="project-card" >
                <img src={require("../../static/images/projects/unmasked-logo.png")} alt="" />
                <h2>Unmasked Project</h2>
                <p>Unmasked is an anonymous mental health app for students in 13 colleges with 3,000+ users. I work in the development team, using React Native and Redux.</p>
              </Col>
              <Col xs={12} sm={6} lg={4} className="project-card" >
                <img src={require("../../static/images/projects/linear-games.png")} alt="" />
                <h2>Linear Games</h2>
                <p>I collaborated in the design and development of games based on concepts in linear algebra to teach students math in an interactive setting. I used HTML/CSS and JavaScript.</p>
              </Col>
              <Col xs={12} sm={6} lg={4} className="project-card" >
                <img src={require("../../static/images/projects/mood-triggers.png")} alt="" />
                <h2>Mood Triggers App</h2>
                <p>I am currently working on the development team of Mood Triggers, a mobile app for behavioral data analysis which collects data to provide an account of users' health behaviors. More to come soon!</p>
              </Col>
            </Row>
            <Row>
              <Footer />
            </Row>
          </Col>
        }
      </Row>
    </Container>
  );
};

export default ProjectsPage;
